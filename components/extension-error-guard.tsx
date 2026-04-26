'use client';

import { useEffect } from 'react';

const META_MASK_PATTERNS = [
  'Failed to connect to MetaMask',
  'MetaMask extension not found',
  'chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn',
];

function shouldIgnoreMetaMaskError(reason: unknown) {
  if (typeof reason === 'string') {
    return META_MASK_PATTERNS.some((pattern) => reason.includes(pattern));
  }

  if (reason instanceof Error) {
    return META_MASK_PATTERNS.some((pattern) => reason.message.includes(pattern));
  }

  if (typeof reason === 'object' && reason !== null) {
    const value = JSON.stringify(reason);
    return META_MASK_PATTERNS.some((pattern) => value.includes(pattern));
  }

  return false;
}

export function ExtensionErrorGuard() {
  useEffect(() => {
    const onUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (shouldIgnoreMetaMaskError(event.reason)) {
        event.preventDefault();
      }
    };

    const onError = (event: ErrorEvent) => {
      const source = event.filename ?? '';
      const message = event.message ?? '';

      if (
        META_MASK_PATTERNS.some((pattern) => source.includes(pattern) || message.includes(pattern))
      ) {
        event.preventDefault();
      }
    };

    window.addEventListener('unhandledrejection', onUnhandledRejection);
    window.addEventListener('error', onError);

    return () => {
      window.removeEventListener('unhandledrejection', onUnhandledRejection);
      window.removeEventListener('error', onError);
    };
  }, []);

  return null;
}
