import { redirect } from "next/navigation";
import { createClient } from "@/lib/server";
import ProfileBanner from "@/components/ui/profile/profile-banner";


type Props = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function ProtectedPage({ params }: Props) {

  const supabase = await createClient();
  const { lang } = await params;

  const { data: claimsData, error: claimsError } = await supabase.auth.getClaims();

  if (claimsError || !claimsData?.claims) {
    redirect(`/${lang}/auth/login`);
  }

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    redirect(`/${lang}/auth/login`);
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();


  return (
    <ProfileBanner user={user} profile={profile} />
  );
}