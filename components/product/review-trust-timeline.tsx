'use client';

import { useState, useMemo, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, BadgeCheck, Repeat, Gift, Heart } from 'lucide-react';
import { reviewsData } from '@/data/reviews';

interface TimelineEvent {
  id: string;
  date: string;
  stage: 'discovery' | 'first-buy' | 'repeat' | 'advocate';
  stageLabel: string;
  author: string;
  avatar: string;
  rating: number;
  title: string;
  text: string;
  isVerified: boolean;
  icon: typeof Heart;
  metric: string;
}

const stageConfig = {
  discovery: {
    color: 'bg-[#fff8df]',
    border: 'border-[#f6cf68]',
    text: 'text-[#9b4f0d]',
    dot: 'bg-[#f6cf68]',
    label: 'Discovery',
  },
  'first-buy': {
    color: 'bg-[#f0f7ff]',
    border: 'border-[#93c5fd]',
    text: 'text-[#1e4a7c]',
    dot: 'bg-[#93c5fd]',
    label: 'First Buy',
  },
  repeat: {
    color: 'bg-[#fff0f5]',
    border: 'border-[#f9a8d4]',
    text: 'text-[#9d174d]',
    dot: 'bg-[#f9a8d4]',
    label: 'Repeat Buyer',
  },
  advocate: {
    color: 'bg-[#f5f0ff]',
    border: 'border-[#c4b5fd]',
    text: 'text-[#6c2ed5]',
    dot: 'bg-[#c4b5fd]',
    label: 'Advocate',
  },
};

function mapToTimeline(): TimelineEvent[] {
  const stages: Array<'discovery' | 'first-buy' | 'repeat' | 'advocate'> = [
    'discovery',
    'first-buy',
    'repeat',
    'advocate',
    'discovery',
    'first-buy',
  ];
  const icons = [Heart, BadgeCheck, Repeat, Gift, Heart, BadgeCheck];
  const metrics = [
    'Viewed 3x before buying',
    'Added to cart in 2 mins',
    '3rd purchase this month',
    'Referred 2 friends',
    'Browsed for a week',
    'Bought on first visit',
  ];

  return reviewsData.map((review, index) => ({
    id: review.id,
    date: review.date,
    stage: stages[index % stages.length],
    stageLabel: stageConfig[stages[index % stages.length]].label,
    author: review.author,
    avatar: review.author.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase(),
    rating: review.rating,
    title: review.title,
    text: review.content,
    isVerified: review.isVerified,
    icon: icons[index % icons.length],
    metric: metrics[index % metrics.length],
  }));
}

export function ReviewTrustTimeline() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedStage, setSelectedStage] = useState<string | null>(null);

  const events = useMemo(() => mapToTimeline(), []);

  const filtered = selectedStage
    ? events.filter((e) => e.stage === selectedStage)
    : events;

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -400 : 400,
        behavior: 'smooth',
      });
    }
  };

  const stageCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    events.forEach((e) => {
      counts[e.stage] = (counts[e.stage] || 0) + 1;
    });
    return counts;
  }, [events]);

  return (
    <section className="mx-auto max-w-[1600px] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="text-xs uppercase tracking-[0.35em] text-[#9a7156]">Trust Timeline</div>
        <h2 className="mt-2 text-3xl font-semibold text-[#1f1612]">From first look to lifelong fan.</h2>
        <p className="mt-2 text-sm text-[#6a5448]">
          Follow the customer journey — see how trust builds from discovery to advocacy.
        </p>
      </div>

      {/* Stage Filter */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setSelectedStage(null)}
          className={`rounded-full px-4 py-2 text-xs font-medium transition ${
            selectedStage === null
              ? 'bg-[#261813] text-white'
              : 'border border-[#e9ddd2] bg-white text-[#6a5448] hover:bg-[#f8efe7]'
          }`}
        >
          All stages ({events.length})
        </button>
        {Object.entries(stageConfig).map(([key, config]) => (
          <button
            key={key}
            type="button"
            onClick={() => setSelectedStage(key)}
            className={`rounded-full px-4 py-2 text-xs font-medium transition ${
              selectedStage === key
                ? `${config.color} ${config.text} border ${config.border}`
                : 'border border-[#e9ddd2] bg-white text-[#6a5448] hover:bg-[#f8efe7]'
            }`}
          >
            {config.label} ({stageCounts[key] || 0})
          </button>
        ))}
      </div>

      {/* Timeline Scroll */}
      <div className="relative">
        <button
          type="button"
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition hover:bg-[#f8efe7]"
        >
          <ChevronLeft className="h-5 w-5 text-[#261813]" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-6 pt-2 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filtered.map((event, index) => {
            const config = stageConfig[event.stage];
            const Icon = event.icon;

            return (
              <div
                key={event.id}
                className="relative shrink-0 w-[320px] rounded-[1.5rem] border bg-white p-5 shadow-[0_12px_32px_rgba(59,35,22,0.08)] transition hover:shadow-[0_18px_48px_rgba(59,35,22,0.12)]"
              >
                {/* Stage Badge */}
                <div className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${config.color} ${config.text} ${config.border}`}>
                  <div className={`h-2 w-2 rounded-full ${config.dot}`} />
                  {event.stageLabel}
                </div>

                {/* Date & Metric */}
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-[#8a7368]">{event.date}</span>
                  <span className="rounded-full bg-[#f6ebe1] px-2 py-0.5 text-[10px] font-medium text-[#8a5530]">
                    {event.metric}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-4">
                  <div className="flex items-center gap-2">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${config.color} ${config.text}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-semibold text-[#201613]">{event.author}</span>
                        {event.isVerified && <BadgeCheck className="h-3.5 w-3.5 text-[#0fbf78]" />}
                      </div>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${i < event.rating ? 'fill-[#ffb000] text-[#ffb000]' : 'text-[#d8c4b3]'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <h4 className="mt-3 text-base font-semibold text-[#1f1612]">{event.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-[#634e44] line-clamp-3">
                    “{event.text.slice(0, 120)}...”
                  </p>
                </div>

                {/* Connector */}
                {index < filtered.length - 1 && (
                  <div className="absolute -right-5 top-1/2 hidden h-0.5 w-5 bg-[#e9ddd2] lg:block" />
                )}
              </div>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition hover:bg-[#f8efe7]"
        >
          <ChevronRight className="h-5 w-5 text-[#261813]" />
        </button>
      </div>

      {/* Stats Row */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: 'Discovery', value: '1,204', desc: 'First-time visitors' },
          { label: 'First Buy', value: '892', desc: 'Converted to purchase' },
          { label: 'Repeat Buyers', value: '456', desc: 'Came back for more' },
          { label: 'Advocates', value: '187', desc: 'Referred friends' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-[1.25rem] border border-[#e9ddd2] bg-white p-5 text-center shadow-[0_8px_24px_rgba(59,35,22,0.06)]"
          >
            <div className="text-2xl font-semibold text-[#261813]">{stat.value}</div>
            <div className="mt-1 text-sm font-medium text-[#6a5448]">{stat.label}</div>
            <div className="mt-1 text-xs text-[#8a7368]">{stat.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

