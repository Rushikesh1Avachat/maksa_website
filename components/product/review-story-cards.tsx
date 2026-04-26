'use client';

import { useState } from 'react';
import { Star, ChevronDown, Quote, Clock, ThumbsUp, Share2, Bookmark } from 'lucide-react';

type Mood = 'joyful' | 'thoughtful' | 'surprised' | 'obsessed';

interface StoryReview {
  id: number;
  author: string;
  location: string;
  avatar: string;
  rating: number;
  mood: Mood;
  title: string;
  preview: string;
  fullStory: string;
  timeline: { label: string; text: string }[];
  likes: number;
  date: string;
  verified: boolean;
}

const moodStyles: Record<Mood, { bg: string; text: string; border: string; emoji: string }> = {
  joyful: { bg: 'bg-[#fff8df]', text: 'text-[#9b4f0d]', border: 'border-[#f6cf68]', emoji: '✨' },
  thoughtful: { bg: 'bg-[#f0f7ff]', text: 'text-[#1e4a7c]', border: 'border-[#93c5fd]', emoji: '🤔' },
  surprised: { bg: 'bg-[#fff0f5]', text: 'text-[#9d174d]', border: 'border-[#f9a8d4]', emoji: '😮' },
  obsessed: { bg: 'bg-[#f5f0ff]', text: 'text-[#6c2ed5]', border: 'border-[#c4b5fd]', emoji: '🔥' },
};

const storyReviews: StoryReview[] = [
  {
    id: 1,
    author: 'Birendra Shukla',
    location: 'Ranchi',
    avatar: 'BS',
    rating: 5,
    mood: 'surprised',
    title: 'Unexpectedly Nice',
    preview: 'Woke up feeling bleh and grabbed this from the shelf...',
    fullStory: 'Woke up feeling bleh and grabbed this item from the shelf — I thought what could go wrong? It is like a thick spread of roasted peanuts with no weird stuff in it. The crunchiness? Yeah, it is there, kinda satisfying. Honestly I was not expecting much but it totally hit different. The earthy flavor is nice, not sweet or artificial at all. Love that it is clean too, no junk added. Perfect for my toast or even just straight from the jar. Definitely keeping this around.',
    timeline: [
      { label: 'First Impression', text: 'Thick, rich texture — not oily like other brands' },
      { label: 'Taste Test', text: 'Chocolate note is subtle, peanut flavor shines through' },
      { label: 'Daily Use', text: 'Now my go-to breakfast spread for toast and smoothies' },
    ],
    likes: 342,
    date: '23 Apr 2026',
    verified: true,
  },
  {
    id: 2,
    author: 'Yukta Shah',
    location: 'Gwalior',
    avatar: 'YS',
    rating: 5,
    mood: 'joyful',
    title: 'Healthy Surprise',
    preview: 'Arre yaar never imagined I would relish health stuff...',
    fullStory: 'Arre yaar, never imagined I would relish health stuff. Maska Butter ka unsweetened peanut butter — unexpectedly GOOD! That crunchy wala texture, it is like... satisfying somehow. Taste not bad, maybe I will munch again... or maybe not? Who am I kidding, I have already ordered my second jar. The glass jar looks so pretty on my kitchen shelf too.',
    timeline: [
      { label: 'Skeptical Start', text: 'Healthy = boring? Not this one!' },
      { label: 'Texture Win', text: 'Crunchy bits make every bite interesting' },
      { label: 'Repeat Buy', text: 'Second jar ordered within a week' },
    ],
    likes: 289,
    date: '23 Apr 2026',
    verified: true,
  },
  {
    id: 3,
    author: 'Shridam',
    location: 'Hyderabad',
    avatar: 'SH',
    rating: 5,
    mood: 'obsessed',
    title: 'Therapeutic Spoon Snacking',
    preview: 'I cannot believe I am stating this but consuming this with a spoon felt strangely therapeutic...',
    fullStory: 'I cannot believe I am stating this but consuming this peanut butter with a spoon felt strangely therapeutic. The consistency is thick and crunchy — like a mini workout for my mouth. It is unsweetened so no odd aftertaste, just pure nutty delight. Even my dog was eyeing it like it was a treat lol. Knowing it is gluten-free and made with genuine peanuts makes it feel like a snack I can genuinely relish without guilt. Definitely worth a shot if you are into the healthier side of life. 5 stars all the way.',
    timeline: [
      { label: 'Discovery', text: 'Straight from the jar — no regrets' },
      { label: 'Texture Love', text: 'Thick, crunchy, satisfying mouthfeel' },
      { label: 'Guilt-Free', text: 'Clean ingredients = zero guilt snacking' },
    ],
    likes: 456,
    date: '20 Apr 2026',
    verified: false,
  },
  {
    id: 4,
    author: 'Kanha Agnihotri',
    location: 'Noida',
    avatar: 'KA',
    rating: 5,
    mood: 'thoughtful',
    title: 'Surprisingly Good Vibes',
    preview: 'Okay I usually dodge healthy snacks like the plague but this... wow...',
    fullStory: 'Okay, I usually dodge healthy snacks like the plague but this peanut butter? Wow. It is thick, earthy, and feels like it is crafted from real food — which it is. The glass jar gives it that elegant vibe too. I was feeling all sentimental and strange when I tried it but it really struck me right. Just roasted peanuts, no junk, and it is surprisingly satisfying. 8 grams of protein too! Might just be my go-to now... who knew I would express that?',
    timeline: [
      { label: 'Initial Doubt', text: 'Healthy snacks are usually disappointing' },
      { label: 'First Bite', text: 'Real food taste — earthy and authentic' },
      { label: 'New Routine', text: 'Post-gym protein boost, tastes like dessert' },
    ],
    likes: 198,
    date: '20 Apr 2026',
    verified: true,
  },
];

export function ReviewStoryCards() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [likedIds, setLikedIds] = useState<Set<number>>(new Set());

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const toggleLike = (id: number) => {
    setLikedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section className="mx-auto max-w-[1600px] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="text-xs uppercase tracking-[0.35em] text-[#9a7156]">Story Cards</div>
        <h2 className="mt-2 text-3xl font-semibold text-[#1f1612]">Customer journeys, unfolded.</h2>
        <p className="mt-2 text-sm text-[#6a5448]">Expand each card to follow the full story — from first impression to daily ritual.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {storyReviews.map((review) => {
          const isExpanded = expandedId === review.id;
          const mood = moodStyles[review.mood];
          const isLiked = likedIds.has(review.id);

          return (
            <div
              key={review.id}
              className={`rounded-[1.5rem] border bg-white shadow-[0_18px_40px_rgba(59,35,22,0.08)] transition-all duration-500 ${
                isExpanded ? 'shadow-[0_24px_60px_rgba(59,35,22,0.14)]' : ''
              } ${mood.border}`}
            >
              {/* Header */}
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-bold ${mood.bg} ${mood.text}`}>
                      {review.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[#201613]">{review.author}</span>
                        {review.verified && (
                          <span className="rounded-full bg-[#0fbf78]/10 px-2 py-0.5 text-[10px] font-semibold text-[#0fbf78]">
                            Verified
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#8a7368]">
                        <span>{review.location}</span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {review.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={`rounded-full px-3 py-1.5 text-xs font-medium ${mood.bg} ${mood.text}`}>
                    {mood.emoji} {review.mood}
                  </div>
                </div>

                {/* Rating */}
                <div className="mt-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'fill-[#ffb000] text-[#ffb000]' : 'text-[#d8c4b3]'}`} />
                  ))}
                </div>

                {/* Title & Preview */}
                <h3 className="mt-3 text-lg font-semibold text-[#1f1612]">{review.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#634e44]">
                  {isExpanded ? review.fullStory : review.preview}
                </p>

                {/* Expand Button */}
                <button
                  onClick={() => toggleExpand(review.id)}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#9d531c] transition hover:text-[#c78f56]"
                >
                  {isExpanded ? 'Show less' : 'Read full story'}
                  <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </button>

                {/* Timeline — shown when expanded */}
                {isExpanded && (
                  <div className="mt-6 space-y-4 border-t border-[#e9ddd2] pt-5">
                    <div className="text-xs uppercase tracking-[0.25em] text-[#9a7156]">Customer Journey</div>
                    <div className="relative space-y-4 pl-6">
                      <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-[#e9ddd2]" />
                      {review.timeline.map((step, index) => (
                        <div key={index} className="relative">
                          <div className="absolute -left-4 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#c78f56] shadow" />
                          <div className="text-xs font-semibold text-[#9a7156]">{step.label}</div>
                          <div className="mt-0.5 text-sm text-[#634e44]">{step.text}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer Actions */}
              <div className="flex items-center justify-between border-t border-[#e9ddd2] px-6 py-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => toggleLike(review.id)}
                    className={`flex items-center gap-1.5 text-sm transition ${
                      isLiked ? 'text-[#e11d48]' : 'text-[#8a7368] hover:text-[#e11d48]'
                    }`}
                  >
                    <ThumbsUp className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                    {review.likes + (isLiked ? 1 : 0)}
                  </button>
                  <button className="flex items-center gap-1.5 text-sm text-[#8a7368] transition hover:text-[#9d531c]">
                    <Share2 className="h-4 w-4" />
                    Share
                  </button>
                </div>
                <button className="text-[#8a7368] transition hover:text-[#9d531c]">
                  <Bookmark className="h-4 w-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Featured Quote */}
      <div className="mt-8 rounded-[1.5rem] bg-gradient-to-br from-[#261813] to-[#9d531c] p-8 text-white shadow-[0_24px_60px_rgba(52,30,19,0.18)]">
        <Quote className="h-8 w-8 text-[#f2c57e]" />
        <blockquote className="mt-4 text-xl font-medium leading-relaxed text-white/92 sm:text-2xl">
          &ldquo;The review section feels trustworthy because the proof is easy to scan, the counters are obvious, and the comments read like real people instead of marketing copy.&rdquo;
        </blockquote>
        <div className="mt-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-sm font-bold">BM</div>
          <div>
            <div className="font-semibold">Bhavna Mehta</div>
            <div className="text-sm text-white/60">Pune · Verified buyer</div>
          </div>
        </div>
      </div>
    </section>
  );
}

