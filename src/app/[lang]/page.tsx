'use client'

import useMount from "@/components/hooks/useMount";
import Logo from "@/components/ui/header/logo";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import Search from "@/components/ux/header/search";
import ThemeSwitcher from "@/components/ux/header/theme-switcher";
import { useTheme } from "@/contexts/theme/themeContext";
import { AnimatePresence, motion } from "framer-motion";
import { User } from "lucide-react";
import Image from "next/image";

export default function Home() {

    const { theme } = useTheme()
    const mount = useMount()

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
                    <AnimatePresence mode='sync'>
                        {mount ? (
                            <motion.div
                                key={theme}
                                className="absolute inset-0"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.35 }}
                            >
                                <Image
                                    className="object-cover object-right"
                                    alt="Фон"
                                    src={theme === "dark" ? "/banner-dark.png" : "/banner-light.png"}
                                    fill
                                    priority
                                />
                            </motion.div>
                        ) : (
                            <Skeleton className="h-full w-full" />
                        )}
                    </AnimatePresence>
                    <div className="bottom-blur"></div>
                </div>
                <div className=""></div>
                <div className=""></div>
            </div>
        </>
    );
}
