'use client'

import useMount from "@/hooks/useMount";
import CustomButton from "@/components/ui/buttons/customButtons";
import { Skeleton } from "@/components/ui/skeleton";
import { useLang } from "@/contexts/lang/langContext";
import { useTheme } from "@/contexts/theme/themeContext";
import { ShuffleIcon, SkullIcon } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function Home() {

    const { theme } = useTheme()
    const mount = useMount()
    const { t } = useLang();

    return (
        <>


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
                <div className="relative p-10 pt-30 z-2 max-w-1/2">
                    <div className="text-6xl hero-title stone-text garamont uppercase font-bold">
                        {t.hero.title.text}
                        <span className="grave-accent-text"> {t.hero.title.span}</span>
                    </div>
                    <div className="text-foreground/75 mt-5 max-w-125">
                        {t.hero.descr}
                    </div>
                    <div className="mt-10 flex gap-5 items-center">
                        <CustomButton className="border-primary text-primary" variant="icon" iconLeft={SkullIcon}>{t.buryProject}</CustomButton>
                        <CustomButton variant="icon" iconLeft={ShuffleIcon}>{t.randomGrave}</CustomButton>
                    </div>
                </div>
            </div>
        </>
    );
}
