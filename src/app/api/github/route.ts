import { createClient } from '@/lib/server';
import { getRepositories } from '@/services/github.service';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    try {
        const supabase = createClient();

        const {
            data: { user },
        } = await (await supabase).auth.getUser();

        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const {
            data: { session },
        } = await (await supabase).auth.getSession();

        const token = session?.provider_token;

        if (!token) {
            return NextResponse.json({ error: "No token" }, { status: 401 });
        }

        const repos = await getRepositories(token);

        return NextResponse.json(repos);
    } catch (e) {
        console.error(e);

        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}