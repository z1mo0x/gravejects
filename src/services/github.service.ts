export async function getRepositories(token: string) {

    const reposRes = await fetch(
        "https://api.github.com/user/repos?per_page=10&sort=updated",
        {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/vnd.github+json",
            },
        }
    );

    const repos = await reposRes.json();

    const enrichedRepos = await Promise.all(
        repos.map(async (repo: any) => {
            const langRes = await fetch(
                `https://api.github.com/repos/${repo.owner.login}/${repo.name}/languages`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const languages = await langRes.json();

            return {
                id: repo.id,
                name: repo.name,
                fullName: repo.full_name,
                url: repo.html_url,

                description: repo.description,
                language: repo.language,

                stars: repo.stargazers_count,
                forks: repo.forks_count,

                isPrivate: repo.private,

                updatedAt: repo.updated_at,
                pushedAt: repo.pushed_at,

                languages: Object.entries(languages).map(([name, bytes]) => ({
                    name,
                    bytes: bytes as number,
                })),
            };
        })
    );

    return enrichedRepos;
}