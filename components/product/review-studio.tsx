import Image from 'next/image';
import { comments, reviewModes, type ProductReview } from '@/data/maska';
import { SectionHeading } from '@/components/section-heading';

type ReviewStudioProps = {
  selectedMode: 'pulse' | 'mosaic' | 'conversation';
  onModeChange: (value: 'pulse' | 'mosaic' | 'conversation') => void;
  reviews: ProductReview[];
  mediaCards: Array<{ title: string; caption: string; src: string }>;
};

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} className={index < rating ? 'text-[#b26b2e]' : 'text-[#d8c4b3]'}>
          ★
        </span>
      ))}
    </div>
  );
}

export function ReviewStudio({ selectedMode, onModeChange, reviews, mediaCards }: ReviewStudioProps) {
  return (
    <section className="mt-12">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading eyebrow="Review studio" title="Three creative layouts for the same review section." />
        <div className="flex flex-wrap gap-2 rounded-full border border-[#e3d7cc] bg-white/90 p-2 shadow-sm">
          {reviewModes.map((mode) => (
            <button
              key={mode.id}
              type="button"
              onClick={() => onModeChange(mode.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                selectedMode === mode.id ? 'bg-[#221713] text-white' : 'text-[#6c574d] hover:bg-[#f4ebe3]'
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-[0_28px_70px_rgba(68,42,26,0.08)] backdrop-blur">
        {selectedMode === 'pulse' ? (
          <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[1.75rem] bg-[#f8efe7] p-6">
              <div className="text-xs uppercase tracking-[0.35em] text-[#9a7156]">Pulse board</div>
              <h3 className="mt-3 text-2xl font-semibold text-[#201613]">{reviewModes[0].title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#6a5448]">{reviewModes[0].description}</p>

              <div className="mt-6 rounded-[1.75rem] bg-white p-6 shadow-[0_18px_40px_rgba(59,35,22,0.08)]">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-[#7f6659]">Average rating</div>
                    <div className="mt-1 text-4xl font-semibold text-[#221713]">4.8</div>
                  </div>
                  <div className="rounded-full bg-[#f5e5d5] px-4 py-2 text-sm font-medium text-[#8f5f32]">2,489 reviews</div>
                </div>
                <div className="mt-4 space-y-2">
                  {[5, 4, 3, 2, 1].map((stars) => {
                    const widths = [86, 56, 18, 7, 3];
                    return (
                      <div key={stars} className="flex items-center gap-3">
                        <div className="w-8 text-sm text-[#735f54]">{stars}★</div>
                        <div className="h-3 flex-1 rounded-full bg-[#f1e4d7]">
                          <div className="h-3 rounded-full bg-gradient-to-r from-[#7d4c2f] to-[#c78f56]" style={{ width: `${widths[5 - stars]}%` }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {reviews.map((review) => (
                <article key={review.name} className="rounded-[1.75rem] border border-[#e9ddd2] bg-white p-5 shadow-[0_18px_40px_rgba(59,35,22,0.08)]">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-[#201613]">{review.name}</div>
                    <div className="rounded-full bg-[#f6ebe1] px-3 py-1 text-xs font-medium text-[#9d5a28]">{review.badge}</div>
                  </div>
                  <div className="mt-2 text-xs text-[#8e756a]">{review.location}</div>
                  <div className="mt-3">
                    <StarRow rating={review.rating} />
                  </div>
                  <div className="mt-4 text-lg font-semibold text-[#1f1612]">{review.title}</div>
                  <p className="mt-2 text-sm leading-6 text-[#644f45]">{review.text}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-[#907a6d]">
                    <span>{review.time}</span>
                    <span>{review.helpful} helpful votes</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : null}

        {selectedMode === 'mosaic' ? (
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-[#9a7156]">Mosaic wall</div>
              <h3 className="mt-3 text-2xl font-semibold text-[#201613]">{reviewModes[1].title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#6a5448]">{reviewModes[1].description}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {reviews.map((review, index) => (
                  <article
                    key={review.name}
                    className={`rounded-[1.75rem] p-5 shadow-[0_18px_40px_rgba(59,35,22,0.08)] ${index % 2 === 0 ? 'bg-[#fffaf5]' : 'bg-[#f8efe7]'}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-semibold text-[#221713]">{review.name}</div>
                      <div className="text-xs text-[#8a7368]">{review.time}</div>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-xs text-[#8a7368]">
                      <span>{review.location}</span>
                      <span>•</span>
                      <span>{review.badge}</span>
                    </div>
                    <div className="mt-3">
                      <StarRow rating={review.rating} />
                    </div>
                    <div className="mt-4 text-base font-semibold text-[#1f1612]">{review.title}</div>
                    <p className="mt-2 text-sm leading-6 text-[#634e44]">{review.text}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-[#eadfd3] bg-gradient-to-br from-[#2a1a14] to-[#6d432e] p-6 text-white">
              <div className="text-xs uppercase tracking-[0.35em] text-white/70">Media strip</div>
              <h3 className="mt-3 text-2xl font-semibold">Visual proof without making the page noisy.</h3>
              <div className="mt-6 grid gap-3">
                {mediaCards.map((item) => (
                  <div key={item.title} className="overflow-hidden rounded-[1.5rem] bg-[#f4e3cd] text-[#261712]">
                    <div className="relative aspect-[16/11]">
                      <Image src={item.src} alt={item.title} fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <div className="text-sm font-semibold">{item.title}</div>
                      <div className="mt-2 text-xs uppercase tracking-[0.25em] text-[#7f624f]">{item.caption}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-[1.5rem] bg-white/10 p-5 ring-1 ring-white/15">
                <div className="text-sm uppercase tracking-[0.25em] text-white/70">Customer comments</div>
                <div className="mt-4 space-y-3">
                  {comments.slice(0, 3).map((comment) => (
                    <div key={comment} className="rounded-2xl bg-white/12 px-4 py-3 text-sm leading-6 text-white/92">
                      “{comment}”
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {selectedMode === 'conversation' ? (
          <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[1.75rem] bg-[#17110e] p-6 text-white">
              <div className="text-xs uppercase tracking-[0.35em] text-white/55">Conversation feed</div>
              <h3 className="mt-3 text-2xl font-semibold">{reviewModes[2].title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">{reviewModes[2].description}</p>
              <div className="mt-6 space-y-4">
                {comments.map((comment, index) => (
                  <div key={comment} className={`rounded-[1.5rem] px-4 py-4 text-sm leading-6 ${index % 2 === 0 ? 'bg-white/10' : 'bg-white/6'}`}>
                    “{comment}”
                  </div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-[1.5rem] bg-white/10 p-4">
                  <div className="text-xs uppercase tracking-[0.25em] text-white/55">Likes</div>
                  <div className="mt-2 text-3xl font-semibold">1.9k</div>
                </div>
                <div className="rounded-[1.5rem] bg-white/10 p-4">
                  <div className="text-xs uppercase tracking-[0.25em] text-white/55">Replies</div>
                  <div className="mt-2 text-3xl font-semibold">186</div>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[1.75rem] border border-[#eadfd3] bg-[#fffaf5] p-5">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-[#201613]">Pinned review</div>
                  <div className="text-xs text-[#8f786c]">Most cited this week</div>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#221713] text-sm font-semibold text-white">BM</div>
                  <div>
                    <div className="font-semibold text-[#201613]">Bhavna Mehta</div>
                    <div className="text-xs text-[#8c7468]">Pune · Verified buyer</div>
                  </div>
                </div>
                <div className="mt-4">
                  <StarRow rating={5} />
                </div>
                <p className="mt-4 text-sm leading-6 text-[#604d43]">
                  “The product page feels trustworthy because the proof is easy to scan, the counters are obvious, and the comments read like real people instead of marketing copy.”
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {mediaCards.map((item) => (
                  <div key={item.title} className="overflow-hidden rounded-[1.5rem] bg-[#ead9c7]">
                    <div className="relative aspect-[16/10]">
                      <Image src={item.src} alt={item.title} fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <div className="text-sm font-semibold text-[#261712]">{item.title}</div>
                      <div className="mt-2 text-xs uppercase tracking-[0.25em] text-[#7c5f4d]">{item.caption}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-[1.75rem] border border-[#eadfd3] bg-white p-5">
                <div className="text-sm font-semibold text-[#201613]">Reply starters</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Taste', 'Texture', 'Packaging', 'Repeat buy', 'Giftable', 'Value'].map((tag) => (
                    <span key={tag} className="rounded-full border border-[#e4d7cb] bg-[#faf6f2] px-3 py-1 text-xs font-medium text-[#6a5549]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

