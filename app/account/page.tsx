import AccountForm from '../../components/Account'
import { createClient } from '@/lib/supabase/server'
export default async function Account() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return <AccountForm user={user} />
}