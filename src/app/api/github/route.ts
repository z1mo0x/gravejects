// import { createClient } from '@/lib/server';
// import { getRepositories } from '@/services/github.service';
// import { NextRequest, NextResponse } from 'next/server';

// const supabase = createClient();

// export async function GET(request: NextRequest) {
//     const { data: { user } } = await (await supabase).auth.getUser();

//     if (!user) {
//         return Response.json({ error: 'Unauthorized' }, { status: 401 });
//     }

//     const repos = await getRepositories(user.id);


//     return Response.json(repos);
// }