import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export default function WishlistPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/80 bg-white/75 p-8 shadow-[0_28px_70px_rgba(68,42,26,0.08)] backdrop-blur">
          <div className="text-xs uppercase tracking-[0.35em] text-[#9a7156]">Wishlist</div>
          <h1 className="mt-3 text-3xl font-semibold text-[#1f1612]">Saved items will appear here</h1>
          <p className="mt-3 text-sm leading-6 text-[#685246]">This is a placeholder page so the wishlist icon has a real destination.</p>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}

