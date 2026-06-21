'use client'

import React, { memo } from 'react'
import Logo from "@/components/ui/header/logo";
import Search from "@/components/ux/header/search";
import ThemeSwitcher from "@/components/ux/header/theme-switcher";
import { User } from "lucide-react";
import Link from 'next/link';
import { useLang } from '@/contexts/lang/langContext';
import { useUser } from '@/hoc/app-initialization';
import { Skeleton } from '../ui/skeleton';


const Header = () => {
    const { lang } = useLang()
    const { isAuth, isLoading } = useUser();

    return (
        <div className="py-4 absolute w-full h-max top-0 left-0 z-10">
            <div className="container w-full">
                <div className="flex justify-between items-center">
                    <div className="">
                        <Logo />
                    </div>
                    <div className="flex gap-5 items-center">
                        <Search />
                        <ThemeSwitcher />
                        {isLoading ? (
                            <Skeleton>
                                <User className="shrink-0 opacity-40" />
                            </Skeleton>
                        ) : !isAuth ? (
                            <Link href={`/${lang}/auth/login`}>
                                <User className="shrink-0" />
                            </Link>
                        ) : (
                            <Link href={`/${lang}/profile`} className='relative rounded-full ring ring-border p-2.5'>
                                <User className="shrink-0" />
                                <div className="w-2 h-2 rounded-full absolute top-0.5 right-0.5 bg-primary"></div>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Header);