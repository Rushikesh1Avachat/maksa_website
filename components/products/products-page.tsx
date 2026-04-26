'use client';

import { useMemo, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, Heart, ShoppingBag, Sparkles, Star, Search } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { SectionHeading } from '@/components/section-heading';
import { StaticReviewShowcase } from '@/components/products/static-review-showcase';
import { productCatalog } from '@/data/maska';
import { useCartStore } from '@/hooks/useCartStore';
import { useWishlistStore } from '@/hooks/useWishlistStore';

const stats = [
  { label: 'Product formats', value: '08' },
  { label: 'Best seller rating', value: '4.8/5' },
  { label: 'Repeat purchase rate', value: '71%' },
];

const highlights = [
  'Clean-label jars for breakfast and spoon snacking',
  'Giftable bundles with a more premium shelf story',
  'Simple product detail pages that keep the buying flow easy',
];

function PriceBlock({ salePrice, regularPrice }: { salePrice: number; regularPrice: number }) {
  return (
    <div className="flex items-end gap-3">
      <span className="text-2xl font-semibold text-[#241812]">Rs. {salePrice.toFixed(salePrice % 1 === 0 ? 0 : 1)}</span>
      <span className="pb-1 text-sm text-[#8e7568] line-through">Rs. {regularPrice}</span>
    </div>
  );
}

function ProductCard({ product }: { product: typeof productCatalog[0] }) {
  const addItem = useCartStore((s) => s.addItem);
  const { toggleItem, isInWishlist } = useWishlistStore();
  const inWishlist = isInWishlist(product.slug);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      slug: product.slug,
      title: product.title,
      shortTitle: product.shortTitle,
      image: product.images[0],
      variant: '500g',
      salePrice: product.variants[1].salePrice,
      regularPrice: product.variants[1].regularPrice,
      quantity: 1,
    });
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleItem({
      slug: product.slug,
      title: product.title,
      shortTitle: product.shortTitle,
      image: product.images[0],
      salePrice: product.variants[1].salePrice,
      regularPrice: product.variants[1].regularPrice,
      category: product.category,
    });
  };

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/80 bg-white/82 shadow-[0_24px_60px_rgba(68,42,26,0.08)] backdrop-blur transition hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden bg-[linear-gradient(145deg,#f4ddc1_0%,#fff8f0_50%,#edd0b1_100%)]">
        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          className="object-contain p-6 transition duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-[#1f1612]/88 px-3 py-1 text-xs font-semibold text-white">
          {product.category}
        </div>
        <button
          type="button"
          onClick={handleWishlist}
          className={`absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full transition ${
            inWishlist
              ? 'bg-[#e11d48] text-white'
              : 'bg-white/80 text-[#6f4a32] hover:bg-white'
          }`}
        >
          <Heart className={`h-4 w-4 ${inWishlist ? 'fill-current' : ''}`} />
        </button>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-[#1f1612]">{product.title}</h2>
            <p className="mt-2 text-sm leading-6 text-[#6a5448]">{product.description}</p>
          </div>
        </div>

        <div className="mt-5">
          <PriceBlock salePrice={product.priceFrom} regularPrice={product.regularFrom} />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {product.variants.map((variant) => (
            <span
              key={variant.label}
              className="rounded-full border border-[#eadbcc] bg-[#fffaf6] px-3 py-1 text-xs font-medium text-[#785948]"
            >
              {variant.label}
            </span>
          ))}
        </div>

        <div className="mt-5 space-y-2">
          {product.benefits.slice(0, 2).map((benefit) => (
            <div key={benefit} className="flex items-start gap-2 text-sm leading-6 text-[#5f4d43]">
              <Sparkles className="mt-1 h-4 w-4 shrink-0 text-[#c57f36]" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-3">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-[#241812] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#3a2618]"
          >
            View product
            <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={handleQuickAdd}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#eadbcc] bg-[#fffaf6] text-[#6f4a32] transition hover:bg-[#f5e6d7]"
            aria-label={`Add ${product.title} to bag`}
          >
            <ShoppingBag className="h-5 w-5" />
          </button>
        </div>
      </div>
    </article>
  );
}

export function ProductsLandingPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const params = use(searchParams);
  const query = params.q?.toLowerCase() || '';

  const filteredProducts = useMemo(() => {
    if (!query) return productCatalog;
    return productCatalog.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.shortTitle.toLowerCase().includes(query)
    );
  }, [query]);

  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#fff8f1_0%,_#f5e6d7_40%,_#efe0cf_100%)]">
      <SiteHeader />

      <section className="relative mx-auto max-w-[1600px] px-4 pb-8 pt-10 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_top,_rgba(196,136,70,0.18),_transparent_58%)]" />

        <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-[linear-gradient(135deg,#2b1a12_0%,#8a4d24_48%,#f5c78a_100%)] px-6 py-8 text-white shadow-[0_30px_80px_rgba(71,40,20,0.18)] sm:px-10 sm:py-10 lg:px-12 lg:py-12">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
                {query ? `Search: "${query}"` : 'Maska products'}
              </div>

              <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                {query
                  ? `${filteredProducts.length} result${filteredProducts.length !== 1 ? 's' : ''} found`
                  : 'Static products page designed for fast scanning and stronger product trust.'}
              </h1>

              {!query && (
                <>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-white/82 sm:text-lg">
                    This page keeps the Maska look and feel, then adds a product-first layout with a clean catalog, visible price cues, and three static review layouts inspired by the reference design.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {highlights.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm text-white/86 backdrop-blur"
                      >
                        <BadgeCheck className="h-4 w-4" />
                        {item}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.5rem] border border-white/15 bg-white/10 p-5 backdrop-blur"
                >
                  <div className="text-3xl font-semibold">{item.value}</div>
                  <div className="mt-1 text-sm text-white/76">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 py-10 sm:px-6 lg:px-8">
        {query && (
          <div className="mb-6 flex items-center gap-3">
            <Search className="h-5 w-5 text-[#9a7156]" />
            <span className="text-sm text-[#6a5448]">
              Showing results for <strong className="text-[#1f1612]">"{query}"</strong>
            </span>
          </div>
        )}

        {filteredProducts.length === 0 ? (
          <div className="rounded-[2rem] border border-white/80 bg-white/75 p-12 text-center shadow-[0_28px_70px_rgba(68,42,26,0.08)] backdrop-blur">
            <Search className="mx-auto h-10 w-10 text-[#9a7156]" />
            <h2 className="mt-4 text-xl font-semibold text-[#1f1612]">No products found</h2>
            <p className="mt-2 text-sm text-[#6a5448]">Try a different search term.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        )}
      </section>

      {!query && <StaticReviewShowcase />}

      {!query && (
        <section className="mx-auto max-w-[1600px] px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] bg-[#201612] px-6 py-7 text-white shadow-[0_24px_60px_rgba(35,21,14,0.15)] sm:px-8 sm:py-8">
              <div className="text-xs uppercase tracking-[0.35em] text-white/60">Why this page works</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Product discovery stays static, simple, and easy to scan.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/74 sm:text-base">
                This rewrite removes the older collection-only landing and replaces it with a dedicated products experience that feels closer to a storefront while staying fully static and brand aligned.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {['Fast load', 'Static layout', 'Clear CTAs', 'Three review styles'].map((tag) => (
                  <span key={tag} className="rounded-full border border-white/12 bg-white/8 px-3 py-2 text-sm text-white/82">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/80 bg-white/84 p-6 shadow-[0_24px_60px_rgba(68,42,26,0.08)] sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f2d5be] text-[#6f4321]">
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#201613]">Reference inspired</div>
                  <div className="text-sm text-[#725b50]">Dark hero, strong quote card, photo-led proof</div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {productCatalog.slice(0, 3).map((product, index) => (
                  <div
                    key={product.slug}
                    className={`overflow-hidden rounded-[1.5rem] border ${index === 0 ? 'border-[#1f1612]/12 bg-[#fff7ef]' : 'border-[#eadbcc] bg-white'}`}
                  >
                    <div className="relative aspect-[4/3] bg-[linear-gradient(145deg,#f4ddc1_0%,#fffaf5_100%)]">
                      <Image src={product.images[0]} alt={product.shortTitle} fill className="object-contain p-4" />
                    </div>
                    <div className="p-4">
                      <div className="text-sm font-semibold text-[#201613]">{product.shortTitle}</div>
                      <div className="mt-1 text-xs uppercase tracking-[0.25em] text-[#9a7156]">{product.category}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </main>
  );
}

