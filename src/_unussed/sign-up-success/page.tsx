import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Lang, site } from '@/config/site';

type Props = {
  params: Promise<{
    lang: Lang;
  }>;
};
export default async function Page({ params }: Props) {
  const { lang } = await params;

  const t = site.dictionary[lang];

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t.auth.signUpSuccess.title}</CardTitle>
              <CardDescription className='text-primary'>{t.auth.signUpSuccess.description}</CardDescription>
            </CardHeader>
            {/* <CardContent>
              <p className="text-sm text-muted-foreground">
                {t.auth.signUpSuccess.note}
              </p>
            </CardContent> */}
          </Card>
        </div>
      </div>
    </div>
  )
}
