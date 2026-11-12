import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';
import { Accordion } from '@/components/ui/Accordion';
import { BulkOrderCTA } from '@/components/home/BulkOrderCTA';
import { COMPANY_INFO, CONTACT_FAQS } from '@/lib/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Comfit Foods',
  description:
    'Get in touch with Comfit Foods. Ask a product question, request samples, or initiate a trade inquiry for Tutti Frutti in Gujarat, India.',
};

export default function ContactPage() {
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
            <span className="text-[#C9184A] font-medium">Contact Us</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-10 sm:py-16 lg:py-20 border-b border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">

            <div className="lg:col-span-8">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider sm:tracking-[0.22em] font-semibold text-[#267B43] block mb-2 sm:mb-3">
                COMFIT FOODS · WE&apos;D LOVE TO HEAR FROM YOU
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1C2C40] tracking-tight leading-[1.14] sm:leading-[1.12]">
                Something sweet starts with hello.
              </h1>
              <p className="mt-3 sm:mt-4 text-xs md:text-sm font-semibold tracking-wider sm:tracking-[0.16em] uppercase text-[#C9184A]">
                TASTE THE COLOURS OF JOY · GET IN TOUCH
              </p>
              <p className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base text-stone-600 leading-relaxed max-w-xl">
                A product question, a new recipe idea, or a commercial discussion about your business. There&apos;s a place for it here.
              </p>
            </div>

            {/* Right Dessert Image with Caption */}
            <div className="lg:col-span-4 w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200/80 group bg-stone-100">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/hero/contact-dessert.jpg"
                    alt="Delicious dessert coupe with colourful tutti frutti topping"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 33vw"
                  />
                </div>
                <div className="bg-[#1A1A1A]/90 text-stone-300 px-3.5 sm:px-4 py-2 sm:py-2.5 text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-[0.2em] font-medium text-center">
                  GOOD THINGS ARE BETTER SHARED · SABARKANTHA
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Info Band */}
      <section className="bg-[#F4F0E8] py-10 sm:py-16 border-b border-stone-300/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">

            {/* Call Us */}
            <div className="border-l-2 border-[#C9184A] pl-4 sm:pl-5">
              <span className="text-[10px] uppercase tracking-wider sm:tracking-[0.2em] font-semibold text-stone-500 block mb-1">
                CALL US
              </span>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#1C2C40] hover:text-[#C9184A] transition-colors block"
              >
                {COMPANY_INFO.phone}
              </a>
              <p className="text-xs text-stone-500 mt-1.5 sm:mt-2">
                For product and business conversations.
              </p>
            </div>

            {/* Write to Us */}
            <div className="border-l-2 border-[#C9184A] pl-4 sm:pl-5">
              <span className="text-[10px] uppercase tracking-wider sm:tracking-[0.2em] font-semibold text-stone-500 block mb-1">
                WRITE TO US
              </span>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#C9184A] hover:underline block break-all"
              >
                {COMPANY_INFO.email}
              </a>
              <p className="text-xs text-stone-500 mt-1.5 sm:mt-2">
                Questions, specifications and new possibilities.
              </p>
            </div>

            {/* Find Us */}
            <div className="border-l-2 border-[#C9184A] pl-4 sm:pl-5">
              <span className="text-[10px] uppercase tracking-wider sm:tracking-[0.2em] font-semibold text-stone-500 block mb-1">
                FIND US IN GUJARAT
              </span>
              <p className="font-serif text-base sm:text-lg text-[#1C2C40] leading-snug">
                {COMPANY_INFO.fullAddress}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Form & Location Card Section */}
      <section className="py-12 sm:py-20 lg:py-24 border-b border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

            {/* Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Location Card Column (Soft Green #E9EEE5) */}
            <div className="lg:col-span-5">
              <div className="bg-[#E9EEE5] p-6 sm:p-8 rounded-2xl border border-stone-300/80 shadow-sm relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#267B43]">
                    OUR HOME / GUJARAT, INDIA
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white text-[#267B43] flex items-center justify-center shadow-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-serif text-3xl text-[#1C2C40]">
                  Vadali.
                  <br />
                  Sabarkantha.
                </h3>

                <p className="text-xs font-semibold text-stone-700 uppercase tracking-wider mt-2">
                  Comfit Foods / GHK Foods
                </p>

                <p className="mt-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {COMPANY_INFO.fullAddress}
                </p>

                <p className="mt-4 text-xs text-stone-500 leading-relaxed">
                  Use this address in your preferred maps service. Please contact our team to discuss any visit.
                </p>

                <div className="mt-8 pt-6 border-t border-stone-300/60">
                  <a
                    href="https://maps.google.com/?q=Vadali,+Sabarkantha,+Gujarat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs uppercase tracking-wider font-semibold text-[#267B43] hover:text-[#19522c] transition-colors group"
                  >
                    <span>Find this address</span>
                    <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 border-b border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            <div className="lg:col-span-5">
              <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-stone-500 block mb-2">
                A FEW USEFUL ANSWERS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1C2C40] leading-tight">
                Before you say hello.
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-stone-600 leading-relaxed max-w-sm">
                The practical things, all in one place. For anything else, just ask.
              </p>
            </div>

            <div className="lg:col-span-7">
              <Accordion items={CONTACT_FAQS} />
            </div>

          </div>
        </div>
      </section>

      {/* Bulk CTA */}
      <BulkOrderCTA
        customHeading="A bigger order on your mind?"
        customDescription="Our dedicated bulk enquiry brings your product, volume and delivery requirements together."
        customButtonText="Discuss bulk orders"
      />
    </div>
  );
}

