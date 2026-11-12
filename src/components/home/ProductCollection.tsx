'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ProductCard } from '@/components/products/ProductCard';
import { Product } from '@/types';
import { QuickEnquiryModal } from '@/components/forms/QuickEnquiryModal';

interface ProductCollectionProps {
  products: Product[];
}

export const ProductCollection: React.FC<ProductCollectionProps> = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section className="bg-[#FFFCF8] py-12 sm:py-20 lg:py-24 border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 lg:mb-16 gap-4">
          <div>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider sm:tracking-[0.22em] font-semibold text-stone-500 block mb-2">
              THE COMFIT COLLECTION
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1C2C40] tracking-tight">
              Find your colour of joy.
            </h2>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center text-xs font-semibold tracking-wider sm:tracking-widest uppercase text-[#C9184A] hover:text-[#9c1238] transition-colors group py-1"
          >
            <span>Discover All Products</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* 4-Column Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onEnquire={(prod) => setSelectedProduct(prod)}
            />
          ))}
        </div>
      </div>

      {/* Quick Enquiry Modal */}
      {selectedProduct && (
        <QuickEnquiryModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};

