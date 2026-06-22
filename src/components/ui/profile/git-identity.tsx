'use client'

import Blink from '@/components/decorations/Blink';
import StoneBg from '@/components/decorations/stone-bg';
import { site } from '@/config/site';
import { MailIcon, MapPinIcon, UserIcon } from 'lucide-react';
import Image from 'next/image';
import React, { memo } from 'react'

type Props = {
    username: string,
    email?: string,
    place: string
}

function GitIdentity({ username, email, place }: Props) {

    return (
        <div className="relative px-5 py-7.5 rounded-2xl">
            <div className="stone-border z-2 rounded-2xl" />
            <StoneBg>
                <div className="grid gap-5 border-b border-border pb-5">
                    <div className="code-glow text-lg font-bold">
                        Github Identity
                        <span className='text-lg'>
                            {'> '}
                        </span>
                        <Blink />
                    </div>
                    <Image src={`/icons/icon-git.png`}
                        className='icon-stone icon-glow block mx-auto'
                        width={150}
                        height={150}
                        alt="Иконка гитхаба"
                    />
                    <div className="flex gap-2 items-center">
                        <UserIcon />
                        <div className="font-bold">
                            {username}
                        </div>
                    </div>
                    {
                        email
                        &&
                        <div className="flex gap-2 items-center">
                            <MailIcon />
                            <div className="font-bold">
                                {email}
                            </div>
                        </div>
                    }
                    {
                        place
                        &&
                        <div className="flex gap-2 items-center">
                            <MapPinIcon size={32} />
                            <div className="font-bold">
                                {place}
                            </div>
                        </div>
                    }
                </div>
                <div className="">

                </div>
            </StoneBg>
        </div>
    )
}



export default memo(GitIdentity);