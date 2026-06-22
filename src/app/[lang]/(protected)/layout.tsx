import { redirect } from 'next/navigation';
import { createClient } from '@/lib/server';

type Props = {
    children: React.ReactNode;
    params: Promise<{
        lang: string;
    }>;
};

export default async function ProtectedLayout({ children, params }: Props) {
    const supabase = await createClient();
    const { lang } = await params;

    const {
        data: { user },
        error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
        redirect(`/${lang}/auth/login`);
    }

    return <>{children}</>;
}