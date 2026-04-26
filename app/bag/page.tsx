'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Heart } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { useCartStore } from '@/hooks/useCartStore';
import { useWishlistStore } from '@/hooks/useWishlistStore';

export default function BagPage() {
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCartStore();
  const { toggleItem, isInWishlist } = useWishlistStore();

  const total = getTotalPrice();
  const shipping = total >= 499 ? 0 : 49;
  const grandTotal = total + shipping;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#fff8f1_0%,_#f5e6d7_40%,_#efe0cf_100%)]">
      <SiteHeader />

      <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-xs uppercase tracking-[0.35em] text-[#9a7156]">Shopping Bag</div>
        <h1 className="mt-3 text-4xl font-semibold text-[#1f1612]">
          {items.length > 0 ? `Your bag (${items.length} item${items.length > 1 ? 's' : ''})` : 'Your bag is empty'}
        </h1>

        {items.length === 0 ? (
          <div className="mt-12 rounded-[2rem] border border-white/80 bg-white/75 p-12 text-center shadow-[0_28px_70px_rgba(68,42,26,0.08)] backdrop-blur">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#f8efe7]">
              <ShoppingBag className="h-8 w-8 text-[#9a7156]" />
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-[#1f1612]">Nothing in your bag yet</h2>
            <p className="mt-3 text-sm text-[#6a5448]">Explore our products and add your favorites.</p>
            <Link
              href="/products"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#241812] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3a2618]"
            >
              Browse products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.4fr]">
            {/* Cart Items */}
            <div className="space-y-4">
              {items.map((item) => {
                const inWishlist = isInWishlist(item.slug);
                return (
                  <div
                    key={`${item.slug}-${item.variant}`}
                    className="flex gap-5 rounded-[1.5rem] border border-white/80 bg-white/82 p-5 shadow-[0_18px_40px_rgba(59,35,22,0.08)] backdrop-blur"
                  >
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-[1rem] bg-[#f8efe7]">
                      <Image src={item.image} alt={item.title} fill className="object-contain p-2" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <Link href={`/products/${item.slug}`} className="text-base font-semibold text-[#1f1612] transition hover:text-[#9d531c]">
                            {item.title}
                          </Link>
                          <div className="mt-1 text-sm text-[#8a7368]">
                            {item.variant} · Rs. {item.salePrice}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold text-[#1f1612]">
                            Rs. {(item.salePrice * item.quantity).toFixed(1)}
                          </div>
                          <div className="text-xs text-[#8a7368] line-through">
                            Rs. {(item.regularPrice * item.quantity).toFixed(0)}
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center overflow-hidden rounded-xl border border-[#dfd2c6] bg-white">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.slug, item.variant, item.quantity - 1)}
                              className="px-3 py-2 text-[#3f2a22] transition hover:bg-[#f7efe8]"
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="min-w-10 px-3 py-2 text-center text-sm font-semibold">{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.slug, item.variant, item.quantity + 1)}
                              className="px-3 py-2 text-[#3f2a22] transition hover:bg-[#f7efe8]"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => toggleItem({
                              slug: item.slug,
                              title: item.title,
                              shortTitle: item.shortTitle,
                              image: item.image,
                              salePrice: item.salePrice,
                              regularPrice: item.regularPrice,
                              category: '',
                            })}
                            className={`flex h-9 w-9 items-center justify-center rounded-full transition ${
                              inWishlist ? 'bg-[#fff0f3] text-[#e11d48]' : 'bg-[#f8efe7] text-[#8a7368] hover:text-[#e11d48]'
                            }`}
                          >
                            <Heart className={`h-4 w-4 ${inWishlist ? 'fill-current' : ''}`} />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(item.slug, item.variant)}
                          className="flex items-center gap-1.5 text-sm text-[#8a7368] transition hover:text-[#e11d48]"
                        >
                          <Trash2 className="h-4 w-4" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}

              <button
                type="button"
                onClick={clearCart}
                className="text-sm text-[#8a7368] transition hover:text-[#e11d48]"
              >
                Clear all items
              </button>
            </div>

            {/* Order Summary */}
            <div className="h-fit rounded-[1.5rem] border border-white/80 bg-white/82 p-6 shadow-[0_18px_40px_rgba(59,35,22,0.08)] backdrop-blur">
              <h2 className="text-lg font-semibold text-[#1f1612]">Order Summary</h2>

              <div className="mt-5 space-y-3 text-sm">
                <div className="flex items-center justify-between text-[#6a5448]">
                  <span>Subtotal</span>
                  <span>Rs. {total.toFixed(1)}</span>
                </div>
                <div className="flex items-center justify-between text-[#6a5448]">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `Rs. ${shipping}`}</span>
                </div>
                <div className="flex items-center justify-between text-[#6a5448]">
                  <span>Discount</span>
                  <span className="text-[#0fbf78]">-Rs. 0</span>
                </div>
              </div>

              <div className="mt-4 border-t border-[#e9ddd2] pt-4">
                <div className="flex items-center justify-between text-lg font-semibold text-[#1f1612]">
                  <span>Total</span>
                  <span>Rs. {grandTotal.toFixed(1)}</span>
                </div>
                <p className="mt-1 text-xs text-[#8a7368]">
                  {shipping === 0 ? 'You got free shipping!' : 'Add Rs. ' + (499 - total).toFixed(0) + ' more for free shipping'}
                </p>
              </div>

              <Link
                href="/checkout"
                className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-[#221713] py-4 text-sm font-semibold text-white transition hover:bg-[#37241c]"
              >
                Proceed to checkout
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/products"
                className="mt-3 flex items-center justify-center rounded-2xl border border-[#dfd2c6] py-3 text-sm font-semibold text-[#201613] transition hover:bg-[#faf5ef]"
              >
                Continue shopping
              </Link>
            </div>
          </div>
        )}
      </div>

      <SiteFooter />
    </main>
  );
}

