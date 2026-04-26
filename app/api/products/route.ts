import { NextResponse } from 'next/server';
import { productCatalog } from '@/data/maska';

export function GET() {
  return NextResponse.json({ products: productCatalog });
}

