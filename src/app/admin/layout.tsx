import React from 'react';
import { AdminShell } from '@/components/admin/AdminShell';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comfit Foods Admin Dashboard',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminShell>{children}</AdminShell>;
}

