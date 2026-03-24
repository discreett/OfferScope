'use server'
import { createClient } from '@/lib/supabase/server'

export async function forgot(formData: FormData) {
  const supabase = await createClient()

  await supabase.auth.resetPasswordForEmail(formData.get('email') as string, {
    //change this later
    redirectTo: 'http://localhost:3000/change-password',
  })
}