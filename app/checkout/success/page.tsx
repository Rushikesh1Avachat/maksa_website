'use client';

import Link from 'next/link';
import { Check, ArrowRight, Package } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export default function CheckoutSuccessPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#fff8f1_0%,_#f5e6d7_40%,_#efe0cf_100%)]">
      <SiteHeader />

      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#f0fdf4]">
          <Check className="h-10 w-10 text-[#0fbf78]" />
        </div>

        <h1 className="mt-8 text-3xl font-semibold text-[#1f1612]">Order placed successfully!</h1>
        <p className="mt-4 text-sm leading-6 text-[#6a5448]">
          Thank you for your purchase. You will receive a confirmation email shortly with your order details.
        </p>

        <div className="mt-8 rounded-[1.5rem] border border-white/80 bg-white/75 p-6 shadow-[0_18px_40px_rgba(59,35,22,0.08)] backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f8efe7]">
              <Package className="h-5 w-5 text-[#9d531c]" />
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-[#1f1612]">Estimated delivery</div>
              <div className="text-xs text-[#8a7368]">2-3 business days</div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#241812] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3a2618]"
          >
            Continue shopping
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#dfd2c6] px-6 py-3 text-sm font-semibold text-[#201613] transition hover:bg-[#faf5ef]"
          >
            Back to home
          </Link>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}

