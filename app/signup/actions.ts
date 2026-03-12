'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'

export async function signup(formData: FormData) {
  const supabase = await createClient()
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        full_name: name,
      },
    },
  })

  if (error) {
    console.error("SUPABASE SIGNUP ERROR:", error)
    throw new Error(error.message)
  }

  const user = data.user;

  if (user) {
    const { error: profileError } = await supabase
      .from('profiles')
      .insert({
        id: user.id,
        full_name: name,
        email: email,
      })
    
    if (profileError) {
      console.error("SUPABASE PROFILE INSERT ERROR:", profileError)
      throw new Error(profileError.message)
    }
  }

  revalidatePath('/', 'layout')
  redirect('/account')
}