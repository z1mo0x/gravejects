import { SignUpForm } from '@/components/auth/sign-up-form'
import GraveBgForm from '@/components/decorations/grave-bg-form'
import { site } from '@/config/site'

export default function Page() {

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <GraveBgForm underText={site.quotes.sign_up_under}>
        <SignUpForm />
      </GraveBgForm>
    </div>
  )
}
