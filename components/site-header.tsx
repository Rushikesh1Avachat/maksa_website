'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { BagIcon, HeartIcon, SearchIcon, UserIcon, SocialXIcon } from '@/components/ui-icons';
import { useCartStore } from '@/hooks/useCartStore';
import { useWishlistStore } from '@/hooks/useWishlistStore';
import { collectionMenuItems } from '@/data/maska';
import { useRouter } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Blogs', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'Track My Order', href: '#' },
] as const;

export default function SiteHeader() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const cartTotal = useCartStore((s) => s.getTotalItems());
  const wishlistTotal = useWishlistStore((s) => s.items.length);
  const cartHydrated = useCartStore((s) => s.hasHydrated);
  const wishlistHydrated = useWishlistStore((s) => s.hasHydrated);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-white">
      <div className="overflow-hidden bg-[#4c2b0f] text-white">
        <div className="mx-auto flex h-[60px] max-w-[1600px] items-center justify-between px-6 font-semibold tracking-[0.02em] sm:px-10 lg:px-16">
          {Array.from({ length: 4 }).map((_, index) => (
            <span key={index} className="whitespace-nowrap text-[0.82rem] uppercase tracking-[0.06em]">
              GET 5% OFF BY USING COUPON : HEALTHY5
            </span>
          ))}
        </div>
      </div>

      <div className="border-b border-[#eadccf] bg-white">
        <div className="mx-auto flex h-[112px] max-w-[1600px] items-center justify-between px-6 sm:px-10 lg:px-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="block shrink-0">
              <Image
                src="/assets/maska-logo.svg"
                alt="Maska"
                width={150}
                height={70}
                priority
                className="h-auto w-[116px] sm:w-[124px] lg:w-[132px]"
              />
            </Link>

            <nav className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => {
                if (item.label !== 'Products') {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`text-[0.98rem] font-normal text-[#7a4f33] transition hover:text-[#221713] ${item.label === 'Home' ? 'underline decoration-1 underline-offset-[10px]' : ''}`}
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-[0.98rem] font-normal text-[#7a4f33] transition hover:text-[#221713]"
                    >
                      {item.label}
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[14px] w-[14px]">
                        <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>

                    <div
                      className={`absolute left-0 top-full z-40 pt-3 transition duration-150 ${
                        productsOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'
                      }`}
                    >
                      <div className="w-52 rounded-[0.15rem] border border-[#ecdccc] bg-white p-2 shadow-[0_20px_40px_rgba(68,42,26,0.12)]">
                        {collectionMenuItems.map((menuItem) => (
                          <Link
                            key={menuItem.label}
                            href={menuItem.href}
                            className="block px-3 py-2 text-[1rem] text-[#7d5a46] transition hover:text-[#1f1612]"
                            onClick={() => setProductsOpen(false)}
                          >
                            {menuItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-4 text-[#6b4022] lg:gap-5">
            <button
              type="button"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className="flex h-10 w-10 items-center justify-center text-[#6b4022] transition hover:opacity-75"
            >
              <SearchIcon className="h-[22px] w-[22px]" />
            </button>

            <Link
              href="/profile"
              aria-label="Profile"
              className="flex h-10 w-10 items-center justify-center text-[#6b4022] transition hover:opacity-75"
            >
              <UserIcon className="h-[22px] w-[22px]" />
            </Link>

            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="relative flex h-10 w-10 items-center justify-center text-[#6b4022] transition hover:opacity-75"
            >
              <HeartIcon className="h-[22px] w-[22px]" />
              {wishlistHydrated && wishlistTotal > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#e11d48] text-[10px] font-bold text-white">
                  {wishlistTotal}
                </span>
              )}
            </Link>

            <Link
              href="/bag"
              aria-label="Bag"
              className="relative flex h-10 w-10 items-center justify-center text-[#6b4022] transition hover:opacity-75"
            >
              <BagIcon className="h-[22px] w-[22px]" />
              {cartHydrated && cartTotal > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#261813] text-[10px] font-bold text-white">
                  {cartTotal}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" onClick={() => setSearchOpen(false)}>
          <div
            className="absolute left-1/2 top-24 w-full max-w-2xl -translate-x-1/2 px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={handleSearch} className="overflow-hidden rounded-[1.5rem] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.2)]">
              <div className="flex items-center gap-3 px-6 py-4">
                <SearchIcon className="h-5 w-5 text-[#9a7156]" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Search peanut butter, granola, gift boxes..."
                  className="flex-1 bg-transparent text-lg text-[#1f1612] outline-none placeholder:text-[#b8a394]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-[#8a7368] transition hover:bg-[#f8efe7]"
                >
                  <SocialXIcon className="h-4 w-4" />
                </button>
              </div>
              <div className="border-t border-[#f1e4d7] px-6 py-3">
                <div className="text-xs uppercase tracking-[0.25em] text-[#9a7156]">Popular searches</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {['Chocolate Salvation', 'Unsweetened', 'Granola', 'Gift Box', 'Nutrition Bar'].map((term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => {
                        router.push(`/products?q=${encodeURIComponent(term)}`);
                        setSearchOpen(false);
                      }}
                      className="rounded-full border border-[#e9ddd2] bg-[#faf6f2] px-3 py-1.5 text-xs font-medium text-[#6a5448] transition hover:bg-[#f2e4d4]"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}

export { SiteHeader };

