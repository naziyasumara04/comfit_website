import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { BulkOrderCTA } from '@/components/home/BulkOrderCTA';
import { PROCESS_STEPS } from '@/lib/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quality & Process | How We Craft Tutti Frutti',
  description:
    'From raw papaya harvesting in Gujarat to uniform cutting, sugar candying, and high-barrier pouch sealing. Explore the food manufacturing standards of Comfit Foods.',
};

export default function QualityProcessPage() {
  return (
    <div className="bg-[#FFFCF8]">
      {/* Breadcrumbs */}
      <div className="border-b border-stone-200/60 bg-[#FAF7F2] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-xs text-stone-500">
            <Link href="/" className="hover:text-stone-900 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#C9184A] font-medium">Quality & Process</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-14 sm:py-20 border-b border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left Narrative */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#267B43] block mb-3">
                COMFIT FOODS · CARE FROM FRUIT TO FINISH
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C2C40] tracking-tight leading-[1.12]">
                Thoughtful care.
                <br />
                Beautiful little possibilities.
              </h1>
              <p className="mt-4 text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-[#C9184A]">
                TASTE THE COLOURS OF JOY · PROCESS & STANDARDS
              </p>
              <p className="mt-5 text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl">
                From the first piece of papaya to the final sealed pouch, explore the journey behind a colourful baking ingredient — and the details that help you use it with confidence.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#process-steps"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-[#C9184A] hover:bg-[#a5133c] text-white text-xs md:text-sm tracking-wider uppercase font-medium rounded transition-all duration-200 group shadow-sm"
                >
                  <span>Explore The 4 Steps</span>
                  <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 border border-stone-300 hover:border-stone-900 text-[#1C2C40] text-xs md:text-sm tracking-wider uppercase font-medium rounded transition-all duration-200 group"
                >
                  <span>Request Specifications</span>
                  <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-stone-400 group-hover:text-stone-900" />
                </Link>
              </div>
            </div>

            {/* Right: Dual Photo Layout */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-200/90 bg-stone-100">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/about/papaya-cut.jpg"
                    alt="Fresh raw papaya harvested in Gujarat"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>

              {/* Overlapping small image */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 w-36 sm:w-44 aspect-square rounded-xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block">
                <Image
                  src="/images/about/tutti-frutti-bowl.jpg"
                  alt="Candied papaya cubes glistening"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The Making of a Little Joy (Process Steps) */}
      <section id="process-steps" className="bg-[#FAF7F2] py-16 sm:py-24 border-b border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-14">
            <div className="lg:col-span-7">
              <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-stone-500 block mb-2">
                FROM FRUIT TO FINISH
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C2C40]">
                The making of a little joy.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[11px] text-stone-400 leading-relaxed">
                A generic representation of the product journey. Images are editorial illustrations, not a representation of a specific factory or production line.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] w-full bg-stone-100 overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-serif font-semibold text-[#C9184A] block mb-1">
                      {step.step}
                    </span>
                    <h3 className="font-serif text-lg text-[#1C2C40] font-semibold leading-snug mb-2 group-hover:text-[#C9184A] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-stone-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Split Banner: Chef Image + Natural Forest Green Block */}
      <section className="border-b border-stone-200/70 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12">

          {/* Left: Chef slicing photo */}
          <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-[420px] bg-stone-200">
            <Image
              src="/images/about/chef-cutting.jpg"
              alt="Artisan food preparation with fresh raw papaya"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right: Soft Sage Green Block (#E9EEE5 - Matching Home Page Quality Section) */}
          <div className="lg:col-span-6 bg-[#E9EEE5] text-[#1C2C40] p-8 sm:p-14 lg:p-16 flex flex-col justify-center">
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#267B43] block mb-3">
              OUR APPROACH
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C2C40] tracking-tight leading-tight">
              Care belongs in every detail.
            </h2>
            <p className="mt-5 text-xs sm:text-sm text-stone-700 leading-relaxed max-w-lg">
              Good product conversations are as important as good presentation. We welcome questions about the current product specification, packaging and storage — so you can make informed decisions for your kitchen or business.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center text-xs uppercase tracking-wider font-semibold text-[#267B43] hover:text-[#184e2a] transition-colors group"
              >
                <span>Ask our quality team</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Practical Details / Specifications */}
      <section className="py-16 sm:py-24 border-b border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-stone-500 block mb-2">
                THE PRACTICAL DETAILS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1C2C40]">
                Know what&apos;s in the plan.
              </h2>
            </div>
            <div>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-widest font-semibold text-stone-500 bg-stone-100 px-3 py-1 rounded">
                COMFIT TUTTI FRUTTI | PRODUCT GUIDE
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            {/* Table */}
            <div className="lg:col-span-7 overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-t border-stone-200 divide-y divide-stone-200">
                <tbody className="divide-y divide-stone-200">
                  <tr>
                    <td className="py-4 pr-4 font-semibold text-[#1C2C40] w-1/3">Product family</td>
                    <td className="py-4 text-stone-600">Candied papaya / Tutti Frutti</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 font-semibold text-[#1C2C40]">Retail pouch sizes</td>
                    <td className="py-4 text-stone-600">
                      Red Tutti Frutti 250g • Green Tutti Frutti 250g • Yellow Tutti Frutti 250g • Rainbow Mix 250g
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 font-semibold text-[#1C2C40]">Primary packaging</td>
                    <td className="py-4 text-stone-600">High-barrier food-grade sealed pouches</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 font-semibold text-[#1C2C40]">Commercial formats</td>
                    <td className="py-4 text-stone-600">Corrugated master cartons: 10kg / 15kg / 20kg</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 font-semibold text-[#1C2C40]">Shelf life</td>
                    <td className="py-4 text-stone-600">12 months from manufacturing under recommended conditions</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 font-semibold text-[#1C2C40]">Storage</td>
                    <td className="py-4 text-stone-600">Store in a cool, dry place away from direct sunlight</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 font-semibold text-[#1C2C40]">Ingredients & allergens</td>
                    <td className="py-4 text-stone-600">Current ingredient and allergen specification available on request</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Packaging Image & Notes */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-xl overflow-hidden shadow-sm border border-stone-200 bg-stone-100">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/process/packaging-carton.jpg"
                    alt="Pouch packaging and master carton box"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <div className="bg-[#1A1A1A]/90 text-stone-300 px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-medium">
                  ILLUSTRATION PACKAGING STYLE | LAB
                </div>
              </div>

              <div className="bg-[#F4F0E8] p-6 rounded-2xl border border-stone-200">
                <h4 className="font-serif text-lg text-[#1C2C40] mb-1">
                  Considered formats. Clear choices.
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  From retail pouches to commercial cartons, discuss the combination that suits your product and volume requirements. Our team can confirm current packing details.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Request Documentation Banner (Warm beige #F4F0E8) */}
      <section className="bg-[#F4F0E8] py-14 sm:py-20 border-b border-stone-300/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-semibold text-stone-500 block mb-2">
                A DETAILED OUTLINE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1C2C40] leading-tight">
                Need the finer details?
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Request the current ingredient, allergen and product specification. Tell us your intended use and the documentation you need.
              </p>
            </div>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center px-7 py-3.5 bg-[#C9184A] hover:bg-[#a5133c] text-white text-xs sm:text-sm uppercase tracking-wider font-semibold rounded-full shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                <span>Request documentation</span>
                <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Bulk Order CTA */}
      <BulkOrderCTA
        customHeading="A little colour. A bigger possibility."
        customDescription="For bakeries, distributors and retailers: let's find the right format for your business."
        customButtonText="Discuss bulk orders"
      />
    </div>
  );
}

