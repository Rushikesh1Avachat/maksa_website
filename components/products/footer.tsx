import Link from 'next/link';
import type { CSSProperties } from 'react';
import { FacebookIcon, InstagramIcon, SocialXIcon } from '@/components/ui-icons';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Our Founders', href: '/pages/our-founder' },
  { label: 'Product Journey', href: '/pages/product-journey' },
];

const policies = [
  { label: 'Privacy policy', href: '/policies/privacy-policy' },
  { label: 'Terms of service', href: '/policies/terms-of-service' },
  { label: 'Refund policy', href: '/policies/refund-policy' },
  { label: 'Shipping policy', href: '/policies/shipping-policy' },
];

export function Footer() {
  return (
    <footer className="mt-16 overflow-hidden bg-[#4a2a0f] text-[#e6d8cd]">
      <div className="relative h-12 w-full overflow-hidden">
        <svg className="absolute left-0 top-0 h-full w-full text-[#4a2a0f]" viewBox="0 0 1440 72" preserveAspectRatio="none" aria-hidden="true">
          <path
            fill="currentColor"
            d="M0,18 C70,2 140,2 210,18 C280,34 350,34 420,18 C490,2 560,2 630,18 C700,34 770,34 840,18 C910,2 980,2 1050,18 C1120,34 1190,34 1260,18 C1330,2 1400,2 1440,18 L1440,72 L0,72 Z"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">
        <div className="grid gap-16 md:grid-cols-[1fr_1fr]">
          <div style={{ ['--animation-order' as '--animation-order']: 1 } as CSSProperties}>
            <h2 className="text-[1.9rem] font-semibold tracking-tight text-white">Quick links</h2>
            <ul className="mt-10 space-y-6 text-[1.05rem] text-[#d5c3b4]">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ ['--animation-order' as '--animation-order']: 2 } as CSSProperties}>
            <h2 className="text-[1.9rem] font-semibold tracking-tight text-white">Connect With Us!</h2>
            <div className="mt-10 space-y-8 text-[1.1rem] leading-8 text-[#d5c3b4]">
              <p>+91 6395661727</p>
              <p>info@maskabutters.in</p>
              <p>
                Company Name : Niramish Now Nutrition
                <br />
                <br />
                Facility Address : 438, Transport Nagar, Kota, Rajasthan 324005
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-[1.9rem] font-semibold tracking-tight text-white">Subscribe to our emails</h2>
          <form method="post" action="/contact#ContactFooter" id="ContactFooter" acceptCharset="UTF-8" className="mt-8">
            <div className="flex max-w-[28rem] items-center rounded-xl border border-[#d9c5b8]/70 bg-transparent px-6 py-5 text-[#edded3]">
              <input
                id="NewsletterForm--sections--footer"
                type="email"
                name="contact[email]"
                className="min-w-0 flex-1 bg-transparent text-lg outline-none placeholder:text-[#d9c7bb]"
                placeholder="Email"
                required
              />
              <button type="submit" className="ml-4 text-2xl leading-none text-[#edded3] transition hover:text-white" aria-label="Subscribe">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-4 w-4" viewBox="0 0 14 10">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M8.537.808a.5.5 0 0 1 .817-.162l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 1 1-.708-.708L11.793 5.5H1a.5.5 0 0 1 0-1h10.793L8.646 1.354a.5.5 0 0 1-.109-.546"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>

        <ul className="mt-12 flex items-center justify-end gap-8" role="list">
          <li>
            <Link href="https://www.facebook.com/maskapeanutbutter-102189981602533/" className="text-white transition hover:opacity-80">
              <FacebookIcon className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
          </li>
          <li>
            <Link href="https://instagram.com/maskapeanutbutter?utm_medium=copy_link" className="text-white transition hover:opacity-80">
              <InstagramIcon className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/maskapeanutbutr?s=09" className="text-white transition hover:opacity-80">
              <SocialXIcon className="h-6 w-6" />
              <span className="sr-only">X (Twitter)</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="mt-12 border-t border-[#6d421d]">
        <div className="mx-auto max-w-7xl px-4 pb-8 pt-4 sm:px-6 lg:px-8">
          <div className="text-[#dbc9bc]">
            <small>
              © 2026, <Link href="/" className="transition hover:text-white">Maskabutters</Link>
            </small>
            <small className="ml-3">
              <Link href="https://devicedoctorindia.in/" className="transition hover:text-white">
                Developed by Device Doctor India
              </Link>
            </small>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
              {policies.map((policy) => (
                <li key={policy.label}>
                  <small>
                    <Link href={policy.href} className="transition hover:text-white">
                      {policy.label}
                    </Link>
                  </small>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
