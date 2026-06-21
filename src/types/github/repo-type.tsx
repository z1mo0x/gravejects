export type Repo = {
    id: number;
    name: string;
    fullName: string;
    url: string;

    description: string | null;
    language: string | null;

    stars: number;
    forks: number;

    isPrivate: boolean;

    updatedAt: string;
    pushedAt: string | null;

    languages: {
        name: string;
        bytes: number;
    }[];
};
