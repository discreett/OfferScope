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

  revalidatePath('/', 'layout')
  redirect('/account')
}