import Link from 'next/link';
import Image from 'next/image';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { HeartIcon } from '@/components/ui-icons';
import { SectionHeading } from '@/components/section-heading';
import type { ProductItem } from '@/data/maska';

type CollectionDetailPageProps = {
  collection: {
    slug: string;
    label: string;
    title: string;
    description: string;
    accent: string;
    image: string;
    products: ProductItem[];
  };
};

function ProductStars() {
  return (
    <div className="flex items-center gap-1 text-[#5a3419]">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index}>★</span>
      ))}
      <span className="ml-2 text-sm text-[#6f4d2f]">(1)</span>
    </div>
  );
}

export function CollectionDetailPage({ collection }: CollectionDetailPageProps) {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />

      <section className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-[#9a7156]">Collection</div>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#2c1c14] sm:text-4xl">{collection.title}</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6f4d2f]">{collection.description}</p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {collection.products.map((product) => {
            const salePrice = product.variants[0]?.salePrice ?? product.priceFrom;
            const regularPrice = product.variants[0]?.regularPrice ?? product.regularFrom;

            return (
              <article key={product.slug} className="group">
                <Link href={`/products/${product.slug}`} className="block">
                  <div className="relative overflow-hidden rounded-[1.8rem] bg-[#f3d3a8] p-3 shadow-[0_18px_50px_rgba(68,42,26,0.08)]">
                    <button
                      type="button"
                      aria-label="Wishlist"
                      className="absolute right-3 top-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#8a6341]/85 text-[#5a3419] backdrop-blur"
                    >
                      <HeartIcon className="h-6 w-6" />
                    </button>

                    <div className="relative flex h-[260px] items-center justify-center">
                      <Image src={product.images[0]} alt={product.title} fill className="object-contain p-3" />
                    </div>

                    <div className="absolute bottom-3 left-3 rounded-lg bg-[#2ea55a] px-4 py-2 text-sm font-medium text-white shadow-md">
                      Sale
                    </div>
                  </div>
                </Link>

                <div className="px-1 pt-4">
                  <h2 className="text-[1.15rem] font-semibold leading-7 tracking-[0.03em] text-[#5a3419]">
                    {product.title}
                  </h2>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-[#a0846c]">Maskabutters</div>
                  <div className="mt-3">
                    <ProductStars />
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[#6f4d2f]">
                    <span className="text-sm line-through opacity-70">{`Rs. ${regularPrice.toFixed(2)}`}</span>
                    <span className="text-lg font-medium">{`From Rs. ${salePrice.toFixed(2)}`}</span>
                  </div>
                  <div className="mt-2 text-sm text-[#6f4d2f]">size: 300g</div>

                  <div className="mt-4 flex gap-2">
                    {product.variants.map((variant, index) => (
                      <span
                        key={variant.label}
                        className={`rounded-lg border px-3 py-2 text-sm ${
                          index === 0 ? 'border-[#5a3419] bg-[#5a3419] text-white' : 'border-[#2f241d] bg-white text-[#2f241d]'
                        }`}
                      >
                        {variant.label}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/products/${product.slug}`}
                    className="mt-8 flex h-14 items-center justify-center rounded-[0.9rem] border border-[#6f4d2f] bg-white text-lg font-normal text-[#6f4d2f] transition hover:bg-[#fff8f1]"
                  >
                    Buy Now
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
