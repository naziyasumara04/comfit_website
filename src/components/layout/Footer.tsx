import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ComfitLogo } from './ComfitLogo';
import { COMPANY_INFO, NAV_LINKS } from '@/lib/constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#161616] text-white pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-stone-800/80">
          
          {/* Col 1: Brand & Parentage */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <ComfitLogo variant="dark" />
              <div className="mt-6 space-y-1">
                <p className="text-xs tracking-[0.16em] uppercase font-semibold text-stone-300">
                  {COMPANY_INFO.tagline}
                </p>
                <p className="text-xs text-stone-400">
                  Comfit Foods, from {COMPANY_INFO.parentCompany}.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <span className="inline-block text-[11px] uppercase tracking-wider text-stone-500">
                SABARKANTHA, GUJARAT · EST. {COMPANY_INFO.establishedYear}
              </span>
            </div>
          </div>

          {/* Col 2: Explore Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.18em] font-semibold text-stone-400 mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs text-stone-300 hover:text-white transition-colors hover:translate-x-0.5 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Our Colours */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.18em] font-semibold text-stone-400 mb-5">
              Our Colours
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/products/red-tutti-frutti"
                  className="text-xs text-stone-300 hover:text-white transition-colors"
                >
                  Red Tutti Frutti
                </Link>
              </li>
              <li>
                <Link
                  href="/products/green-tutti-frutti"
                  className="text-xs text-stone-300 hover:text-white transition-colors"
                >
                  Green Tutti Frutti
                </Link>
              </li>
              <li>
                <Link
                  href="/products/yellow-tutti-frutti"
                  className="text-xs text-stone-300 hover:text-white transition-colors"
                >
                  Yellow Tutti Frutti
                </Link>
              </li>
              <li>
                <Link
                  href="/products/rainbow-mix"
                  className="text-xs text-stone-300 hover:text-white transition-colors"
                >
                  Rainbow Mix
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/bulk-orders"
                  className="inline-flex items-center text-xs text-[#C9184A] hover:text-[#e02d60] font-medium transition-colors group"
                >
                  Retail & bulk enquiries
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Say Hello / Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.18em] font-semibold text-stone-400 mb-5">
              Say Hello
            </h4>
            <div className="space-y-3 text-xs text-stone-300">
              <p>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-white transition-colors text-stone-200 break-all inline-block py-0.5"
                >
                  {COMPANY_INFO.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="hover:text-white transition-colors font-medium text-stone-100 inline-block py-0.5"
                >
                  {COMPANY_INFO.phoneFormatted}
                </a>
              </p>
              <p className="text-stone-400 leading-relaxed pt-1">
                {COMPANY_INFO.fullAddress}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-800/60">
              <Link
                href="/admin/login"
                className="text-[10px] text-stone-500 hover:text-stone-300 uppercase tracking-widest inline-block py-1"
              >
                Staff Portal
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-3 text-center sm:text-left">
          <p>{COMPANY_INFO.copyright}</p>
          <p className="text-stone-400 font-medium">{COMPANY_INFO.madeIn}</p>
        </div>
      </div>
    </footer>
  );
};

