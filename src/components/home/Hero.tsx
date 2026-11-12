'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#FFFCF8] pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 lg:pb-24 border-b border-stone-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand Story & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Green Category Micro-label */}
            <div className="mb-3 sm:mb-4">
              <span className="text-[10px] sm:text-xs tracking-wider sm:tracking-[0.2em] uppercase font-semibold text-[#267B43] inline-block">
                COMFIT FOODS – THE COLOUR OF EVERYDAY CELEBRATIONS
              </span>
            </div>

            {/* Giant Editorial Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1C2C40] leading-[1.14] sm:leading-[1.12] tracking-tight">
              Adding Colours of Joy to Every Bite!
            </h1>

            {/* Pink Subtitle */}
            <p className="mt-3 sm:mt-4 text-[11px] sm:text-xs md:text-sm font-semibold tracking-[0.14em] sm:tracking-[0.16em] uppercase text-[#C9184A]">
              TASTE THE COLOURS OF JOY.
            </p>

            {/* Intro Paragraph */}
            <p className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base text-stone-600 leading-relaxed max-w-xl">
              Discover the delightful taste and vibrant colours of Comfit Tutti Frutti.
              Bringing sweetness, quality and happiness to every bakery and dessert creation.
            </p>

            {/* CTAs */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-[#C9184A] hover:bg-[#a5133c] text-white text-xs sm:text-sm tracking-wider uppercase font-semibold rounded-lg transition-all duration-200 group shadow-sm min-h-[44px]"
              >
                <span>Explore Our Products</span>
                <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/bulk-orders"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 border border-stone-300 hover:border-stone-900 text-[#1C2C40] text-xs sm:text-sm tracking-wider uppercase font-semibold rounded-lg transition-all duration-200 group bg-white/50 hover:bg-white min-h-[44px]"
              >
                <span>Bulk Order Inquiry</span>
                <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-stone-400 group-hover:text-stone-900" />
              </Link>
            </div>

            {/* Location Tag */}
            <div className="mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-stone-200/80">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider sm:tracking-[0.2em] font-medium text-stone-400">
                SABARKANTHA, GUJARAT · EST. 2021
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Photography */}
          <div className="lg:col-span-6 relative w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-stone-100 border border-stone-200/80 group">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full">
                <Image
                  src="/images/hero/hero-tutti-frutti.jpg"
                  alt="Comfit Tutti Frutti bakery cake and vibrant packaging"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
                />
              </div>

              {/* Editorial Caption Bar */}
              <div className="bg-[#1A1A1A]/95 backdrop-blur-sm text-white px-3.5 sm:px-4 py-2.5 sm:py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-2 text-xs tracking-wider">
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider sm:tracking-widest text-stone-300 font-medium">
                  Tutti Frutti / Bakery & Dessert Range
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase font-semibold text-[#C9184A] bg-white/10 px-2 py-0.5 rounded">
                  250g Pouch & Bulk Master Cartons
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

