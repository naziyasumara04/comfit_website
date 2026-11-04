'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="divide-y divide-stone-200 border-y border-stone-200">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="py-5">
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between text-left group"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg sm:text-xl text-[#1C2C40] group-hover:text-[#C9184A] transition-colors pr-4">
                {item.question}
              </span>
              <span className="text-stone-400 group-hover:text-stone-800 transition-transform duration-200">
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#C9184A]' : ''
                  }`}
                />
              </span>
            </button>
            {isOpen && (
              <div className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed pr-8 animate-in fade-in duration-200">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

