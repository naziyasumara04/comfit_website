'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App runtime error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFCF8] p-4 text-center">
      <div className="max-w-md w-full bg-white p-5 sm:p-8 rounded-2xl border border-stone-200 shadow-lg">
        <span className="text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-[0.2em] font-semibold text-[#C9184A] block mb-2">
          Something went wrong
        </span>
        <h2 className="font-serif text-xl sm:text-2xl text-[#1C2C40]">
          Unexpected Application Error
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
          We encountered an issue loading this page. Please try refreshing or return to the homepage.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto px-5 py-3 bg-[#C9184A] text-white text-xs uppercase tracking-wider font-semibold rounded-lg hover:bg-[#a5133c] transition-colors min-h-[44px]"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 border border-stone-300 text-stone-700 text-xs uppercase tracking-wider font-semibold rounded-lg hover:bg-stone-50 transition-colors min-h-[44px]"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

