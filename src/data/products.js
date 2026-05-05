export const WA_NUMBER = '919417027979';
export const WA_BASE = `https://wa.me/${WA_NUMBER}`;

export const waLink = (text) =>
  `${WA_BASE}?text=${encodeURIComponent(text)}`;

export const products = [
  {
    id: 'wheatgrass',
    name: 'Wheatgrass Powder',
    shortName: 'Wheatgrass',
    weight: '100g',
    price: '₹450–₹500',
    priceMin: 450,
    imgClass: 'product-img-wheatgrass',
    badge: 'Best Seller',
    tagline: 'Feel lighter, more energized, every single morning.',
    description:
      'Wheatgrass is one of the most nutrient-dense plants on the planet — and ours is grown without chemicals, dried at low temperatures to preserve potency, and packed without any additives. One teaspoon in your morning water is all it takes.',
    benefits: [
      'Supports a calmer, more settled digestive system',
      'Sustained morning energy without coffee dependency',
      'Rich in vitamins A, C, E, iron, and natural antioxidants',
      'Helps your body feel lighter and less heavy after meals',
    ],
    usage: [
      'Start with ½ tsp in a glass of water or fresh juice',
      'Best taken on an empty stomach in the morning',
      'Gradually increase to 1 tsp daily as your body adjusts',
      'Can also be blended into smoothies',
    ],
    faqs: [
      {
        q: 'Does it taste strong or earthy?',
        a: 'It has a mild, grassy taste — most people mix it with juice or a smoothie. Over time, many customers drink it plain with water.',
      },
      {
        q: 'How soon will I notice a difference?',
        a: 'Many customers notice improved digestion and morning energy within 7–14 days of consistent daily use.',
      },
      {
        q: 'Is this safe for children?',
        a: 'We recommend consulting your family doctor before giving it to children under 12.',
      },
      {
        q: 'Does it contain any additives or preservatives?',
        a: 'No. 100% pure dried wheatgrass, nothing else.',
      },
    ],
    waMessage: "Hi MicroMagic! I'd like to order Wheatgrass Powder (100g). Please share the details.",
    color: 'from-[#c8e0cc] to-[#7ab387]',
  },
  {
    id: 'moringa',
    name: 'Moringa Powder',
    shortName: 'Moringa',
    weight: '200g',
    price: '₹350–₹450',
    priceMin: 350,
    imgClass: 'product-img-moringa',
    badge: 'Best Value',
    tagline: 'The most versatile daily nutrition habit you\'ll ever build.',
    description:
      'Moringa is known as the "tree of life" across many traditional wellness systems — and for good reason. The leaves are loaded with naturally occurring nutrients and can be seamlessly added to everything from morning water to roti dough without dramatically changing the taste.',
    benefits: [
      'Exceptional natural nutrient density in every teaspoon',
      'Steady, non-jittery energy throughout the day',
      'Rich in natural antioxidant compounds',
      'Works effortlessly in cooking, drinks, and smoothies',
    ],
    usage: [
      '1 tsp stirred into a glass of warm water daily',
      'Mix into roti or paratha dough for an easy nutritional boost',
      'Blend into dal, soups, or curries without altering flavour',
      'Can be added to smoothies with banana or mango',
    ],
    faqs: [
      {
        q: 'Does the taste change my food?',
        a: 'Moringa has a mild, earthy flavour that blends naturally into most Indian cooking. In roti dough, it\'s barely noticeable.',
      },
      {
        q: 'Can pregnant women consume this?',
        a: 'We recommend consulting your doctor during pregnancy before starting any new supplement.',
      },
      {
        q: 'How long does one pack last?',
        a: 'At 1 tsp per day, the 200g pack lasts approximately 2 months.',
      },
      {
        q: 'Is the powder artificially dried or processed?',
        a: 'No. We use a low-heat drying process that preserves the nutritional profile of the leaves.',
      },
    ],
    waMessage: "Hi MicroMagic! I'd like to order Moringa Powder (200g). Please share the details.",
    color: 'from-[#b8d9bc] to-[#5fac67]',
  },
  {
    id: 'bluepea',
    name: 'Blue Pea Flowers',
    shortName: 'Blue Pea',
    weight: '50g',
    price: '₹500',
    priceMin: 500,
    imgClass: 'product-img-bluepea',
    badge: 'Most Unique',
    tagline: 'A calming evening ritual that also happens to look stunning.',
    description:
      'Butterfly Blue Pea Flowers are whole, dried blooms — no processing, no powder, no additives. Steep them in hot water and you get a deep indigo blue tea that turns violet with the squeeze of a lemon. Beyond the visual magic, the flowers are rich in antioxidant compounds and have been used in traditional wellness practices for centuries.',
    benefits: [
      'Rich in natural anthocyanin antioxidants',
      'Supports skin hydration and a calm, settled appearance',
      'A naturally relaxing evening ritual without caffeine',
      'Supports gentle, natural digestive ease',
    ],
    usage: [
      'Add 4–5 whole flowers to a cup of hot water',
      'Steep for 3–5 minutes — the water turns deep blue',
      'Add a squeeze of lemon to watch it shift to violet',
      'Enjoy plain, with honey, or over ice',
    ],
    faqs: [
      {
        q: 'Is it safe to drink daily?',
        a: '1–2 cups a day is perfectly fine for most people. It\'s naturally caffeine-free, making it ideal as an evening tea.',
      },
      {
        q: 'Does the colour change actually happen?',
        a: 'Yes — it\'s due to a natural pH reaction with the anthocyanins in the petals. Lemon (acidic) turns it from blue to purple.',
      },
      {
        q: 'Can children drink it?',
        a: 'It\'s generally safe, but we recommend keeping it to 1 cup for children and consulting your doctor if unsure.',
      },
      {
        q: 'How long does 50g last?',
        a: 'With 4–5 flowers per cup and 1 cup per day, 50g (approximately 200–250 flowers) lasts around 40–50 days.',
      },
    ],
    waMessage: "Hi MicroMagic! I'd like to order Butterfly Blue Pea Flowers (50g). Please share the details.",
    color: 'from-[#c5cce8] to-[#7289ce]',
  },
];

export const combos = [
  {
    id: 'complete',
    name: 'The Complete Wellness Kit',
    label: 'Most Popular',
    featured: true,
    products: ['Wheatgrass Powder (100g)', 'Moringa Powder (200g)', 'Blue Pea Flowers (50g)'],
    price: '₹999',
    savings: 'Save ₹250+',
    description: 'The full MicroMagic experience. Morning energy, daily nutrition, and a calming evening ritual — all in one box.',
    waMessage: "Hi MicroMagic! I'd like to order the Complete Wellness Kit (All 3 products) for ₹999. Please share payment and delivery details.",
  },
  {
    id: 'duo',
    name: 'The Daily Essentials Duo',
    label: 'Great Start',
    featured: false,
    products: ['Wheatgrass Powder (100g)', 'Moringa Powder (200g)'],
    price: '₹699',
    savings: 'Save ₹100+',
    description: 'The two most versatile products for a complete daily nutrition routine — wheatgrass in the morning, moringa in your meals.',
    waMessage: "Hi MicroMagic! I'd like to order the Daily Essentials Duo (Wheatgrass + Moringa) for ₹699. Please share payment and delivery details.",
  },
];

export const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Chandigarh',
    product: 'Wheatgrass',
    duration: 'Using for 3 months',
    rating: 5,
    text: "I\'ve tried several health powders before, but MicroMagic\'s wheatgrass is the first time I actually felt a tangible difference. My mornings feel lighter and I don\'t need two cups of chai to get started anymore.",
    initial: 'P',
    avatarColor: 'from-sage to-forest',
  },
  {
    name: 'Rajwinder Kaur',
    location: 'Ludhiana',
    product: 'Moringa',
    duration: 'Family purchase',
    rating: 5,
    text: 'We started mixing moringa into our roti dough — the whole family eats it and no one can tell. It\'s become part of our daily cooking without any fuss. That simplicity is what I love most.',
    initial: 'R',
    avatarColor: 'from-earth to-[#c49a5a]',
  },
  {
    name: 'Ananya Mehta',
    location: 'Delhi',
    product: 'Blue Pea Flowers',
    duration: 'Repeat customer',
    rating: 5,
    text: 'The blue pea flower tea is my evening ritual now. Watching the colour shift when I add lemon never gets old — my kids think it\'s magic. I feel genuinely calmer before bed.',
    initial: 'A',
    avatarColor: 'from-moss to-sage',
  },
  {
    name: 'Harpreet Singh',
    location: 'Amritsar',
    product: 'Complete Kit',
    duration: '2 months',
    rating: 5,
    text: 'Ordered the complete combo as a gift for my mother and she absolutely loves it. What sold me was that MicroMagic doesn\'t make exaggerated claims — they\'re honest about what the products do and don\'t do.',
    initial: 'H',
    avatarColor: 'from-[#5a7a6a] to-forest',
  },
];
