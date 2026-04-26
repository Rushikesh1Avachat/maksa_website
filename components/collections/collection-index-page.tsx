import Link from 'next/link';
import Image from 'next/image';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { SectionHeading } from '@/components/section-heading';
import { collectionCatalog } from '@/data/maska';

export function CollectionIndexPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#fff7ef_0%,_#f7eadf_45%,_#f2e1d1_100%)]">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Collections"
          title="Pick the Maska range you want to explore"
          description="The products menu now opens into the same category set used across the collection pages, so shoppers can jump straight to peanut butter, gift boxes, nutrition bars, granola, or combos."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {collectionCatalog.map((collection) => (
            <Link
              key={collection.slug}
              href={`/collections/${collection.slug}`}
              className="group overflow-hidden rounded-[2rem] border border-white/80 bg-white/80 p-4 shadow-[0_28px_70px_rgba(68,42,26,0.08)] backdrop-blur transition hover:-translate-y-1"
            >
              <div
                className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]"
                style={{
                  background: `linear-gradient(135deg, ${collection.accent} 0%, #f6e8d9 100%)`,
                }}
              >
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-contain p-6 transition duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-4">
                <div className="text-xs uppercase tracking-[0.28em] text-[#9a7156]">Collection</div>
                <h2 className="mt-2 text-xl font-semibold text-[#1f1612]">{collection.title}</h2>
                <p className="mt-2 text-sm leading-6 text-[#685246]">{collection.description}</p>
                <div className="mt-4 text-sm font-semibold text-[#201613]">View collection</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
