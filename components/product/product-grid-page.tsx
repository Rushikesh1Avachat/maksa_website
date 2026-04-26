import Link from 'next/link';
import Image from 'next/image';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { SectionHeading } from '@/components/section-heading';
import { productCatalog } from '@/data/maska';
import { formatINRCompact } from '@/utils/maska';

export function ProductGridPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Products"
          title="Maska product catalog"
          description="A reusable landing page that links into the product detail route."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {productCatalog.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 p-4 shadow-[0_28px_70px_rgba(68,42,26,0.08)] backdrop-blur transition hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#f7eadf]">
                <Image src={product.images[0]} alt={product.title} fill className="object-contain p-4 transition duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="mt-4">
                <div className="text-xs uppercase tracking-[0.28em] text-[#9a7156]">{product.category}</div>
                <h2 className="mt-2 text-xl font-semibold text-[#1f1612]">{product.title}</h2>
                <p className="mt-2 text-sm leading-6 text-[#685246]">{product.description}</p>
                <div className="mt-4 text-sm font-semibold text-[#201613]">{formatINRCompact(product.priceFrom)}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}

