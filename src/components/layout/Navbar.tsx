'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X, ArrowUpRight } from 'lucide-react';
import { ComfitLogo } from './ComfitLogo';
import { NAV_LINKS, COMPANY_INFO } from '@/lib/constants';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1A1A1A]/95 backdrop-blur-md shadow-md py-3.5'
            : 'bg-[#1A1A1A] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <ComfitLogo variant="dark" />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative text-[13px] tracking-[0.06em] uppercase font-medium transition-colors duration-200 py-1 ${
                      active ? 'text-white font-semibold' : 'text-stone-300 hover:text-white'
                    }`}
                  >
                    {link.name}
                    {active && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#C9184A] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Icons & CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Search Toggle */}
              <button
                onClick={() => setSearchOpen(true)}
                className="text-stone-300 hover:text-white transition-colors p-1.5 rounded-full hover:bg-stone-800"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Let's Talk Trade CTA */}
              <Link
                href="/bulk-orders"
                className="inline-flex items-center text-[12px] uppercase tracking-wider font-medium text-stone-200 hover:text-white border border-stone-700 hover:border-stone-500 rounded-full px-4 py-1.5 transition-all duration-200 group"
              >
                Let&apos;s talk trade
                <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#C9184A]" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center space-x-3">
              <button
                onClick={() => setSearchOpen(true)}
                className="text-stone-300 hover:text-white p-2"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-stone-300 hover:text-white p-2"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-40 bg-[#1A1A1A] border-t border-stone-800 lg:hidden flex flex-col justify-between px-6 py-8 overflow-y-auto">
          <nav className="flex flex-col space-y-6">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-lg tracking-wider uppercase font-medium flex items-center justify-between border-b border-stone-800/80 pb-3 ${
                    active ? 'text-[#C9184A] font-semibold' : 'text-stone-200'
                  }`}
                >
                  <span>{link.name}</span>
                  {active && <span className="w-2 h-2 rounded-full bg-[#C9184A]" />}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 pt-6 border-t border-stone-800 flex flex-col space-y-4">
            <Link
              href="/bulk-orders"
              className="w-full text-center py-3 bg-[#C9184A] text-white uppercase text-xs tracking-widest font-semibold rounded-md shadow-md"
            >
              Let&apos;s Talk Trade ↗
            </Link>
            <div className="text-center text-xs text-stone-400">
              <p>{COMPANY_INFO.phoneFormatted}</p>
              <p className="mt-1">{COMPANY_INFO.email}</p>
            </div>
          </div>
        </div>
      )}

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-24 px-4">
          <div className="bg-[#FFFCF8] rounded-xl shadow-2xl max-w-lg w-full p-6 border border-stone-200">
            <div className="flex items-center justify-between pb-4 border-b border-stone-200">
              <h3 className="font-serif text-xl text-[#1C2C40]">Search Comfit Foods</h3>
              <button
                onClick={() => setSearchOpen(false)}
                className="text-stone-500 hover:text-stone-800 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search products, packaging, applications..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-[#C9184A] text-sm text-[#1C2C40] bg-white"
                  autoFocus
                />
              </div>

              {/* Quick Suggestion Links */}
              <div className="mt-6">
                <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">
                  Popular Searches
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'Red Tutti Frutti', href: '/products/red-tutti-frutti' },
                    { label: 'Rainbow Mix', href: '/products/rainbow-mix' },
                    { label: 'Bulk Formats', href: '/bulk-orders' },
                    { label: '250g Pouch', href: '/products' },
                    { label: 'Quality & Process', href: '/quality-process' },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setSearchOpen(false)}
                      className="text-xs bg-[#F4F0E8] text-[#1C2C40] px-3 py-1.5 rounded-full hover:bg-[#C9184A] hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

