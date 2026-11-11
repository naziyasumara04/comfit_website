import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FFFCF8]">
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 py-16 sm:py-24 lg:py-32 text-center w-full">
        <span className="text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-[0.25em] font-semibold text-[#C9184A] block mb-2 sm:mb-3">
          404 ERROR
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C2C40] leading-tight">
          Page not found.
        </h1>
        <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-stone-600 leading-relaxed max-w-lg mx-auto">
          The page you are looking for doesn&apos;t exist or may have been moved. Let&apos;s guide you back to our products and company story.
        </p>
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-[#C9184A] text-white text-xs uppercase tracking-wider font-semibold rounded-lg hover:bg-[#a5133c] transition-colors min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <Link
            href="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 border border-stone-300 text-[#1C2C40] text-xs uppercase tracking-wider font-semibold rounded-lg hover:bg-stone-50 transition-colors min-h-[44px]"
          >
            Explore Products
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

