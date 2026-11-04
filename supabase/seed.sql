-- Seed Data for Categories
INSERT INTO categories (name, slug, description)
VALUES 
  ('Tutti Frutti', 'tutti-frutti', 'Premium candied raw papaya cubes crafted for artisanal baking, confectionery and dessert creations.'),
  ('Bakery Ingredients', 'bakery-ingredients', 'Essential baking additions and confectionery embellishments.')
ON CONFLICT (slug) DO NOTHING;

-- Seed Data for Products
INSERT INTO products (
  name,
  slug,
  category,
  description,
  short_description,
  image_url,
  gallery,
  pack_size,
  color_code,
  is_featured,
  is_active
) VALUES 
(
  'Red Tutti Frutti',
  'red-tutti-frutti',
  'Tutti Frutti',
  'Crafted from carefully selected firm raw papayas harvested in Gujarat, Comfit Red Tutti Frutti brings a bold, brilliant ruby hue and succulent sweetness to your favorite recipes. Perfect for traditional sponge cakes, festive fruit breads, cookies, cupcakes, and falooda desserts.',
  'A bold, rich red crafted for treats, desserts and everyday bakes.',
  '/images/products/red-tutti-frutti.jpg',
  '["/images/products/red-tutti-frutti.jpg", "/images/inspirations/cake.jpg"]'::jsonb,
  '250g Pouch',
  '#C9184A',
  true,
  true
),
(
  'Green Tutti Frutti',
  'green-tutti-frutti',
  'Tutti Frutti',
  'Vibrant emerald green candied papaya cubes with a tender bite and balanced sweet profile. Specially processed to retain color brilliance and moisture resistance during high-temperature baking.',
  'A bright garden hue that adds colour and joy to creations.',
  '/images/products/green-tutti-frutti.jpg',
  '["/images/products/green-tutti-frutti.jpg", "/images/inspirations/cookies.jpg"]'::jsonb,
  '250g Pouch',
  '#267B43',
  true,
  true
),
(
  'Yellow Tutti Frutti',
  'yellow-tutti-frutti',
  'Tutti Frutti',
  'Warm golden yellow papaya cubes that lend sunshine vibrancy and delightful texture. Ideal for tea cakes, dry fruit rolls, festive sweets, and soft-serve ice cream toppings.',
  'Golden warmth for festive flavours and sunny sweet sensations.',
  '/images/products/yellow-tutti-frutti.jpg',
  '["/images/products/yellow-tutti-frutti.jpg", "/images/inspirations/dessert.jpg"]'::jsonb,
  '250g Pouch',
  '#E5A93C',
  true,
  true
),
(
  'Rainbow Mix',
  'rainbow-mix',
  'Tutti Frutti',
  'A joyful, harmonious blend of red, green, and golden yellow candied papaya cubes. The definitive celebration ingredient for bakeries, ice cream parlours, and dessert makers across India.',
  'Red, green and yellow together – joy in every spoonful.',
  '/images/products/rainbow-mix.jpg',
  '["/images/products/rainbow-mix.jpg", "/images/hero/hero-tutti-frutti.jpg"]'::jsonb,
  '250g Pouch',
  '#D81B60',
  true,
  true
)
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  short_description = EXCLUDED.short_description,
  image_url = EXCLUDED.image_url,
  pack_size = EXCLUDED.pack_size;

