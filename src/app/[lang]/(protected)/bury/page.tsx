'use client';

import ImportGithub from '@/components/ui/bury/form/import-github';
import RepositoryPreviewCard from '@/components/ui/bury/projects/preview-wrapper';
import { useGithubRepos } from '@/hooks/bury/useGithubRepos';
import type { Repo } from '@/types/github/repo-type';
import Image from 'next/image';
import React, { useState } from 'react';

function BuryPage() {
    const [previewRepo, setPreviewRepo] = useState<Repo | null>(null);

    const {
        repos,
        isLoading: isReposLoading,
        error: reposError,
    } = useGithubRepos();

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
                    <ImportGithub
                        repos={repos}
                        isLoading={isReposLoading}
                        error={reposError}
                        onPreviewChange={setPreviewRepo}
                    />

                    <RepositoryPreviewCard repo={previewRepo} />
                </div>
            </div>
        </div>
    );
}

export default BuryPage;