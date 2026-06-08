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

const AppSidebar = () => {

    const { lang, t } = useLang();

    const getHref = (path: string) => `/${lang}${path}`;

    const pathname = usePathname();

    return (
        <Sidebar>
            <SidebarHeader />
            <SidebarContent className="pt-5">
                <div className="sidebar-logo mx-auto flex justify-center flex-col items-center">
                    <Image className="opacity-75" src={'/projectyard.png'} width={150} height={100} alt="Логотип" />
                    {/* <div className="text-center unbounded mt-2 text-xl text-primary">
                        {t.title}<Blink />
                    </div> */}
                    <div className="text-center garamont text-2xl mt-2">
                        {t.descr}
                    </div>
                </div>
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