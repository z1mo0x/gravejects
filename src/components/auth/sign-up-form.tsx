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

export function SignUpForm({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { t, lang } = useLang()

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createClient()
    setIsLoading(true)
    setError(null)

    if (password !== repeatPassword) {
      setError('Passwords do not match')
      setIsLoading(false)
      return
    }

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/protected`,
        },
      })
      if (error) throw error
      router.push(`/${lang}/auth/sign-up-success`)
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
          <CardTitle className="text-3xl pt-0.5 text-center cinzel stone-text">{t.auth.signUp.title}</CardTitle>
          <CardDescription className='mt-2.5 text-center text-[16px]'>{t.auth.signUp.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignUp}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label className='text-lg cinzel' htmlFor="email">{t.auth.signUp.emailLabel}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={`${t.auth.signUp.emailPlaceholder}`}
                  className='auth-input'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label className='text-[14px] cinzel' htmlFor="password">{t.auth.signUp.passwordLabel}</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  className='auth-input'
                  placeholder={`${t.auth.signUp.passwordPlaceholder}`}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label className='text-[14px] cinzel' htmlFor="repeat-password">{t.auth.signUp.confirmPasswordLabel}</Label>
                </div>
                <Input
                  id="repeat-password"
                  type="password"
                  placeholder={`${t.auth.signUp.confirmPasswordPlaceholder}`}
                  required
                  className='auth-input'
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <CustomButton variant='grave' type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? t.auth.common.loading : t.auth.signUp.submit}
              </CustomButton>
            </div>
            <div className="mt-4 text-center text-muted-foreground text-[16px] font-bold">
              {t.auth.signUp.alreadyHaveAccount}{' '}
              <Link href={`/${lang}/auth/login`} className="underline underline-offset-4">
                {t.auth.signUp.loginLink}
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
