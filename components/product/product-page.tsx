'use client';

import { useMemo } from 'react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ProductGallery } from '@/components/product/product-gallery';
import { ProductPurchasePanel } from '@/components/product/product-purchase-panel';
import { ProductDetails } from '@/components/product/product-details';
import { CustomerReviewShowcase } from '@/components/product/customer-review-showcase';
import { FaqSection } from '@/components/product/faq-section';
import { useProductUI } from '@/hooks/useProductUI';
import type { ProductItem } from '@/data/maska';

type ProductPageProps = {
  product: ProductItem;
};

export function ProductPage({ product }: ProductPageProps) {
  const {
    quantity,
    selectedTone,
    selectedVariant,
    setQuantity,
    setSelectedTone,
    setSelectedVariant,
  } = useProductUI();

  const selectedPrice = useMemo(
    () => product.variants.find((variant) => variant.label === selectedVariant) ?? product.variants[1],
    [product.variants, selectedVariant],
  );

  const toneButtons = [
    { key: 'cocoa' as const, label: 'Cocoa', accent: '#d49a6a' },
    { key: 'almond' as const, label: 'Almond', accent: '#f2c88e' },
    { key: 'honey' as const, label: 'Honey', accent: '#ffd38b' },
    { key: 'mint' as const, label: 'Mint', accent: '#a6e1c8' },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-16 h-72 w-72 rounded-full bg-[#d9b08c]/25 blur-3xl" />
        <div className="absolute right-[-7rem] top-40 h-80 w-80 rounded-full bg-[#7c4b35]/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-[#fff4e9]/70 blur-3xl" />
      </div>

      <SiteHeader />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <ProductGallery images={product.images} title={product.shortTitle} />
          <ProductPurchasePanel
            productTitle={product.title}
            shortTitle={product.shortTitle}
            slug={product.slug}
            image={product.images[0]}
            category={product.category}
            price={selectedPrice}
            selectedVariant={selectedVariant}
            quantity={quantity}
            onVariantChange={setSelectedVariant}
            onQuantityChange={setQuantity}
            toneButtons={toneButtons}
            selectedTone={selectedTone}
            onToneChange={setSelectedTone}
          />
        </section>

        <CustomerReviewShowcase
          title={`What Our ${product.category} Lovers Say`}
          reviews={product.reviews}
          mediaCards={product.gallery}
        />

        <ProductDetails
          description={product.description}
          benefits={product.benefits}
          ingredients={product.ingredients}
          features={product.features}
          faqs={product.faqs}
        />

        <FaqSection faqs={product.faqs} />
      </div>

      <SiteFooter />
    </main>
  );
}
