'use client';

import { signOut } from 'next-auth/react';

export function LogoutButton() {
  return (
    <button
      type="button"
      onClick={() => signOut({ callbackUrl: '/' })}
      className="rounded-full bg-[#1f1612] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#3a261d]"
    >
      Logout
    </button>
  );
}
