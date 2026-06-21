'use client'

import StoneBg from '@/components/decorations/stone-bg';
import GithubSelect from '@/components/ux/bury/github-select';
import { useLang } from '@/contexts/lang/langContext';
import useMount from '@/hooks/useMount';
import { Repo } from '@/types/github/repo-type';
import Image from 'next/image';
import React, { Suspense, useEffect, useState } from 'react'

type Props = {}


function BuryPage({ }: Props) {

    const { t } = useLang();
    const [repos, setRepos] = useState<Repo[]>([])
    const [previewRepo, setPreviewRepo] = useState<Repo | null>(null)

    useEffect(() => {
        let mounted = true;

        const load = async () => {
            const res = await fetch("/api/github");
            const data = await res.json();

            if (mounted) {
                setRepos(Array.isArray(data) ? data : []);
            }
        };

        load();

        return () => {
            mounted = false;
        };
    }, []);

    return (
        <div className='pt-30 min-h-screen'>
            <Image src="/bury-bg.png" fill className='object-cover' alt='Фон для страницы похорон проекта' />
            <div className="container">
                <div className="bury-grid">
                    <div className="relative rounded-2xl p-10 overflow-hidden">
                        <StoneBg>
                            <div className="text-6xl font-black stone-text garamont ">{t.bury.page.title}</div>
                            <div className="mt-5 max-w-1/2">{t.bury.page.subtitle}</div>
                            <GithubSelect repos={repos} setPreview={setPreviewRepo} />
                        </StoneBg>
                    </div>
                    <div className="relative rounded-2xl stone-texture-dark p-10">
                        <div className="stone-border rounded-2xl" />
                        {
                            previewRepo
                                ?
                                <div className="">
                                    {previewRepo.name}
                                </div>
                                : "Выберите репозиторий"
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuryPage;