'use client';

import StoneBg from '@/components/decorations/stone-bg';
import GithubSelect from '@/components/ux/bury/github-select';
import { useLang } from '@/contexts/lang/langContext';
import type { Repo } from '@/types/github/repo-type';
import React, { memo } from 'react';

type Props = {
    repos: Repo[];
    isLoading: boolean;
    error: string | null;
    onPreviewChange: React.Dispatch<React.SetStateAction<Repo | null>>;
};

function ImportGithubCard({
    repos,
    isLoading,
    error,
    onPreviewChange,
}: Props) {
    const { t } = useLang();

    return (
        <div className="relative rounded-2xl p-10 overflow-hidden">
            <div className="stone-border rounded-2xl z-1" />

            <StoneBg className="rounded-2xl">
                <div className="text-6xl font-black stone-text garamont">
                    {t.bury.page.title}
                </div>

                <div className="mt-5 max-w-1/2">
                    {t.bury.page.subtitle}
                </div>

                {isLoading && (
                    <div className="mt-8 text-sm opacity-70">
                        Загружаем репозитории...
                    </div>
                )}

                {error && (
                    <div className="mt-8 text-sm text-red-400">
                        {error}
                    </div>
                )}

                {!isLoading && !error && (
                    <GithubSelect
                        repos={repos}
                        setPreview={onPreviewChange}
                    />
                )}
            </StoneBg>
        </div>
    );
}

export default memo(ImportGithubCard);