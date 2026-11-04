import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FFFCF8]">
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 py-24 sm:py-32 text-center">
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C9184A] block mb-3">
          404 ERROR
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#1C2C40] leading-tight">
          Page not found.
        </h1>
        <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed">
          The page you are looking for doesn&apos;t exist or may have been moved. Let&apos;s guide you back to our products and company story.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-[#C9184A] text-white text-xs uppercase tracking-wider font-semibold rounded hover:bg-[#a5133c] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center px-6 py-3 border border-stone-300 text-[#1C2C40] text-xs uppercase tracking-wider font-semibold rounded hover:bg-stone-50 transition-colors"
          >
            Explore Products
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

