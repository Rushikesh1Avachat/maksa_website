import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const cards = [
  { label: 'Product page', value: 'Static copy of Maska Peanut Butter Chocolate Salvation' },
  { label: 'Review system', value: 'Live counters, mosaic wall, and conversation feed' },
  { label: 'Style direction', value: 'Warm, premium, and brand-safe with a little edge' },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#fff8f1_0%,_#f4e2d0_38%,_#efe0cf_100%)]">
      <SiteHeader />

      <section className="mx-auto max-w-[1600px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#eadbcc] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#9a7156]">
              Assignment preview
            </div>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.03em] text-[#201613] sm:text-6xl">
              A static product description page for Maska, rebuilt with stronger review storytelling.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#665246] sm:text-lg">
              The focus here is the assignment page for <span className="font-semibold">Maska Peanut Butter Chocolate Salvation</span>. It includes the product story, a cleaner storefront feel, and three review variations inspired by the reference prototype.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/products/maska-peanut-butter-chocolate-salvation"
                className="inline-flex items-center gap-2 rounded-full bg-[#241812] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#3a2618]"
              >
                Open the product page
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full border border-[#eadbcc] bg-white/80 px-5 py-4 text-sm font-semibold text-[#241812] transition hover:bg-white"
              >
                Browse products
              </Link>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {cards.map((card) => (
                <div key={card.label} className="rounded-[1.5rem] border border-white/80 bg-white/82 p-5 shadow-[0_24px_60px_rgba(68,42,26,0.08)]">
                  <div className="text-xs uppercase tracking-[0.3em] text-[#9a7156]">{card.label}</div>
                  <div className="mt-3 text-sm leading-6 text-[#533f34]">{card.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-[linear-gradient(135deg,#2a1a14_0%,#8d4d22_56%,#f0c785_100%)] p-6 text-white shadow-[0_30px_80px_rgba(71,40,20,0.18)]">
            <div className="absolute right-4 top-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur">
              <Star className="h-7 w-7 fill-current text-[#ffcb73]" />
            </div>
            <div className="relative aspect-[4/3]">
              <Image src="/assets/maska-hero-jar.svg" alt="Maska peanut butter jar" fill className="object-contain p-8" />
            </div>
            <div className="rounded-[1.4rem] bg-white/10 p-5 backdrop-blur">
              <div className="text-sm uppercase tracking-[0.3em] text-white/60">Review direction</div>
              <div className="mt-2 text-2xl font-semibold">Balanced, editorial, and product-first.</div>
              <p className="mt-3 text-sm leading-7 text-white/74">
                The review section is designed to feel like word of mouth, not a generic testimonials block.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
