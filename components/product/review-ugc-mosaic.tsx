'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, MapPin, Heart, MessageCircle, Filter } from 'lucide-react';

const categories = ['All', 'Texture', 'Taste', 'Packaging', 'Gift', 'Breakfast'];

const ugcReviews = [
  {
    id: 1,
    image: '/assets/maska-toast.svg',
    author: 'Meera Shah',
    location: 'Mumbai',
    rating: 5,
    title: 'Perfect morning toast companion',
    text: 'The chocolate layer is rich but not overwhelming. My kids love it too!',
    category: 'Breakfast',
    likes: 234,
    comments: 18,
    featured: true,
  },
  {
    id: 2,
    image: '/assets/maska-spoon.svg',
    author: 'Arjun Das',
    location: 'Bengaluru',
    rating: 5,
    title: 'Midday spoon snack ritual',
    text: 'Thick, satisfying texture. I keep a jar at my desk now.',
    category: 'Texture',
    likes: 189,
    comments: 12,
    featured: false,
  },
  {
    id: 3,
    image: '/assets/maska-gift.svg',
    author: 'Ira Kapoor',
    location: 'Delhi',
    rating: 4,
    title: 'Gifted to my sister',
    text: 'The jar looks premium on a shelf. Great gifting option.',
    category: 'Gift',
    likes: 156,
    comments: 8,
    featured: true,
  },
  {
    id: 4,
    image: '/assets/maska-hero-jar.svg',
    author: 'Kunal Mehta',
    location: 'Pune',
    rating: 5,
    title: 'Family favorite in one week',
    text: 'Everyone found their own way to enjoy it. Already ordering more.',
    category: 'Taste',
    likes: 312,
    comments: 24,
    featured: false,
  },
  {
    id: 5,
    image: '/assets/maska-toast.svg',
    author: 'Priya Nair',
    location: 'Chennai',
    rating: 5,
    title: 'Smooth spread, no mess',
    text: 'Love how easily it spreads. No oily separation like other brands.',
    category: 'Texture',
    likes: 98,
    comments: 5,
    featured: false,
  },
  {
    id: 6,
    image: '/assets/maska-gift.svg',
    author: 'Rahul Verma',
    location: 'Jaipur',
    rating: 4,
    title: 'Festive hamper essential',
    text: 'Added this to my Diwali hampers. Everyone asked where I got it.',
    category: 'Gift',
    likes: 267,
    comments: 15,
    featured: true,
  },
];

export function ReviewUgcMosaic() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? ugcReviews
    : ugcReviews.filter((r) => r.category === activeCategory);

  return (
    <section className="mx-auto max-w-[1600px] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.35em] text-[#9a7156]">UGC Mosaic Gallery</div>
          <h2 className="mt-2 text-3xl font-semibold text-[#1f1612]">Customer moments, captured.</h2>
          <p className="mt-2 text-sm text-[#6a5448]">Real photos and stories from real customers — hover to read their experience.</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          <Filter className="h-4 w-4 text-[#9a7156]" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                activeCategory === cat
                  ? 'bg-[#261813] text-white'
                  : 'border border-[#e9ddd2] bg-white text-[#6a5448] hover:bg-[#f8efe7]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry-style Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((review, index) => (
          <div
            key={review.id}
            className={`group relative overflow-hidden rounded-[1.5rem] ${
              review.featured && index === 0 ? 'sm:col-span-2 lg:col-span-2' : ''
            }`}
            onMouseEnter={() => setHoveredId(review.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Image Container */}
            <div className={`relative ${review.featured && index === 0 ? 'aspect-[16/9]' : 'aspect-square'} bg-[#f8efe7]`}>
              <Image
                src={review.image}
                alt={review.title}
                fill
                className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-[#261813]/95 via-[#261813]/60 to-transparent transition-opacity duration-300 ${
                  hoveredId === review.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f2c57e] text-xs font-bold text-[#261813]">
                      {review.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{review.author}</div>
                      <div className="flex items-center gap-1 text-xs text-white/70">
                        <MapPin className="h-3 w-3" />
                        {review.location}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`h-3.5 w-3.5 ${i < review.rating ? 'fill-[#f2c57e] text-[#f2c57e]' : 'text-white/30'}`} />
                    ))}
                  </div>

                  <h4 className="text-base font-semibold text-[#ffe17a]">{review.title}</h4>
                  <p className="mt-1 text-sm text-white/80 line-clamp-2">{review.text}</p>

                  <div className="mt-3 flex items-center gap-4 text-xs text-white/60">
                    <span className="flex items-center gap-1">
                      <Heart className="h-3.5 w-3.5" /> {review.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="h-3.5 w-3.5" /> {review.comments}
                    </span>
                  </div>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#261813] backdrop-blur">
                {review.category}
              </div>

              {/* Featured Badge */}
              {review.featured && (
                <div className="absolute right-4 top-4 rounded-full bg-[#f2c57e] px-3 py-1 text-xs font-semibold text-[#261813]">
                  Featured
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Stats Bar */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-8 rounded-[1.5rem] border border-[#e9ddd2] bg-white p-6 shadow-[0_12px_32px_rgba(59,35,22,0.06)]">
        {[
          { label: 'Customer Photos', value: '1,247' },
          { label: 'Photo Reviews', value: '892' },
          { label: 'Avg. Photo Rating', value: '4.9' },
          { label: 'Featured This Month', value: '156' },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-2xl font-semibold text-[#261813]">{stat.value}</div>
            <div className="text-xs text-[#8a7368]">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

