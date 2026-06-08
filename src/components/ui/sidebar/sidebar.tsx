'use client'

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useLang } from '@/contexts/lang/langContext';
import { navItems, site } from '@/config/site';
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Blink from "@/components/decorations/Blink";
import { useTheme } from "@/contexts/theme/themeContext";
import { AnimatePresence, motion } from "framer-motion";
import useMount from "@/components/hooks/useMount";
import { Skeleton } from "../skeleton";

const AppSidebar = () => {

    const { lang, t } = useLang();

    const getHref = (path: string) => `/${lang}${path}`;

    const pathname = usePathname();

    const { theme } = useTheme();
    const mount = useMount();

    return (
        <Sidebar>
            <SidebarContent className="pt-5">
                <Link href={'/'} className="sidebar-logo mx-auto flex justify-center flex-col items-center">
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
                                    width={150} height={100}
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
                    <div className="text-center garamont text-2xl mt-2">
                        {t.descr}
                    </div>
                </Link>
                <SidebarMenu className="mt-10 gap-2.5">
                    {navItems.map((item) => {
                        return (
                            <SidebarMenuButton isActive={pathname === getHref(item.path)} className={`px-3 py-8`} key={item.path + item.key} asChild>
                                <Link href={getHref(item.path)} className={` `}>
                                    <item.icon scale={2} size={50} className={`size-6! ${pathname === getHref(item.path) && 'text-primary'}`} />
                                    <span className={`unbounded text-[14px] uppercase ${pathname === getHref(item.path) && 'text-primary'}`}>{t[item.key]}</span>
                                </Link>
                            </SidebarMenuButton>
                        )
                    }
                    )}
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}

export default AppSidebar;