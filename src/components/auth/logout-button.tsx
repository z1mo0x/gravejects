'use client'

import { useRouter } from 'next/navigation'

import { createClient } from '@/lib/client'
import { useLang } from '@/contexts/lang/langContext'
import CustomButton from '../ui/buttons/customButtons'
import { SignOutIcon } from '@phosphor-icons/react'

export function LogoutButton() {
  const router = useRouter()
  const { lang, t } = useLang()

  const logout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push(`/${lang}/auth/login`)
  }

  return <CustomButton className='border-red-500 text-red-500 w-max' variant='icon' iconLeft={SignOutIcon} onClick={logout}>
    {t.auth.common.exit}
  </CustomButton>
}
