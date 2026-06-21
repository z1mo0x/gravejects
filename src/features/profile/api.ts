import { createClient } from "@/lib/client";


export async function getUserProfile() {
    const supabase = createClient();

    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError || !user) {
        throw new Error('User is not authorized')
    }

    const { data, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

    if (profileError) {
        throw new Error(profileError.message)
    }

    return data;
}

