import React, { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { BulkOrderForm } from '@/components/forms/BulkOrderForm';
import { BULK_PACK_FORMATS, COMPANY_INFO } from '@/lib/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bulk Orders & Trade Enquiries | Comfit Foods',
  description:
    'Commercial master cartons (10kg, 15kg, 20kg) and custom volume orders of Tutti Frutti for bakeries, food distributors, and confectionery manufacturers.',
};

export default function BulkOrdersPage() {
  return (
    <div className="bg-[#FFFCF8]">
      {/* Hero Section: Master Home Page Layout & Theme */}
      <section className="relative bg-[#FFFCF8] pt-12 md:pt-16 pb-16 lg:pb-24 border-b border-stone-200/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Story & CTAs */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              {/* Green Category Micro-label */}
              <div className="mb-4">
                <span className="text-[11px] md:text-xs tracking-[0.2em] uppercase font-semibold text-[#267B43] inline-block">
                  COMFIT FOR BUSINESS – BULK & TRADE INQUIRIES
                </span>
              </div>

              {/* Giant Editorial Heading */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C2C40] leading-[1.12] tracking-tight">
                Your craft.
                <br />
                Our colours.
                <br />
                More possibilities.
              </h1>

              {/* Pink Subtitle */}
              <p className="mt-4 text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-[#C9184A]">
                TASTE THE COLOURS OF JOY · COMMERCIAL RANGE
              </p>

              {/* Intro Paragraph */}
              <p className="mt-5 text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl">
                A colourful ingredient for the way you do business. Let&apos;s talk Tutti Frutti for your bakery, distribution network or retail shelves.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#trade-form"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-[#C9184A] hover:bg-[#a5133c] text-white text-xs md:text-sm tracking-wider uppercase font-medium rounded transition-all duration-200 group shadow-sm"
                >
                  <span>Start Trade Enquiry</span>
                  <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="inline-flex items-center justify-center px-6 py-3.5 border border-stone-300 hover:border-stone-900 text-[#1C2C40] text-xs md:text-sm tracking-wider uppercase font-medium rounded transition-all duration-200 group"
                >
                  <span>Call {COMPANY_INFO.phoneFormatted}</span>
                  <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-stone-400 group-hover:text-stone-900" />
                </a>
              </div>

              {/* Location Tag */}
              <div className="mt-12 pt-6 border-t border-stone-200/80">
                <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-stone-400">
                  SABARKANTHA, GUJARAT · COMMERCIAL SUPPLY NATIONWIDE
                </span>
              </div>
            </div>

            {/* Right Column: Hero Visual Photography */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-stone-100 border border-stone-200/80 group">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full">
                  <Image
                    src="/images/hero/bulk-bread.jpg"
                    alt="Baked fruit loaf cake loaded with colourful tutti frutti on marble"
                    fill
                    priority
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Editorial Caption Bar */}
                <div className="bg-[#1A1A1A]/90 backdrop-blur-sm text-white px-4 py-3 flex items-center justify-between text-xs tracking-wider">
                  <span className="text-[11px] uppercase tracking-widest text-stone-300 font-medium">
                    Bakery Master Cartons / 10kg · 15kg · 20kg
                  </span>
                  <span className="text-[10px] uppercase font-semibold text-[#C9184A] bg-white/10 px-2 py-0.5 rounded">
                    Direct Factory Supply
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sector Audiences Bar */}
      <section className="bg-white border-b border-stone-200/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-200 text-stone-700">

            <div className="py-3 md:py-0 md:px-6 first:pl-0">
              <h3 className="font-serif text-lg text-[#1C2C40] font-medium">
                For bakeries
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                From daily milk breads to signature festive fruit cakes.
              </p>
            </div>

            <div className="py-3 md:py-0 md:px-6">
              <h3 className="font-serif text-lg text-[#1C2C40] font-medium">
                For distributors
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                A focused, fast-moving catalogue for your food network.
              </p>
            </div>

            <div className="py-3 md:py-0 md:px-6 last:pr-0">
              <h3 className="font-serif text-lg text-[#1C2C40] font-medium">
                For retailers
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Colourful pouch formats ready for consumer shelves.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Pack Formats Section */}
      <section className="py-16 sm:py-24 border-b border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Description */}
            <div className="lg:col-span-5">
              <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#267B43] block mb-2">
                PACKED FOR YOUR REQUIREMENTS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1C2C40] leading-tight">
                Room for your next big idea.
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Corrugated master cartons in three commercial formats. Product and packing requirements are discussed with your enquiry.
              </p>
            </div>

            {/* Right: 3 Format Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {BULK_PACK_FORMATS.map((format) => (
                <div
                  key={format.size}
                  className="bg-white p-7 rounded-2xl border border-stone-200/90 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="font-serif text-4xl sm:text-5xl font-light text-[#C9184A] mb-2 group-hover:scale-105 transition-transform duration-300">
                    {format.size}
                  </div>
                  <span className="text-[11px] uppercase tracking-widest font-semibold text-[#1C2C40] block">
                    {format.title}
                  </span>
                  <span className="text-xs text-stone-500 block mt-1">
                    {format.format}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Trade Enquiry Form Section (Warm beige #F4F0E8) */}
      <section className="bg-[#F4F0E8] py-16 sm:py-24 border-b border-stone-300/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-stone-500 block mb-2">
                  LET&apos;S TALK TRADE
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#1C2C40] leading-tight">
                  Tell us what you have in mind.
                </h2>
                <p className="mt-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Share a few details about your business, the product you&apos;re interested in and the volume you need. We&apos;ll use them to begin a focused conversation.
                </p>
              </div>

              <div className="pt-4 border-t border-stone-300/80 space-y-3">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-700">
                  Pan-India delivery
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  International enquiries are welcome. Destination requirements and fulfilment arrangements are discussed individually.
                </p>
              </div>

              <div className="pt-4 border-t border-stone-300/80">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-stone-500 block mb-1">
                  PREFER A CONVERSATION?
                </span>
                <p className="font-serif text-xl text-[#1C2C40]">
                  <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-[#C9184A] transition-colors">
                    {COMPANY_INFO.phoneFormatted}
                  </a>
                </p>
                <p className="text-xs text-[#C9184A] mt-1 font-medium">
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:underline">
                    {COMPANY_INFO.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Right: Comprehensive Trade Form */}
            <div className="lg:col-span-7">
              <Suspense fallback={<div className="bg-white p-8 rounded-2xl border border-stone-200 text-xs text-stone-400">Loading trade enquiry form...</div>}>
                <BulkOrderForm />
              </Suspense>
            </div>

          </div>
        </div>
      </section>

      {/* Process Steps (WHAT HAPPENS NEXT) */}
      <section className="py-16 sm:py-24 border-b border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-14">
            <div className="lg:col-span-7">
              <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-stone-500 block mb-2">
                WHAT HAPPENS NEXT
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1C2C40]">
                A conversation, not a complication.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-xs sm:text-sm text-stone-500">
                Each requirement is considered individually. No assumptions. Just the right details.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xs font-serif text-[#C9184A] font-semibold block mb-1">
                01 / INITIATE
              </span>
              <h3 className="font-serif text-lg text-[#1C2C40] mb-2 font-medium">
                Enquiry
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                Tell us about your business, product variety and required volume.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xs font-serif text-[#C9184A] font-semibold block mb-1">
                02 / TAILOR
              </span>
              <h3 className="font-serif text-lg text-[#1C2C40] mb-2 font-medium">
                Discussion & specification
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                We clarify your application, packaging, shelf-life and delivery details.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xs font-serif text-[#C9184A] font-semibold block mb-1">
                03 / QUOTE
              </span>
              <h3 className="font-serif text-lg text-[#1C2C40] mb-2 font-medium">
                Quotation
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                Review the proposed commercial pricing, palletization and schedule.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xs font-serif text-[#C9184A] font-semibold block mb-1">
                04 / DISPATCH
              </span>
              <h3 className="font-serif text-lg text-[#1C2C40] mb-2 font-medium">
                Fulfilment
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                Agree the order and dispatch timetable with seamless pan-India logistics.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Questions & Contact Reassurance Banner */}
      <section className="bg-[#FAF7F2] py-14 sm:py-18 border-b border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-xl">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] font-semibold text-stone-500 block">
                HAVE QUESTIONS BEFORE SUBMITTING?
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1C2C40] tracking-tight">
                We&apos;re here to help you get started.
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Speak directly with our team in Sabarkantha, Gujarat or send us a general enquiry.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#C9184A] hover:bg-[#a5133c] text-white text-xs sm:text-sm uppercase tracking-wider font-semibold rounded-full shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                <span>Contact Our Team</span>
                <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center px-6 py-3 border border-stone-300 hover:border-stone-800 text-stone-800 text-xs sm:text-sm uppercase tracking-wider font-semibold rounded-full bg-white transition-all duration-200"
              >
                <span>Call {COMPANY_INFO.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

