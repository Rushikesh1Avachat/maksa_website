import { NextRequest, NextResponse } from 'next/server';

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || '';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { items, email, shipping } = body;

    const totalAmount = items.reduce(
      (sum: number, item: { salePrice: number; quantity: number }) =>
        sum + Math.round(item.salePrice * item.quantity * 100),
      0
    );

    // If Stripe key is not configured, return a mock success response for demo
    if (!STRIPE_SECRET_KEY) {
      return NextResponse.json({
        clientSecret: 'mock_client_secret_' + Date.now(),
        publishableKey: 'pk_test_mock',
        mock: true,
      });
    }

    const response = await fetch('https://api.stripe.com/v1/payment_intents', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        amount: totalAmount.toString(),
        currency: 'inr',
        automatic_payment_methods: JSON.stringify({ enabled: true }),
        metadata: JSON.stringify({
          email: email || '',
          items: JSON.stringify(items.map((i: { title: string; quantity: number }) => `${i.title} x${i.quantity}`)),
        }),
      }).toString(),
    });

    const paymentIntent = await response.json();

    if (paymentIntent.error) {
      return NextResponse.json(
        { error: paymentIntent.error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '',
    });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create payment intent' },
      { status: 500 }
    );
  }
}

