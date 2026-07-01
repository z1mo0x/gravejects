'use client';

import { useEffect, useState } from 'react';
import type { Repo } from '@/types/github/repo-type';

const REPOS_CACHE_KEY = 'projectyard.github.repos';
const REPOS_CACHE_TTL = 1000 * 60 * 5; // 5 минут

type CachedRepos = {
    createdAt: number;
    repos: Repo[];
};

export function useGithubRepos() {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        async function loadRepos() {
            try {
                setIsLoading(true);
                setError(null);

                const cachedRaw = sessionStorage.getItem(REPOS_CACHE_KEY);

                if (cachedRaw) {
                    const cached = JSON.parse(cachedRaw) as CachedRepos;
                    const isFresh =
                        Date.now() - cached.createdAt < REPOS_CACHE_TTL;

                    if (isFresh && Array.isArray(cached.repos)) {
                        setRepos(cached.repos);
                        setIsLoading(false);
                        return;
                    }
                }

                const res = await fetch('/api/github', {
                    signal: controller.signal,
                });

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

                const reposData = Array.isArray(data) ? data : [];

                setRepos(reposData);

                sessionStorage.setItem(
                    REPOS_CACHE_KEY,
                    JSON.stringify({
                        createdAt: Date.now(),
                        repos: reposData,
                    })
                );
            } catch (error) {
                if (error instanceof DOMException && error.name === 'AbortError') {
                    return;
                }

                console.error('[BURY_REPOS_LOAD_ERROR]', error);

                setRepos([]);
                setError(
                    error instanceof Error
                        ? error.message
                        : 'Не удалось загрузить репозитории'
                );
            } finally {
                setIsLoading(false);
            }
        }

        loadRepos();

        return () => {
            controller.abort();
        };
    }, []);

    function clearCache() {
        sessionStorage.removeItem(REPOS_CACHE_KEY);
    }

    return {
        repos,
        isLoading,
        error,
        clearCache,
    };
}