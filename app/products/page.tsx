import { ProductsLandingPage } from '@/components/products/products-page';

export default function ProductsRoute({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  return <ProductsLandingPage searchParams={searchParams} />;
}

