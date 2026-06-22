'use client';

import StoneBg from '@/components/decorations/stone-bg';
import GithubSelect from '@/components/ux/bury/github-select';
import { useLang } from '@/contexts/lang/langContext';
import { Repo } from '@/types/github/repo-type';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

function BuryPage() {
    const { t } = useLang();

    const [repos, setRepos] = useState<Repo[]>([]);
    const [previewRepo, setPreviewRepo] = useState<Repo | null>(null);
    const [isReposLoading, setIsReposLoading] = useState(true);
    const [reposError, setReposError] = useState<string | null>(null);

    useEffect(() => {
        let mounted = true;

        const load = async () => {
            try {
                setIsReposLoading(true);
                setReposError(null);

                const res = await fetch('/api/github');
                const data = await res.json();

                if (!res.ok) {
                    console.error('[BURY_API_ERROR]', {
                        status: res.status,
                        data,
                    });

                    throw new Error(
                        data?.error || 'Failed to load repositories'
                    );
                }

                if (mounted) {
                    setRepos(Array.isArray(data) ? data : []);
                }
            } catch (error) {
                console.error('[BURY_REPOS_LOAD_ERROR]', error);

                if (mounted) {
                    setRepos([]);
                    setReposError(
                        error instanceof Error
                            ? error.message
                            : 'Не удалось загрузить репозитории'
                    );
                }
            } finally {
                if (mounted) {
                    setIsReposLoading(false);
                }
            }
        };

        load();

        return () => {
            mounted = false;
        };
    }, []);

    return (
        <div className="relative pt-30 min-h-screen">
            <Image
                src="/bury-bg.png"
                fill
                className="object-cover -z-10"
                alt="Фон для страницы похорон проекта"
            />

            <div className="container">
                <div className="bury-grid">
                    <div className="relative rounded-2xl p-10 overflow-hidden">
                        <StoneBg>
                            <div className="text-6xl font-black stone-text garamont">
                                {t.bury.page.title}
                            </div>

                            <div className="mt-5 max-w-1/2">
                                {t.bury.page.subtitle}
                            </div>

                            {isReposLoading && (
                                <div className="mt-8 text-sm opacity-70">
                                    Загружаем репозитории...
                                </div>
                            )}

                            {reposError && (
                                <div className="mt-8 text-sm text-red-400">
                                    {reposError}
                                </div>
                            )}

                            {!isReposLoading && !reposError && (
                                <GithubSelect
                                    repos={repos}
                                    setPreview={setPreviewRepo}
                                />
                            )}
                        </StoneBg>
                    </div>

                    <div className="relative rounded-2xl stone-texture-dark p-10">
                        <div className="stone-border rounded-2xl" />

                        {previewRepo ? (
                            <div className="relative z-10 space-y-3 text-sm">
                                {previewRepo.name}
                            </div>
                        ) : (
                            <div className="relative z-10 opacity-70">
                                Выберите репозиторий
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BuryPage;