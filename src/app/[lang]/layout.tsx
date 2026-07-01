import { notFound } from "next/navigation";
import { LangProvider } from "@/contexts/lang/langContext";
import { site, type Lang } from "@/config/site";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/ui/sidebar/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import ThemeProvider from "@/contexts/theme/themeContext";
import Header from "@/components/common/header";
import Providers from "../providers";
import AppInitializer from "@/hoc/app-initialization";
import 'devicon/devicon.min.css';

export default async function LangLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;

    if (!site.languages.includes(lang as Lang)) {
        notFound();
    }

    return (
        <LangProvider lang={lang as Lang}>
            <ThemeProvider>
                <AppInitializer>
                    <SidebarProvider className="bg-background/90!">
                        <TooltipProvider>
                            <AppSidebar />
                            <div className="wrapper relative w-full">
                                <Header />
                                <main className="w-full relative">
                                    <Providers>
                                        {children}
                                    </Providers>
                                </main>
                            </div>
                        </TooltipProvider>
                    </SidebarProvider>
                </AppInitializer>
            </ThemeProvider>
        </LangProvider>
    );
}