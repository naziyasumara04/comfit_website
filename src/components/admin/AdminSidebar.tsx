'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  Package,
  Inbox,
  MessageSquare,
  ExternalLink,
  LogOut,
  X,
} from 'lucide-react';
import { ComfitLogo } from '../layout/ComfitLogo';

interface AdminSidebarProps {
  onClose?: () => void;
  className?: string;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({ onClose, className = '' }) => {
  const pathname = usePathname();
  const router = useRouter();

  const links = [
    { name: 'Dashboard Overview', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Products Management', href: '/admin/products', icon: Package },
    { name: 'Bulk Trade Inquiries', href: '/admin/inquiries', icon: Inbox },
    { name: 'Contact Messages', href: '/admin/messages', icon: MessageSquare },
  ];

  const handleLogout = () => {
    // Clear demo/auth cookie or session
    if (typeof window !== 'undefined') {
      localStorage.removeItem('comfit_admin_auth');
      document.cookie = 'comfit_admin_session=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
    router.push('/admin/login');
  };

  return (
    <aside className={`w-72 sm:w-64 bg-[#141414] text-white flex flex-col justify-between border-r border-stone-800 min-h-screen flex-shrink-0 ${className}`}>
      <div>
        {/* Admin Header Logo */}
        <div className="p-5 sm:p-6 border-b border-stone-800 flex items-center justify-between">
          <div>
            <ComfitLogo variant="dark" />
            <span className="text-[10px] uppercase tracking-widest text-[#C9184A] font-semibold block mt-1">
              MANAGEMENT CONSOLE
            </span>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="lg:hidden text-stone-400 hover:text-white p-2 rounded-lg hover:bg-stone-800 min-h-[40px] min-w-[40px] flex items-center justify-center"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Navigation links */}
        <nav className="p-4 space-y-1">
          {links.map((link) => {
            const Icon = link.icon;
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => onClose?.()}
                className={`flex items-center space-x-3 px-3.5 py-3 rounded-lg text-xs font-medium transition-colors min-h-[44px] ${
                  active
                    ? 'bg-[#C9184A] text-white font-semibold'
                    : 'text-stone-300 hover:bg-stone-800/80 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-stone-800 space-y-2">
        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-between px-3.5 py-2.5 text-xs text-stone-400 hover:text-stone-200 hover:bg-stone-800/60 rounded-lg transition-colors min-h-[40px]"
        >
          <span>View Live Website</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>

        <button
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 px-3.5 py-2.5 text-xs text-red-400 hover:text-red-300 hover:bg-red-950/30 rounded-lg transition-colors text-left min-h-[40px]"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
};

