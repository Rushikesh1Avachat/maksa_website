'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ChevronDownIcon } from '@/components/ui-icons';
import type { ProductReview } from '@/data/maska';

type CustomerReviewShowcaseProps = {
  title: string;
  reviews: ProductReview[];
  mediaCards: Array<{ title: string; caption: string; src: string }>;
};

type MoodKey = 'simple' | 'classic' | 'joyful' | 'vibrant' | 'premium';

const moodTabs: Array<{ key: MoodKey; label: string; className: string; activeClassName: string }> = [
  {
    key: 'simple',
    label: 'Simple',
    className: 'border-[#f6cf68] text-[#7d3d0f] bg-[#fff8df]',
    activeClassName: 'shadow-[0_8px_18px_rgba(247,203,98,0.34)]',
  },
  {
    key: 'classic',
    label: 'Classic',
    className: 'border-[#f1bf2d] text-[#9b4f0d] bg-[#fff8e8]',
    activeClassName: 'shadow-[0_8px_18px_rgba(241,191,45,0.28)]',
  },
  {
    key: 'joyful',
    label: 'Joyful',
    className: 'border-[#f62c90] text-white bg-[#f10c7a]',
    activeClassName: 'shadow-[0_10px_22px_rgba(241,12,122,0.35)]',
  },
  {
    key: 'vibrant',
    label: 'Vibrant',
    className: 'border-[#cfb7ff] text-[#6c2ed5] bg-[#f3edff]',
    activeClassName: 'shadow-[0_8px_18px_rgba(191,164,255,0.28)]',
  },
  {
    key: 'premium',
    label: 'Premium',
    className: 'border-[#c9d2e1] text-[#223550] bg-[#f8fafc]',
    activeClassName: 'shadow-[0_8px_18px_rgba(174,188,208,0.18)]',
  },
];

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 text-[#ffb000]" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index}>★</span>
      ))}
    </div>
  );
}

export function CustomerReviewShowcase({ title, reviews, mediaCards }: CustomerReviewShowcaseProps) {
  const [selectedMood, setSelectedMood] = useState<MoodKey>('joyful');
  const featured = reviews[0];
  const previewImages = mediaCards.slice(0, 4);

  return (
    <section className="mt-16">
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="relative pb-3">
          <div className="pointer-events-none absolute right-0 top-[-48px] hidden md:block">
            <Image src="/assets/peanut-mascot.svg" alt="Mascot" width={188} height={188} className="drop-shadow-[0_14px_18px_rgba(79,45,20,0.16)]" />
          </div>

          <h2 className="mx-auto max-w-5xl text-center font-serif text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.02em] text-[#5f300e] sm:text-[3.2rem] lg:text-[3.9rem]">
            {title}
          </h2>

          <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
            {moodTabs.map((tab) => {
              const active = tab.key === selectedMood;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setSelectedMood(tab.key)}
                  className={`rounded-[1.2rem] border px-5 py-3 text-[1rem] font-medium transition sm:px-6 ${tab.className} ${active ? tab.activeClassName : 'shadow-none'}`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="mt-10 overflow-hidden rounded-[2rem] bg-[linear-gradient(90deg,#261813_0%,#9f4f13_50%,#261813_100%)] px-6 py-7 shadow-[0_32px_70px_rgba(52,30,19,0.18)] sm:px-8 sm:py-8">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="relative">
                <div className="text-[2.55rem] font-semibold leading-tight text-[#ffe17a] sm:text-[3rem]">Customer Reviews</div>
                <div className="mt-4 h-[3px] w-20 bg-[#ffb100]" />
                <p className="mt-4 text-[1.05rem] font-semibold text-[#f2ddc7]">Real stories from happy customers</p>
                <p className="mt-3 text-[0.98rem] leading-6 text-[#cfaa79]">Click any photo to read the full review</p>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  {previewImages.map((item, index) => (
                    <div
                      key={item.title}
                      className={`relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-4 border-[#d0a03c] bg-[#f4e1c7] shadow-[0_12px_18px_rgba(0,0,0,0.24)] ${index === 0 ? 'translate-y-0.5' : ''}`}
                    >
                      <Image src={item.src} alt={item.title} fill className="object-cover" />
                      {index === 2 ? (
                        <span className="absolute bottom-0 right-0 rounded-full bg-[#ef8f0b] px-2 py-1 text-xs font-semibold text-white">
                          5
                        </span>
                      ) : null}
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  aria-label="Next"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-[#c48b23] transition hover:bg-white/10 hover:text-[#ffd56b]"
                >
                  <ChevronDownIcon className="h-6 w-6 -rotate-90" />
                </button>
              </div>
            </div>
          </div>

          <article className="mt-12 rounded-[1.1rem] border border-[#edf0f4] bg-white px-6 py-7 shadow-[0_24px_55px_rgba(31,22,18,0.08)] sm:px-8 sm:py-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#12c28d] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(18,194,141,0.24)]">
                ✓ Verified
              </span>
              <StarRow rating={featured.rating} />
            </div>

            <h3 className="mt-5 text-[2rem] font-medium tracking-[-0.02em] text-[#273244] sm:text-[2.4rem]">
              Unexpectedly Nice
            </h3>

            <p className="mt-8 max-w-5xl text-[1.02rem] leading-8 text-[#5b6780] sm:text-[1.1rem]">
              “{featured.text}”
            </p>

            <button type="button" className="mt-4 text-sm font-semibold text-[#2c6df6] transition hover:text-[#1a57d1]">
              Read more ↓
            </button>
          </article>
        </div>
      </div>
    </section>
  );
}
