export const WA_NUMBER = '919417027979';
export const WA_BASE = `https://wa.me/${WA_NUMBER}`;

export const waLink = (text) => `${WA_BASE}?text=${encodeURIComponent(text)}`;

const createProductImages = (productName, tones, sceneLabels, srcPrefix = '') =>
  sceneLabels.map((label, index) => ({
    id: `${productName.toLowerCase().replace(/\s+/g, '-')}-${index + 1}`,
    alt: `${productName} ${label.toLowerCase()} view`,
    label,
    tones,
    src: srcPrefix ? `${srcPrefix}${String(index + 1).padStart(4, '0')}.jpg` : undefined,
  }));

const imageSets = {
  wheatgrass: createProductImages(
    'Wheatgrass Powder',
    ['#dff0df', '#a8d09c', '#5c9363'],
    [
      '',
      'Serving Guide',
      'Usage Rituals',
      'Organic Promise',
      'Why Science Loves Wheatgrass',
      'Certified Quality',
      'Natural Wellness Support',
      'Ways To Enjoy',
      'Why Choose MicroMagic',
    ],
    '/products/wheatgrass/IMG_2547_pages-to-jpg-'
  ),
  moringa: [
  {
    id: 'moringa-01',
    src: '/products/Moringa/IM1.jpg',
    alt: 'MicroMagic Moringa Powder'
  },
  {
    id: 'moringa-02',
    src: '/products/Moringa/IM2.jpg',
    alt: 'MicroMagic Moringa Powder'
  },
  {
    id: 'moringa-03',
    src: '/products/Moringa/IM3.jpg',
    alt: 'MicroMagic Moringa Powder'
  },
  {
    id: 'moringa-04',
    src: '/products/Moringa/IM4.jpg',
    alt: 'MicroMagic Moringa Powder'
  },
  {
    id: 'moringa-05',
    src: '/products/Moringa/IM5.jpg',
    alt: 'MicroMagic Moringa Powder'
  },
  {
    id: 'moringa-06',
    src: '/products/Moringa/IM6.jpg',
    alt: 'MicroMagic Moringa Powder'
  },
  {
    id: 'moringa-07',
    src: '/products/Moringa/IM7.jpg',
    alt: 'MicroMagic Moringa Powder'
  },
  {
    id: 'moringa-08',
    src: '/products/Moringa/IM8.jpg',
    alt: 'MicroMagic Moringa Powder'
  },
  {
    id: 'moringa-09',
    src: '/products/Moringa/IM9.jpg',
    alt: 'MicroMagic Moringa Powder'
  },
  {
    id: 'moringa-10',
    src: '/products/Moringa/IM10.jpg',
    alt: 'MicroMagic Moringa Powder'
  }
],
  bluepea: createProductImages(
    'Blue Pea Flowers',
    ['#dfe4fb', '#8ea0e4', '#576fc2'],
    ['Hero Jar', 'Evening Tea', 'Colour Shift', 'Ingredient Detail', 'Glass Pour', 'Calm Ritual', 'Shelf Portrait']
  ),
  ashwagandha: createProductImages(
    'Ashwagandha Powder',
    ['#f0e3d5', '#c9a47f', '#7e5a44'],
    ['Hero Bottle', 'Night Ritual', 'Ingredient Detail', 'Stone Tray', 'Calm Blend', 'Soft Studio', 'Daily Dose']
  ),
  amla: createProductImages(
    'Amla Powder',
    ['#edf0d6', '#b6c86c', '#6c8741'],
    ['Hero Bottle', 'Morning Mix', 'Ingredient Detail', 'Citrus Pairing', 'Minimal Shelf', 'Daily Scoop', 'Botanical Frame']
  ),
  neem: createProductImages(
    'Neem Powder',
    ['#d8e6da', '#7ea685', '#3f674a'],
    ['Hero Bottle', 'Clean Ritual', 'Ingredient Detail', 'Studio Closeup', 'Leaf Pairing', 'Daily Measure', 'Shelf Portrait']
  ),
  hibiscus: createProductImages(
    'Hibiscus Flowers',
    ['#f5dadd', '#d67a8b', '#873d53'],
    ['Hero Jar', 'Tea Ritual', 'Ingredient Detail', 'Crimson Pour', 'Glass Bloom', 'Evening Shelf', 'Petal Closeup']
  ),
};

export const products = [
  {
    id: 'wheatgrass',
    slug: 'wheatgrass-powder',
    name: 'MicroMagic Wheatgrass Powder',
    shortName: 'Wheatgrass',
    category: 'Daily Wellness Superfood',
    weight: '100g',
    price: '₹450–₹500',
    priceMin: 450,
    badge: 'Best Seller',
    imgClass: 'product-img-wheatgrass',
    shortDescription: 'Daily green nourishment for modern living.',
    tagline: 'A simple daily ritual built around clean nutrition and natural vitality.',
    story:
      'A bright, clean morning ritual for people who want nourishment without noise. One teaspoon, a glass of water, and a calmer start to the day.',
    description:
      'Wheatgrass is one of the most nutrient-dense plants on the planet — and ours is grown without chemicals, dried gently to preserve its character, and packed without additives. It is designed for modern routines that need something simple, steady, and honest.',
    benefits: [
      'Natural daily detox support',
      'Clean sustained energy for busy routines',
      'Digestive support for lighter mornings',
      'Skin glow support through nutrient-rich greens',
      'Daily wellness support without complicated routines',
    ],
    usage: [
      '1 tsp with warm water as a simple morning ritual',
      'Add 1/2 to 1 tsp to smoothies or fresh juices',
      'Mix 1/2 tsp into lemon water for a lighter flavour',
      'Try a small pinch in buttermilk for a savoury option',
    ],
    faqs: [
      {
        q: 'Does it taste strong or earthy?',
        a: 'It has a mild grassy taste. Many customers start by mixing it with juice or a smoothie, then move to plain water over time.',
      },
      {
        q: 'How soon will I notice a difference?',
        a: 'Many customers mention improved digestion and a lighter morning feeling within 1 to 2 weeks of consistent use.',
      },
      {
        q: 'Does it contain any additives or preservatives?',
        a: 'No. It is 100% pure dried wheatgrass, nothing else.',
      },
    ],
    images: imageSets.wheatgrass,
    highlights: ['100% Organic', 'Nutrient Rich', 'Easy to Digest'],
    servings: 'Approx. 30 Servings',
    ingredient: '100% Organic Wheatgrass',
    orderMessage: "Hi, I'm interested in MicroMagic Wheatgrass Powder. Please share details.",
    quickFacts: [
      '100% Organic',
      '100g Pack',
      'Approx. 30 Servings',
      'Whole Leaf Wheatgrass',
      'No Artificial Colours',
      'No Added Preservatives',
    ],
    whyPeopleChoose: [
      {
        title: 'Chlorophyll',
        body: 'Natural cleansing support',
      },
      {
        title: 'Vitamins',
        body: 'Contains Vitamins A, C & E',
      },
      {
        title: 'Minerals',
        body: 'Iron & Magnesium',
      },
      {
        title: 'Nutritional Building Blocks',
        body: 'Enzymes & Amino Acids',
      },
    ],
    dailyBenefits: [
      'Natural Daily Detox',
      'Clean Sustained Energy',
      'Digestive Support',
      'Skin Glow Support',
      'Daily Wellness Support',
    ],
    howToUseCards: [
      {
        title: 'Morning Ritual',
        body: '1 tsp with warm water',
      },
      {
        title: 'Smoothies & Juices',
        body: 'Add 1/2–1 tsp',
      },
      {
        title: 'Lemon Water Mix',
        body: '1/2 tsp with lemon water',
      },
      {
        title: 'Buttermilk Mix',
        body: 'Small pinch with buttermilk',
      },
    ],
    specifications: [
      ['Ingredient', 'Organic Wheatgrass'],
      ['Weight', '100g'],
      ['Servings', 'Approx. 30'],
      ['Processing', 'Hygienically Processed'],
      ['Preservatives', 'None Added'],
      ['Artificial Colours', 'None'],
      ['Storage', 'Store in a cool, dry place'],
    ],
    certifications: [
      'India Organic NPOP Certified',
      'Jaivik Bharat Certified',
      'FSSAI Certified',
      'MSME Registered',
      'Chemical Free',
    ],
    whyChooseMicroMagic: [
      'Certified Organic',
      'No Pesticides',
      'Non-GMO',
      'Vegan',
      'Gluten Free',
      'Locally Sourced',
    ],
    beyondDailyUse: [
      {
        title: 'Face Pack',
        body: 'Wheatgrass + Aloe Vera Gel',
      },
      {
        title: 'Hair & Scalp Rinse',
        body: 'Mild Wheatgrass Water',
      },
    ],
    waMessage: "Hi, I'm interested in MicroMagic Wheatgrass Powder. Please share details.",
  },
  {
    id: 'moringa',
    slug: 'moringa-powder',
    name: 'Moringa Powder',
    shortName: 'Moringa',
    category: 'Kitchen Wellness',
    weight: '200G',
    price: '₹350–₹450',
    priceMin: 350,
    badge: 'Best Value',
    imgClass: 'product-img-moringa',
    shortDescription: 'The quiet nutritional staple your kitchen will keep reaching for.',
    tagline: "The most versatile daily nutrition habit you'll ever build.",
    story:
      'Made for the home cook and the busy household alike. Moringa slips into water, dough, dal, and smoothies without turning wellness into a performance.',
    description:
      'Known as the tree of life across many traditional wellness systems, moringa offers naturally occurring nutrients in a form that feels easy to use every day. It fits beautifully into Indian kitchens and daily cooking without demanding a separate routine.',
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
        a: 'Moringa has a mild earthy flavour that blends naturally into most Indian cooking. In dough and dal, it stays very subtle.',
      },
      {
        q: 'How long does one pack last?',
        a: 'At 1 tsp per day, the 200G pack usually lasts around 2 months.',
      },
      {
        q: 'Is the powder heavily processed?',
        a: 'No. It is gently dried and milled to preserve the natural profile of the leaves.',
      },
    ],
    images: imageSets.moringa,
    waMessage: "Hi MicroMagic! I'd like to order Moringa Powder (200G). Please share the details.",
  },
  {
    id: 'bluepea',
    slug: 'blue-pea-flowers',
    name: 'Blue Pea Flowers',
    shortName: 'Blue Pea',
    category: 'Botanical Tea',
    weight: '50G',
    price: '₹500',
    priceMin: 500,
    badge: 'Most Unique',
    imgClass: 'product-img-bluepea',
    shortDescription: 'A calm evening ritual with natural theatre in every cup.',
    tagline: 'A calming evening ritual that also happens to look stunning.',
    story:
      'Whole dried blooms that turn hot water into a vivid indigo tea. Add lemon and watch it shift to violet, creating a ritual that feels both grounded and quietly magical.',
    description:
      'Butterfly blue pea flowers are whole, dried blooms with no processing, no powder, and no additives. Beyond the colour-changing experience, they offer a naturally caffeine-free way to slow down in the evening.',
    benefits: [
      'Rich in natural anthocyanin antioxidants',
      'Supports skin hydration and a calm, settled appearance',
      'A naturally relaxing evening ritual without caffeine',
      'Supports gentle, natural digestive ease',
    ],
    usage: [
      'Add 4 to 5 whole flowers to a cup of hot water',
      'Steep for 3 to 5 minutes until the water turns deep blue',
      'Add lemon to watch it shift from blue to violet',
      'Enjoy plain, with honey, or over ice',
    ],
    faqs: [
      {
        q: 'Is it safe to drink daily?',
        a: 'For most people, 1 to 2 cups a day is perfectly fine. It is naturally caffeine-free and suits evening use well.',
      },
      {
        q: 'Does the colour change really happen?',
        a: 'Yes. It is a natural pH reaction with the anthocyanins in the petals, especially when lemon is added.',
      },
      {
        q: 'How long does 50G last?',
        a: 'With 1 cup a day using 4 to 5 flowers, 50G usually lasts around 40 to 50 days.',
      },
    ],
    images: imageSets.bluepea,
    waMessage: "Hi MicroMagic! I'd like to order Blue Pea Flowers (50G). Please share the details.",
  },
  {
    id: 'ashwagandha',
    slug: 'ashwagandha-powder',
    name: 'Ashwagandha Powder',
    shortName: 'Ashwagandha',
    category: 'Evening Reset',
    weight: '150G',
    price: '₹480',
    priceMin: 480,
    badge: 'Night Ritual',
    imgClass: 'product-img-ashwagandha',
    shortDescription: 'A grounded evening ritual for slowing down with intention.',
    tagline: 'Comforting, earthy nourishment for your quietest hours.',
    story:
      'Created for evenings that need a gentler rhythm. Stir it into warm milk or a simple tonic and let your day taper off without drama.',
    description:
      'Ashwagandha has long been used in traditional wellness practices as part of restorative evening routines. Our powder is kept simple and unblended so it can become a dependable, soothing ritual at the end of the day.',
    benefits: [
      'Supports a calmer, more restorative evening rhythm',
      'Pairs beautifully with warm milk or plant-based drinks',
      'Offers an earthy, grounding ritual before bed',
      'Designed for consistent nightly use in small amounts',
    ],
    usage: [
      'Blend 1/2 tsp into warm milk or a plant-based drink',
      'Take in the evening after dinner or before bed',
      'Sweeten with honey if preferred',
      'Start small and build consistency before increasing quantity',
    ],
    faqs: [
      {
        q: 'When should I take ashwagandha?',
        a: 'Most people prefer it in the evening, especially as part of a calming night routine.',
      },
      {
        q: 'Can I mix it with water?',
        a: 'Yes, but many customers prefer warm milk or a creamy plant-based drink for a softer flavour.',
      },
      {
        q: 'Is this a blend?',
        a: 'No. It is a single-ingredient ashwagandha powder with no additives.',
      },
    ],
    images: imageSets.ashwagandha,
    waMessage: "Hi MicroMagic! I'd like to order Ashwagandha Powder (150G). Please share the details.",
  },
  {
    id: 'amla',
    slug: 'amla-powder',
    name: 'Amla Powder',
    shortName: 'Amla',
    category: 'Daily Vitamin Ritual',
    weight: '180G',
    price: '₹390',
    priceMin: 390,
    badge: 'Daily Essential',
    imgClass: 'product-img-amla',
    shortDescription: 'Bright, tart nourishment that fits naturally into daily life.',
    tagline: 'A sharper, brighter ritual for everyday resilience.',
    story:
      'Amla brings a fresh, tangy energy to the ritual shelf. It feels lively, clean, and easy to pair with water, honey, or fruit-forward blends.',
    description:
      'Amla has been valued for generations in Indian households for its naturally vibrant profile. Ours is gently processed and packed without extras, making it a simple way to add a tart botanical note to your routine.',
    benefits: [
      'Naturally rich in vitamin C and antioxidant compounds',
      'Adds brightness to daily wellness routines',
      'Pairs well with honey, juice, or warm water',
      'Designed for steady, consistent use',
    ],
    usage: [
      'Mix 1/2 tsp with water and honey in the morning',
      'Can be stirred into fresh juice or smoothies',
      'Use smaller quantities to begin if the tartness feels strong',
      'Take consistently for best results',
    ],
    faqs: [
      {
        q: 'Is the flavour sour?',
        a: 'Yes, amla is naturally tart. Many customers soften it with honey or fruit juice.',
      },
      {
        q: 'Can I take it daily?',
        a: 'Yes, small daily use is the most common approach.',
      },
      {
        q: 'Is anything added to the powder?',
        a: 'No. It is a pure single-ingredient product.',
      },
    ],
    images: imageSets.amla,
    waMessage: "Hi MicroMagic! I'd like to order Amla Powder (180G). Please share the details.",
  },
  {
    id: 'neem',
    slug: 'neem-powder',
    name: 'Neem Powder',
    shortName: 'Neem',
    category: 'Purity Ritual',
    weight: '150G',
    price: '₹360',
    priceMin: 360,
    badge: 'Clean Living',
    imgClass: 'product-img-neem',
    shortDescription: 'A deep green ritual for people drawn to cleaner, simpler habits.',
    tagline: 'Strong, honest, and rooted in traditional plant wisdom.',
    story:
      'Neem is for the customer who prefers directness over softness. Its place in the collection is about purity, discipline, and a return to uncomplicated routines.',
    description:
      'Known for its distinctly bitter profile and long traditional use, neem offers a more intense botanical ritual for those who appreciate stronger-tasting wellness practices. It is best approached in small amounts and with consistency.',
    benefits: [
      'Supports a clean, pared-back wellness routine',
      'Ideal for customers who prefer stronger botanical profiles',
      'Works well in small daily amounts',
      'Single-ingredient simplicity with no fillers',
    ],
    usage: [
      'Begin with 1/4 tsp in water or honey',
      'Use in the morning for a cleaner ritual flow',
      'Keep servings small because the taste is naturally bitter',
      'Build gradually only if it suits your routine',
    ],
    faqs: [
      {
        q: 'Is neem bitter?',
        a: 'Yes. Neem is naturally strong and bitter, which is why small amounts are the best place to begin.',
      },
      {
        q: 'Can I mix it with honey?',
        a: 'Yes, honey is a common way to soften the flavour.',
      },
      {
        q: 'Who usually chooses neem?',
        a: 'Customers who prefer stronger, more traditional herbal routines often reach for it.',
      },
    ],
    images: imageSets.neem,
    waMessage: "Hi MicroMagic! I'd like to order Neem Powder (150G). Please share the details.",
  },
  {
    id: 'hibiscus',
    slug: 'hibiscus-flowers',
    name: 'Hibiscus Flowers',
    shortName: 'Hibiscus',
    category: 'Botanical Infusion',
    weight: '60G',
    price: '₹520',
    priceMin: 520,
    badge: 'Tea Ritual',
    imgClass: 'product-img-hibiscus',
    shortDescription: 'A vivid floral infusion for slower afternoons and softer evenings.',
    tagline: 'Crimson, tart, and quietly indulgent.',
    story:
      'Whole dried petals for a tea that feels both sensorial and pared back. Hibiscus brings colour, brightness, and a more floral rhythm to the range.',
    description:
      'Hibiscus flowers steep into a tart crimson infusion that feels equally suited to slow afternoons and elevated evening rituals. Like the rest of the collection, it stays simple: whole botanicals, no extras.',
    benefits: [
      'Creates a vivid naturally floral tea ritual',
      'Can be enjoyed hot or over ice',
      'Adds variety to evening and afternoon routines',
      'Whole flowers offer a more tactile botanical experience',
    ],
    usage: [
      'Steep 1 tsp of dried petals in hot water for 4 to 5 minutes',
      'Add honey if you want to soften the tart edge',
      'Serve chilled for a brighter daytime ritual',
      'Pairs beautifully with citrus',
    ],
    faqs: [
      {
        q: 'Is hibiscus caffeine-free?',
        a: 'Yes. It is naturally caffeine-free and easy to enjoy later in the day.',
      },
      {
        q: 'What does it taste like?',
        a: 'It is floral and pleasantly tart, especially when served without sweetener.',
      },
      {
        q: 'Can it be served cold?',
        a: 'Absolutely. It works very well over ice and with citrus.',
      },
    ],
    images: imageSets.hibiscus,
    waMessage: "Hi MicroMagic! I'd like to order Hibiscus Flowers (60G). Please share the details.",
  },
];

export const combos = [
  {
    id: 'complete',
    name: 'The Complete Wellness Kit',
    label: 'Most Popular',
    featured: true,
    products: ['Wheatgrass Powder (100G)', 'Moringa Powder (200G)', 'Blue Pea Flowers (50G)'],
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
    products: ['Wheatgrass Powder (100G)', 'Moringa Powder (200G)'],
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
    text: "I've tried several health powders before, but MicroMagic's wheatgrass is the first time I actually felt a tangible difference. My mornings feel lighter and I don't need two cups of chai to get started anymore.",
    initial: 'P',
    avatarColor: 'from-sage to-forest',
  },
  {
    name: 'Rajwinder Kaur',
    location: 'Ludhiana',
    product: 'Moringa',
    duration: 'Family purchase',
    rating: 5,
    text: "We started mixing moringa into our roti dough — the whole family eats it and no one can tell. It's become part of our daily cooking without any fuss. That simplicity is what I love most.",
    initial: 'R',
    avatarColor: 'from-earth to-[#c49a5a]',
  },
  {
    name: 'Ananya Mehta',
    location: 'Delhi',
    product: 'Blue Pea Flowers',
    duration: 'Repeat customer',
    rating: 5,
    text: "The blue pea flower tea is my evening ritual now. Watching the colour shift when I add lemon never gets old — my kids think it's magic. I feel genuinely calmer before bed.",
    initial: 'A',
    avatarColor: 'from-moss to-sage',
  },
  {
    name: 'Harpreet Singh',
    location: 'Amritsar',
    product: 'Complete Kit',
    duration: '2 months',
    rating: 5,
    text: "Ordered the complete combo as a gift for my mother and she absolutely loves it. What sold me was that MicroMagic doesn't make exaggerated claims — they're honest about what the products do and don't do.",
    initial: 'H',
    avatarColor: 'from-[#5a7a6a] to-forest',
  },
  {
    name: 'Sneha Iyer',
    location: 'Bengaluru',
    product: 'Blue Pea Flowers',
    duration: 'Evening ritual',
    rating: 5,
    text: 'I keep a small glass pot on my desk and make blue pea tea when work starts to feel noisy. It has become my quiet five-minute reset before I switch back to family mode.',
    initial: 'S',
    avatarColor: 'from-sage to-forest',
  },
  {
    name: 'Dev Malhotra',
    location: 'Gurugram',
    product: 'Complete Kit',
    duration: 'Using for 10 weeks',
    rating: 5,
    text: 'I travel for work almost every week, so I needed something simple enough to stick with. The combo has made my routine feel more steady, especially on the days when meals are all over the place.',
    initial: 'D',
    avatarColor: 'from-earth to-[#c49a5a]',
  },
  {
    name: 'Meenal Joshi',
    location: 'Pune',
    product: 'Moringa',
    duration: 'Home cooking staple',
    rating: 5,
    text: 'We started with just a spoon in dal twice a week. Now my father asks whether I remembered to add it. That made me laugh, but it also says a lot about how easy it is to use.',
    initial: 'M',
    avatarColor: 'from-moss to-sage',
  },
  {
    name: 'Aftab Khan',
    location: 'Hyderabad',
    product: 'Wheatgrass',
    duration: '1 month',
    rating: 5,
    text: 'The taste is clean, not grassy in a harsh way. I mix it with water after my morning walk and it feels like a small habit that helps me start the day with intention.',
    initial: 'A',
    avatarColor: 'from-[#5a7a6a] to-forest',
  },
  {
    name: 'Neha Arora',
    location: 'Jaipur',
    product: 'Blue Pea Flowers',
    duration: 'Family favourite',
    rating: 5,
    text: 'My daughter loves the colour change with lemon and I love that our evening drink is no longer another sugary option. It has turned into a sweet little family ritual after dinner.',
    initial: 'N',
    avatarColor: 'from-sage to-forest',
  },
  {
    name: 'Sandeep Nair',
    location: 'Kochi',
    product: 'Moringa',
    duration: 'Repeat order',
    rating: 5,
    text: 'I was looking for something my parents would actually continue using. Moringa blended into everyday food was the easiest answer. No lectures, no fuss, just one useful addition to the kitchen.',
    initial: 'S',
    avatarColor: 'from-earth to-[#c49a5a]',
  },
  {
    name: 'Ritika Bansal',
    location: 'Mumbai',
    product: 'Complete Kit',
    duration: 'Shared at home',
    rating: 5,
    text: 'The best part is that each product fits into a different moment of the day. I take the wheatgrass, my husband reaches for the tea at night, and the moringa ends up in lunch more often than not.',
    initial: 'R',
    avatarColor: 'from-moss to-sage',
  },
  {
    name: 'Vikas Tiwari',
    location: 'Lucknow',
    product: 'Wheatgrass',
    duration: 'Daily routine',
    rating: 5,
    text: "I bought it after a friend recommended it and was mostly curious. Two months later, it is one of those rare wellness purchases that didn't get pushed to the back of the shelf.",
    initial: 'V',
    avatarColor: 'from-[#5a7a6a] to-forest',
  },
  {
    name: 'Farah Siddiqui',
    location: 'Kolkata',
    product: 'Blue Pea Flowers',
    duration: '3 months',
    rating: 5,
    text: 'There is something unhurried about making this tea in the evening. I started for the novelty, but stayed because it helps me slow down before bed without making it feel like a chore.',
    initial: 'F',
    avatarColor: 'from-sage to-forest',
  },
  {
    name: 'Gitanjali Rao',
    location: 'Chennai',
    product: 'Moringa',
    duration: 'Using with parents',
    rating: 5,
    text: 'My mother is usually skeptical of packaged wellness products, but she liked that this felt straightforward and kitchen-friendly. Now we add it to chutney, dosa batter, and soups depending on the day.',
    initial: 'G',
    avatarColor: 'from-earth to-[#c49a5a]',
  },
  {
    name: 'Karan Bedi',
    location: 'Ahmedabad',
    product: 'Complete Kit',
    duration: 'Gifted and re-ordered',
    rating: 5,
    text: 'I first sent the combo to my sister after her baby was born because I wanted something thoughtful but practical. She liked it enough that I ended up ordering a set for our own home too.',
    initial: 'K',
    avatarColor: 'from-moss to-sage',
  },
  {
    name: 'Pallavi Deshmukh',
    location: 'Nagpur',
    product: 'Wheatgrass',
    duration: 'Post-yoga habit',
    rating: 5,
    text: "After yoga I usually want something light and uncomplicated. Wheatgrass fits that mood perfectly. It hasn't transformed my life overnight, but it has helped me build a routine I genuinely enjoy.",
    initial: 'P',
    avatarColor: 'from-[#5a7a6a] to-forest',
  },
];
