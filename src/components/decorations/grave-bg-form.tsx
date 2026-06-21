import Image from "next/image";
import Blink from "./Blink";
import { site } from "@/config/site";

type Props = {
    children: React.ReactNode;
    underText?: string;
};

export default function GraveBgForm({ children, underText }: Props) {


    return (
        <div className="relative mx-auto w-full max-w-300">
            <div className="relative min-h-[680px] w-full">
                <Image
                    src="/form-bg.png"
                    alt="Фон формы"
                    fill
                    priority
                    className="absolute brightness-75 inset-0 z-0 object-contain object-center scale-[1.30]"
                />

                <div className="relative z-10 flex min-h-[680px] mx-auto max-w-125 flex-col items-center px-6 py-25 pt-40">
                    <span className="absolute top-27.5 left-1/2 -translate-x-1/2 code-glow jet-brains">{site.quotes.login}</span>

                    <div className="w-full max-w-md">
                        {children}
                    </div>
                    {underText && (
                        <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 code-glow opacity-75 mb-6 w-max mx-auto text-md rounded-lg px-5 py-2 text-center jet-brains">
                            {underText}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}