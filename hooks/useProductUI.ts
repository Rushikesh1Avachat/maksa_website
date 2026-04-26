'use client';

import { useState } from 'react';

export function useProductUI() {
  const [selectedVariant, setSelectedVariant] = useState<'300g' | '500g' | '1kg'>('500g');
  const [selectedTone, setSelectedTone] = useState<'cocoa' | 'almond' | 'honey' | 'mint'>('cocoa');
  const [selectedReviewMode, setSelectedReviewMode] = useState<'pulse' | 'mosaic' | 'conversation'>('pulse');
  const [quantity, setQuantity] = useState(1);

  return {
    quantity,
    selectedTone,
    selectedVariant,
    selectedReviewMode,
    setQuantity,
    setSelectedTone,
    setSelectedVariant,
    setSelectedReviewMode,
  };
}

