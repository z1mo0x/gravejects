import { Repo, RepoLanguage } from "@/types/github/repo-type";
type GithubRepoApiResponse = {
    id: number;
    name: string;
    full_name: string;
    html_url: string;

    description: string | null;
    homepage: string | null;
    language: string | null;

    stargazers_count: number;
    forks_count: number;
    watchers_count: number;
    open_issues_count: number;

    private: boolean;
    archived: boolean;
    disabled: boolean;
    fork: boolean;

    size: number;
    default_branch: string;

    created_at: string;
    updated_at: string;
    pushed_at: string | null;

    license: {
        key: string;
        name: string;
        spdx_id: string;
        url: string | null;
    } | null;

    topics?: string[];

    owner: {
        login: string;
    };
};

type GithubLanguagesApiResponse = Record<string, number>;

function getGithubHeaders(token: string) {
    return {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
    };
}

async function fetchGithubJson<T>(url: string, token: string): Promise<T> {
    const response = await fetch(url, {
        headers: getGithubHeaders(token),
        cache: 'no-store',
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => null);

        console.error('[GITHUB_FETCH_ERROR]', {
            url,
            status: response.status,
            errorData,
            rateLimit: {
                limit: response.headers.get('x-ratelimit-limit'),
                remaining: response.headers.get('x-ratelimit-remaining'),
                reset: response.headers.get('x-ratelimit-reset'),
                used: response.headers.get('x-ratelimit-used'),
            },
        });

        if (response.status === 401) {
            throw new Error('GitHub token is invalid or expired');
        }

        if (response.status === 403) {
            throw new Error('GitHub access forbidden or rate limit exceeded');
        }

        if (response.status === 404) {
            throw new Error('GitHub resource not found');
        }

        throw new Error(`GitHub API error: ${response.status}`);
    }

    return response.json() as Promise<T>;
}

async function getRepositoryLanguages(
    token: string,
    owner: string,
    repoName: string
): Promise<RepoLanguage[]> {
    try {
        const languages = await fetchGithubJson<GithubLanguagesApiResponse>(
            `https://api.github.com/repos/${owner}/${repoName}/languages`,
            token
        );

        return Object.entries(languages).map(([name, bytes]) => ({
            name,
            bytes,
        }));
    } catch (error) {
        console.error('[GITHUB_LANGUAGES_ERROR]', {
            owner,
            repoName,
            error,
        });

        return [];
    }
}

export async function getRepositories(
    token: string
): Promise<Repo[]> {
    if (!token) {
        throw new Error('GitHub token is required');
    }

    const repos = await fetchGithubJson<GithubRepoApiResponse[]>(
        'https://api.github.com/user/repos?per_page=10&sort=updated',
        token
    );

    const enrichedRepos = await Promise.all(
        repos.map(async (repo) => {
            const languages = await getRepositoryLanguages(
                token,
                repo.owner.login,
                repo.name
            );

            return {
                id: repo.id,
                name: repo.name,
                fullName: repo.full_name,
                url: repo.html_url,

                description: repo.description,
                homepage: repo.homepage,
                language: repo.language,

                stars: repo.stargazers_count,
                forks: repo.forks_count,
                watchers: repo.watchers_count,
                openIssues: repo.open_issues_count,

                isPrivate: repo.private,
                isArchived: repo.archived,
                isDisabled: repo.disabled,
                isFork: repo.fork,

                size: repo.size,
                defaultBranch: repo.default_branch,

                createdAt: repo.created_at,
                updatedAt: repo.updated_at,
                pushedAt: repo.pushed_at,

                license: repo.license
                    ? {
                        key: repo.license.key,
                        name: repo.license.name,
                        spdxId: repo.license.spdx_id,
                        url: repo.license.url,
                    }
                    : null,

                topics: repo.topics || [],

                languages,
            };
        })
    );

    return enrichedRepos;
}