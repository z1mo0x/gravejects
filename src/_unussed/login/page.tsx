import { LoginForm } from '@/components/auth/login-form'
import GraveBgForm from '@/components/decorations/grave-bg-form'
import { site } from '@/config/site'

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 overflow-hidden">
      <GraveBgForm underText={site.quotes.login_under}>
        <LoginForm />
      </GraveBgForm>
    </div>
  )
}
