'use client'

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,

} from "@/components/ui/sidebar"
import { useLang } from '@/contexts/lang/langContext';
import { navItems } from '@/config/site';
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useTheme } from "@/contexts/theme/themeContext";
import { AnimatePresence, motion } from "framer-motion";
import useMount from "@/hooks/useMount";
import { Skeleton } from "../skeleton";
import { Separator } from "../separator";

const AppSidebar = () => {

    const { lang, t } = useLang();

    const getHref = (path: string) => `/${lang}${path}`;

    const pathname = usePathname();

    const { theme } = useTheme();
    const mount = useMount();

    return (
        <Sidebar>
            <SidebarHeader className="pt-10">
                <Link href={`/${lang}/`} className="sidebar-logo mx-auto flex justify-center flex-col items-center">
                    <AnimatePresence mode='sync'>
                        {mount ? (
                            <motion.div
                                key={theme}
                                className=""
                                initial={{ opacity: .5 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.35 }}
                            >
                                <Image
                                    src={theme === "dark" ? "/projectyard.png" : "/projectyard-light.png"}
                                    width={100} height={100}
                                    alt="Логотип"
                                />
                            </motion.div>
                        ) : (
                            <Skeleton className="h-45" />
                        )}
                    </AnimatePresence>
                    {/* <div className="text-center unbounded mt-2 text-xl text-primary">
                        {t.title}<Blink />
                    </div> */}
                    <div className="font-bold text-center unbounded uppercase text-1xl mt-2">
                        {t.descr.slice(0, 8)}
                        <br />
                        <span className="text-primary">
                            {t.descr.slice(8)}
                        </span>
                    </div>
                </Link>
            </SidebarHeader>
            <SidebarContent className="pt-5">
                <SidebarMenu className="mt-5 mb-5">
                    {navItems.map((item) => {

                        const isActive = pathname === getHref(item.path)

                        return (
                            <SidebarMenuButton
                                isActive={isActive}
                                className={`pl-6 py-8`}
                                key={item.path + item.key}
                                asChild>
                                <Link href={getHref(item.path)}>
                                    <item.icon scale={2} size={50} className={`size-6! ${isActive && 'text-primary'}`} />
                                    <span className={`unbounded text-[12px] uppercase ${isActive && 'text-primary'}`}>
                                        {t[item.key]}
                                    </span>
                                </Link>
                            </SidebarMenuButton>
                        )
                    }
                    )}
                </SidebarMenu>
                <Separator />
                <div className="mt-5 text-white/25">
                    <p className="text-center text-lg p-4">
                        {t.quote}
                    </p>
                    <p className="text-center jet-brains tracking-tighter text-2xl  font-medium">{"</>"}</p>
                </div>
            </SidebarContent>
            <SidebarFooter>

            </SidebarFooter>
        </Sidebar>
    )
}

export default AppSidebar;