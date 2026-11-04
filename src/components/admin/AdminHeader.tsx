'use client';

import React from 'react';
import { UserCheck, Shield } from 'lucide-react';

interface AdminHeaderProps {
  title: string;
  subtitle?: string;
}

export const AdminHeader: React.FC<AdminHeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="bg-white border-b border-stone-200 px-6 sm:px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl text-[#1C2C40]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xs text-stone-500 mt-1">{subtitle}</p>
        )}
      </div>

      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2 bg-[#FAF7F2] border border-stone-200 px-3 py-1.5 rounded-full text-xs text-stone-700">
          <Shield className="w-3.5 h-3.5 text-[#267B43]" />
          <span className="font-medium">Administrator</span>
        </div>
      </div>
    </header>
  );
};

