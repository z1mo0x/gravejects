import { GithubLoginButton } from "@/components/auth/github-auth";
import GraveBgForm from "@/components/decorations/grave-bg-form";
import { Lang, site } from "@/config/site";
import SkullDivider from "@/icons/skull";

type Props = {
    params: Promise<{
        lang: string;
    }>;
};

type Dictionary = typeof site.dictionary[keyof typeof site.dictionary];

export default async function LoginPage({ params }: Props) {
    const { lang } = await params;
    const t: Dictionary = site.dictionary[lang as Lang]

    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <GraveBgForm underText={site.quotes.login_under}>
                <h1 className="cinzel text-3xl stone-text tracking-wide text-center">{t.auth.login.title}</h1>
                <SkullDivider />
                <div className="text-center text-muted-foreground">{t.auth.login.description}</div>
                <div className="mt-5">
                    <GithubLoginButton lang={lang}>
                        {t.auth.common.login_github}
                    </GithubLoginButton>
                </div>
            </GraveBgForm>
        </div>
    );
}
