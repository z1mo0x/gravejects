import { notFound } from "next/navigation";
import { LangProvider } from "@/contexts/lang/langContext";
import { site, type Lang } from "@/config/site";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/ui/sidebar/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import ThemeProvider from "@/contexts/theme/themeContext";

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
            <SidebarProvider className="bg-background/90!">
                <AppSidebar />
                <TooltipProvider>
                    <ThemeProvider>
                        <main className="w-full relative">
                            {children}
                        </main>
                    </ThemeProvider>
                </TooltipProvider>
            </SidebarProvider>
        </LangProvider>
    );
}