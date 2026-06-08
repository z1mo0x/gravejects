'use client'

import Logo from "@/components/ui/header/logo";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Search from "@/components/ux/header/search";
import ThemeSwitcher from "@/components/ux/header/theme-switcher";
import { useTheme } from "@/contexts/theme/themeContext";
import { User } from "lucide-react";
import Image from "next/image";

export default function Home() {

    const { theme } = useTheme()

    return (
        <>
            <div className="py-4 absolute w-full h-max top-0 left-0 z-10">
                {/* <SidebarTrigger className="relative -top-2.5 scale-150 text-primary" /> */}
                <div className="container">
                    <div className="flex justify-between items-center">
                        <div className="">
                            <Logo />
                        </div>
                        <div className="flex gap-5 items-center">
                            <Search />
                            <ThemeSwitcher />
                            <User className="shrink-0" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-1/2 relative">
                <div className="hero-image absolute w-full h-full">
                    <Image className="object-cover object-right" alt="Фон"
                        src={`${theme === 'dark' ? '/banner-dark.png' : '/banner-light-7.png'}`}
                        fill
                        priority
                    />
                </div>
                <div className=""></div>
                <div className=""></div>
            </div>
        </>
    );
}
