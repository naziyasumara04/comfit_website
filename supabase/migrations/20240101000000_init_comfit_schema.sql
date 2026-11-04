-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. CATEGORIES TABLE
CREATE TABLE IF NOT EXISTS categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. PRODUCTS TABLE
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL DEFAULT 'Tutti Frutti',
  description TEXT NOT NULL,
  short_description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  gallery JSONB DEFAULT '[]'::jsonb,
  pack_size TEXT NOT NULL DEFAULT '250g Pouch',
  color_code TEXT DEFAULT '#C9184A',
  ingredients TEXT DEFAULT 'Papaya, Sugar, Acidity Regulator (INS 330), Permitted Food Colours and Preservative (INS 211)',
  shelf_life TEXT DEFAULT '12 months from manufacturing date under recommended conditions',
  storage TEXT DEFAULT 'Store in a cool, dry and hygienic place away from direct sunlight',
  applications JSONB DEFAULT '["Cakes & Sponge", "Cookies & Biscuits", "Ice Cream & Sundaes", "Breads & Buns", "Traditional Sweets", "Beverages & Falooda"]'::jsonb,
  is_featured BOOLEAN DEFAULT true,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. BULK INQUIRIES TABLE
CREATE TABLE IF NOT EXISTS bulk_inquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name TEXT NOT NULL,
  company_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  business_type TEXT NOT NULL,
  product_interest TEXT NOT NULL,
  estimated_quantity TEXT NOT NULL,
  delivery_region TEXT,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'in_discussion', 'closed')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. CONTACT MESSAGES TABLE
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'unread' CHECK (status IN ('unread', 'read', 'replied')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. ADMIN PROFILES TABLE
CREATE TABLE IF NOT EXISTS admin_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'admin' CHECK (role IN ('admin', 'superadmin', 'editor')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create Indexes for performance
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);
CREATE INDEX IF NOT EXISTS idx_products_is_active ON products(is_active);
CREATE INDEX IF NOT EXISTS idx_bulk_inquiries_status ON bulk_inquiries(status);
CREATE INDEX IF NOT EXISTS idx_contact_messages_created ON contact_messages(created_at DESC);

-- ENABLE ROW LEVEL SECURITY (RLS)
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE bulk_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_profiles ENABLE ROW LEVEL SECURITY;

-- Helper function to check if current user is admin
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM admin_profiles
    WHERE id = auth.uid() AND role IN ('admin', 'superadmin')
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- RLS POLICIES FOR PRODUCTS
-- Public can view active products
CREATE POLICY "Public can view active products"
  ON products FOR SELECT
  USING (is_active = true);

-- Admins have full access to products
CREATE POLICY "Admins have full access to products"
  ON products FOR ALL
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

-- RLS POLICIES FOR CATEGORIES
CREATE POLICY "Public can view categories"
  ON categories FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Admins have full access to categories"
  ON categories FOR ALL
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

-- RLS POLICIES FOR BULK INQUIRIES
-- Anyone can insert an inquiry
CREATE POLICY "Anyone can submit bulk inquiries"
  ON bulk_inquiries FOR INSERT
  TO public
  WITH CHECK (true);

-- Only admins can view and update inquiries
CREATE POLICY "Admins can view bulk inquiries"
  ON bulk_inquiries FOR SELECT
  TO authenticated
  USING (is_admin());

CREATE POLICY "Admins can update bulk inquiries"
  ON bulk_inquiries FOR UPDATE
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

-- RLS POLICIES FOR CONTACT MESSAGES
-- Anyone can send contact messages
CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages FOR INSERT
  TO public
  WITH CHECK (true);

-- Only admins can view and update messages
CREATE POLICY "Admins can view contact messages"
  ON contact_messages FOR SELECT
  TO authenticated
  USING (is_admin());

CREATE POLICY "Admins can update contact messages"
  ON contact_messages FOR UPDATE
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

-- RLS POLICIES FOR ADMIN PROFILES
CREATE POLICY "Admins can view profiles"
  ON admin_profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id OR is_admin());

CREATE POLICY "Superadmins can update profiles"
  ON admin_profiles FOR ALL
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

