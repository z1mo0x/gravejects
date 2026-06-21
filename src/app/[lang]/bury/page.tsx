'use client'

import StoneBg from '@/components/decorations/stone-bg';
import GithubSelect from '@/components/ux/bury/github-select';
import { useLang } from '@/contexts/lang/langContext';
import { getRepositories } from '@/services/github.service';
import Image from 'next/image';
import React from 'react'

type Props = {}


function BuryPage({ }: Props) {

    const { t } = useLang();

    return (
        <div className='pt-30 min-h-screen'>
            <Image src="/bury-bg.png" fill className='object-cover' alt='Фон для страницы похорон проекта' />
            <div className="container">
                <div className="bury-grid">
                    <div className="relative rounded-2xl p-10 overflow-hidden">
                        <StoneBg>
                            <div className="text-6xl font-black stone-text garamont ">{t.bury.page.title}</div>
                            <div className="mt-5 max-w-1/2">{t.bury.page.subtitle}</div>
                            <GithubSelect />
                        </StoneBg>
                    </div>
                    <div className="relative rounded-2xl stone-texture-dark p-10">
                        <div className="stone-border rounded-2xl" />
                        <div className="">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuryPage;