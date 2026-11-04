'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { AdminSidebar } from './AdminSidebar';

export const AdminShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname === '/admin/login';
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    if (isLoginPage) {
      setIsAuthenticated(true);
      return;
    }

    // Check auth session
    const authSession = localStorage.getItem('comfit_admin_auth');
    if (!authSession) {
      // Redirect to login
      router.push('/admin/login');
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  }, [isLoginPage, router]);

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
    <div className="min-h-screen flex bg-[#FAF7F2]">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

