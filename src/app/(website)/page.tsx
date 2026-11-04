import React from 'react';
import { Hero } from '@/components/home/Hero';
import { BrandStatement } from '@/components/home/BrandStatement';
import { ProductCollection } from '@/components/home/ProductCollection';
import { CreativeSection } from '@/components/home/CreativeSection';
import { AboutSection } from '@/components/home/AboutSection';
import { QualitySection } from '@/components/home/QualitySection';
import { BulkOrderCTA } from '@/components/home/BulkOrderCTA';
import { getProducts } from '@/services/product.service';

export const instant = false;

export default async function HomePage() {
  const products = await getProducts({ activeOnly: true });

  return (
    <div className="bg-[#FFFCF8]">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Brand Statement Section */}
      <BrandStatement />

      {/* 3. Product Collection (Supabase dynamic product fetching) */}
      <ProductCollection products={products} />

      {/* 4. Creative Inspiration Section */}
      <CreativeSection />

      {/* 5. About Brand Section */}
      <AboutSection />

      {/* 6. Quality & Process Section */}
      <QualitySection />

      {/* 7. Bulk Orders CTA Section */}
      <BulkOrderCTA />
    </div>
  );
}

