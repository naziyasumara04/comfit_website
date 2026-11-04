import React from 'react';
import Link from 'next/link';

interface ComfitLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'white';
  showTagline?: boolean;
}

export const ComfitLogo: React.FC<ComfitLogoProps> = ({
  className = '',
  variant = 'light',
  showTagline = false,
}) => {
  return (
    <Link href="/" className={`inline-flex flex-col group select-none ${className}`}>
      <div className="flex items-center space-x-0.5">
        <span
          className="font-black text-2xl md:text-3xl tracking-tight text-[#C9184A] transition-transform duration-300 group-hover:scale-[1.02]"
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            letterSpacing: '-0.03em',
          }}
        >
          COMFIT
        </span>
      </div>

      {showTagline && (
        <span
          className={`text-[9px] uppercase tracking-[0.25em] font-semibold mt-0.5 ${
            variant === 'dark' || variant === 'white' ? 'text-stone-400' : 'text-stone-500'
          }`}
        >
          Taste the Colours of Joy
        </span>
      )}
    </Link>
  );
};

