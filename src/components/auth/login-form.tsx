'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { cn } from '@/lib/utils'
import { createClient } from '@/lib/client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { useLang } from '@/contexts/lang/langContext'
import CustomButton from '../ui/buttons/customButtons'

export function LoginForm({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { lang, t } = useLang()
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createClient()
    setIsLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) throw error
      router.push(`/${lang}/protected`)
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card className='bg-transparent border-0 ring-0'>
        <CardHeader>
          <CardTitle className="text-3xl text-center cinzel stone-text">{t.auth.login.title}</CardTitle>
          <CardDescription className='mt-2.5 text-center text-lg'>{t.auth.login.description}</CardDescription>
        </CardHeader>
        <CardContent >
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label className='text-lg cinzel' htmlFor="email">{t.auth.login.emailLabel}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={`${t.auth.login.emailPlaceholder}`}
                  required
                  className='auth-input'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password" className='cinzel text-md'>{t.auth.login.passwordLabel}</Label>
                  <Link
                    href={`/${lang}/auth/forgot-password`}
                    className=" text-md ml-auto inline-block underline-offset-4 hover:underline"
                  >
                    {t.auth.login.forgotPassword}
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder={`${t.auth.login.passwordPlaceholder}`}
                  required
                  value={password}
                  className='auth-input'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <CustomButton variant='grave' type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? t.auth.common.loading : t.auth.login.submit}
              </CustomButton>
            </div>
            <div className="mt-4 text-center text-muted-foreground text-[16px] font-bold ">
              {t.auth.login.noAccount}{' '}
              <Link href={`/${lang}/auth/sign-up`} className="underline underline-offset-4">
                {t.auth.login.signUpLink}
              </Link>
            </div>
          </form>
        </CardContent>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </Card>
    </div>
  )
}
