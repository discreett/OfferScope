'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  })

  if (error) {
    console.error("SUPABASE LOGIN ERROR:", error)
    throw new Error(error.message)                
  }

  revalidatePath('/', 'layout')
  redirect('/account')
}