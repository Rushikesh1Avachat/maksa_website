import Image from 'next/image';
import { BadgeCheck, Check, Flame, Gift, Sparkles, Star } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { ReviewShowcase } from '@/components/product/review-showcase';
import { FQSection } from '@/components/products/fq-section';
import { Footer } from '@/components/products/footer';

const sizeOptions = [
  { label: '300g', price: 199, regular: 249 },
  { label: '500g', price: 322.2, regular: 379 },
  { label: '1kg', price: 598.2, regular: 679 },
];

const proofStats = [
  { value: '2.4k', label: 'people viewed this product this week' },
  { value: '4.8/5', label: 'average customer rating across review formats' },
  { value: '71%', label: 'repeat intent from returning buyers' },
];

const productNotes = [
  'Chocolate-led flavor with a peanut base that still feels pantry-friendly',
  'Dense, smooth texture that works for toast, spoon snacking, and baking',
  'Premium glass-jar presentation that feels giftable without being overdesigned',
];

export function ProductDetailPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#fff7f0_0%,_#f4e2d0_40%,_#efe0cf_100%)]">
      <SiteHeader />

      <section className="relative mx-auto max-w-[1600px] px-4 pb-8 pt-10 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_top,_rgba(191,126,61,0.18),_transparent_60%)]" />

        <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#251611_0%,#7e451f_46%,#f2c281_100%)] p-6 text-white shadow-[0_30px_80px_rgba(71,40,20,0.2)] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
                Chocolate Salvation
              </div>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                A static copy of Maska&apos;s product page with a more expressive review system.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/82 sm:text-lg">
                This screen recreates the product description flow for <span className="font-semibold">Maska Peanut Butter Chocolate Salvation</span> and weaves in social proof, UGC-style media, and customer comments in a format that feels closer to a product storytelling page.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {['Clean-label vibe', 'Giftable jar', 'Static layout', 'Word of mouth proof'].map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/86 backdrop-blur">
                    <BadgeCheck className="h-4 w-4" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {proofStats.map((stat) => (
                <div key={stat.label} className="rounded-[1.5rem] border border-white/15 bg-white/10 p-5 backdrop-blur">
                  <div className="text-3xl font-semibold">{stat.value}</div>
                  <div className="mt-1 text-sm text-white/76">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1600px] gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="rounded-[2rem] border border-white/80 bg-white/88 p-5 shadow-[0_28px_64px_rgba(68,42,26,0.08)] backdrop-blur sm:p-6">
          <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-[linear-gradient(145deg,#f7dfc0_0%,#fffaf4_55%,#efcaa0_100%)]">
              <div className="relative aspect-square">
                <Image src="/assets/maska-hero-jar.svg" alt="Maska Chocolate Salvation jar" fill className="object-contain p-8" priority />
              </div>
              <div className="absolute left-4 top-4 rounded-full bg-[#201613]/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white">
                Main image
              </div>
            </div>

            <div className="grid gap-4">
              {['/assets/maska-toast.svg', '/assets/maska-spoon.svg', '/assets/maska-gift.svg'].map((src, index) => (
                <div key={src} className="overflow-hidden rounded-[1.5rem] border border-[#eadbcc] bg-[#fffaf7]">
                  <div className="relative aspect-[4/3]">
                    <Image src={src} alt={`Product view ${index + 1}`} fill className="object-contain p-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="rounded-[2rem] bg-[#211612] p-6 text-white shadow-[0_28px_64px_rgba(39,23,18,0.16)] sm:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#1f1612]">
              <Star className="h-5 w-5 fill-current" />
            </div>
            <div>
              <div className="text-sm font-semibold">Maska Butter</div>
              <div className="text-sm text-white/60">Chocolate Salvation Peanut Butter</div>
            </div>
          </div>

          <div className="mt-6 flex items-end gap-3">
            <span className="text-4xl font-semibold text-[#ffe38c]">Rs. 322.2</span>
            <span className="pb-1 text-sm text-white/55 line-through">Rs. 379</span>
            <span className="rounded-full bg-[#0fbf78] px-3 py-1 text-xs font-semibold text-white">Sale</span>
          </div>

          <div className="mt-5 flex items-center gap-2">
            <Star className="h-4 w-4 fill-current text-[#ffbf4d]" />
            <Star className="h-4 w-4 fill-current text-[#ffbf4d]" />
            <Star className="h-4 w-4 fill-current text-[#ffbf4d]" />
            <Star className="h-4 w-4 fill-current text-[#ffbf4d]" />
            <Star className="h-4 w-4 fill-current text-[#ffbf4d]" />
            <span className="text-sm text-white/72">4.8 average from verified buyers</span>
          </div>

          <p className="mt-5 text-sm leading-7 text-white/76">
            A clean, chocolate-forward peanut butter with a richer finish and a jar presentation that feels premium enough for gifting.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {sizeOptions.map((option) => (
              <button
                key={option.label}
                type="button"
                className={`flex items-center justify-between rounded-[1.2rem] border px-4 py-4 text-left transition ${
                  option.label === '500g' ? 'border-[#f0c878] bg-white/10' : 'border-white/12 bg-white/6'
                }`}
              >
                <span className="font-medium">{option.label}</span>
                <span className="text-right text-sm text-white/76">
                  Rs. {option.price}
                  <span className="ml-2 block text-xs line-through text-white/46">Rs. {option.regular}</span>
                </span>
              </button>
            ))}
          </div>

          <div className="mt-6 flex gap-3">
            <button type="button" className="flex-1 rounded-full bg-[#f3c56f] px-5 py-4 text-sm font-semibold text-[#241812] transition hover:bg-[#ffd57a]">
              Add to cart
            </button>
            <button type="button" className="rounded-full border border-white/15 bg-white/8 px-5 py-4 text-sm font-semibold text-white transition hover:bg-white/12">
              Wishlist
            </button>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {[
              { icon: Check, label: 'No hydrogenated oils' },
              { icon: Flame, label: 'Rich chocolate finish' },
              { icon: Gift, label: 'Gift-ready jar' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 rounded-[1.1rem] border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/80">
                <Icon className="h-4 w-4 text-[#ffcb73]" />
                {label}
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/80 bg-white/88 p-6 shadow-[0_24px_60px_rgba(68,42,26,0.08)]">
            <div className="text-xs uppercase tracking-[0.35em] text-[#9a7156]">Why it works</div>
            <h2 className="mt-2 text-3xl font-semibold text-[#1f1612]">A product story built for faster decisions.</h2>
            <div className="mt-5 space-y-3">
              {productNotes.map((note) => (
                <div key={note} className="flex items-start gap-3 rounded-[1.25rem] bg-[#f8efe4] px-4 py-4">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#c67e35]" />
                  <span className="text-sm leading-6 text-[#5d4a40]">{note}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-[linear-gradient(135deg,#2a1a14_0%,#8c4a20_100%)] p-6 text-white shadow-[0_24px_60px_rgba(35,21,14,0.15)]">
            <div className="text-xs uppercase tracking-[0.35em] text-white/60">Social proof widgets</div>
            <h2 className="mt-2 text-3xl font-semibold">Live counters, badges, and UGC-style snippets.</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { title: 'Added today', value: '183' },
                { title: 'Saved to wishlist', value: '428' },
                { title: 'Repeat buyers', value: '71%' },
              ].map((item) => (
                <div key={item.title} className="rounded-[1.25rem] bg-white/10 p-4">
                  <div className="text-3xl font-semibold text-[#ffe38c]">{item.value}</div>
                  <div className="mt-1 text-sm text-white/72">{item.title}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Texture', 'Taste', 'Packaging', 'Versatility', 'Giftability'].map((tag) => (
                <span key={tag} className="rounded-full border border-white/12 bg-white/10 px-3 py-2 text-xs font-medium text-white/82">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ReviewShowcase />

      <FQSection />

      <Footer />
    </main>
  );
}
