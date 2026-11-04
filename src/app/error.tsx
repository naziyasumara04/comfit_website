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
      <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-stone-200 shadow-lg">
        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9184A] block mb-2">
          Something went wrong
        </span>
        <h2 className="font-serif text-2xl text-[#1C2C40]">
          Unexpected Application Error
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
          We encountered an issue loading this page. Please try refreshing or return to the homepage.
        </p>
        <div className="mt-6 flex justify-center space-x-3">
          <button
            onClick={() => reset()}
            className="px-5 py-2.5 bg-[#C9184A] text-white text-xs uppercase tracking-wider font-semibold rounded hover:bg-[#a5133c]"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-5 py-2.5 border border-stone-300 text-stone-700 text-xs uppercase tracking-wider font-semibold rounded hover:bg-stone-50"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

