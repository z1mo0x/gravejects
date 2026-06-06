'use client';

import { useLang } from "@/contexts/lang/langContext";
import { memo } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Logo = () => {

    const { t } = useLang();

    const [text] = useTypewriter({
        words: ['rest in code', 'legacy lives on', 'final commit', 'return null;'],
        loop: true,
        typeSpeed: 100,
        deleteSpeed: 50,
        delaySpeed: 1500,
    })

    return (
        <div className="">
            <div className="text-primary  jet-brains w-75 font-bold">
                {t.title}{text}<Cursor cursorStyle="_" />
            </div>
        </div>
    )
}

export default memo(Logo);