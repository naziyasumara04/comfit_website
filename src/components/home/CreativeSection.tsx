import React from 'react';
import Image from 'next/image';
import { INSPIRATIONS } from '@/lib/constants';

export const CreativeSection: React.FC = () => {
  return (
    <section className="bg-[#F4F0E8] py-12 sm:py-20 lg:py-24 border-b border-stone-300/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-8 sm:mb-12 lg:mb-16">
          <div className="lg:col-span-8">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider sm:tracking-[0.22em] font-semibold text-stone-500 block mb-2">
              THE INGREDIENT SOUL OF CREATIVITY
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#1C2C40] leading-tight tracking-tight">
              Inspiring Creations, One Colourful Bite at a Time.
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Explore endless possibilities with Comfit Tutti Frutti — make every treat more colourful and delicious.
            </p>
          </div>
        </div>

        {/* 3 Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {INSPIRATIONS.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col bg-transparent overflow-hidden transition-all duration-300"
            >
              {/* Photo */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-stone-200 shadow-sm">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Text Meta */}
              <div className="pt-5 pb-2">
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-semibold text-stone-500 block mb-1.5">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#1C2C40] font-medium leading-snug group-hover:text-[#C9184A] transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-[13px] text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

