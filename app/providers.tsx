'use client';

import { SessionProvider } from 'next-auth/react';
import type { ReactNode } from 'react';
import { ExtensionErrorGuard } from '@/components/extension-error-guard';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <ExtensionErrorGuard />
      {children}
    </SessionProvider>
  );
}
