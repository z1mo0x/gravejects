'use client'

import useMount from "@/hooks/useMount";
import { Skeleton } from "@/components/ui/skeleton";
import { useTheme } from "@/contexts/theme/themeContext";
import { Moon, Sun } from "lucide-react";

const ThemeSwitcher = () => {

    const { theme, toggleTheme } = useTheme();
    const mount = useMount();

    return (
        <div className="h-max">
            <div className="cursor-pointer p-2.5 border border-border  overflow-hidden w-11 bg-card h-11 rounded-lg" onClick={toggleTheme}>
                {
                    mount
                        ?
                        <div className={`${theme === 'dark' ? '-translate-x-11' : ''}  duration-500 flex w-max gap-5`}>
                            <Sun />
                            <Moon />
                        </div>
                        :
                        <Skeleton className="w-full h-full" />
                }
            </div>
        </div>
    )
}

export default ThemeSwitcher;