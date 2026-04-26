import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/auth';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ProfileCard } from '@/components/profile/profile-card';
import { ProfileSignInCard } from '@/components/profile/profile-signin-card';
import { LogoutButton } from '@/components/profile/logout-button';

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return <ProfileSignInCard callbackUrl="/profile" />;
  }

  return (
    <main className="min-h-screen">
      <SiteHeader />
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <ProfileCard
          name={session.user.name ?? 'Maska user'}
          email={session.user.email}
          image={session.user.image}
          logoutSlot={<LogoutButton />}
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/80 bg-white/75 p-6 shadow-[0_28px_70px_rgba(68,42,26,0.08)] backdrop-blur">
            <div className="text-xs uppercase tracking-[0.35em] text-[#9a7156]">Session</div>
            <div className="mt-3 text-sm leading-6 text-[#604d43]">
              Signed in using Google. This route is protected and redirects guests to the login page.
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/80 bg-white/75 p-6 shadow-[0_28px_70px_rgba(68,42,26,0.08)] backdrop-blur">
            <div className="text-xs uppercase tracking-[0.35em] text-[#9a7156]">Saved state</div>
            <div className="mt-3 text-sm leading-6 text-[#604d43]">
              You can extend this page with wishlist items, order history, or review drafts later.
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
