'use client';

import Image from 'next/image';
import { useState } from 'react';
import { signIn } from 'next-auth/react';

type ProfileSignInCardProps = {
  callbackUrl: string;
};

export function ProfileSignInCard({ callbackUrl }: ProfileSignInCardProps) {
  const [email, setEmail] = useState('');
  const [newsOptIn, setNewsOptIn] = useState(false);

  const handleContinue = () => {
    void signIn('google', { callbackUrl });
  };

  return (
    <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-5xl items-start justify-center px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-full max-w-[560px] rounded-[1.75rem] bg-white px-6 py-10 text-left shadow-[0_24px_60px_rgba(68,42,26,0.10)] sm:px-10 sm:py-12">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-[#fff7ef]">
            <Image src="/assets/maska-logo.svg" alt="Maska" width={102} height={48} className="h-auto w-12" />
          </div>
          <div className="mt-8 text-[1.5rem] font-semibold tracking-tight text-[#1f1612]">Maskabutters</div>
        </div>

        <div className="mt-8">
          <h1 className="text-[1.9rem] font-semibold tracking-tight text-[#1f1612]">Sign in</h1>
          <p className="mt-2 text-[1rem] leading-6 text-[#685246]">Sign in or create an account</p>
        </div>

        <button
          type="button"
          onClick={handleContinue}
          className="mt-6 inline-flex h-14 w-full items-center justify-center rounded-[0.95rem] bg-[#5b3ff2] px-6 text-base font-semibold text-white shadow-[0_18px_40px_rgba(91,63,242,0.28)] transition hover:bg-[#4d33dc]"
        >
          Continue with shop
        </button>

        <div className="mt-7 flex items-center gap-4">
          <div className="h-px flex-1 bg-[#e9ddd0]" />
          <span className="text-sm text-[#a18773]">or</span>
          <div className="h-px flex-1 bg-[#e9ddd0]" />
        </div>

        <form
          className="mt-6"
          onSubmit={(event) => {
            event.preventDefault();
            void signIn('google', { callbackUrl });
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            className="h-14 w-full rounded-[0.95rem] border-2 border-[#1a66f7] px-4 text-[1rem] text-[#1f1612] outline-none placeholder:text-[#8f8f8f]"
            aria-label="Email"
          />

          <button
            type="submit"
            className="mt-4 inline-flex h-14 w-full items-center justify-center rounded-[0.95rem] bg-[#0b57d0] px-6 text-base font-semibold text-white transition hover:bg-[#084db6]"
          >
            Continue
          </button>

          <label className="mt-4 flex items-center gap-3 text-sm text-[#1f1612]">
            <input
              type="checkbox"
              checked={newsOptIn}
              onChange={(event) => setNewsOptIn(event.target.checked)}
              className="h-5 w-5 rounded border-[#d6d6d6] text-[#0b57d0]"
            />
            <span>Email me with news and offers</span>
          </label>
        </form>

        <div className="mt-6 text-center text-xs leading-6 text-[#8b8b8b]">
          By continuing, you agree to our Terms of service
        </div>
      </div>
    </div>
  );
}
