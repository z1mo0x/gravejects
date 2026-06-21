"use client";

import { createClient } from "@/lib/client";
import { GithubLogoIcon } from "@phosphor-icons/react";
import CustomButton from "../ui/buttons/customButtons";


type GithubLoginButtonProps = {
    lang: string;
    children?: React.ReactNode;
};

export function GithubLoginButton({
    lang,
    children = "Войти через GitHub",
}: GithubLoginButtonProps) {
    const handleLogin = async () => {
        const supabase = createClient();

        await supabase.auth.signInWithOAuth({
            provider: "github",
            options: {
                redirectTo: `${window.location.origin}/auth/callback?next=/${lang}/profile`,
                scopes: "read:user read:email"
            },
        });
    };

    return (
        <CustomButton
            type="button"
            variant="grave"
            iconLeft={GithubLogoIcon}
            onClick={handleLogin}
            className="grave-button relative flex  w-full cursor-pointer items-center justify-center gap-3 overflow-hidden"
        >
            {children}
        </CustomButton>
    );
}