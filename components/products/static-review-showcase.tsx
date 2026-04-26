import { ArrowRight, CheckCircle2, MessageCircle, Quote, Star } from 'lucide-react';
import Image from 'next/image';
import { SectionHeading } from '@/components/section-heading';
import { reviewModes } from '@/data/maska';

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 text-[#ffb000]" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className={`h-4 w-4 ${index < rating ? 'fill-current' : 'text-[#d8c4b3]'}`} />
      ))}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('');

  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,#2a1a14_0%,#8d4f22_100%)] text-sm font-semibold text-white">
      {initials}
    </div>
  );
}

export function StaticReviewShowcase() {
  const featured = {
    name: 'Birendra Shukla',
    location: 'Ranchi',
    date: '23 Apr 2026',
    rating: 5,
    title: 'Unexpectedly nice',
    content:
      'I opened it expecting a standard peanut butter jar and ended up staying for the texture. The chocolate note feels rich without becoming overly sweet, and the finish is still clean enough to work as a daily breakfast spread.',
  };

  const mosaicReviews = [
    {
      id: 'r1',
      author: 'Yukta Shah',
      location: 'Gwalior',
      date: '23 Apr 2026',
      rating: 5,
      title: 'Smooth, thick and easy to keep reaching for',
      content:
        'The jar has a proper dessert energy, but it still works on toast or as a spoon snack. The chocolate layer feels balanced and the peanut base keeps it from becoming too sugary.',
    },
    {
      id: 'r2',
      author: 'Bhavesh1971',
      location: 'Haldwani',
      date: '21 Apr 2026',
      rating: 5,
      title: 'Packaging made the first impression',
      content:
        'This one feels premium the second you see it. Glass jar, bold label, and the product itself tastes cleaner than I expected for a chocolate-spread style peanut butter.',
    },
    {
      id: 'r3',
      author: 'Shridam',
      location: 'Hyderabad',
      date: '20 Apr 2026',
      rating: 5,
      title: 'Therapeutic spoon-snacking material',
      content:
        'The consistency is thick in a satisfying way, not sticky or chalky. It is the kind of thing I would buy again because it feels like a treat without tasting artificial.',
    },
    {
      id: 'r4',
      author: 'Anika Verma',
      location: 'Pune',
      date: '19 Apr 2026',
      rating: 4,
      title: 'Good fit for breakfast and late cravings',
      content:
        'This has a very clear product identity. It is sweet enough to feel indulgent, but the peanut base and the texture keep it useful as a real pantry item too.',
    },
  ];

  const comments = [
    'Bought for the label, kept buying for the taste.',
    'Feels premium, but still easy enough for everyday toast.',
    'The texture is what I noticed first, then the chocolate finish.',
    'A dessert spread that still fits into breakfast routines.',
  ];

  return (
    <section className="mx-auto max-w-[1600px] px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Review section"
        title="Three static review variations built from the same brand story"
        description="Each layout uses the same Maska voice but changes the structure so the section can fit different product pages or campaign needs."
      />

      <div className="mt-10 grid gap-6 xl:grid-cols-3">
        <article className="overflow-hidden rounded-[2rem] bg-[linear-gradient(90deg,#261813_0%,#9d531c_50%,#261813_100%)] p-6 text-white shadow-[0_32px_70px_rgba(52,30,19,0.18)]">
          <div className="flex items-center gap-3">
            <div className="text-xs uppercase tracking-[0.35em] text-white/65">{reviewModes[0].eyebrow}</div>
          </div>
          <div className="mt-3 flex items-center justify-between gap-4">
            <div>
              <h3 className="text-3xl font-semibold leading-tight text-[#ffe17a]">{reviewModes[0].label}</h3>
              <p className="mt-2 text-sm leading-6 text-[#f1d6c1]">{reviewModes[0].description}</p>
            </div>
            <div className="hidden rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 sm:block">
              Live trust
            </div>
          </div>

          <div className="mt-6 rounded-[1.5rem] bg-white/10 p-5 ring-1 ring-white/10">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-sm text-white/65">Average rating</div>
                <div className="mt-1 text-4xl font-semibold">4.8</div>
              </div>
              <div className="rounded-full bg-[#f2c57e] px-4 py-2 text-sm font-semibold text-[#3b2214]">
                2,489 reviews
              </div>
            </div>

            <div className="mt-4 space-y-2">
              {[5, 4, 3, 2, 1].map((stars, index) => {
                const widths = [88, 58, 20, 7, 3];
                return (
                  <div key={stars} className="flex items-center gap-3">
                    <div className="w-8 text-sm text-white/68">{stars} star</div>
                    <div className="h-3 flex-1 rounded-full bg-white/10">
                      <div
                        className="h-3 rounded-full bg-[linear-gradient(90deg,#ffd46a_0%,#d48a40_100%)]"
                        style={{ width: `${widths[index]}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 rounded-[1.5rem] bg-white/8 p-5 ring-1 ring-white/10">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-[#ffcb73]" />
              <span className="text-sm font-semibold text-white/88">Verified review</span>
            </div>
            <h4 className="mt-4 text-2xl font-medium tracking-[-0.02em] text-white">{featured.title}</h4>
            <div className="mt-3 flex items-center gap-3">
              <Avatar name={featured.name} />
              <div>
                <div className="font-semibold text-white">{featured.name}</div>
                <div className="text-sm text-white/66">
                  {featured.location} <span className="px-1">·</span> {featured.date}
                </div>
              </div>
            </div>
            <div className="mt-4">
              <StarRow rating={featured.rating} />
            </div>
            <p className="mt-4 text-sm leading-7 text-white/82">{featured.content}</p>
            <button type="button" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#ffcf6d]">
              Read full review
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </article>

        <article className="rounded-[2rem] border border-white/80 bg-white/86 p-6 shadow-[0_28px_64px_rgba(68,42,26,0.08)] backdrop-blur xl:col-span-2">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-[#9a7156]">{reviewModes[1].eyebrow}</div>
              <h3 className="mt-2 text-3xl font-semibold text-[#201613]">{reviewModes[1].label}</h3>
            </div>
            <div className="rounded-full bg-[#f7ecdf] px-4 py-2 text-sm font-medium text-[#8d5d31]">
              Editorial wall
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {mosaicReviews.map((review, index) => (
              <div
                key={review.id}
                className={`rounded-[1.5rem] p-5 shadow-[0_18px_40px_rgba(59,35,22,0.08)] ${
                  index % 2 === 0 ? 'bg-[#fff8f1]' : 'bg-[#f8efe7]'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="font-semibold text-[#201613]">{review.author}</div>
                    <div className="mt-1 text-xs text-[#8a7368]">
                      {review.location} <span className="px-1">·</span> {review.date}
                    </div>
                  </div>
                  <Avatar name={review.author} />
                </div>
                <div className="mt-3">
                  <StarRow rating={review.rating} />
                </div>
                <h4 className="mt-4 text-lg font-semibold text-[#1f1612]">{review.title}</h4>
                <p className="mt-2 text-sm leading-6 text-[#634e44]">{review.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_0.9fr]">
            <div className="overflow-hidden rounded-[1.5rem] bg-[linear-gradient(135deg,#301e16_0%,#8f4e21_100%)] p-5 text-white">
              <div className="text-xs uppercase tracking-[0.3em] text-white/65">Visual proof</div>
              <div className="mt-3 text-2xl font-semibold">The section can stay rich without becoming busy.</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Packaging', 'Texture', 'Taste', 'Repeat buy'].map((tag) => (
                  <span key={tag} className="rounded-full bg-white/10 px-3 py-2 text-xs font-medium text-white/85">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-[#e9ddd2] bg-white p-5">
              <div className="text-sm font-semibold text-[#201613]">Photo strip</div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {['/assets/maska-toast.svg', '/assets/maska-spoon.svg', '/assets/maska-gift.svg'].map((src, index) => (
                  <div key={src} className="overflow-hidden rounded-[1rem] bg-[#f6eadf]">
                    <div className="relative aspect-square">
                      <Image src={src} alt={`Review visual ${index + 1}`} fill className="object-contain p-3" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>

        <article className="rounded-[2rem] border border-white/80 bg-[#17110e] p-6 text-white shadow-[0_28px_64px_rgba(39,23,18,0.16)]">
          <div className="text-xs uppercase tracking-[0.35em] text-white/58">{reviewModes[2].eyebrow}</div>
          <h3 className="mt-2 text-3xl font-semibold">{reviewModes[2].label}</h3>
          <p className="mt-3 text-sm leading-7 text-white/72">{reviewModes[2].description}</p>

          <div className="mt-6 space-y-3">
            {comments.map((comment, index) => (
              <div
                key={comment}
                className={`rounded-[1.25rem] px-4 py-4 text-sm leading-6 ${
                  index % 2 === 0 ? 'bg-white/10' : 'bg-white/6'
                }`}
              >
                <Quote className="mb-2 h-4 w-4 text-[#f2c57e]" />
                {comment}
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.25rem] bg-white/10 p-4">
              <div className="text-xs uppercase tracking-[0.25em] text-white/55">Likes</div>
              <div className="mt-2 text-3xl font-semibold">1.9k</div>
            </div>
            <div className="rounded-[1.25rem] bg-white/10 p-4">
              <div className="text-xs uppercase tracking-[0.25em] text-white/55">Replies</div>
              <div className="mt-2 text-3xl font-semibold">186</div>
            </div>
          </div>

          <div className="mt-6 rounded-[1.25rem] border border-white/10 bg-white/6 p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-[#18110d]">
                BM
              </div>
              <div>
                <div className="font-semibold">Bhavna Mehta</div>
                <div className="text-xs text-white/60">Pune · Verified buyer</div>
              </div>
            </div>
            <div className="mt-4">
              <StarRow rating={5} />
            </div>
            <p className="mt-4 text-sm leading-7 text-white/82">
              The review feed feels believable because the comments are easy to scan and the layout makes the social proof feel active instead of decorative.
            </p>
          </div>

          <button
            type="button"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/16"
          >
            Explore more comments
            <MessageCircle className="h-4 w-4" />
          </button>
        </article>
      </div>
    </section>
  );
}
