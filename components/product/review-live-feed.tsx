'use client';

import { useEffect, useState } from 'react';
import { Star, MapPin, Clock, Heart, MessageCircle, Share2, BadgeCheck, TrendingUp, Zap } from 'lucide-react';

interface LiveReview {
  id: number;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  title: string;
  text: string;
  time: string;
  verified: boolean;
  likes: number;
  replies: number;
  highlight?: string;
  tags: string[];
}

const liveReviews: LiveReview[] = [
  {
    id: 1,
    name: 'Meera Shah',
    location: 'Mumbai',
    avatar: 'MS',
    rating: 5,
    title: 'Smooth taste, premium feel',
    text: 'The brand feels thoughtful from packaging to texture. It is the kind of snack I reach for when I want something simple but special. The chocolate salvation has this rich, dark chocolate note that does not feel artificial at all.',
    time: 'Just now',
    verified: true,
    likes: 42,
    replies: 5,
    highlight: 'Top review this week',
    tags: ['Texture', 'Premium', 'Repeat buy'],
  },
  {
    id: 2,
    name: 'Arjun Das',
    location: 'Bengaluru',
    avatar: 'AD',
    rating: 5,
    title: 'Very easy to keep in rotation',
    text: 'The product works for breakfast, post-workout, and little evening cravings. It does not feel too heavy and still tastes satisfying. I have tried many peanut butters but this one stays on my shelf permanently.',
    time: '2 min ago',
    verified: true,
    likes: 31,
    replies: 3,
    tags: ['Versatile', 'Daily use', 'Fitness'],
  },
  {
    id: 3,
    name: 'Ira Kapoor',
    location: 'Delhi',
    avatar: 'IK',
    rating: 4,
    title: 'Good balance of taste and value',
    text: 'There is a clear premium direction here. The flavor is bold enough to stand out, but the product still feels daily-use friendly. My only wish is for a larger family pack at a better price point.',
    time: '5 min ago',
    verified: true,
    likes: 28,
    replies: 7,
    tags: ['Value', 'Taste', 'Family'],
  },
  {
    id: 4,
    name: 'Kunal Mehta',
    location: 'Pune',
    avatar: 'KM',
    rating: 5,
    title: 'Family favorite very quickly',
    text: 'Once opened, this product does not last long at home. Everyone finds a different use for it — my wife spreads it on toast, my daughter dips apple slices, and I eat it straight from the jar. Easy to repurchase.',
    time: '8 min ago',
    verified: true,
    likes: 56,
    replies: 12,
    highlight: 'Most helpful',
    tags: ['Family', 'Versatile', 'Giftable'],
  },
  {
    id: 5,
    name: 'Priya Sharma',
    location: 'Chennai',
    avatar: 'PS',
    rating: 5,
    title: 'Gifted to 3 friends already',
    text: 'The jar alone makes this gift-worthy. I have sent it to three friends for their birthdays and each one asked me where I bought it. The ribbon-ready packaging is a nice touch.',
    time: '12 min ago',
    verified: false,
    likes: 89,
    replies: 15,
    highlight: 'Trending',
    tags: ['Gift', 'Packaging', 'Social'],
  },
  {
    id: 6,
    name: 'Rahul Verma',
    location: 'Jaipur',
    avatar: 'RV',
    rating: 5,
    title: 'The chocolate note is just right',
    text: 'Not too sweet, not too bitter. The dark chocolate flavor feels premium and the peanut butter base is smooth without being runny. Perfect on warm toast — it melts just slightly.',
    time: '18 min ago',
    verified: true,
    likes: 34,
    replies: 4,
    tags: ['Chocolate', 'Toast', 'Texture'],
  },
];

export function ReviewLiveFeed() {
  const [visibleCount, setVisibleCount] = useState(4);
  const [animatedIds, setAnimatedIds] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Staggered entrance animation
    liveReviews.slice(0, visibleCount).forEach((review, index) => {
      setTimeout(() => {
        setAnimatedIds((prev) => new Set([...prev, review.id]));
      }, index * 150);
    });
  }, [visibleCount]);

  const showMore = () => setVisibleCount((prev) => Math.min(prev + 2, liveReviews.length));

  return (
    <section className="mx-auto max-w-[1600px] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.35em] text-[#9a7156]">Live Activity Feed</div>
          <h2 className="mt-2 text-3xl font-semibold text-[#1f1612]">Reviews as they happen.</h2>
          <p className="mt-2 text-sm text-[#6a5448]">A real-time stream of verified customer feedback — fresh, authentic, and unfiltered.</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-full bg-[#fff8df] px-4 py-2 text-sm font-medium text-[#9b4f0d]">
            <Zap className="h-4 w-4 fill-current" />
            Live updates
          </div>
          <div className="flex items-center gap-2 rounded-full bg-[#f0fdf4] px-4 py-2 text-sm font-medium text-[#15803d]">
            <TrendingUp className="h-4 w-4" />
            2.4k today
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.4fr]">
        {/* Main Feed */}
        <div className="space-y-4">
          {liveReviews.slice(0, visibleCount).map((review) => {
            const isAnimated = animatedIds.has(review.id);

            return (
              <div
                key={review.id}
                className={`rounded-[1.5rem] border bg-white p-6 shadow-[0_12px_32px_rgba(59,35,22,0.08)] transition-all duration-500 hover:shadow-[0_18px_48px_rgba(59,35,22,0.12)] ${
                  isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                } ${review.highlight ? 'border-[#f2c57e]' : 'border-[#e9ddd2]'}`}
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2a1a14] to-[#8d4f22] text-sm font-bold text-white">
                      {review.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[#201613]">{review.name}</span>
                        {review.verified && (
                          <BadgeCheck className="h-4 w-4 text-[#0fbf78]" />
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-xs text-[#8a7368]">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {review.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {review.time}
                        </span>
                      </div>
                    </div>
                  </div>

                  {review.highlight && (
                    <div className="rounded-full bg-[#fff8df] px-3 py-1 text-xs font-semibold text-[#9b4f0d]">
                      {review.highlight}
                    </div>
                  )}
                </div>

                {/* Rating & Title */}
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'fill-[#ffb000] text-[#ffb000]' : 'text-[#d8c4b3]'}`} />
                    ))}
                  </div>
                  <h3 className="font-semibold text-[#1f1612]">{review.title}</h3>
                </div>

                {/* Content */}
                <p className="mt-3 text-sm leading-6 text-[#634e44]">{review.text}</p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {review.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#e9ddd2] bg-[#faf6f2] px-3 py-1 text-xs font-medium text-[#6a5448]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-5 flex items-center gap-5 border-t border-[#f1e4d7] pt-4">
                  <button className="flex items-center gap-1.5 text-sm text-[#8a7368] transition hover:text-[#e11d48]">
                    <Heart className="h-4 w-4" />
                    {review.likes}
                  </button>
                  <button className="flex items-center gap-1.5 text-sm text-[#8a7368] transition hover:text-[#9d531c]">
                    <MessageCircle className="h-4 w-4" />
                    {review.replies}
                  </button>
                  <button className="flex items-center gap-1.5 text-sm text-[#8a7368] transition hover:text-[#9d531c]">
                    <Share2 className="h-4 w-4" />
                    Share
                  </button>
                </div>
              </div>
            );
          })}

          {visibleCount < liveReviews.length && (
            <button
              onClick={showMore}
              className="w-full rounded-[1.25rem] border border-[#e9ddd2] bg-white py-4 text-sm font-semibold text-[#9d531c] transition hover:bg-[#f8efe7]"
            >
              Load more reviews
            </button>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Quick Stats */}
          <div className="rounded-[1.5rem] bg-gradient-to-br from-[#261813] to-[#9d531c] p-5 text-white shadow-[0_18px_40px_rgba(52,30,19,0.18)]">
            <div className="text-xs uppercase tracking-[0.35em] text-white/65">This Week</div>
            <div className="mt-4 space-y-3">
              {[
                { label: 'New reviews', value: '342' },
                { label: 'Avg. rating', value: '4.8' },
                { label: 'Response rate', value: '94%' },
                { label: 'Photo reviews', value: '156' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center justify-between">
                  <span className="text-sm text-white/72">{stat.label}</span>
                  <span className="font-semibold text-[#ffe17a]">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trending Topics */}
          <div className="rounded-[1.5rem] border border-[#e9ddd2] bg-white p-5 shadow-[0_12px_32px_rgba(59,35,22,0.06)]">
            <div className="text-xs uppercase tracking-[0.35em] text-[#9a7156]">Trending Topics</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { tag: 'Chocolate flavor', count: 89 },
                { tag: 'Glass jar', count: 67 },
                { tag: 'Gift worthy', count: 54 },
                { tag: 'Crunchy texture', count: 43 },
                { tag: 'Quick delivery', count: 38 },
                { tag: 'Healthy snack', count: 31 },
              ].map((topic) => (
                <button
                  key={topic.tag}
                  className="rounded-full bg-[#f8efe7] px-3 py-1.5 text-xs font-medium text-[#6a5448] transition hover:bg-[#f2e4d4]"
                >
                  {topic.tag} <span className="text-[#9a7156]">({topic.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Review Prompt */}
          <div className="rounded-[1.5rem] border border-[#e9ddd2] bg-[#fffaf5] p-5">
            <div className="text-sm font-semibold text-[#201613]">Have you tried this?</div>
            <p className="mt-2 text-xs leading-5 text-[#6a5448]">
              Share your experience and help others decide. Your review could be featured!
            </p>
            <button className="mt-4 w-full rounded-full bg-[#261813] py-3 text-sm font-semibold text-white transition hover:bg-[#3d2418]">
              Write a Review
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

