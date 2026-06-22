import { createClient } from "@/lib/server";
import { getRepositories } from "@/services/github.service";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        const supabase = await createClient();

        const {
            data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const {
            data: { session },
            error: sessionError
        } = await supabase.auth.getSession();

        if (sessionError) {
            console.error('[GITHUB_SESSION_ERROR]', sessionError);

            return NextResponse.json(
                { error: 'Session error' },
                { status: 401 }
            );
        }

        const token = session?.provider_token;

        if (!token) {
            return NextResponse.json({ error: "No token" }, { status: 401 });
        }

        const repos = await getRepositories(token);

        return NextResponse.json(repos);

    } catch (error) {
        console.error('[GITHUB_REPOS_ERROR]', error);

        return NextResponse.json(
            {
                error:
                    error instanceof Error
                        ? error.message
                        : 'Internal server error',
            },
            { status: 500 }
        );
    }
}
