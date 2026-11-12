import React from 'react';
import Link from 'next/link';
import { ProductFilter } from '@/components/products/ProductFilter';
import { BulkOrderCTA } from '@/components/home/BulkOrderCTA';
import { getProducts } from '@/services/product.service';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Products | Candied Papaya Tutti Frutti Collection',
  description:
    'Browse the full Comfit Tutti Frutti catalogue: Red, Green, Yellow, and Rainbow Mix in 250g retail pouches and 10kg, 15kg, 20kg commercial cartons.',
};

export const instant = false;

export default async function ProductsPage() {
  const products = await getProducts({ activeOnly: true });

  return (
    <div className="bg-[#FFFCF8]">
      {/* Breadcrumb Navigation */}
      <div className="border-b border-stone-200/60 bg-[#FAF7F2] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-xs text-stone-500">
            <Link href="/" className="hover:text-stone-900 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#C9184A] font-medium">Our Products</span>
          </nav>
        </div>
      </div>

      {/* Header Banner */}
      <section className="py-10 sm:py-16 lg:py-20 border-b border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider sm:tracking-[0.22em] font-semibold text-[#267B43] block mb-2">
              THE COMFIT COLLECTION · SABARKANTHA, GUJARAT
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1C2C40] tracking-tight leading-[1.14] sm:leading-[1.12]">
              Find your colour of joy.
            </h1>
            <p className="mt-3 sm:mt-4 text-xs md:text-sm font-semibold tracking-wider sm:tracking-[0.16em] uppercase text-[#C9184A]">
              TASTE THE COLOURS OF JOY · CANDIED PAPAYA RANGE
            </p>
            <p className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base text-stone-600 leading-relaxed">
              Explore our complete range of candied papaya Tutti Frutti. Meticulously diced, gently candied and vacuum-sealed for consistent culinary excellence in bakeries and kitchens nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Products Listing & Filters */}
      <section className="py-8 sm:py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductFilter initialProducts={products} />
        </div>
      </section>

      {/* Bulk CTA */}
      <BulkOrderCTA
        customHeading="Looking for commercial master cartons?"
        customDescription="We supply 10kg, 15kg and 20kg corrugated formats tailored for bakeries and distributor networks."
        customButtonText="Discuss trade requirements"
      />
    </div>
  );
}

