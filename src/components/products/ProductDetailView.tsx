'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Check, Package, Clock, ShieldCheck, Heart } from 'lucide-react';
import { Product } from '@/types';
import { QuickEnquiryModal } from '@/components/forms/QuickEnquiryModal';

interface ProductDetailViewProps {
  product: Product;
  relatedProducts: Product[];
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  product,
  relatedProducts,
}) => {
  const images = product.gallery && product.gallery.length > 0
    ? product.gallery
    : [product.image_url];

  const [activeImage, setActiveImage] = useState(images[0] || product.image_url);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* Product Top Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

        {/* Left: Gallery Images */}
        <div className="lg:col-span-6 space-y-4">
          {/* Main Photo */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-stone-200/90 bg-stone-100 group">
            <Image
              src={activeImage}
              alt={product.name}
              fill
              priority
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-white/95 backdrop-blur-sm text-stone-800 text-xs font-semibold px-3 py-1 rounded shadow-sm border border-stone-200 uppercase tracking-widest">
                {product.pack_size}
              </span>
            </div>
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex space-x-3 overflow-x-auto pb-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImage(img)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 bg-stone-100 ${activeImage === img ? 'border-[#C9184A] shadow-md' : 'border-stone-200 opacity-70 hover:opacity-100'
                    }`}
                >
                  <Image src={img} alt={`${product.name} preview ${i + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Info & Purchase/Trade Actions */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: product.color_code || '#C9184A' }}
              />
              <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#267B43]">
                {product.category} · GUJARAT GROWN
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C2C40] tracking-tight leading-[1.12]">
              {product.name}
            </h1>

            <p className="mt-3 text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase text-[#C9184A]">
              {product.short_description}
            </p>
          </div>

          <div className="prose text-xs sm:text-sm text-stone-600 leading-relaxed pt-2 border-t border-stone-200">
            <p>{product.description}</p>
          </div>

          {/* Applications Pills */}
          {product.applications && product.applications.length > 0 && (
            <div>
              <span className="text-[11px] uppercase tracking-wider font-semibold text-stone-700 block mb-2">
                Recommended Applications
              </span>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((app) => (
                  <span
                    key={app}
                    className="inline-flex items-center text-xs bg-[#F4F0E8] text-[#1C2C40] px-3 py-1 rounded-full font-medium"
                  >
                    <Check className="w-3 h-3 text-[#267B43] mr-1.5" />
                    {app}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Quick Specifications Highlights */}
          <div className="grid grid-cols-2 gap-4 py-4 border-y border-stone-200 text-xs">
            <div className="flex items-start space-x-2.5">
              <Package className="w-4 h-4 text-[#C9184A] flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-stone-800 block">Packaging Format</span>
                <span className="text-stone-500">250g Pouch / 10-20kg Master Carton</span>
              </div>
            </div>
            <div className="flex items-start space-x-2.5">
              <Clock className="w-4 h-4 text-[#267B43] flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-stone-800 block">Shelf Life</span>
                <span className="text-stone-500">12 Months (Sealed)</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="flex-1 py-3.5 px-6 bg-[#C9184A] hover:bg-[#a5133c] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-full shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center space-x-2 group"
            >
              <span>Request Trade Pricing</span>
              <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <Link
              href={`/bulk-orders?product=${product.slug}`}
              className="flex-1 py-3.5 px-6 border border-stone-300 hover:border-stone-900 text-[#1C2C40] text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-full transition-all duration-200 flex items-center justify-center space-x-2 hover:bg-stone-50 group"
            >
              <span>Bulk Order Enquiry</span>
              <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-stone-400 group-hover:text-stone-900" />
            </Link>
          </div>
        </div>

      </div>

      {/* Detailed Technical Specifications Table */}
      <div className="mt-16 sm:mt-24 pt-12 border-t border-stone-200">
        <h3 className="font-serif text-2xl sm:text-3xl text-[#1C2C40] mb-6 tracking-tight">
          Technical Specifications & Ingredients
        </h3>
        <div className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-sm overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm divide-y divide-stone-200">
            <tbody className="divide-y divide-stone-200">
              <tr>
                <td className="py-3 font-semibold text-stone-800 w-1/3">Common Name</td>
                <td className="py-3 text-stone-600">{product.name}</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold text-stone-800">Ingredients</td>
                <td className="py-3 text-stone-600">{product.ingredients || 'Raw Papaya, Sugar, Permitted Food Colours & Preservatives.'}</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold text-stone-800">Standard Pack Size</td>
                <td className="py-3 text-stone-600">250g Multi-layer Nitrogen Flushed Pouch</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold text-stone-800">Master Packaging Options</td>
                <td className="py-3 text-stone-600">10kg, 15kg, and 20kg Heavy-Duty Corrugated Cartons</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold text-stone-800">Storage Conditions</td>
                <td className="py-3 text-stone-600">{product.storage || 'Store in a cool, dry place away from heat and direct sunlight.'}</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold text-stone-800">Origin</td>
                <td className="py-3 text-stone-600">Manufactured with care in Sabarkantha, Gujarat, India</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16 sm:mt-24 pt-12 border-t border-stone-200">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1C2C40] tracking-tight">
              Explore Other Colours
            </h3>
            <Link
              href="/products"
              className="text-xs uppercase tracking-wider font-semibold text-[#C9184A] hover:underline"
            >
              View all products ↗
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.slice(0, 3).map((rel) => (
              <Link
                key={rel.id}
                href={`/products/${rel.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden border border-stone-200/90 hover:shadow-lg transition-all duration-300 p-5"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 mb-4">
                  <Image src={rel.image_url} alt={rel.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: rel.color_code || '#C9184A' }} />
                  <h4 className="font-serif text-lg font-semibold text-[#1C2C40] group-hover:text-[#C9184A] transition-colors">
                    {rel.name}
                  </h4>
                </div>
                <p className="text-xs text-stone-500 mt-1.5 line-clamp-2 leading-relaxed">{rel.short_description}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Enquiry Modal */}
      {isModalOpen && (
        <QuickEnquiryModal
          product={product}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

