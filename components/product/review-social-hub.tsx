'use client';

import { useEffect, useState } from 'react';
import { TrendingUp, Users, Star, ShoppingBag, Eye, Clock, ShieldCheck, Award, Heart } from 'lucide-react';

function AnimatedCounter({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

function StarBar({ stars, percentage }: { stars: number; percentage: number }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex w-16 items-center gap-0.5 text-[#d4a574]">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`h-3 w-3 ${i < stars ? 'fill-current' : 'text-[#d8c4b3]'}`} />
        ))}
      </div>
      <div className="h-2.5 flex-1 rounded-full bg-[#f1e4d7]">
        <div
          className="h-2.5 rounded-full bg-gradient-to-r from-[#7d4c2f] to-[#c78f56] transition-all duration-1000"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="w-10 text-right text-xs text-[#8a7368]">{percentage}%</span>
    </div>
  );
}

const recentActivity = [
  { action: 'purchased', item: 'Chocolate Salvation 500g', location: 'Mumbai', time: '2 min ago', icon: ShoppingBag },
  { action: 'added to wishlist', item: 'Chocolate Salvation 1kg', location: 'Delhi', time: '5 min ago', icon: Heart },
  { action: 'viewed', item: 'Chocolate Salvation 300g', location: 'Bangalore', time: '8 min ago', icon: Eye },
  { action: 'purchased', item: 'Chocolate Salvation 500g', location: 'Pune', time: '12 min ago', icon: ShoppingBag },
  { action: 'reviewed', item: 'Chocolate Salvation 500g', location: 'Hyderabad', time: '18 min ago', icon: Star },
];

const trustBadges = [
  { icon: ShieldCheck, label: 'Verified Reviews', desc: 'Every review is from a real buyer' },
  { icon: Award, label: 'Top Rated 2024', desc: 'Highest rated peanut butter' },
  { icon: TrendingUp, label: 'Trending #1', desc: 'Most viewed this week' },
];

export function ReviewSocialHub() {
  const [hoveredBadge, setHoveredBadge] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-[1600px] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="text-xs uppercase tracking-[0.35em] text-[#9a7156]">Social Proof Hub</div>
        <h2 className="mt-2 text-3xl font-semibold text-[#1f1612]">Live trust signals that convert.</h2>
        <p className="mt-2 text-sm text-[#6a5448]">Real-time activity, verified ratings, and buyer confidence — all in one glance.</p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        {/* Left: Counters + Star Breakdown */}
        <div className="space-y-6">
          {/* Live Counters */}
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: Users, label: 'Happy Customers', value: 2489, suffix: '', color: 'from-[#261813] to-[#9d531c]' },
              { icon: Star, label: 'Average Rating', value: 48, suffix: '/5', color: 'from-[#9d531c] to-[#c78f56]', isDecimal: true },
              { icon: ShoppingBag, label: 'Orders Today', value: 183, suffix: '', color: 'from-[#c78f56] to-[#f2c57e]' },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`rounded-[1.5rem] bg-gradient-to-br ${stat.color} p-5 text-white shadow-[0_18px_40px_rgba(52,30,19,0.18)]`}
              >
                <stat.icon className="h-6 w-6 text-white/80" />
                <div className="mt-3 text-3xl font-semibold">
                  {stat.isDecimal ? (
                    <span>4.8/5</span>
                  ) : (
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  )}
                </div>
                <div className="mt-1 text-sm text-white/72">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Star Breakdown */}
          <div className="rounded-[1.5rem] border border-[#e9ddd2] bg-white p-6 shadow-[0_18px_40px_rgba(59,35,22,0.08)]">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-[#7f6659]">Rating Breakdown</div>
                <div className="mt-1 text-4xl font-semibold text-[#221713]">4.8</div>
              </div>
              <div className="rounded-full bg-[#f5e5d5] px-4 py-2 text-sm font-medium text-[#8f5f32]">
                2,489 reviews
              </div>
            </div>
            <div className="mt-5 space-y-2.5">
              {[5, 4, 3, 2, 1].map((stars, index) => {
                const widths = [88, 58, 20, 7, 3];
                return <StarBar key={stars} stars={stars} percentage={widths[index]} />;
              })}
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid gap-3 sm:grid-cols-3">
            {trustBadges.map((badge, index) => (
              <div
                key={badge.label}
                className={`rounded-[1.25rem] border p-4 transition-all duration-300 cursor-pointer ${
                  hoveredBadge === index
                    ? 'border-[#c78f56] bg-[#fff8f1] shadow-[0_8px_24px_rgba(199,143,86,0.15)]'
                    : 'border-[#e9ddd2] bg-white'
                }`}
                onMouseEnter={() => setHoveredBadge(index)}
                onMouseLeave={() => setHoveredBadge(null)}
              >
                <badge.icon className={`h-6 w-6 transition-colors ${hoveredBadge === index ? 'text-[#c78f56]' : 'text-[#9a7156]'}`} />
                <div className="mt-2 text-sm font-semibold text-[#201613]">{badge.label}</div>
                <div className="mt-1 text-xs text-[#8a7368]">{badge.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Recent Activity Feed */}
        <div className="rounded-[1.5rem] bg-[#17110e] p-6 text-white shadow-[0_28px_64px_rgba(39,23,18,0.16)]">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-white/55">Live Activity</div>
              <h3 className="mt-2 text-xl font-semibold">Recent buyer actions</h3>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-[#0fbf78]/20 px-3 py-1.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0fbf78] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#0fbf78]" />
              </span>
              <span className="text-xs font-medium text-[#0fbf78]">Live</span>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-[1.25rem] bg-white/8 px-4 py-3.5 transition hover:bg-white/12"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <activity.icon className="h-4 w-4 text-[#f2c57e]" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm text-white/88">
                    Someone from <span className="font-semibold text-[#ffe17a]">{activity.location}</span>{' '}
                    {activity.action} <span className="font-medium">{activity.item}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-white/50">
                  <Clock className="h-3 w-3" />
                  {activity.time}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[1.25rem] border border-white/10 bg-white/6 p-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/60">Conversion rate this week</span>
              <span className="font-semibold text-[#ffe17a]">+23%</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-white/10">
              <div className="h-2 rounded-full bg-gradient-to-r from-[#f2c57e] to-[#ffe17a]" style={{ width: '71%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

