import { createClient } from "@/lib/server";
import ProfileBanner from "@/components/ui/profile/profile-banner";
import ProfileStats from "@/components/ui/profile/stats/profile-stats";
import GitIdentity from "@/components/ui/profile/git-identity";
import { Profile } from "@/types/profile/types";
import Image from "next/image";


type Props = {
  params: Promise<{
    lang: string;
  }>;
};


export default async function ProtectedPage({ params }: Props) {

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if (profileError || !profile) {
    console.error('[PROFILE_LOAD_ERROR]', profileError);
  }


  return (
    <div className="min-h-svh pt-20 w-full pb-20">
      <Image
        src="/bury-bg.png"
        fill
        className="object-cover bg-fixed"
        alt="Фон для страницы похорон проекта"
      />
      <div className="container">
        <div className="relative p-10 rounded-2xl">
          <div className="stone-border z-2 rounded-2xl" />
          <ProfileBanner user={user} profile={profile} />
        </div>
        <ProfileStats />
        <div className="grid-user-bottom mt-5">
          <div className="relative p-10">
            Tabs
          </div>
          <GitIdentity username={profile.username} email={user?.email}

          />
        </div>
      </div>
    </div>
  );
}