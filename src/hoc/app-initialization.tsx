'use client';

import { createClient } from '@/lib/client';
import { Profile } from '@/types/profile/types';
import { User } from '@supabase/supabase-js';
import React, {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';

type Props = {
    children: React.ReactNode;
};

type UserContextValue = {
    user: User | null;
    profile: Profile | null;
    isLoading: boolean;
    isAuth: boolean;
    refreshUser: () => Promise<void>;
};

const UserContext = createContext<UserContextValue | null>(null);

const AppInitializer = ({ children }: Props) => {
    const [user, setUser] = useState<User | null>(null);
    const [profile, setProfile] = useState<Profile | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const isInitializing = useRef(false);

    async function initUser() {
        if (isInitializing.current) return;

        isInitializing.current = true;

        const supabase = createClient();

        try {
            setIsLoading(true);

            const {
                data: { session },
                error: sessionError,
            } = await supabase.auth.getSession();

            if (sessionError || !session?.user) {
                setUser(null);
                setProfile(null);
                return;
            }

            const currentUser = session.user;

            setUser(currentUser);

            const { data: profile, error: profileError } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', currentUser.id)
                .single();

            if (profileError) {
                console.error('[APP_INITIALIZER_PROFILE_ERROR]', profileError);
                setProfile(null);
                return;
            }

            setProfile(profile);
        } catch (error) {
            console.error('[APP_INITIALIZER_ERROR]', error);

            setUser(null);
            setProfile(null);
        } finally {
            setIsLoading(false);
            isInitializing.current = false;
        }
    }

    useEffect(() => {
        const supabase = createClient();

        initUser();

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_OUT') {
                setUser(null);
                setProfile(null);
                setIsLoading(false);
                return;
            }

            if (event === 'SIGNED_IN' || event === 'USER_UPDATED') {
                initUser();
            }

            if (event === 'TOKEN_REFRESHED' && session?.user) {
                setUser(session.user);
            }
        });

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    return (
        <UserContext.Provider
            value={{
                user,
                profile,
                isLoading,
                isAuth: Boolean(user),
                refreshUser: initUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default AppInitializer;

export function useUser() {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error('useUser must be used inside AppInitializer');
    }

    return context;
}