'use client'

import { Profile } from "@/types/profile/types";
import { User } from "@supabase/supabase-js";
import { LogoutButton } from "@/components/auth/logout-button";
import GraveBgCard from "@/components/decorations/grave-bg-card";
import CodeWrap from "@/components/decorations/code";
import Image from "next/image";
import { site } from "@/config/site";
import { LinkIcon, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import CustomButton from "@/components/ui/buttons/customButtons";
import { PlusIcon } from "@phosphor-icons/react";
import { useLang } from "@/contexts/lang/langContext";

type Props = {
    user: User,
    profile: Profile
}

function ProfileBanner({ user, profile }: Props) {

    const { t } = useLang();

    return (
        <div className="min-h-svh pt-20 w-full">
            <div className="container">
                <GraveBgCard className="p-10">
                    <div className="user-main flex gap-5 justify-between">
                        <div className="flex gap-10 ">
                            <div className="user-avatar  rounded-lg">
                                <Image className="rounded-lg ring-primary ring-3" src={profile.avatar_url || '/projectyard.png'} width={96} height={96} alt="Фото профиля" />
                            </div>
                            <div className="max-w-100">
                                <div className="text-4xl unbounded">
                                    {profile.full_name ?? profile.github_username}
                                </div>
                                <div className="w-max mt-2.5">
                                    <CodeWrap>
                                        {site.quotes.user_profile}
                                    </CodeWrap>
                                </div>
                                <div className="mt-2.5">
                                    {profile.description}
                                </div>
                                {profile.github_profile_url && <Link href={profile.github_profile_url} className="flex gap-2 text-primary items-center mt-5">
                                    <LinkIcon size={20} />
                                    <span className="">
                                        {profile.github_profile_url}
                                    </span>
                                    <SquareArrowOutUpRight size={20} />
                                </Link>
                                }

                            </div>
                        </div>
                        <div className="flex flex-col items-end justify-between">
                            <CustomButton className="text-primary border-primary code-glow" variant="icon" iconLeft={PlusIcon}>
                                {t.buryProject}
                            </CustomButton>
                            <LogoutButton />
                        </div>
                    </div>
                </GraveBgCard>
            </div>
        </div>
    )
}

export default ProfileBanner;