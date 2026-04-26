import { collectionCatalog, productCatalog } from '@/data/maska';

export function formatINR(value: number) {
  return new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: 2,
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
  }).format(value);
}

export function formatINRCompact(value: number) {
  return `Rs. ${formatINR(value)}`;
}

export function getDiscountPercent(regularPrice: number, salePrice: number) {
  return Math.round(((regularPrice - salePrice) / regularPrice) * 100);
}

export function getProductBySlug(slug: string) {
  return productCatalog.find((product) => product.slug === slug);
}

export function getCollectionBySlug(slug: string) {
  const collection = collectionCatalog.find((item) => item.slug === slug);

  if (!collection) {
    return undefined;
  }

  return {
    ...collection,
    products: collection.productSlugs
      .map((productSlug) => getProductBySlug(productSlug))
      .filter((product): product is NonNullable<typeof product> => Boolean(product)),
  };
}
