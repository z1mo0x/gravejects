'use client';

import { useLang } from '@/contexts/lang/langContext';
import React, { useCallback, useEffect, useRef } from 'react'

const Search = () => {

    const searchRef = useRef(null);
    const { t } = useLang();

    const handleOpenSearch = useCallback((e: KeyboardEvent) => {
        if (e.key === '/') {
            console.log('Открыть');
        }
    }, [])

    useEffect(() => {
        window.addEventListener("keydown", handleOpenSearch);

        return () => {
            window.removeEventListener("keydown", handleOpenSearch);
        };
    }, [handleOpenSearch]);



    return (
        <form className="w-70 h-max border-2 border-border bg-card relative rounded-2xl">
            <input ref={searchRef} placeholder={t.searchPlaceholder} type="text" className='w-full jet-brains text-[14px] h-12 outline-0 p-2.5 pr-7.5' />
            <div className="border-2 bg-input rounded-lg h-7.5 text-center content-center 
            w-7.5 border-border/75 absolute right-2 top-1/2 -translate-y-1/2">/</div>
        </form>
    )
}

export default Search;