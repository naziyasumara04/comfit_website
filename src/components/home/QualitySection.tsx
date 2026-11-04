import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const QualitySection: React.FC = () => {
  return (
    <section className="bg-[#E9EEE5] py-16 sm:py-20 border-b border-stone-300/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left: Heading Block */}
          <div className="lg:col-span-7">
            <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#267B43] block mb-3">
              CARE, FROM FRUIT TO FINISH
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-4xl text-[#1C2C40] leading-snug tracking-tight">
              A joyful ingredient deserves a thoughtful process.
            </h2>
          </div>

          {/* Right: Description & CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              From preparation to high-barrier sealed pouches, discover the care behind the cubes — and the practical details behind every pack.
            </p>

            <div>
              <Link
                href="/quality-process"
                className="inline-flex items-center text-xs uppercase tracking-wider font-semibold text-[#267B43] hover:text-[#184e2a] transition-colors group"
              >
                <span>Explore Quality & Process</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

