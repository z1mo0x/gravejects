'use client'

import { createClient } from '@/lib/client'
import { Profile } from '@/types/profile/types';
import { User } from '@supabase/supabase-js';
import React, { createContext, useContext, useEffect, useState } from 'react'

type Props = {
    children: React.ReactNode;
}

type UserContextValue = {
    user: User | null,
    profile: Profile | null,
    isLoading: boolean,
    isAuth: boolean,
    refreshUser: () => Promise<void>;
}

const UserContext = createContext<UserContextValue | null>(null);

const AppInitializer = ({ children }: Props) => {
    const [user, setUser] = useState<User | null>(null);
    const [profile, setProfile] = useState<Profile | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    async function initUser() {
        const supabase = createClient()

        setIsLoading(true)
        const { data: { user }, error: userError } = await supabase.auth.getUser();

        if (userError || !user) {
            setUser(null);
            setProfile(null);
            setIsLoading(false);
            return;
        }

        setUser(user);

        const { data: profile } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", user.id)
            .single();

        setProfile(profile);
        setIsLoading(false);
    }

    useEffect(() => {
        const supabase = createClient()

        initUser()

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange(() => {
            initUser();
        });

        return () => {
            subscription.unsubscribe();
        };

    }, [])

    return (
        <UserContext.Provider value={{
            user,
            profile,
            isLoading,
            isAuth: Boolean(user),
            refreshUser: initUser
        }}>
            {children}
        </UserContext.Provider >
    )
}

export default AppInitializer;

export function useUser() {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error("useApp must be used inside AppInitializer");
    }

    return context;
}