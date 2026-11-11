import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="bg-[#FFFCF8] py-12 sm:py-20 lg:py-24 border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left: Papaya Photography with Caption */}
          <div className="lg:col-span-6 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-200/90 group bg-stone-100">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/about/papaya-cut.jpg"
                  alt="Fresh green raw papaya cut open on stone slab"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
                />
              </div>

              {/* Caption Overlay */}
              <div className="bg-[#1A1A1A]/85 backdrop-blur-sm text-stone-300 px-3.5 sm:px-4 py-2 sm:py-2.5 text-[9px] sm:text-[11px] uppercase tracking-wider sm:tracking-[0.2em] font-medium flex items-center justify-between">
                <span>CUT THE PAPAYA / QUALITY INGREDIENTS AT EVERY STAGE</span>
              </div>
            </div>
          </div>

          {/* Right: Editorial Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Green Tracking Label */}
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider sm:tracking-[0.22em] font-semibold text-[#267B43] block mb-2 sm:mb-3">
              ROOTED IN GUJARAT
            </span>

            {/* Serif Heading */}
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#1C2C40] leading-tight tracking-tight">
              A simple fruit.
              <br />
              A colourful point of view.
            </h2>

            {/* Story Paragraph */}
            <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base text-stone-600 leading-relaxed">
              Established in 2021 in Sabarkantha, Gujarat, Comfit Foods brings a thoughtful approach to candied papaya.
              Part of GHK Foods, we&apos;re here for the people who turn simple ingredients into something special.
            </p>

            {/* CTA Button */}
            <div className="mt-6 sm:mt-8">
              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 border border-stone-300 hover:border-stone-900 text-[#1C2C40] text-xs sm:text-sm uppercase tracking-wider font-semibold rounded-lg transition-all duration-200 group bg-white/70 hover:bg-white min-h-[44px]"
              >
                <span>Get to know Comfit</span>
                <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-stone-400 group-hover:text-stone-900" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

