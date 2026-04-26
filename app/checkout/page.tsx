'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import {
  ArrowLeft,
  Check,
  ShieldCheck,
  Truck,
  CreditCard,
  Smartphone,
  Banknote,
  Lock,
  Loader2,
} from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { useCartStore } from '@/hooks/useCartStore';

/* ------------------------------------------------------------------ */
/*  Stripe setup                                                       */
/* ------------------------------------------------------------------ */
const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const HAS_REAL_STRIPE = !!PUBLISHABLE_KEY && !PUBLISHABLE_KEY.includes('mock');
const stripePromise = HAS_REAL_STRIPE ? loadStripe(PUBLISHABLE_KEY) : null;

/* ------------------------------------------------------------------ */
/*  Real Stripe checkout form                                          */
/* ------------------------------------------------------------------ */
function StripeCheckoutForm({ total }: { total: number }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const clearCart = useCartStore((s) => s.clearCart);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsLoading(true);
    setMessage('');

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/checkout/success`,
      },
      redirect: 'if_required',
    });

    if (error) {
      setMessage(error.message || 'Payment failed. Please try again.');
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      setMessage('Payment successful!');
      clearCart();
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="rounded-[1.5rem] border border-[#e9ddd2] bg-white p-6 shadow-[0_12px_32px_rgba(59,35,22,0.06)]">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f8efe7]">
            <CreditCard className="h-5 w-5 text-[#9d531c]" />
          </div>
          <div>
            <h3 className="font-semibold text-[#1f1612]">Payment Details</h3>
            <p className="text-xs text-[#8a7368]">All transactions are secure and encrypted</p>
          </div>
        </div>
        <div className="mt-5">
          <PaymentElement
            options={{
              layout: { type: 'tabs', defaultCollapsed: false },
            }}
          />
        </div>
      </div>

      {message && (
        <div
          className={`rounded-[1.25rem] p-4 text-sm ${
            message.includes('success')
              ? 'bg-[#f0fdf4] text-[#15803d]'
              : 'bg-[#fef2f2] text-[#dc2626]'
          }`}
        >
          {message}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || isLoading}
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#221713] py-4 text-sm font-semibold text-white transition hover:bg-[#37241c] disabled:opacity-50"
      >
        {isLoading ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <>
            <ShieldCheck className="h-4 w-4" />
            Pay Rs. {total.toFixed(1)}
          </>
        )}
      </button>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/*  Demo payment form (no Stripe keys)                                 */
/* ------------------------------------------------------------------ */
type PaymentMethod = 'card' | 'upi' | 'cod';

function DemoCheckoutForm({ total }: { total: number }) {
  const router = useRouter();
  const clearCart = useCartStore((s) => s.clearCart);

  const [method, setMethod] = useState<PaymentMethod>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [upiId, setUpiId] = useState('');
  const [name, setName] = useState('');

  const formatCard = (v: string) => {
    const digits = v.replace(/\D/g, '').slice(0, 16);
    return digits.replace(/(.{4})/g, '$1 ').trim();
  };

  const formatExpiry = (v: string) => {
    const digits = v.replace(/\D/g, '').slice(0, 4);
    if (digits.length > 2) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
    return digits;
  };

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate network delay
    await new Promise((r) => setTimeout(r, 2000));
    clearCart();
    router.push('/checkout/success');
  };

  const canSubmit =
    name.trim().length > 2 &&
    ((method === 'card' && cardNumber.replace(/\s/g, '').length >= 16 && expiry.length === 5 && cvv.length >= 3) ||
      (method === 'upi' && upiId.includes('@')) ||
      method === 'cod');

  return (
    <form onSubmit={handlePay} className="space-y-6">
      {/* Method selector */}
      <div className="rounded-[1.5rem] border border-[#e9ddd2] bg-white p-6 shadow-[0_12px_32px_rgba(59,35,22,0.06)]">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f8efe7]">
            <CreditCard className="h-5 w-5 text-[#9d531c]" />
          </div>
          <div>
            <h3 className="font-semibold text-[#1f1612]">Payment Method</h3>
            <p className="text-xs text-[#8a7368]">Choose how you want to pay</p>
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            { id: 'card' as PaymentMethod, label: 'Card', icon: CreditCard },
            { id: 'upi' as PaymentMethod, label: 'UPI', icon: Smartphone },
            { id: 'cod' as PaymentMethod, label: 'Cash on Delivery', icon: Banknote },
          ].map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setMethod(m.id)}
              className={`flex flex-col items-center gap-2 rounded-[1.25rem] border p-4 transition ${
                method === m.id
                  ? 'border-[#9d531c] bg-[#fff8f1] text-[#9d531c]'
                  : 'border-[#e9ddd2] bg-white text-[#6a5448] hover:bg-[#faf5ef]'
              }`}
            >
              <m.icon className="h-6 w-6" />
              <span className="text-sm font-medium">{m.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Card form */}
      {method === 'card' && (
        <div className="rounded-[1.5rem] border border-[#e9ddd2] bg-white p-6 shadow-[0_12px_32px_rgba(59,35,22,0.06)]">
          <div className="flex items-center gap-2 text-sm text-[#8a7368]">
            <Lock className="h-3.5 w-3.5" />
            Your card details are secure and encrypted
          </div>

          <div className="mt-5 space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-[#1f1612]">Name on card</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Rahul Sharma"
                className="w-full rounded-xl border border-[#dfd2c6] bg-[#faf5ef] px-4 py-3 text-sm text-[#1f1612] outline-none transition focus:border-[#9d531c] focus:ring-2 focus:ring-[#9d531c]/20"
                required
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-[#1f1612]">Card number</label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(formatCard(e.target.value))}
                placeholder="4242 4242 4242 4242"
                className="w-full rounded-xl border border-[#dfd2c6] bg-[#faf5ef] px-4 py-3 text-sm text-[#1f1612] outline-none transition focus:border-[#9d531c] focus:ring-2 focus:ring-[#9d531c]/20"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#1f1612]">Expiry</label>
                <input
                  type="text"
                  value={expiry}
                  onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                  placeholder="MM/YY"
                  className="w-full rounded-xl border border-[#dfd2c6] bg-[#faf5ef] px-4 py-3 text-sm text-[#1f1612] outline-none transition focus:border-[#9d531c] focus:ring-2 focus:ring-[#9d531c]/20"
                  required
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#1f1612]">CVV</label>
                <input
                  type="password"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
                  placeholder="123"
                  className="w-full rounded-xl border border-[#dfd2c6] bg-[#faf5ef] px-4 py-3 text-sm text-[#1f1612] outline-none transition focus:border-[#9d531c] focus:ring-2 focus:ring-[#9d531c]/20"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* UPI form */}
      {method === 'upi' && (
        <div className="rounded-[1.5rem] border border-[#e9ddd2] bg-white p-6 shadow-[0_12px_32px_rgba(59,35,22,0.06)]">
          <div className="space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-[#1f1612]">UPI ID</label>
              <input
                type="text"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                placeholder="yourname@upi"
                className="w-full rounded-xl border border-[#dfd2c6] bg-[#faf5ef] px-4 py-3 text-sm text-[#1f1612] outline-none transition focus:border-[#9d531c] focus:ring-2 focus:ring-[#9d531c]/20"
                required
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-[#1f1612]">Full name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Rahul Sharma"
                className="w-full rounded-xl border border-[#dfd2c6] bg-[#faf5ef] px-4 py-3 text-sm text-[#1f1612] outline-none transition focus:border-[#9d531c] focus:ring-2 focus:ring-[#9d531c]/20"
                required
              />
            </div>
          </div>
        </div>
      )}

      {/* COD note */}
      {method === 'cod' && (
        <div className="rounded-[1.5rem] border border-[#e9ddd2] bg-[#fff8f1] p-6 shadow-[0_12px_32px_rgba(59,35,22,0.06)]">
          <div className="flex items-start gap-3">
            <Truck className="mt-0.5 h-5 w-5 text-[#9d531c]" />
            <div>
              <h4 className="font-semibold text-[#1f1612]">Cash on Delivery</h4>
              <p className="mt-1 text-sm text-[#6a5448]">
                Pay Rs. {total.toFixed(1)} when your order arrives. A small COD fee of Rs. 30 may apply.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Pay button */}
      <button
        type="submit"
        disabled={!canSubmit || isProcessing}
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#221713] py-4 text-sm font-semibold text-white transition hover:bg-[#37241c] disabled:opacity-50"
      >
        {isProcessing ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Processing payment…
          </>
        ) : (
          <>
            <ShieldCheck className="h-4 w-4" />
            {method === 'cod' ? 'Place Order' : `Pay Rs. ${total.toFixed(1)}`}
          </>
        )}
      </button>

      <div className="flex items-center justify-center gap-2 text-xs text-[#8a7368]">
        <Lock className="h-3.5 w-3.5" />
        Demo mode — no real payment is processed
      </div>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/*  Main checkout page                                                 */
/* ------------------------------------------------------------------ */
export default function CheckoutPage() {
  const { items, getTotalPrice } = useCartStore();
  const [clientSecret, setClientSecret] = useState('');
  const [loading, setLoading] = useState(true);

  const total = getTotalPrice();
  const shipping = total >= 499 ? 0 : 49;
  const grandTotal = total + shipping;

  useEffect(() => {
    if (items.length === 0) {
      setLoading(false);
      return;
    }

    if (HAS_REAL_STRIPE) {
      fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items, email: '', shipping: {} }),
      })
        .then((r) => r.json())
        .then((data) => {
          if (data.clientSecret) setClientSecret(data.clientSecret);
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [items]);

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#fff8f1_0%,_#f5e6d7_40%,_#efe0cf_100%)]">
        <SiteHeader />
        <div className="mx-auto max-w-xl px-4 py-24 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#f8efe7]">
            <Check className="h-8 w-8 text-[#0fbf78]" />
          </div>
          <h1 className="mt-6 text-2xl font-semibold text-[#1f1612]">Your bag is empty</h1>
          <p className="mt-3 text-sm text-[#6a5448]">Add some items before checking out.</p>
          <Link
            href="/products"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#241812] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3a2618]"
          >
            <ArrowLeft className="h-4 w-4" />
            Continue shopping
          </Link>
        </div>
        <SiteFooter />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#fff8f1_0%,_#f5e6d7_40%,_#efe0cf_100%)]">
      <SiteHeader />

      <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/bag"
          className="inline-flex items-center gap-2 text-sm text-[#6a5448] transition hover:text-[#9d531c]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to bag
        </Link>

        <h1 className="mt-6 text-3xl font-semibold text-[#1f1612]">Checkout</h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.45fr]">
          {/* Payment Form */}
          <div>
            {!HAS_REAL_STRIPE && (
              <div className="mb-4 rounded-[1.25rem] bg-[#fff8df] p-4 text-sm text-[#9b4f0d]">
                <strong>Demo mode:</strong> Stripe keys not configured. Using demo payment form.
                Add <code>NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY</code> and <code>STRIPE_SECRET_KEY</code> to your{' '}
                <code>.env.local</code> to enable real payments.
              </div>
            )}

            {loading ? (
              <div className="flex items-center justify-center rounded-[1.5rem] border border-[#e9ddd2] bg-white p-12">
                <Loader2 className="h-6 w-6 animate-spin text-[#9d531c]" />
              </div>
            ) : HAS_REAL_STRIPE && clientSecret ? (
              <Elements
                stripe={stripePromise!}
                options={{
                  clientSecret,
                  appearance: {
                    theme: 'stripe',
                    variables: {
                      colorPrimary: '#221713',
                      colorBackground: '#ffffff',
                      colorText: '#1f1612',
                      colorDanger: '#e11d48',
                      borderRadius: '12px',
                    },
                  },
                }}
              >
                <StripeCheckoutForm total={grandTotal} />
              </Elements>
            ) : (
              <DemoCheckoutForm total={grandTotal} />
            )}
          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-[1.5rem] border border-white/80 bg-white/82 p-6 shadow-[0_18px_40px_rgba(59,35,22,0.08)] backdrop-blur">
            <h2 className="text-lg font-semibold text-[#1f1612]">Order Summary</h2>

            <div className="mt-5 space-y-4">
              {items.map((item) => (
                <div key={`${item.slug}-${item.variant}`} className="flex gap-3">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-[#f8efe7]">
                    <Image src={item.image} alt={item.title} fill className="object-contain p-1" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium text-[#1f1612] truncate">{item.title}</div>
                    <div className="text-xs text-[#8a7368]">
                      {item.variant} · Qty {item.quantity}
                    </div>
                    <div className="text-sm font-semibold text-[#1f1612]">
                      Rs. {(item.salePrice * item.quantity).toFixed(1)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 border-t border-[#e9ddd2] pt-4 space-y-2 text-sm">
              <div className="flex items-center justify-between text-[#6a5448]">
                <span>Subtotal</span>
                <span>Rs. {total.toFixed(1)}</span>
              </div>
              <div className="flex items-center justify-between text-[#6a5448]">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `Rs. ${shipping}`}</span>
              </div>
            </div>

            <div className="mt-3 border-t border-[#e9ddd2] pt-3">
              <div className="flex items-center justify-between text-lg font-semibold text-[#1f1612]">
                <span>Total</span>
                <span>Rs. {grandTotal.toFixed(1)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}

