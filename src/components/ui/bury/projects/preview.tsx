'use client'

import StatusComponent from "@/components/decorations/status";
import StoneBg from "@/components/decorations/stone-bg";
import { Dictionary, useLang } from "@/contexts/lang/langContext";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { memo } from "react";
import BuryStat from "../bury-stat";
import { PulseIcon, StarIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";

type Props = {
    title: string,
    link: string,
    language?: string,
    stars: number,
    last_activity: string,
    status: keyof Dictionary['bury']['status'];
}

function PreviewRepository({ title, link, language, stars, last_activity, status }: Props) {
    const { t, lang } = useLang();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .5 }}
            className="relative z-10 space-y-3 mt-5 p-5">
            <div className="stone-border rounded-2xl z-1" />
            <StoneBg className="rounded-2xl shadow-lg shadow-primary/5">
                <div className="font-bold text-2xl flex  items-center gap-2.5 justify-between">
                    <p className="line-clamp-1 text-ellipsis max-w-full">
                        {title}
                    </p>

                    <StatusComponent value={status} />
                </div>
                <div className="text-[14px] mt-2.5">
                    <Link target="_blank" referrerPolicy='no-referrer' href={link} className="flex w-max gap-2 text-primary items-center mt-2.5">
                        <span className="jet-brains">
                            {link.replace(/^https?:\/\//, '')}
                        </span>
                        <SquareArrowOutUpRight size={20} />
                    </Link>
                </div>
                <div className="mt-7.5 grid gap-2.5">
                    <BuryStat
                        title={t.bury.preview.fields.language}
                        value={language ? language : 'Язык не найден'}
                        iconLeft={language ?? 'Code'}
                    />
                    <BuryStat
                        title={t.bury.preview.fields.stars}
                        value={`${stars ?? 0}`}
                        iconLeft={StarIcon}
                    />
                    <BuryStat
                        className='icon-pulse'
                        title={t.bury.preview.fields.lastActivity}
                        value={last_activity}
                        iconLeft={PulseIcon}
                    />
                </div>
            </StoneBg>
        </motion.div>
    )
}

export default memo(PreviewRepository);
