import React from 'react';

export const BrandStatement: React.FC = () => {
  return (
    <section className="bg-[#FFFCF8] py-10 sm:py-16 lg:py-20 border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          
          {/* Left: Small Uppercase Tracked Label */}
          <div className="lg:col-span-4 border-l-2 border-[#C9184A] pl-4 sm:pl-6">
            <p className="text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-[0.22em] font-semibold text-stone-500 leading-relaxed">
              SMALL INGREDIENT.
              <br />
              BEAUTIFUL POSSIBILITIES.
            </p>
          </div>

          {/* Right: Editorial Serif Quote */}
          <div className="lg:col-span-8">
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#1C2C40] leading-snug tracking-normal">
              Bright Colours. Delicious Moments.{' '}
              <span className="text-stone-500 font-light block sm:inline mt-1 sm:mt-0">
                A little sweetness, a lot of happiness in every creation.
              </span>
            </h2>
          </div>

        </div>
      </div>
    </section>
  );
};

