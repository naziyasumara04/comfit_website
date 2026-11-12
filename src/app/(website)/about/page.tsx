import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUpRight,
  Heart,
  ShieldCheck,
  Star,
  Award,
  TrendingUp,
  Flame,
  Users,
  Lightbulb,
} from 'lucide-react';
import { ReviewSection } from '@/components/about/ReviewSection';
import { BulkOrderCTA } from '@/components/home/BulkOrderCTA';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | The Story of Comfit Foods – Joy has roots.',
  description:
    'Ours begin in Gujarat. With papaya, possibility, and the belief that even the smallest ingredient can make a moment feel special. Comfit Foods, part of GHK Foods.',
};

export default function AboutPage() {
  const pillarCards = [
    {
      title: 'STEADY GROWTH',
      icon: TrendingUp,
      iconBg: 'bg-pink-50 text-[#C9184A]',
      description:
        'From a local market to a nationwide supplier, our journey is shaped by consistency and care.',
    },
    {
      title: 'QUALITY FIRST',
      icon: Award,
      iconBg: 'bg-amber-50 text-amber-600',
      description:
        'We follow rigorous food safety practices so every bite is fresh, safe and delicious.',
    },
    {
      title: 'CLIENT FOCUS',
      icon: Users,
      iconBg: 'bg-emerald-50 text-[#267B43]',
      description:
        'Our customers come first. We build long-term relationships through trust and value.',
    },
    {
      title: 'INNOVATION',
      icon: Lightbulb,
      iconBg: 'bg-indigo-50 text-indigo-600',
      description:
        'We keep improving our processes to deliver the colors, texture and flavours you expect.',
    },
  ];

  const lovePoints = [
    {
      title: 'FRESH INGREDIENTS',
      icon: Heart,
      iconColor: 'text-[#C9184A]',
      iconBg: 'bg-[#FFF0F3] border-pink-100/90',
      description:
        'Carefully selected ingredients for freshness, colour and great taste.',
    },
    {
      title: 'TRADITIONAL TASTE',
      icon: Flame,
      iconColor: 'text-[#E07A1E]',
      iconBg: 'bg-[#FFF7ED] border-orange-100/90',
      description:
        'Authentic flavours that bring back childhood memories.',
    },
    {
      title: 'HYGIENIC PROCESS',
      icon: ShieldCheck,
      iconColor: 'text-[#0284C7]',
      iconBg: 'bg-[#F0F9FF] border-sky-100/90',
      description:
        'Prepared with a strict focus on hygiene and safe handling.',
    },
    {
      title: 'TRUSTED QUALITY',
      icon: Star,
      iconColor: 'text-[#16A34A]',
      iconBg: 'bg-[#F0FDF4] border-emerald-100/90',
      description:
        'Loved by families, bakeries and local retailers across India.',
    },
  ];

  return (
    <div className="bg-[#FFFCF8]">
      {/* 1. HERO SECTION: "JOY HAS ROOTS." */}
      <section className="pt-8 sm:pt-14 pb-12 sm:pb-20 border-b border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-end mb-8 sm:mb-14">
            <div className="lg:col-span-7">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider sm:tracking-[0.22em] font-semibold text-[#267B43] block mb-2 sm:mb-3">
                OUR STORY · COMFIT FOODS / GHK FOODS
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-7xl text-[#1C2C40] tracking-tight leading-[1.08] sm:leading-[1.06]">
                Joy has roots.
              </h1>
            </div>

            <div className="lg:col-span-5 space-y-2 sm:space-y-3">
              <p className="text-xs sm:text-sm md:text-base text-stone-600 leading-relaxed">
                Ours begin in Gujarat. With papaya, possibility, and the belief that even the smallest ingredient can make a moment feel special.
              </p>
              <p className="text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-[0.2em] font-semibold text-[#C9184A]">
                TASTE THE COLOURS OF JOY.
              </p>
            </div>
          </div>

          {/* Visual Grid: Papaya & Finished Gem */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">

            {/* Left Image: Raw Green Papaya */}
            <div className="lg:col-span-7 w-full">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-sm border border-stone-200/80 bg-stone-100 group">
                <Image
                  src="/images/about/papaya-wide.jpg"
                  alt="Raw green papaya sliced on stone slab"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 60vw"
                />
              </div>
              <span className="text-[9px] sm:text-[11px] uppercase tracking-wider sm:tracking-[0.2em] text-stone-400 font-medium mt-2 sm:mt-3 block">
                THE BEGINNING / A SIMPLE FRUIT, FULL OF POSSIBILITY
              </span>
            </div>

            {/* Right Column: Quote + Tutti Frutti Dish */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4 sm:space-y-6 w-full">
              {/* Editorial Quote in Serif Italics */}
              <div className="pt-1 sm:pt-2">
                <blockquote className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-[#C9184A] leading-snug tracking-normal">
                  From nature&apos;s canvas
                  <br />
                  to the baker&apos;s palette.
                </blockquote>
              </div>

              {/* Tutti Frutti Ceramic Dish */}
              <div className="w-full">
                <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-sm border border-stone-200/80 bg-stone-100 group">
                  <Image
                    src="/images/about/tutti-frutti-bowl.jpg"
                    alt="Colourful candied papaya tutti frutti gems"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 40vw"
                  />
                </div>
                <span className="text-[9px] sm:text-[11px] uppercase tracking-wider sm:tracking-[0.2em] text-stone-400 font-medium mt-2 sm:mt-3 block">
                  THE POSSIBILITIES / COLOUR, CUT SMALL.
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. BUILDING TRUST SINCE 2021 */}
      <section className="bg-[#F5F0E8] py-12 sm:py-20 lg:py-24 border-b border-stone-300/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
            {/* Left Column: Brand Story */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5">
              <div>
                <span className="inline-block px-3.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-[#C9184A] text-[10px] font-semibold tracking-widest uppercase mb-2 sm:mb-3">
                  2021 AND BEYOND
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#1C2C40] tracking-tight leading-tight">
                  BUILDING TRUST
                  <br />
                  SINCE <span className="font-light italic text-[#C9184A]">2021</span>
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pt-1">
                Based in Sabarkantha, Gujarat, COMFIT FOODS is a passionate
                manufacturer of premium Tutti Frutti under the trusted brand name
                Tutti Frutti. What began as a vision to bring high-quality
                confectionery ingredients has grown into a name trusted by
                bakeries, retailers and food creators.
              </p>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                We transform carefully selected papayas into colourful, delicious
                cubes used in bakery products, ice creams, pan masala and desserts.
                Every batch is made with a commitment to authentic taste, hygiene
                and customer satisfaction.
              </p>

              {/* Checklist */}
              <div className="pt-3 sm:pt-4 grid grid-cols-2 gap-2.5 sm:gap-3">
                {[
                  'Authentic taste',
                  'Premium quality',
                  '100% hygienic',
                  'Timely delivery',
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs font-medium text-stone-800">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-[#267B43] flex items-center justify-center text-[10px] flex-shrink-0">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: 4 Pillar Cards (2x2 Grid) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
              {pillarCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-2.5 sm:space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-xs border border-stone-100 mb-1">
                      <div className={`w-8 h-8 rounded-lg ${card.iconBg} flex items-center justify-center`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="font-serif text-base font-semibold text-[#1C2C40] tracking-wide">
                      {card.title}
                    </h3>

                    <p className="text-xs text-stone-500 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUNDER & LEADERSHIP CARD */}
      <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-white via-[#FAF7F2] to-[#F4EFE6] border border-stone-200/90 shadow-xl overflow-hidden p-5 sm:p-8 lg:p-14">

          {/* Subtle Decorative Background Watermark */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-[#C9184A]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center relative z-10">

            {/* Left: Artisan Craftsmanship & Monogram Portrait Frame */}
            <div className="lg:col-span-5 flex flex-col items-center w-full">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-stone-200 bg-stone-900 group">
                <Image
                  src="/images/about/chef-cutting.jpg"
                  alt="Artisan food craftsmanship at Comfit Foods"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 40vw"
                />

                {/* Gradient Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

                {/* Floating Crest & Monogram */}
                <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 flex items-center space-x-3 sm:space-x-4 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/60 shadow-xl">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#C9184A] to-[#8E0E37] text-white flex items-center justify-center font-serif text-base sm:text-xl font-bold tracking-wider shadow-md ring-2 sm:ring-4 ring-pink-100 flex-shrink-0">
                    MH
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-serif text-base sm:text-lg font-semibold text-[#1C2C40] leading-tight truncate">
                      Mr. Mohammadhusain
                    </h4>
                    <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#C9184A] mt-0.5">
                      Founder & Owner
                    </p>
                    <span className="text-[9px] sm:text-[10px] text-stone-500 block mt-0.5 truncate">
                      Sabarkantha, Gujarat · Est. 2021
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Visionary Story & Leadership Narrative */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div>
                <span className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-[#C9184A] text-[10px] font-semibold tracking-widest uppercase mb-2 sm:mb-3">
                  <Star className="w-3 h-3 text-[#C9184A] fill-[#C9184A]" />
                  <span>VISIONARY LEADERSHIP & HERITAGE</span>
                </span>

                <h3 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#1C2C40] tracking-tight leading-tight">
                  Mr. Mohammadhusain
                </h3>

                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider sm:tracking-widest text-[#C9184A] mt-1">
                  Founder & Managing Director, Comfit Foods
                </p>
              </div>

              {/* Inspiring Founder Quote */}
              <blockquote className="border-l-2 border-[#C9184A] pl-3.5 sm:pl-5 py-1">
                <p className="font-serif italic text-sm sm:text-base md:text-lg text-stone-700 leading-snug">
                  &ldquo;Every colourful cube should carry the same sweetness, crisp texture and pure joy as a homemade celebration.&rdquo;
                </p>
              </blockquote>

              {/* Story Narrative */}
              <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                <p>
                  Mr. Mohammadhusain is the driving force behind Comfit Foods.
                  With deep experience in confectionery and sweet manufacturing, he founded the brand with a firm commitment to purity, consistent cut quality, and authentic taste.
                </p>
                <p>
                  Guided by his vision, Comfit Foods transforms farm-fresh raw papayas from Gujarat into radiant red, green, yellow and rainbow Tutti Frutti cubes trusted by bakeries, commercial kitchens, and sweet creators across India.
                </p>
              </div>

              {/* 3 Executive Highlight Pills */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                <div className="bg-white/90 border border-stone-200/90 rounded-xl p-3 shadow-2xs">
                  <span className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold block">Craft Ethos</span>
                  <p className="font-serif text-xs font-semibold text-stone-800 mt-0.5">100% Real Papaya</p>
                </div>
                <div className="bg-white/90 border border-stone-200/90 rounded-xl p-3 shadow-2xs">
                  <span className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold block">Quality Standard</span>
                  <p className="font-serif text-xs font-semibold text-stone-800 mt-0.5">Hygienic Cleanroom</p>
                </div>
                <div className="bg-white/90 border border-stone-200/90 rounded-xl p-3 shadow-2xs">
                  <span className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold block">Trust</span>
                  <p className="font-serif text-xs font-semibold text-stone-800 mt-0.5">Pan-India Delivery</p>
                </div>
              </div>

              {/* Actions & Founder Signature Stamp */}
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-stone-200/80">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-[#C9184A] hover:bg-[#a5133c] text-white text-xs uppercase tracking-wider font-semibold rounded-full shadow-sm transition-all duration-200 group min-h-[44px]"
                  >
                    <span>Connect with Our Team</span>
                    <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>

                  <Link
                    href="/bulk-orders"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 border border-stone-300 hover:border-stone-800 text-stone-700 hover:text-stone-900 text-xs uppercase tracking-wider font-semibold rounded-full bg-white/70 transition-all duration-200 min-h-[44px]"
                  >
                    <span>Discuss Trade</span>
                  </Link>
                </div>

                <div className="text-left sm:text-right pt-2 sm:pt-0">
                  <span className="font-serif italic text-lg sm:text-xl text-stone-800 font-medium block tracking-wide">
                    Mohammadhusain
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-stone-400 block">
                    Comfit Foods Founder
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. FROM A SMALL TOWN IN GUJARAT TO EVERY CELEBRATION (White Background Redesign) */}
      <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto space-y-12">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div>
              <span className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-200/80 text-[10px] uppercase tracking-[0.22em] font-semibold text-[#C9184A]">
                <Star className="w-3 h-3 text-[#C9184A] fill-[#C9184A]" />
                <span>GROWING WITH US</span>
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C2C40] tracking-tight leading-tight">
              FROM A SMALL TOWN IN GUJARAT
              <br />
              <span className="text-[#C9184A]">TO EVERY CELEBRATION</span>
            </h2>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto pt-1">
              Comfit Foods is dedicated to delivering tasty, premium snack and confectionery ingredients.
              Our goal is to bring happiness through flavour while maintaining absolute freshness and food safety.
            </p>
          </div>

          {/* 2 Visual Story Cards (Before & After Progression) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* Card 1: Raw Harvest */}
            <div className="group rounded-2xl overflow-hidden border border-stone-200 bg-stone-50 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                <Image
                  src="/images/about/papaya-wide.jpg"
                  alt="Fresh green raw papaya cut on stone slab in Gujarat"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 max-w-[calc(100%-1.5rem)]">
                  <span className="bg-white/95 backdrop-blur-sm text-[#267B43] border border-emerald-100 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider px-2.5 sm:px-3 py-1 rounded-full shadow-sm block truncate">
                    01 · Origin: Selected Raw Papaya
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5 bg-white border-t border-stone-100">
                <h4 className="font-serif text-base sm:text-lg text-[#1C2C40] font-semibold">
                  Sourced from Orchards of Gujarat
                </h4>
                <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                  Carefully harvested mature green papayas, selected for firm texture and natural moisture retention.
                </p>
              </div>
            </div>

            {/* Card 2: Finished Sweet Gems */}
            <div className="group rounded-2xl overflow-hidden border border-stone-200 bg-stone-50 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                <Image
                  src="/images/about/tutti-frutti-bowl.jpg"
                  alt="Finished colourful tutti frutti gems bowl"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 max-w-[calc(100%-1.5rem)]">
                  <span className="bg-white/95 backdrop-blur-sm text-[#C9184A] border border-pink-100 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider px-2.5 sm:px-3 py-1 rounded-full shadow-sm block truncate">
                    02 · Result: Colourful Tutti Frutti
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5 bg-white border-t border-stone-100">
                <h4 className="font-serif text-base sm:text-lg text-[#1C2C40] font-semibold">
                  Crafted for Everyday Creations
                </h4>
                <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                  Precision-cut cubes infused with clean sugar sweetness, vacuum-sealed for bakers, confectioners and households.
                </p>
              </div>
            </div>

          </div>


        </div>
      </section>

      {/* 5. WHY PEOPLE LOVE OUR TUTTI FRUTTI */}
      <section className="py-12 sm:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-stone-200/70">
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[40px] text-[#1C2C40] tracking-wide uppercase font-normal">
            WHY PEOPLE LOVE OUR TUTTI FRUTTI
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 leading-relaxed max-w-xl mx-auto">
            Simple ingredients, celebrated taste, and trusted quality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mt-8 sm:mt-14">
          {lovePoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-5 sm:p-7 lg:p-8 rounded-2xl border border-stone-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start"
              >
                <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${item.iconBg} border flex items-center justify-center mb-4 sm:mb-6`}>
                  <Icon className={`w-5 h-5 ${item.iconColor} stroke-[1.8]`} />
                </div>

                <h3 className="font-serif text-sm sm:text-base lg:text-lg font-bold text-[#1C2C40] tracking-wide uppercase mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-stone-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. GOOD WORDS. SWEET MEMORIES & INTERACTIVE REVIEW FORM */}
      <ReviewSection />

      {/* 7. BOTTOM CTA BANNER (Unified Global Component) */}
      <BulkOrderCTA
        customHeading="Good things begin with a conversation."
        customDescription="Tell us what you're creating. We'll help you explore the right colours and formats."
        customButtonText="Discuss bulk orders"
        buttonVariant="filled"
      />
    </div>
  );
}
