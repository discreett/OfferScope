'use server'
import { createClient } from '@/lib/supabase/server'

export async function change(formData: FormData) {
  const supabase = await createClient()

  await supabase.auth.updateUser({ password: formData.get('password') as string })
}