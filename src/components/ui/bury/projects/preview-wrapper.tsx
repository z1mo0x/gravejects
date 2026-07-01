'use client';

import Romb from '@/components/decorations/romb';
import StoneBg from '@/components/decorations/stone-bg';
import EmptyRepository from '@/components/ui/bury/projects/no-repo';
import PreviewRepository from '@/components/ui/bury/projects/preview';
import { useLang } from '@/contexts/lang/langContext';
import type { Repo } from '@/types/github/repo-type';
import { formatDateTime } from '@/utils/format-date';
import { AnimatePresence } from 'framer-motion';
import { EyeIcon } from 'lucide-react';
import React, { memo } from 'react';

type Props = {
    repo: Repo | null;
};

function RepositoryPreviewCard({ repo }: Props) {
    const { t, lang } = useLang();

    return (
        <div className="relative rounded-2xl p-5">
            <div className="stone-border rounded-2xl z-1" />

            <StoneBg className="rounded-2xl">
                <div className="flex gap-2.5 items-center">
                    <EyeIcon size={30} className="text-primary" />
                    <span className="font-bold text-lg">
                        {t.bury.preview.title}
                    </span>
                </div>

                <div className="overflow-hidden p-5 py-7.5 rounded-lg">
                    <Romb className="mt-0" />

                    <AnimatePresence mode="wait">
                        {repo ? (
                            <PreviewRepository
                                key={repo.id}
                                title={repo.name}
                                link={repo.url}
                                language={repo.language ?? 'no language'}
                                last_activity={formatDateTime(repo.pushedAt, lang)}
                                status="abandoned"
                                stars={repo.stars}
                            />
                        ) : (
                            <EmptyRepository key="empty-repository" />
                        )}
                    </AnimatePresence>

                    <Romb className="mt-5" />
                </div>

                <div className="code-glow mt-5 text-lg text-center">
                    {!repo
                        ? t.bury.preview.emptyTerminal
                        : t.bury.preview.readyLabel}
                </div>
            </StoneBg>
        </div>
    );
}

export default memo(RepositoryPreviewCard);