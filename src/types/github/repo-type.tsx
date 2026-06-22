export type RepoLanguage = {
    name: string;
    bytes: number;
};

export type RepoLicense = {
    key: string;
    name: string;
    spdxId: string;
    url: string | null;
};

export type Repo = {
    id: number;
    name: string;
    fullName: string;
    url: string;

    description: string | null;
    homepage: string | null;
    language: string | null;

    stars: number;
    forks: number;
    watchers: number;
    openIssues: number;

    isPrivate: boolean;
    isArchived: boolean;
    isDisabled: boolean;
    isFork: boolean;

    size: number;
    defaultBranch: string;

    createdAt: string;
    updatedAt: string;
    pushedAt: string | null;

    license: RepoLicense | null;

    topics: string[];

    languages: RepoLanguage[];
};