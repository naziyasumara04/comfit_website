import { Product } from '@/types';

export const COMPANY_INFO = {
  name: 'COMFIT FOODS',
  parentCompany: 'GHK Foods',
  tagline: 'TASTE THE COLOURS OF JOY.',
  subTagline: 'Adding Colours of Joy to Every Bite!',
  establishedYear: '2021',
  location: 'Vadali, Sabarkantha, Gujarat, India',
  pinCode: '383430',
  fullAddress: 'A-110/P2, ASAL, VADALI, SABARKANTHA, GUJARAT - 383430',
  phone: '+91-7874404054',
  phoneFormatted: '+91 78744 04054',
  email: 'info@comfitfoods.com',
  tradeEmail: 'trade@comfitfoods.com',
  copyright: '© 2024 Comfit Foods (GHK Foods).',
  madeIn: 'Made with care in Gujarat, India.',
};

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Products', href: '/products' },
  { name: 'Quality & Process', href: '/quality-process' },
  { name: 'Bulk Orders', href: '/bulk-orders' },
  { name: 'Contact Us', href: '/contact' },
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-001',
    name: 'Red Tutti Frutti',
    slug: 'red-tutti-frutti',
    category: 'Tutti Frutti',
    short_description: 'A bold, rich red crafted for treats, desserts and everyday bakes.',
    description: 'Crafted from carefully selected firm raw papayas harvested in Gujarat, Comfit Red Tutti Frutti brings a bold, brilliant ruby hue and succulent sweetness to your favorite recipes. Perfect for traditional sponge cakes, festive fruit breads, cookies, cupcakes, and falooda desserts.',
    image_url: '/images/products/red-tutti-frutti.jpg',
    gallery: [
      '/images/products/red-tutti-frutti.jpg',
      '/images/inspirations/cake.jpg',
      '/images/about/tutti-frutti-bowl.jpg'
    ],
    pack_size: '250g POUCH',
    color_code: '#C9184A',
    is_featured: true,
    is_active: true,
    ingredients: 'Papaya, Sugar, Acidity Regulator (INS 330), Permitted Food Colour (INS 124) and Preservative (INS 211)',
    shelf_life: '12 months from manufacturing date under recommended conditions',
    storage: 'Store in a cool, dry place away from direct sunlight',
    applications: ['Sponge Cakes', 'Breads & Buns', 'Cookies & Biscuits', 'Falooda & Shakes', 'Ice Cream Toppings'],
    created_at: '2024-01-01T00:00:00Z',
  },
  {
    id: 'prod-002',
    name: 'Green Tutti Frutti',
    slug: 'green-tutti-frutti',
    category: 'Tutti Frutti',
    short_description: 'A bright garden hue that adds colour and joy to creations.',
    description: 'Vibrant emerald green candied papaya cubes with a tender bite and balanced sweet profile. Specially processed to retain color brilliance and moisture resistance during high-temperature baking.',
    image_url: '/images/products/green-tutti-frutti.jpg',
    gallery: [
      '/images/products/green-tutti-frutti.jpg',
      '/images/inspirations/cookies.jpg'
    ],
    pack_size: '250g POUCH',
    color_code: '#267B43',
    is_featured: true,
    is_active: true,
    ingredients: 'Papaya, Sugar, Acidity Regulator (INS 330), Permitted Food Colour (INS 102, INS 133) and Preservative (INS 211)',
    shelf_life: '12 months from manufacturing date under recommended conditions',
    storage: 'Store in a cool, dry place away from direct sunlight',
    applications: ['Plum Cakes', 'Muffins & Cupcakes', 'Fruit Pastries', 'Kulfi & Ice Creams'],
    created_at: '2024-01-01T00:00:00Z',
  },
  {
    id: 'prod-003',
    name: 'Yellow Tutti Frutti',
    slug: 'yellow-tutti-frutti',
    category: 'Tutti Frutti',
    short_description: 'Golden warmth for festive flavours and sunny sweet sensations.',
    description: 'Warm golden yellow papaya cubes that lend sunshine vibrancy and delightful texture. Ideal for tea cakes, dry fruit rolls, festive sweets, and soft-serve ice cream toppings.',
    image_url: '/images/products/yellow-tutti-frutti.jpg',
    gallery: [
      '/images/products/yellow-tutti-frutti.jpg',
      '/images/inspirations/dessert.jpg'
    ],
    pack_size: '250g POUCH',
    color_code: '#E5A93C',
    is_featured: true,
    is_active: true,
    ingredients: 'Papaya, Sugar, Acidity Regulator (INS 330), Permitted Food Colour (INS 102) and Preservative (INS 211)',
    shelf_life: '12 months from manufacturing date under recommended conditions',
    storage: 'Store in a cool, dry place away from direct sunlight',
    applications: ['Tea Cakes', 'Festive Mithai', 'Puddings', 'Cassata Ice Creams'],
    created_at: '2024-01-01T00:00:00Z',
  },
  {
    id: 'prod-004',
    name: 'Rainbow Mix',
    slug: 'rainbow-mix',
    category: 'Tutti Frutti',
    short_description: 'Red, green and yellow together – joy in every spoonful.',
    description: 'A joyful, harmonious blend of red, green, and golden yellow candied papaya cubes. The definitive celebration ingredient for bakeries, ice cream parlours, and dessert makers across India.',
    image_url: '/images/products/rainbow-mix.jpg',
    gallery: [
      '/images/products/rainbow-mix.jpg',
      '/images/hero/hero-tutti-frutti.jpg'
    ],
    pack_size: '250g POUCH',
    color_code: '#D81B60',
    is_featured: true,
    is_active: true,
    ingredients: 'Papaya, Sugar, Acidity Regulator (INS 330), Permitted Food Colours (INS 124, INS 102, INS 133) and Preservative (INS 211)',
    shelf_life: '12 months from manufacturing date under recommended conditions',
    storage: 'Store in a cool, dry place away from direct sunlight',
    applications: ['Fruit Cakes', 'Panettone & Milk Breads', 'Sundae Bars', 'Cassata', 'Sweet Confectionery'],
    created_at: '2024-01-01T00:00:00Z',
  },
];

export const BULK_PACK_FORMATS = [
  { size: '10kg', title: 'MASTER CARTON', format: 'Corrugated format', color: '#C9184A' },
  { size: '15kg', title: 'MASTER CARTON', format: 'Corrugated format', color: '#C9184A' },
  { size: '20kg', title: 'MASTER CARTON', format: 'Corrugated format', color: '#C9184A' },
];

export const INSPIRATIONS = [
  {
    id: 'insp-1',
    category: 'CAKES & BAKES',
    title: 'The teatime cake',
    description: 'A classic sponge, colourful inside.',
    image: '/images/inspirations/cake.jpg',
    alt: 'Golden teatime sponge cake sliced with colourful tutti frutti',
  },
  {
    id: 'insp-2',
    category: 'COOKIES',
    title: 'A little cookie joy',
    description: 'Sweet bites with a bright twinkling crunch.',
    image: '/images/inspirations/cookies.jpg',
    alt: 'Artisan freshly baked cookies embedded with vibrant candied cubes',
  },
  {
    id: 'insp-3',
    category: 'ICE CREAM & DESSERTS',
    title: 'A cooler kind of colour',
    description: 'Playful accents for your summer menu.',
    image: '/images/inspirations/dessert.jpg',
    alt: 'Ice cream scoops with tutti frutti in elegant coupe dish',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Harvesting Raw Papayas',
    description: 'The journey begins with carefully selected raw papayas, the key ingredient in our Tutti Frutti.',
    image: '/images/process/step1-raw-papayas.jpg',
  },
  {
    step: '02',
    title: 'Peeling & Cutting',
    description: 'The outer skin is removed, and the papayas are cut into small, uniform cubes.',
    image: '/images/process/step2-peeling-cutting.jpg',
  },
  {
    step: '03',
    title: 'Sweetening & Draining',
    description: 'The papaya cubes are soaked in sugar syrup to develop their sweetness, then drained to remove excess syrup.',
    image: '/images/process/step3-sweetening-draining.jpg',
  },
  {
    step: '04',
    title: 'The Final Product',
    description: 'Colourful, sweet Tutti Frutti ready to add delightful taste and texture to a variety of food creations.',
    image: '/images/process/step4-final-product.jpg',
  },
];

export const CONTACT_FAQS = [
  {
    question: 'How do I get product pricing?',
    answer: 'Pricing is available on enquiry. Share the product, pouch or carton format, and the quantity you have in mind so we can discuss your requirements.',
  },
  {
    question: 'Can I request ingredient and allergen information?',
    answer: 'Yes. Ask for the current ingredient, allergen and product specification for the product you are considering.',
  },
  {
    question: 'Do you accept bulk and distributor enquiries?',
    answer: 'Yes. We welcome conversations with bakeries, distributors and retailers. Commercial master carton formats are 10kg, 15kg and 20kg.',
  },
  {
    question: 'Where do you deliver?',
    answer: 'Pan-India delivery is available. International enquiries are welcome; destination requirements and fulfillment arrangements are discussed individually.',
  },
];

