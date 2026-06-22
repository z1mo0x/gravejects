'use client'

import { Profile } from "@/types/profile/types";
import { User } from "@supabase/supabase-js";
import { LogoutButton } from "@/components/auth/logout-button";
import CodeWrap from "@/components/decorations/code";
import Image from "next/image";
import { site } from "@/config/site";
import { LinkIcon, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import CustomButton from "@/components/ui/buttons/customButtons";
import { PlusIcon } from "@phosphor-icons/react";
import { useLang } from "@/contexts/lang/langContext";
import StoneBg from "@/components/decorations/stone-bg";

type Props = {
    user: User,
    profile: Profile | null
}

function ProfileBanner({ user, profile }: Props) {

    const { t, lang } = useLang();

    const avatarUrl =
        profile?.avatar_url ||
        user.user_metadata?.avatar_url ||
        '/projectyard.png';

    const displayName =
        profile?.full_name ||
        profile?.github_username ||
        user.user_metadata?.full_name ||
        user.user_metadata?.user_name ||
        user.user_metadata?.preferred_username ||
        user.email ||
        'Unknown user';

    const description =
        profile?.description ||
        'This developer has not written their epitaph yet.';

    const githubProfileUrl =
        profile?.github_profile_url ||
        (user.user_metadata?.user_name
            ? `https://github.com/${user.user_metadata.user_name}`
            : null);

    return (

        <StoneBg className="rounded-2xl">
            <div className="user-main flex gap-5 justify-between">
                <div className="flex gap-10 ">
                    <div className="user-avatar  rounded-lg">
                        <Image className="rounded-lg ring-primary ring-3" src={avatarUrl} width={96} height={96} alt="Фото профиля" />
                    </div>
                    <div className="max-w-100">
                        <div className="text-4xl unbounded ">
                            {displayName}
                        </div>
                        <div className="w-max mt-2.5">
                            <CodeWrap>
                                {site.quotes.user_profile}
                            </CodeWrap>
                        </div>
                        <div className="mt-2.5 text-foreground/75">
                            {description}
                        </div>
                        {githubProfileUrl && <Link target="_blank" referrerPolicy='no-referrer' href={githubProfileUrl} className="flex gap-2 text-primary items-center mt-5">
                            <LinkIcon size={20} />
                            <span className="">
                                {githubProfileUrl}
                            </span>
                            <SquareArrowOutUpRight size={20} />
                        </Link>
                        }

                    </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                    <Link href={`/${lang}/bury`}>
                        <CustomButton className="text-primary border-primary code-glow" variant="icon" iconLeft={PlusIcon}>
                            {t.buryProject}
                        </CustomButton>
                    </Link>
                    <LogoutButton />
                </div>
            </div>
        </StoneBg>
    )
}

export default ProfileBanner;