"use client";

import { createContext, useContext } from "react";
import { site, type Lang } from "@/config/site";

export type Dictionary = typeof site.dictionary.ru;

type LangContextValue = {
    lang: Lang;
    t: Dictionary;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ lang, children,
}: {
    lang: Lang;
    children: React.ReactNode;
}) {
    return (
        <LangContext.Provider value={{ lang, t: site.dictionary[lang] }}>
            {children}
        </LangContext.Provider>
    );
}

export function useLang() {
    const context = useContext(LangContext);

    if (!context) {
        throw new Error("useLang must be used inside LangProvider");
    }

    return context;
}