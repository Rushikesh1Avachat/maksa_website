export type ProductVariant = {
  label: '300g' | '500g' | '1kg';
  salePrice: number;
  regularPrice: number;
};

export type ProductReview = {
  name: string;
  location: string;
  rating: number;
  title: string;
  text: string;
  helpful: number;
  badge: string;
  avatar: string;
  time: string;
};

export type ProductFaq = {
  question: string;
  answer: string;
};

export type ProductItem = {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  priceFrom: number;
  regularFrom: number;
  status: 'Sale' | 'Sold out';
  description: string;
  benefits: string[];
  ingredients: string[];
  features: string[];
  variants: ProductVariant[];
  images: string[];
  gallery: Array<{ title: string; caption: string; src: string }>;
  reviews: ProductReview[];
  faqs: ProductFaq[];
};

export type CollectionItem = {
  slug: string;
  label: string;
  title: string;
  description: string;
  accent: string;
  image: string;
  productSlugs: string[];
};

export const brandHighlights = [
  'Real Ingredients',
  'No Hydrogenated Oils',
  '10G Protein Per Serving',
  'Clean Label',
  'High Protein',
  'Healthy Fats',
];

const sharedReviews: ProductReview[] = [
  {
    name: 'Meera Shah',
    location: 'Mumbai',
    rating: 5,
    title: 'Smooth taste, premium feel',
    text: 'The brand feels thoughtful from packaging to texture. It is the kind of snack I reach for when I want something simple but special.',
    helpful: 42,
    badge: 'Verified buyer',
    avatar: 'MS',
    time: '2 hours ago',
  },
  {
    name: 'Arjun Das',
    location: 'Bengaluru',
    rating: 5,
    title: 'Very easy to keep in rotation',
    text: 'The product works for breakfast, post-workout, and little evening cravings. It does not feel too heavy and still tastes satisfying.',
    helpful: 31,
    badge: 'Top reviewer',
    avatar: 'AD',
    time: 'Yesterday',
  },
  {
    name: 'Ira Kapoor',
    location: 'Delhi',
    rating: 4,
    title: 'Good balance of taste and value',
    text: 'There is a clear premium direction here. The flavor is bold enough to stand out, but the product still feels daily-use friendly.',
    helpful: 28,
    badge: 'Verified buyer',
    avatar: 'IK',
    time: '3 days ago',
  },
  {
    name: 'Kunal Mehta',
    location: 'Pune',
    rating: 5,
    title: 'Family favorite very quickly',
    text: 'Once opened, this product does not last long at home. Everyone finds a different use for it and that makes it easy to repurchase.',
    helpful: 56,
    badge: 'Repeat buyer',
    avatar: 'KM',
    time: '4 days ago',
  },
];

const sharedFaqs: ProductFaq[] = [
  {
    question: 'How should I store Maska products?',
    answer:
      'Keep them in a cool, dry place away from direct sunlight. Refrigeration is optional for most items, and a clean spoon helps preserve freshness.',
  },
  {
    question: 'What makes Maska products unique?',
    answer:
      'Maska focuses on clean-label snacks made from natural ingredients, with a strong emphasis on taste, nutrition, and shelf appeal.',
  },
  {
    question: 'How long does delivery take?',
    answer:
      'Standard delivery is usually 2 to 3 days in major cities and 4 to 6 days for other regions.',
  },
];

function makeProduct(product: ProductItem): ProductItem {
  return product;
}

export const productCatalog: ProductItem[] = [
  makeProduct({
    slug: 'maska-choco-crunch-peanut-butter',
    title: 'Choco - Crunch Peanut Butter',
    shortTitle: 'Choco - Crunch',
    category: 'Peanut Butter',
    priceFrom: 322.2,
    regularFrom: 379,
    status: 'Sale',
    description:
      'A crunchy chocolate peanut butter blend with a playful texture and a rich, spoon-friendly finish.',
    benefits: [
      'Crunchy chocolate note with a peanut base',
      'Great for toast, desserts, and spoon snacking',
      'Built around a clean pantry feel',
    ],
    ingredients: ['Roasted Peanuts', 'Cocoa', 'Crispy Bits', 'Pink Salt'],
    features: [
      'Crunch-led texture with a chocolate coating feel.',
      'No trans fat, no hydrogenated oils, gluten-free.',
      'A sweeter profile for dessert-style snacking.',
      'Works well as a topping or spread.',
    ],
    variants: [
      { label: '300g', salePrice: 322.2, regularPrice: 379 },
      { label: '500g', salePrice: 399, regularPrice: 459 },
      { label: '1kg', salePrice: 749, regularPrice: 829 },
    ],
    images: ['/assets/peanut-choco-crunch.svg', '/assets/maska-toast.svg', '/assets/maska-spoon.svg', '/assets/maska-gift.svg'],
    gallery: [
      { title: 'Crunch jar', caption: 'Textured chocolate', src: '/assets/peanut-choco-crunch.svg' },
      { title: 'Serving idea', caption: 'Dessert friendly', src: '/assets/maska-toast.svg' },
      { title: 'Shelf shot', caption: 'Premium pack', src: '/assets/maska-gift.svg' },
    ],
    reviews: sharedReviews,
    faqs: sharedFaqs,
  }),
  makeProduct({
    slug: 'maska-peanut-butter-chocolate-salvation',
    title: 'Chocolate Salvation Peanut Butter',
    shortTitle: 'Chocolate Salvation',
    category: 'Peanut Butter',
    priceFrom: 322.2,
    regularFrom: 379,
    status: 'Sale',
    description:
      'A rich dark-chocolate peanut butter spread made to feel indulgent while staying aligned with a clean pantry story.',
    benefits: [
      'Chocolate-forward flavor with a smooth peanut base',
      'Built for toast, shakes, desserts, and spoonful snacking',
      'Clean-label positioning with no hydrogenated oils',
    ],
    ingredients: ['Roasted Peanuts', 'Dark Chocolate', 'Brown Sugar', 'Pink Salt'],
    features: [
      'Peanut butter made from premium quality peanuts.',
      'Made with dark chocolate and a sinful, tempting finish.',
      'Zero cholesterol, no trans fat, no hydrogenated oils, gluten-free.',
      'No added artificial colours or preservatives.',
    ],
    variants: [
      { label: '300g', salePrice: 199, regularPrice: 249 },
      { label: '500g', salePrice: 322.2, regularPrice: 379 },
      { label: '1kg', salePrice: 598, regularPrice: 679 },
    ],
    images: ['/assets/maska-hero-jar.svg', '/assets/maska-toast.svg', '/assets/maska-spoon.svg', '/assets/maska-gift.svg'],
    gallery: [
      { title: 'Breakfast toast', caption: 'Jar in the wild', src: '/assets/maska-toast.svg' },
      { title: 'Desk snack', caption: 'Midday spoonful', src: '/assets/maska-spoon.svg' },
      { title: 'Gift shot', caption: 'Premium shelf presence', src: '/assets/maska-gift.svg' },
    ],
    reviews: sharedReviews,
    faqs: sharedFaqs,
  }),
  makeProduct({
    slug: 'maska-aww-rio-peanut-butter-oreo',
    title: 'Aww-Rio Peanut Butter (Oreo)',
    shortTitle: 'Aww-Rio',
    category: 'Peanut Butter',
    priceFrom: 339.2,
    regularFrom: 399,
    status: 'Sale',
    description:
      'A cookie-inspired peanut butter blend with cocoa and biscuit notes for a dessert-like pantry moment.',
    benefits: [
      'Cookie-style profile with a rich spreadable texture',
      'Great for waffles, toast, and spoon snacking',
      'A playful option for customers who like dessert flavors',
    ],
    ingredients: ['Roasted Peanuts', 'Cocoa', 'Cookie Crumbs', 'Pink Salt'],
    features: [
      'Dessert-forward peanut butter with a creamy body.',
      'No hydrogenated oils and no trans fat.',
      'A playful flavor for family snacking.',
      'Pairs well with milkshakes and baked goods.',
    ],
    variants: [
      { label: '300g', salePrice: 339.2, regularPrice: 399 },
      { label: '500g', salePrice: 459, regularPrice: 519 },
      { label: '1kg', salePrice: 829, regularPrice: 899 },
    ],
    images: ['/assets/peanut-aww-rio.svg', '/assets/maska-toast.svg', '/assets/maska-spoon.svg', '/assets/maska-gift.svg'],
    gallery: [
      { title: 'Oreo jar', caption: 'Cookie notes', src: '/assets/peanut-aww-rio.svg' },
      { title: 'Toast idea', caption: 'Dessert spread', src: '/assets/maska-toast.svg' },
      { title: 'Shelf shot', caption: 'Playful pantry product', src: '/assets/maska-gift.svg' },
    ],
    reviews: sharedReviews,
    faqs: sharedFaqs,
  }),
  makeProduct({
    slug: 'maska-unsweetened-smooth-peanut-butter',
    title: 'Unsweetened Smooth Peanut Butter',
    shortTitle: 'Unsweetened Smooth',
    category: 'Peanut Butter',
    priceFrom: 288.2,
    regularFrom: 339,
    status: 'Sale',
    description:
      'A cleaner, unsweetened smooth peanut butter for customers who want the classic peanut profile with less sweetness.',
    benefits: [
      'Classic peanut taste with a smoother, cleaner finish',
      'Works for breakfast, cooking, and high-protein snacks',
      'Best for shoppers who want a less sweet profile',
    ],
    ingredients: ['Roasted Peanuts', 'Pink Salt'],
    features: [
      'Simple, unsweetened profile.',
      'Ideal for fitness and everyday cooking.',
      'No trans fat, no hydrogenated oils.',
      'A pantry staple for a cleaner taste.',
    ],
    variants: [
      { label: '300g', salePrice: 288.2, regularPrice: 339 },
      { label: '500g', salePrice: 399, regularPrice: 459 },
      { label: '1kg', salePrice: 749, regularPrice: 829 },
    ],
    images: ['/assets/peanut-unsweetened.svg', '/assets/maska-toast.svg', '/assets/maska-spoon.svg', '/assets/maska-gift.svg'],
    gallery: [
      { title: 'Smooth jar', caption: 'Clean profile', src: '/assets/peanut-unsweetened.svg' },
      { title: 'Breakfast use', caption: 'Simple and versatile', src: '/assets/maska-toast.svg' },
      { title: 'Shelf shot', caption: 'Minimal look', src: '/assets/maska-gift.svg' },
    ],
    reviews: sharedReviews,
    faqs: sharedFaqs,
  }),
  makeProduct({
    slug: 'maska-gift-box-delight',
    title: 'Maska Gift Box Delight',
    shortTitle: 'Gift Box Delight',
    category: 'Gift Boxes',
    priceFrom: 499,
    regularFrom: 599,
    status: 'Sale',
    description:
      'A ready-to-gift snack box pairing peanut butter jars with curated treats for birthdays, celebrations, and corporate gifting.',
    benefits: [
      'Thoughtful gifting format for families and teams',
      'A mix of snack favourites in one premium package',
      'Built to feel festive without losing the clean-label story',
    ],
    ingredients: ['Chocolate Peanut Butter', 'Snack Bars', 'Granola Bites', 'Gift Packaging'],
    features: [
      'Premium gift-ready box presentation.',
      'Ideal for festivals, events, and thank-you packs.',
      'Made with the same brand-first ingredient philosophy.',
      'Reusable packaging with a shelf-worthy look.',
    ],
    variants: [
      { label: '300g', salePrice: 499, regularPrice: 599 },
      { label: '500g', salePrice: 699, regularPrice: 799 },
      { label: '1kg', salePrice: 1199, regularPrice: 1299 },
    ],
    images: ['/assets/gift-box.svg', '/assets/maska-gift.svg', '/assets/maska-hero-jar.svg', '/assets/maska-toast.svg'],
    gallery: [
      { title: 'Gift box front', caption: 'Presentation first', src: '/assets/gift-box.svg' },
      { title: 'Bundle styling', caption: 'Shelf-friendly packaging', src: '/assets/maska-gift.svg' },
      { title: 'Inside the box', caption: 'A curated snack stack', src: '/assets/maska-toast.svg' },
    ],
    reviews: sharedReviews,
    faqs: sharedFaqs,
  }),
  makeProduct({
    slug: 'maska-nutrition-bar',
    title: 'Peanut Power Nutrition Bar',
    shortTitle: 'Nutrition Bar',
    category: 'Nutrition Bar',
    priceFrom: 179,
    regularFrom: 219,
    status: 'Sale',
    description:
      'A compact nutrition bar with peanut energy, cocoa notes, and a balanced bite for active routines and snack breaks.',
    benefits: [
      'Portable snack for work, gym bags, and travel',
      'Balanced sweet profile with a peanut-forward base',
      'Easy everyday fuel without a heavy finish',
    ],
    ingredients: ['Peanuts', 'Cocoa', 'Rolled Oats', 'Date Syrup'],
    features: [
      'Individually wrapped for grab-and-go use.',
      'Great for pre-workout and mid-day snacking.',
      'Designed for a clean, minimal ingredient story.',
      'Dense, satisfying bite with a light finish.',
    ],
    variants: [
      { label: '300g', salePrice: 179, regularPrice: 219 },
      { label: '500g', salePrice: 329, regularPrice: 389 },
      { label: '1kg', salePrice: 599, regularPrice: 699 },
    ],
    images: ['/assets/nutrition-bar.svg', '/assets/maska-toast.svg', '/assets/maska-spoon.svg', '/assets/maska-gift.svg'],
    gallery: [
      { title: 'Single bar', caption: 'Everyday energy', src: '/assets/nutrition-bar.svg' },
      { title: 'Packed snack', caption: 'Pocket friendly', src: '/assets/maska-toast.svg' },
      { title: 'On the go', caption: 'Desk to gym transition', src: '/assets/maska-spoon.svg' },
    ],
    reviews: sharedReviews,
    faqs: sharedFaqs,
  }),
  makeProduct({
    slug: 'maska-granola-crunch',
    title: 'Maska Granola Crunch',
    shortTitle: 'Granola',
    category: 'Granola',
    priceFrom: 249,
    regularFrom: 299,
    status: 'Sale',
    description:
      'A crunchy granola blend with peanut butter notes and cocoa warmth, designed for breakfast bowls and topping moments.',
    benefits: [
      'Crispy topping for yogurt, smoothie bowls, and milk',
      'Warm peanut and cocoa notes with a bright finish',
      'Breakfast-friendly texture that stays crunchy',
    ],
    ingredients: ['Rolled Oats', 'Peanut Butter', 'Cocoa', 'Honey'],
    features: [
      'Made for breakfast bowls and snack jars.',
      'Pairs well with milk, yogurt, or fruit.',
      'Crunch-forward texture with balanced sweetness.',
      'A pantry staple for fast mornings.',
    ],
    variants: [
      { label: '300g', salePrice: 249, regularPrice: 299 },
      { label: '500g', salePrice: 399, regularPrice: 459 },
      { label: '1kg', salePrice: 749, regularPrice: 849 },
    ],
    images: ['/assets/granola.svg', '/assets/maska-toast.svg', '/assets/maska-spoon.svg', '/assets/maska-gift.svg'],
    gallery: [
      { title: 'Granola bowl', caption: 'Breakfast texture', src: '/assets/granola.svg' },
      { title: 'Jar styling', caption: 'Pantry ready', src: '/assets/maska-toast.svg' },
      { title: 'Serving suggestion', caption: 'Yogurt topper', src: '/assets/maska-spoon.svg' },
    ],
    reviews: sharedReviews,
    faqs: sharedFaqs,
  }),
  makeProduct({
    slug: 'maska-combo-box',
    title: 'Maska Combo Box',
    shortTitle: 'Combos',
    category: 'Combos',
    priceFrom: 899,
    regularFrom: 999,
    status: 'Sale',
    description:
      'A value-led combo assortment built for discovery, giving shoppers a mix of jar, bar, and snack formats in one pack.',
    benefits: [
      'Best for first-time buyers and family sharing',
      'Combines multiple formats in one order',
      'Strong entry point for gifting and pantry stocking',
    ],
    ingredients: ['Peanut Butter', 'Nutrition Bar', 'Granola', 'Gift Pack'],
    features: [
      'Multi-product bundle with a better-value perception.',
      'Designed to introduce the full Maska range.',
      'Perfect for repeat buyers and gift shoppers.',
      'A balanced mix of convenience and indulgence.',
    ],
    variants: [
      { label: '300g', salePrice: 899, regularPrice: 999 },
      { label: '500g', salePrice: 1199, regularPrice: 1399 },
      { label: '1kg', salePrice: 1799, regularPrice: 1999 },
    ],
    images: ['/assets/combo-box.svg', '/assets/gift-box.svg', '/assets/nutrition-bar.svg', '/assets/granola.svg'],
    gallery: [
      { title: 'Combo front', caption: 'Bundle story', src: '/assets/combo-box.svg' },
      { title: 'What is inside', caption: 'Mixed format pack', src: '/assets/gift-box.svg' },
      { title: 'Value bundle', caption: 'Easy gifting option', src: '/assets/nutrition-bar.svg' },
    ],
    reviews: sharedReviews,
    faqs: sharedFaqs,
  }),
];

export const collectionCatalog: CollectionItem[] = [
  {
    slug: 'peanut',
    label: 'Peanut Butter',
    title: 'Peanut Butter',
    description: 'A full peanut butter collection with the card layout and buy-now flow shown in the reference screenshot.',
    accent: '#b5743a',
    image: '/assets/collection-peanut.svg',
    productSlugs: [
      'maska-choco-crunch-peanut-butter',
      'maska-peanut-butter-chocolate-salvation',
      'maska-aww-rio-peanut-butter-oreo',
      'maska-unsweetened-smooth-peanut-butter',
    ],
  },
  {
    slug: 'gift-boxes',
    label: 'Gift Boxes',
    title: 'Gift Boxes',
    description: 'Premium gifting packs with a festive, ready-to-send presentation.',
    accent: '#9f6a3f',
    image: '/assets/collection-gift-boxes.svg',
    productSlugs: ['maska-gift-box-delight'],
  },
  {
    slug: 'nutrition-bar',
    label: 'Nutrition Bar',
    title: 'Nutrition Bar',
    description: 'Portable snack bars for active routines, desks, and travel days.',
    accent: '#6f4d2f',
    image: '/assets/collection-nutrition-bar.svg',
    productSlugs: ['maska-nutrition-bar'],
  },
  {
    slug: 'granola',
    label: 'Granola',
    title: 'Granola',
    description: 'Crunchy breakfast and bowl toppings with a peanut-forward flavour profile.',
    accent: '#8e5a34',
    image: '/assets/collection-granola.svg',
    productSlugs: ['maska-granola-crunch'],
  },
  {
    slug: 'combos',
    label: 'Combos',
    title: 'Combos',
    description: 'Bundle-led combos for first-time shoppers, families, and gifting.',
    accent: '#5f3b24',
    image: '/assets/collection-combos.svg',
    productSlugs: ['maska-combo-box'],
  },
];

export const collectionMenuItems = collectionCatalog.map((collection) => ({
  label: collection.label,
  href: `/collections/${collection.slug}`,
}));

export const reviewModes = [
  {
    id: 'pulse',
    label: 'Pulse Board',
    eyebrow: 'Social Proof / Live metrics',
    title: 'A quiet dashboard for trust signals and quick scanning.',
    description: 'Great for showing counters, star summaries, and the strongest review quotes first.',
  },
  {
    id: 'mosaic',
    label: 'Mosaic Wall',
    eyebrow: 'Media / quote collage',
    title: 'A magazine-like wall of reviews with a stronger editorial feel.',
    description: 'Useful when you want the page to feel rich, social, and full of customer voice.',
  },
  {
    id: 'conversation',
    label: 'Conversation Feed',
    eyebrow: 'Comments / community thread',
    title: 'A feed that feels like a live comment stream with UGC and reply energy.',
    description: 'Best for Word of Mouth style sections with comments, reactions, and photo snippets.',
  },
] as const;

export const comments = [
  'Ordered for the label, stayed for the taste.',
  'Feels like a dessert spread that can still live in the breakfast routine.',
  'The texture is the part I noticed first - very smooth.',
  'I want the dark chocolate version next.',
];
