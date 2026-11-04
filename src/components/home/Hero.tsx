'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#FFFCF8] pt-12 md:pt-16 pb-16 lg:pb-24 border-b border-stone-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand Story & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Green Category Micro-label */}
            <div className="mb-4">
              <span className="text-[11px] md:text-xs tracking-[0.2em] uppercase font-semibold text-[#267B43] inline-block">
                COMFIT FOODS – THE COLOUR OF EVERYDAY CELEBRATIONS
              </span>
            </div>

            {/* Giant Editorial Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C2C40] leading-[1.12] tracking-tight">
              Adding Colours of Joy to Every Bite!
            </h1>

            {/* Pink Subtitle */}
            <p className="mt-4 text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-[#C9184A]">
              TASTE THE COLOURS OF JOY.
            </p>

            {/* Intro Paragraph */}
            <p className="mt-5 text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl">
              Discover the delightful taste and vibrant colours of Comfit Tutti Frutti.
              Bringing sweetness, quality and happiness to every bakery and dessert creation.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#C9184A] hover:bg-[#a5133c] text-white text-xs md:text-sm tracking-wider uppercase font-medium rounded transition-all duration-200 group shadow-sm"
              >
                Explore Our Products
                <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/bulk-orders"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-stone-300 hover:border-stone-900 text-[#1C2C40] text-xs md:text-sm tracking-wider uppercase font-medium rounded transition-all duration-200 group"
              >
                Bulk Order Inquiry
                <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-stone-400 group-hover:text-stone-900" />
              </Link>
            </div>

            {/* Location Tag */}
            <div className="mt-12 pt-6 border-t border-stone-200/80">
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-stone-400">
                SABARKANTHA, GUJARAT · EST. 2021
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-stone-100 border border-stone-200/80 group">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full">
                <Image
                  src="/images/hero/hero-tutti-frutti.jpg"
                  alt="Comfit Tutti Frutti bakery cake and vibrant packaging"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Editorial Caption Bar */}
              <div className="bg-[#1A1A1A]/90 backdrop-blur-sm text-white px-4 py-3 flex items-center justify-between text-xs tracking-wider">
                <span className="text-[11px] uppercase tracking-widest text-stone-300 font-medium">
                  Tutti Frutti / Bakery & Dessert Range
                </span>
                <span className="text-[10px] uppercase font-semibold text-[#C9184A] bg-white/10 px-2 py-0.5 rounded">
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

