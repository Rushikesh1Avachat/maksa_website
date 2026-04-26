'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingBag, ArrowRight, Trash2 } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { useWishlistStore } from '@/hooks/useWishlistStore';
import { useCartStore } from '@/hooks/useCartStore';

export default function WishlistPage() {
  const { items, removeItem } = useWishlistStore();
  const addItem = useCartStore((s) => s.addItem);

  const handleMoveToBag = (item: typeof items[0]) => {
    addItem({
      slug: item.slug,
      title: item.title,
      shortTitle: item.shortTitle,
      image: item.image,
      variant: '500g',
      salePrice: item.salePrice,
      regularPrice: item.regularPrice,
      quantity: 1,
    });
    removeItem(item.slug);
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#fff8f1_0%,_#f5e6d7_40%,_#efe0cf_100%)]">
      <SiteHeader />

      <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-xs uppercase tracking-[0.35em] text-[#9a7156]">Wishlist</div>
        <h1 className="mt-3 text-4xl font-semibold text-[#1f1612]">
          {items.length > 0 ? `Saved items (${items.length})` : 'Your wishlist is empty'}
        </h1>

        {items.length === 0 ? (
          <div className="mt-12 rounded-[2rem] border border-white/80 bg-white/75 p-12 text-center shadow-[0_28px_70px_rgba(68,42,26,0.08)] backdrop-blur">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#fff0f3]">
              <Heart className="h-8 w-8 text-[#e11d48]" />
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-[#1f1612]">No saved items yet</h2>
            <p className="mt-3 text-sm text-[#6a5448]">Tap the heart on any product to save it here.</p>
            <Link
              href="/products"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#241812] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3a2618]"
            >
              Explore products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.slug}
                className="group overflow-hidden rounded-[2rem] border border-white/80 bg-white/82 shadow-[0_24px_60px_rgba(68,42,26,0.08)] backdrop-blur"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[linear-gradient(145deg,#f4ddc1_0%,#fff8f0_50%,#edd0b1_100%)]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-6 transition duration-500 group-hover:scale-[1.04]"
                  />
                  <button
                    type="button"
                    onClick={() => removeItem(item.slug)}
                    className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#e11d48] text-white transition hover:bg-[#be123c]"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                <div className="p-5">
                  <h2 className="text-xl font-semibold text-[#1f1612]">{item.title}</h2>
                  <p className="mt-1 text-xs uppercase tracking-[0.25em] text-[#9a7156]">{item.category}</p>

                  <div className="mt-4 flex items-end gap-3">
                    <span className="text-2xl font-semibold text-[#241812]">Rs. {item.salePrice}</span>
                    <span className="pb-1 text-sm text-[#8e7568] line-through">Rs. {item.regularPrice}</span>
                  </div>

                  <div className="mt-5 flex gap-3">
                    <button
                      type="button"
                      onClick={() => handleMoveToBag(item)}
                      className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#221713] py-3 text-sm font-semibold text-white transition hover:bg-[#37241c]"
                    >
                      <ShoppingBag className="h-4 w-4" />
                      Move to bag
                    </button>
                    <Link
                      href={`/products/${item.slug}`}
                      className="flex items-center justify-center rounded-2xl border border-[#dfd2c6] px-5 py-3 text-sm font-semibold text-[#201613] transition hover:bg-[#faf5ef]"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <SiteFooter />
    </main>
  );
}

