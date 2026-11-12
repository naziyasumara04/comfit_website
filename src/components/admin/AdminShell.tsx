'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, Shield } from 'lucide-react';
import { AdminSidebar } from './AdminSidebar';
import { ComfitLogo } from '../layout/ComfitLogo';

export const AdminShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname === '/admin/login';
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isLoginPage) {
      setIsAuthenticated(true);
      return;
    }

    // Check auth session
    const authSession = localStorage.getItem('comfit_admin_auth');
    if (!authSession) {
      router.push('/admin/login');
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  }, [isLoginPage, router]);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  if (isLoginPage) {
    return <div className="min-h-screen bg-[#F4F0E8]">{children}</div>;
  }

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center">
        <div className="flex flex-col items-center space-y-3">
          <div className="w-8 h-8 border-2 border-[#C9184A] border-t-transparent rounded-full animate-spin" />
          <p className="text-xs text-stone-500 font-medium">Verifying administrator credentials...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#FAF7F2]">
      {/* Mobile Top App Bar */}
      <header className="lg:hidden bg-[#141414] text-white px-4 py-3 border-b border-stone-800 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-stone-300 hover:text-white p-2 rounded-lg hover:bg-stone-800 min-h-[40px] min-w-[40px] flex items-center justify-center"
            aria-label="Open admin menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          <ComfitLogo variant="dark" />
        </div>
        <div className="flex items-center space-x-1.5 bg-stone-900 border border-stone-700/80 px-2.5 py-1 rounded-full text-[11px] text-stone-300">
          <Shield className="w-3 h-3 text-[#267B43]" />
          <span>Admin</span>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <AdminSidebar
            onClose={() => setMobileMenuOpen(false)}
            className="fixed inset-y-0 left-0 z-50 shadow-2xl animate-in slide-in-from-left duration-300"
          />
        </div>
      )}

      {/* Desktop Sidebar */}
      <AdminSidebar className="hidden lg:flex sticky top-0 h-screen overflow-y-auto" />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

