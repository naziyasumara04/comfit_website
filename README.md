# COMFIT FOODS – Premium Food Manufacturing Website

A modern, production-grade, full-stack web application for **COMFIT FOODS**, handcrafted to faithfully match the editorial food brand visual identity, typography, spacing, and layout specifications.

---

## 🌟 Brand & Visual Identity

- **Primary Background**: Warm Off-White (`#FFFCF8`)
- **Dark Sections & Navbar**: Charcoal Black (`#1A1A1A` / `#202020`)
- **Primary Accent**: Deep Pink/Red (`#C9184A`)
- **Secondary Accent**: Natural Forest Green (`#267B43`)
- **Warm Section Background**: Warm Beige (`#F4F0E8` / `#FAF7F2`)
- **Soft Accent Section**: Soft Sage Green (`#E9EEE5`)
- **Main Heading Text**: Deep Navy (`#1C2C40`)
- **Secondary Text**: Muted Warm Grey (`#77736E`)
- **Typography**: 
  - Editorial Headings: *Playfair Display*
  - Body & UI: *Plus Jakarta Sans* / *Inter*
  - Micro-Labels: Uppercase, letter-spaced tracking (`tracking-widest text-xs font-semibold`)

---

## 🚀 Technology Stack

- **Framework**: Next.js 16 (App Router)
- **UI & Styling**: React 19, TypeScript, Tailwind CSS v4
- **Icons**: Lucide React
- **Animations**: Subtle transitions & Framer Motion
- **Form Handling**: React Hook Form with Zod validation
- **Backend & Database**: Supabase PostgreSQL, Supabase Storage, Supabase Auth, Row Level Security (RLS)
- **Resilience**: Zero-crash architecture with built-in in-memory fallback catalog and mock demo data when Supabase credentials are pending.

---

## 📁 Project Architecture

```
comfit_web/
├── public/
│   └── images/
│       ├── hero/           # Hero banners & imagery
│       ├── products/       # Red, Green, Yellow, Rainbow tutti frutti
│       ├── about/          # Fresh papaya cutting, bowl, artisan craft
│       ├── process/        # 4-stage manufacturing process photos
│       └── inspirations/   # Teatime cake, cookies, sundae desserts
│
├── src/
│   ├── app/
│   │   ├── (website)/
│   │   │   ├── layout.tsx         # Sticky dark navbar & charcoal footer
│   │   │   ├── page.tsx           # Complete Homepage matching Screenshot 1
│   │   │   ├── about/page.tsx     # Brand Story matching Screenshot 2
│   │   │   ├── products/
│   │   │   │   ├── page.tsx       # Dynamic product catalogue with color filters
│   │   │   │   └── [slug]/page.tsx# Product specifications & trade enquiry
│   │   │   ├── quality-process/   # Manufacturing process matching Screenshot 5
│   │   │   ├── bulk-orders/       # B2B trade inquiry form matching Screenshot 4
│   │   │   └── contact/page.tsx   # Contact page matching Screenshot 3
│   │   │
│   │   ├── admin/
│   │   │   ├── layout.tsx         # Protected admin layout & sidebar
│   │   │   ├── login/page.tsx     # Admin login with Supabase & 1-click Demo
│   │   │   ├── dashboard/page.tsx # Metrics: Total products, inquiries, messages
│   │   │   ├── products/page.tsx  # CRUD product management & visibility toggles
│   │   │   ├── inquiries/page.tsx # Trade inquiries status workflow
│   │   │   └── messages/page.tsx  # Contact form submissions viewer
│   │   │
│   │   ├── api/
│   │   │   ├── products/route.ts  # REST endpoint for products
│   │   │   ├── inquiries/route.ts # REST endpoint for B2B inquiries
│   │   │   └── contact/route.ts   # REST endpoint for contact notes
│   │   │
│   │   ├── globals.css            # Tailwind theme tokens & custom scrollbars
│   │   ├── sitemap.ts             # Dynamic XML sitemap
│   │   ├── robots.ts              # SEO robots configuration
│   │   ├── not-found.tsx          # Branded 404 error page
│   │   └── error.tsx              # Error boundary
│   │
│   ├── components/
│   │   ├── layout/                # Navbar, Footer, ComfitLogo
│   │   ├── home/                  # Hero, BrandStatement, ProductCollection, etc.
│   │   ├── products/              # ProductCard, ProductFilter, ProductDetailView
│   │   ├── forms/                 # BulkOrderForm, ContactForm, QuickEnquiryModal
│   │   ├── admin/                 # AdminShell, AdminSidebar, AdminHeader, ProductFormModal
│   │   └── ui/                    # Accordion, Modals, Buttons
│   │
│   ├── lib/
│   │   ├── supabase/              # client.ts, server.ts
│   │   ├── validations/           # Zod schemas for forms
│   │   ├── constants.ts           # Company info, addresses, seed constants
│   │   └── utils.ts               # Class merging & formatters
│   │
│   └── services/
│       ├── product.service.ts     # Supabase fetch + local fallback
│       ├── inquiry.service.ts     # Bulk order submission & status management
│       └── contact.service.ts     # Contact submissions & viewer
│
├── supabase/
│   ├── migrations/
│   │   └── 20240101000000_init_comfit_schema.sql  # Full DB schema + RLS policies
│   └── seed.sql                   # Initial product seed data
│
└── .env.example
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm start
```

---

## 🗄️ Supabase Setup Instructions

1. Create a project at [supabase.com](https://supabase.com).
2. Go to the **SQL Editor** in your Supabase dashboard.
3. Paste and execute the contents of `supabase/migrations/20240101000000_init_comfit_schema.sql`.
4. Paste and execute the seed data from `supabase/seed.sql`.
5. Create a **Storage Bucket** named `product-images` with public read access.
6. Copy `.env.example` to `.env.local` and fill in your keys:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-secret-key
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

---

## 🛡️ Admin Dashboard Access

- **Route**: [http://localhost:3000/admin](http://localhost:3000/admin) (redirects to `/admin/login`)
- **Default Credentials**:
  - **Email**: `admin@comfitfoods.com`
  - **Password**: `comfit2024`
- **Instant Demo Button**: Use the **"Instant Demo Admin Login"** button on `/admin/login` for 1-click test access.
