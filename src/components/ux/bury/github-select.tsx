'use client';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import { Skeleton } from '@/components/ui/skeleton';
import { useLang } from '@/contexts/lang/langContext';
import { Repo } from '@/types/github/repo-type';
import { memo, useState } from 'react';

type Props = {
    repos: Repo[];
    setPreview: React.Dispatch<React.SetStateAction<Repo | null>>;
};

function GithubSelect({ repos, setPreview }: Props) {
    const { t } = useLang();

    const [selectedRepo, setSelectedRepo] = useState<string | null>(null);

    const selected = repos.find(
        (r) => r.id.toString() === selectedRepo
    );


    return (
        <>
            <div className="mt-5">
                <div className="font-bold unbounded">
                    {t.bury.repository.title}
                </div>

                {repos.length > 0 ? (
                    <Select
                        value={selectedRepo ?? ''}
                        onValueChange={(value) => {
                            setSelectedRepo(value);

                            const repo = repos.find(
                                (r) => r.id.toString() === value
                            );

                            setPreview(repo ?? null);
                        }}
                    >
                        <SelectTrigger className="font-bold unbouded text-lg w-full mt-5 p-7.5">
                            <SelectValue placeholder={t.bury.actions.chooseFromGithub} />
                        </SelectTrigger>

                        <SelectContent position="popper">
                            <SelectGroup>
                                {repos.map((repo) => (
                                    <SelectItem
                                        key={repo.id}
                                        value={repo.id.toString()}
                                        className='font-bold unbouded text-lg'
                                    >
                                        {repo.name}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                ) : (
                    <Skeleton className="mt-5 w-full p-7.5 rounded-lg" />
                )}
            </div>
        </>
    );
}

export default memo(GithubSelect);