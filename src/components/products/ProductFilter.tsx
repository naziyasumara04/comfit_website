'use client';

import React, { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import { Product } from '@/types';
import { ProductCard } from './ProductCard';
import { QuickEnquiryModal } from '@/components/forms/QuickEnquiryModal';

interface ProductFilterProps {
  initialProducts: Product[];
}

export const ProductFilter: React.FC<ProductFilterProps> = ({ initialProducts }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedColor, setSelectedColor] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.short_description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesColor =
        selectedColor === 'all' ||
        product.name.toLowerCase().includes(selectedColor.toLowerCase()) ||
        (selectedColor === 'rainbow' && product.slug.includes('rainbow'));

      return matchesSearch && matchesColor;
    });
  }, [initialProducts, searchQuery, selectedColor]);

  const colorFilters = [
    { label: 'All Varieties', value: 'all', dot: null },
    { label: 'Red Tutti Frutti', value: 'red', dot: '#C9184A' },
    { label: 'Green Tutti Frutti', value: 'green', dot: '#267B43' },
    { label: 'Yellow Tutti Frutti', value: 'yellow', dot: '#E5A93C' },
    { label: 'Rainbow Mix', value: 'rainbow', dot: '#D81B60' },
  ];

  return (
    <div>
      {/* Search & Filter Toolbar */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-stone-200/90 shadow-sm mb-8 sm:mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">

        {/* Color Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {colorFilters.map((tab) => {
            const active = selectedColor === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setSelectedColor(tab.value)}
                className={`inline-flex items-center text-xs font-semibold uppercase tracking-wider px-3.5 sm:px-4 py-2 rounded-full transition-all min-h-[38px] ${active
                    ? 'bg-[#1C2C40] text-white shadow-sm'
                    : 'bg-[#F4F0E8] text-stone-700 hover:bg-stone-200/80'
                  }`}
              >
                {tab.dot && (
                  <span
                    className="w-2 h-2 rounded-full mr-2 flex-shrink-0"
                    style={{ backgroundColor: tab.dot }}
                  />
                )}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Search our flavours & bakes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm bg-[#FAF7F2] border border-stone-300 rounded-full focus:outline-none focus:border-[#C9184A] text-stone-900 transition-colors"
          />
        </div>

      </div>

      {/* Results Count */}
      <div className="mb-6 flex items-center justify-between text-xs text-stone-500">
        <p>
          Showing <span className="font-semibold text-stone-800">{filteredProducts.length}</span> {filteredProducts.length === 1 ? 'product' : 'products'}
        </p>
        {selectedColor !== 'all' && (
          <button
            onClick={() => {
              setSelectedColor('all');
              setSearchQuery('');
            }}
            className="text-[#C9184A] hover:underline"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onEnquire={(prod) => setSelectedProduct(prod)}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl p-12 text-center border border-stone-200">
          <Filter className="w-10 h-10 text-stone-300 mx-auto mb-3" />
          <h3 className="font-serif text-xl text-[#1C2C40]">No matching products found</h3>
          <p className="text-xs text-stone-500 mt-1">
            Try adjusting your search query or variety filter.
          </p>
          <button
            onClick={() => {
              setSelectedColor('all');
              setSearchQuery('');
            }}
            className="mt-4 px-6 py-2.5 bg-[#C9184A] hover:bg-[#a5133c] text-white text-xs uppercase tracking-wider font-semibold rounded-full shadow-sm transition-all"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Quick Enquiry Modal */}
      {selectedProduct && (
        <QuickEnquiryModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

