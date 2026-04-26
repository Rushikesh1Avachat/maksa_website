import { notFound } from 'next/navigation';
import { productCatalog } from '@/data/maska';
import { getProductBySlug } from '@/utils/maska';
import { ProductPage } from '@/components/product/product-page';

export const dynamicParams = false;

export function generateStaticParams() {
  return productCatalog.map((product: { slug: string }) => ({ slug: product.slug }));
}

export default async function ProductRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductPage product={product} />;
}

