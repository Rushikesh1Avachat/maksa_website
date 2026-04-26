import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      {/* Promo Bar */}
      <div className="w-full bg-[#4b2c0d] text-white text-center py-2 text-sm font-semibold">
        GET 5% OFF BY USING COUPON : HEALTHY5
      </div>
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-8">
          <Link href="/">
            <span className="text-2xl font-bold tracking-wide text-[#4b2c0d]">Maskabutters</span>
          </Link>
          <div className="hidden md:flex gap-6 text-[#4b2c0d] font-medium">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/our-founders">Our Founders</Link>
            <Link href="/product-journey">Product Journey</Link>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Link href="/login" className="text-[#4b2c0d] font-medium hover:underline">Log in</Link>
          <Link href="/wishlist" className="text-[#4b2c0d] font-medium hover:underline">Wishlist</Link>
          <Link href="/cart" className="text-[#4b2c0d] font-medium hover:underline">Cart</Link>
        </div>
      </nav>
    </header>
  );
}
