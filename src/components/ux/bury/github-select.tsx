'use client';

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLang } from '@/contexts/lang/langContext';
import { memo } from "react";


function GithubSelect() {

    const { t } = useLang()

    return (
        <div className='mt-5'>
            <div className="font-bold unbounded">{t.bury.repository.title}</div>
            <Select>
                <SelectTrigger className='w-full mt-5 p-7.5'>
                    <SelectValue placeholder={t.bury.actions.chooseFromGithub} />
                </SelectTrigger>
                <SelectContent position={"popper"}>
                    <SelectGroup>
                        <SelectItem value='1'>
                            Репозиторий-1
                        </SelectItem>
                        <SelectItem value='2'>
                            Репозиторий-2
                        </SelectItem>
                        <SelectItem value='3'>
                            Репозиторий-3
                        </SelectItem>
                        <SelectItem value='4'>
                            Репозиторий-4
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}

export default memo(GithubSelect);