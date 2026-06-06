import Logo from "@/components/ui/header/logo";
import Search from "@/components/ux/header/search";
import ThemeSwitcher from "@/components/ux/header/theme-switcher";
import { User } from "lucide-react";

export default function Home() {
    return (
        <>
            <div className="py-5">
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
        </>
    );
}
