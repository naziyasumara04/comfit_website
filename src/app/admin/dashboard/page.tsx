import React from 'react';
import Link from 'next/link';
import { Package, Inbox, MessageSquare, Clock, ArrowUpRight } from 'lucide-react';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { getProducts } from '@/services/product.service';
import { getBulkInquiries } from '@/services/inquiry.service';
import { getContactMessages } from '@/services/contact.service';
import { formatDate } from '@/lib/utils';

export default async function AdminDashboardPage() {
  const products = await getProducts({ activeOnly: false });
  const inquiries = await getBulkInquiries();
  const messages = await getContactMessages();

  const pendingInquiries = inquiries.filter((i) => i.status === 'pending');

  const stats = [
    {
      name: 'Total Products',
      value: products.length,
      href: '/admin/products',
      icon: Package,
      color: 'text-stone-900',
      bgColor: 'bg-stone-100',
    },
    {
      name: 'Total Inquiries',
      value: inquiries.length,
      href: '/admin/inquiries',
      icon: Inbox,
      color: 'text-[#C9184A]',
      bgColor: 'bg-pink-50',
    },
    {
      name: 'Pending Inquiries',
      value: pendingInquiries.length,
      href: '/admin/inquiries?filter=pending',
      icon: Clock,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
    },
    {
      name: 'Contact Messages',
      value: messages.length,
      href: '/admin/messages',
      icon: MessageSquare,
      color: 'text-[#267B43]',
      bgColor: 'bg-emerald-50',
    },
  ];

  return (
    <div className="flex-1 flex flex-col">
      <AdminHeader
        title="Dashboard Overview"
        subtitle="Manage product catalogue, review trade inquiries, and track incoming messages."
      />

      <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 max-w-7xl w-full">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Link
                key={stat.name}
                href={stat.href}
                className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200/90 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-stone-500">
                    {stat.name}
                  </span>
                  <div className={`w-8 h-8 rounded-lg ${stat.bgColor} ${stat.color} flex items-center justify-center`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-3 sm:mt-4 flex items-baseline justify-between">
                  <span className="font-serif text-2xl sm:text-3xl font-semibold text-[#1C2C40]">
                    {stat.value}
                  </span>
                  <span className="text-xs text-stone-400 group-hover:text-stone-800 flex items-center transition-colors">
                    Manage <ArrowUpRight className="w-3 h-3 ml-0.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Recent Inquiries List */}
        <div className="bg-white rounded-xl border border-stone-200/90 shadow-sm overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-serif text-base sm:text-lg text-[#1C2C40]">
                Recent Trade Inquiries
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                Latest B2B requests from bakeries and food distributors
              </p>
            </div>
            <Link
              href="/admin/inquiries"
              className="text-xs font-semibold text-[#C9184A] hover:underline py-1"
            >
              View all inquiries →
            </Link>
          </div>

          <div className="overflow-x-auto smooth-scroll-x">
            <table className="w-full min-w-[560px] text-left text-xs divide-y divide-stone-200">
              <thead className="bg-[#FAF7F2] text-stone-500 font-semibold uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-6">Buyer / Company</th>
                  <th className="py-3 px-6">Product of Interest</th>
                  <th className="py-3 px-6">Quantity</th>
                  <th className="py-3 px-6">Status</th>
                  <th className="py-3 px-6">Received</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {inquiries.slice(0, 5).map((inq) => (
                  <tr key={inq.id} className="hover:bg-stone-50/80 transition-colors">
                    <td className="py-4 px-6">
                      <p className="font-semibold text-stone-900">{inq.full_name}</p>
                      <p className="text-[11px] text-stone-500">{inq.company_name}</p>
                    </td>
                    <td className="py-4 px-6 text-stone-700 font-medium">
                      {inq.product_interest}
                    </td>
                    <td className="py-4 px-6 text-stone-600">
                      {inq.estimated_quantity}
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
                          inq.status === 'pending'
                            ? 'bg-amber-100 text-amber-800'
                            : inq.status === 'contacted'
                            ? 'bg-blue-100 text-blue-800'
                            : inq.status === 'in_discussion'
                            ? 'bg-purple-100 text-purple-800'
                            : 'bg-emerald-100 text-emerald-800'
                        }`}
                      >
                        {inq.status.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-stone-500">
                      {formatDate(inq.created_at)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Product Preview Card */}
        <div className="bg-[#FAF7F2] rounded-xl border border-stone-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-serif text-lg text-[#1C2C40]">
              Active Products in Catalogue
            </h4>
            <p className="text-xs text-stone-600 mt-1">
              Currently publishing {products.filter((p) => p.is_active).length} varieties of Tutti Frutti. Add new pack sizes or update pricing enquiries.
            </p>
          </div>
          <Link
            href="/admin/products"
            className="w-full sm:w-auto text-center px-5 py-2.5 bg-[#C9184A] hover:bg-[#a5133c] text-white text-xs uppercase tracking-wider font-semibold rounded-md shadow-sm transition-colors whitespace-nowrap min-h-[40px] flex items-center justify-center"
          >
            Manage Products
          </Link>
        </div>
      </div>
    </div>
  );
}

