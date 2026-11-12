import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface BulkOrderCTAProps {
  customHeading?: string;
  customDescription?: string;
  customButtonText?: string;
  buttonVariant?: 'outline' | 'filled';
  href?: string;
}

export const BulkOrderCTA: React.FC<BulkOrderCTAProps> = ({
  customHeading = 'A little colour. A bigger possibility.',
  customDescription = "For bakeries, distributors and retailers: let's find the right format for your business.",
  customButtonText = 'Discuss bulk orders',
  buttonVariant = 'outline',
  href = '/bulk-orders',
}) => {
  return (
    <section className="bg-[#C9184A] text-white py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8">

          {/* Left Text Block */}
          <div className="max-w-2xl">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider sm:tracking-[0.25em] font-semibold text-pink-200 block mb-2">
              LET&apos;S CREATE SOMETHING SWEET
            </span>
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight tracking-tight">
              {customHeading}
            </h2>
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-pink-100 leading-relaxed max-w-xl">
              {customDescription}
            </p>
          </div>

          {/* Right Action Button */}
          <div className="w-full sm:w-auto flex-shrink-0">
            <Link
              href={href}
              className={`w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-xs sm:text-sm uppercase tracking-wider font-semibold transition-all duration-200 group min-h-[44px] ${buttonVariant === 'filled'
                  ? 'bg-white text-[#C9184A] hover:bg-pink-50 rounded-full shadow-md'
                  : 'border border-white/70 hover:border-white text-white rounded-lg hover:bg-white hover:text-[#C9184A]'
                }`}
            >
              <span>{customButtonText}</span>
              <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

