import { createClient } from "@/lib/server";

type GithubRepo = {
    id: number;
    name: string;
    full_name: string;
    html_url: string;
    description: string | null;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    private: boolean;
    archived: boolean;
    created_at: string;
    updated_at: string;
    pushed_at: string | null;
    owner: {
        login: string;
        avatar_url: string;
    };
};


// export async function getRepositories(userId: string) {

//     const supabase = createClient()

//     const { data: { session } } = await (await supabase).auth.getSession();

//     const GITHUB_API_URL = 'https://api.github.com/user/repos?per_page=5';

// }