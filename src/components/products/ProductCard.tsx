'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  onEnquire?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onEnquire }) => {
  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-stone-200/90 hover:border-stone-400/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Image Container with Badge */}
      <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
        {/* Pack Size Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-block bg-white/95 backdrop-blur-sm text-stone-700 text-[10px] tracking-widest font-semibold uppercase px-2.5 py-1 rounded shadow-sm border border-stone-200/80">
            {product.pack_size || '250G POUCH'}
          </span>
        </div>

        <Link href={`/products/${product.slug}`} className="block w-full h-full">
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </Link>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Title with Colored Bullet */}
          <div className="flex items-center space-x-2">
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: product.color_code || '#C9184A' }}
            />
            <h3 className="font-serif text-lg font-semibold text-[#1C2C40] group-hover:text-[#C9184A] transition-colors">
              <Link href={`/products/${product.slug}`}>{product.name}</Link>
            </h3>
          </div>

          {/* Description */}
          <p className="mt-2 text-xs sm:text-[13px] text-stone-500 leading-relaxed line-clamp-2">
            {product.short_description}
          </p>
        </div>

        {/* Action Links */}
        <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-medium">
          <button
            type="button"
            onClick={() => onEnquire ? onEnquire(product) : window.location.assign(`/bulk-orders?product=${product.slug}`)}
            className="text-stone-500 hover:text-stone-900 transition-colors underline-offset-2 hover:underline"
          >
            Enquire for pricing
          </button>

          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center text-[#C9184A] hover:text-[#9c1238] font-semibold transition-colors group/link"
          >
            <span>View Details</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-0.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

