import StoneBg from '@/components/decorations/stone-bg';
import Image from 'next/image';
import React, { memo } from 'react'


const iconSettings = {
    width: 75,
    height: 75
}

type Props = {
    title: string;
    value: string;
    icon: string;
}

function ProfileStat({ title, value, icon }: Props) {
    return (
        <div className="relative p-5">
            <div className='stone-border z-1 rounded-xl' />
            <StoneBg className='rounded-xl'>
                <div className="flex gap-5 items-center">
                    <div className="">
                        <Image src={`${icon}`}
                            className='icon-stone'
                            {...iconSettings}
                            alt="Иконка статистики"
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="grow text-2xl text-foreground unbounded">{value}</div>
                        <div className="mt-2.5 text-foreground/50">{title}</div>
                    </div>
                </div>
            </StoneBg>
        </div>
    )
}

export default memo(ProfileStat);