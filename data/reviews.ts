export interface Review {
  id: string;
  title: string;
  content: string;
  rating: number;
  author: string;
  location: string;
  date: string;
  category: 'Simple' | 'Classic' | 'Joyful' | 'Vibrant' | 'Premium';
  sizeVariant: string;
  imageUrl: string;
  isVerified: boolean;
  likes: number;
  helpful: number;
  shares: number;
}

export const reviewsData: Review[] = [
  {
    id: '1',
    title: 'Unexpectedly Nice',
    content: 'Woke up feeling bleh and grabbed this item from the shelf... i thought what could go wrong? It\'s like a thick spread of roasted peanuts no weird stuff in it. The crunchiness? Yeah it\'s there kinda satisfying. Honestly i wasn\'t expecting much but it totally hit different. The earthy flavor is nice not sweet or artificial at all. Love that it\'s clean too no junk added. Perfect for my toast or even just straight from the jar. Definitely keeping this around',
    rating: 5,
    author: 'Birendra Shukla940',
    location: 'Ranchi',
    date: '23 Apr 2026',
    category: 'Classic',
    sizeVariant: '500g',
    imageUrl: 'https://via.placeholder.com/80?text=BS',
    isVerified: false,
    likes: 0,
    helpful: 0,
    shares: 0,
  },
  {
    id: '2',
    title: 'Healthy surprise',
    content: 'Arre yaar never imagined I\'d relish health stuff. Maska Butter ka unsweetened peanut butter... unexpectedly GOOD That crunchy wala texture it\'s like... satisfying somehow. Taste not bad maybe I\'ll munch again... or maybe not?',
    rating: 5,
    author: 'Yukta Shah',
    location: 'Gwalior',
    date: '23 Apr 2026',
    category: 'Vibrant',
    sizeVariant: '300g',
    imageUrl: 'https://via.placeholder.com/80?text=YS',
    isVerified: true,
    likes: 0,
    helpful: 0,
    shares: 0,
  },
  {
    id: '3',
    title: 'Maska Peanut Butter - Healthy ya Scam?',
    content: 'Maska peanut butter ka taste ok... thoda earthy hai... par mujhe scam laga kyunki healthy bola tha but mood achanak se kharab ho gaya. Glass jar accha hai eco-friendly lagta hai. Packaging mein 5-star de sakte.',
    rating: 5,
    author: 'Bhavesh1971',
    location: 'Haldwani',
    date: '21 Apr 2026',
    category: 'Premium',
    sizeVariant: '500g',
    imageUrl: 'https://via.placeholder.com/80?text=BH',
    isVerified: false,
    likes: 0,
    helpful: 0,
    shares: 0,
  },
  {
    id: '4',
    title: 'the real deal, no lies',
    content: 'i can\'t believe i\'m stating this but consuming this peanut butter with a spoon felt strangely therapeutic. the consistency is thick and crunchylike a mini workout for my mouth . it\'s unsweetened so no odd aftertaste... just pure nutty delight. even my dog was eyeing it like it was a treat lol. knowing it\'s gluten-free and made with genuine peanuts makes it feel like a snack i can genuinely relish without guilt. definitely worth a shot if you\'re into the healthier side of life. 5 stars all the way',
    rating: 5,
    author: 'Shridam',
    location: 'Hyderabad',
    date: '20 Apr 2026',
    category: 'Simple',
    sizeVariant: '1kg',
    imageUrl: 'https://via.placeholder.com/80?text=SH',
    isVerified: false,
    likes: 0,
    helpful: 0,
    shares: 0,
  },
  {
    id: '5',
    title: 'a real find for my sick days',
    content: 'ngl i was feeling kinda sick when i tried this peanut butter... but wow it really turned things around. thick crunchy and just like straight-up peanuts. i love that it\'s unsweetened no weird additives just the good stuff. the oil on top? totally normal. it feels so much better than the sugary stuff i usually avoid. even when i\'m not at my best this thing feels like a solid choice. a bit pricey but hey worth it for health right?',
    rating: 5,
    author: 'Shailesh Anand',
    location: 'Dehradun',
    date: '20 Apr 2026',
    category: 'Joyful',
    sizeVariant: '500g',
    imageUrl: 'https://via.placeholder.com/80?text=SA',
    isVerified: false,
    likes: 0,
    helpful: 0,
    shares: 0,
  },
  {
    id: '6',
    title: 'Surprisingly Good Vibes from This Stuff',
    content: 'Okay I usually dodge healthy snacks like the plague but this peanut butter? Wow. It\'s thick earthy and feels like it\'s crafted from real food... which it is. The glass jar gives it that elegant vibe too. I was feeling all sentimental and strange when I tried it but it really struck me right. Just roasted peanuts no junk and it\'s surprisingly satisfying. 8 grams of protein too Might just be my go-to now... who knew I\'d express that?',
    rating: 5,
    author: 'Kanha Agnihotri',
    location: 'Noida',
    date: '20 Apr 2026',
    category: 'Premium',
    sizeVariant: '500g',
    imageUrl: 'https://via.placeholder.com/80?text=KA',
    isVerified: true,
    likes: 0,
    helpful: 0,
    shares: 0,
  },
];

export const categories = ['Simple', 'Classic', 'Joyful', 'Vibrant', 'Premium'] as const;
