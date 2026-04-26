'use client';

import { useState } from 'react';
import { Activity, Grid3X3, BookOpen, Radio, ChevronRight } from 'lucide-react';
import { ReviewSocialHub } from './review-social-hub';
import { ReviewUgcMosaic } from './review-ugc-mosaic';
import { ReviewStoryCards } from './review-story-cards';
import { ReviewLiveFeed } from './review-live-feed';

type ReviewMode = 'social' | 'ugc' | 'story' | 'live';

const modes: Array<{
  id: ReviewMode;
  label: string;
  description: string;
  icon: typeof Activity;
  color: string;
  activeColor: string;
}> = [
  {
    id: 'social',
    label: 'Social Hub',
    description: 'Live counters, trust badges, and activity feeds',
    icon: Activity,
    color: 'border-[#e9ddd2] bg-white text-[#6a5448]',
    activeColor: 'border-[#261813] bg-[#261813] text-white shadow-[0_8px_24px_rgba(38,24,19,0.25)]',
  },
  {
    id: 'ugc',
    label: 'UGC Mosaic',
    description: 'Photo grid with hover-to-reveal reviews',
    icon: Grid3X3,
    color: 'border-[#e9ddd2] bg-white text-[#6a5448]',
    activeColor: 'border-[#9d531c] bg-[#9d531c] text-white shadow-[0_8px_24px_rgba(157,83,28,0.25)]',
  },
  {
    id: 'story',
    label: 'Story Cards',
    description: 'Expandable customer journey narratives',
    icon: BookOpen,
    color: 'border-[#e9ddd2] bg-white text-[#6a5448]',
    activeColor: 'border-[#c78f56] bg-[#c78f56] text-white shadow-[0_8px_24px_rgba(199,143,86,0.25)]',
  },
  {
    id: 'live',
    label: 'Live Feed',
    description: 'Real-time notification-style review stream',
    icon: Radio,
    color: 'border-[#e9ddd2] bg-white text-[#6a5448]',
    activeColor: 'border-[#0fbf78] bg-[#0fbf78] text-white shadow-[0_8px_24px_rgba(15,191,120,0.25)]',
  },
];

export function ReviewShowcase() {
  const [activeMode, setActiveMode] = useState<ReviewMode>('social');

  return (
    <section className="relative">
      {/* Section Header */}
      <div className="mx-auto max-w-[1600px] px-4 pt-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.35em] text-[#9a7156]">Review Showcase</div>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.02em] text-[#1f1612] sm:text-5xl">
            Four ways to tell the same story.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#6a5448]">
            Each layout uses the same Maska voice but changes the structure so the section can fit different product pages, campaigns, or audience moods.
          </p>
        </div>
      </div>

      {/* Mode Navigation */}
      <div className="mx-auto max-w-[1600px] px-4 pt-10 sm:px-6 lg:px-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {modes.map((mode) => {
            const isActive = activeMode === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => setActiveMode(mode.id)}
                className={`group relative flex items-start gap-4 rounded-[1.5rem] border p-5 text-left transition-all duration-300 ${
                  isActive ? mode.activeColor : `${mode.color} hover:border-[#c78f56] hover:shadow-[0_4px_16px_rgba(199,143,86,0.1)]`
                }`}
              >
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${isActive ? 'bg-white/20' : 'bg-[#f8efe7]'}`}>
                  <mode.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{mode.label}</span>
                    <ChevronRight className={`h-4 w-4 transition-transform ${isActive ? 'translate-x-0.5' : ''}`} />
                  </div>
                  <p className={`mt-1 text-xs leading-4 ${isActive ? 'text-white/80' : 'text-[#8a7368]'}`}>
                    {mode.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Mode Content */}
      <div className="relative mt-4">
        {/* Background accent based on mode */}
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 h-[32rem] transition-opacity duration-700 ${
            activeMode === 'social' ? 'bg-[radial-gradient(circle_at_top,_rgba(191,126,61,0.08),_transparent_60%)]' :
            activeMode === 'ugc' ? 'bg-[radial-gradient(circle_at_top,_rgba(157,83,28,0.08),_transparent_60%)]' :
            activeMode === 'story' ? 'bg-[radial-gradient(circle_at_top,_rgba(199,143,86,0.08),_transparent_60%)]' :
            'bg-[radial-gradient(circle_at_top,_rgba(15,191,120,0.06),_transparent_60%)]'
          }`}
        />

        <div className="relative">
          {activeMode === 'social' && <ReviewSocialHub />}
          {activeMode === 'ugc' && <ReviewUgcMosaic />}
          {activeMode === 'story' && <ReviewStoryCards />}
          {activeMode === 'live' && <ReviewLiveFeed />}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mx-auto max-w-[1600px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[1.5rem] bg-gradient-to-r from-[#261813] via-[#9d531c] to-[#c78f56] p-8 text-center text-white shadow-[0_24px_60px_rgba(52,30,19,0.18)]">
          <h3 className="text-2xl font-semibold sm:text-3xl">Ready to experience Chocolate Salvation?</h3>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/80">
            Join 2,400+ happy customers who have made Maska their daily ritual. Free shipping on orders above Rs. 499.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#261813] transition hover:bg-[#fff8f1]">
              Add to Cart — Rs. 322.2
            </button>
            <button className="rounded-full border border-white/25 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15">
              View All Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

