'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  onEnquire?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onEnquire }) => {
  const router = useRouter();

  const handleEnquire = () => {
    if (onEnquire) {
      onEnquire(product);
    } else {
      router.push(`/bulk-orders?product=${product.slug}`);
    }
  };

  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-stone-200/90 hover:border-stone-400/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full">
      {/* Image Container with Badge */}
      <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden w-full">
        {/* Pack Size Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-block bg-white/95 backdrop-blur-sm text-stone-700 text-[10px] tracking-widest font-semibold uppercase px-2.5 py-1 rounded shadow-sm border border-stone-200/80">
            {product.pack_size || '250G POUCH'}
          </span>
        </div>

        <Link href={`/products/${product.slug}`} className="block w-full h-full relative">
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 25vw, 360px"
          />
        </Link>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Title with Colored Bullet */}
          <div className="flex items-center space-x-2">
            <span
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: product.color_code || '#C9184A' }}
            />
            <h3 className="font-serif text-base sm:text-lg font-semibold text-[#1C2C40] group-hover:text-[#C9184A] transition-colors line-clamp-1">
              <Link href={`/products/${product.slug}`}>{product.name}</Link>
            </h3>
          </div>

          {/* Description */}
          <p className="mt-2 text-xs sm:text-[13px] text-stone-500 leading-relaxed line-clamp-2">
            {product.short_description}
          </p>
        </div>

        {/* Action Links */}
        <div className="mt-5 pt-3.5 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2 text-xs font-medium">
          <button
            type="button"
            onClick={handleEnquire}
            className="text-stone-500 hover:text-stone-900 transition-colors underline-offset-2 hover:underline py-1"
          >
            Enquire for pricing
          </button>

          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center text-[#C9184A] hover:text-[#9c1238] font-semibold transition-colors group/link py-1"
          >
            <span>View Details</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-0.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

