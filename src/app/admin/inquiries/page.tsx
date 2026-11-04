'use client';

import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Building, Calendar, CheckCircle } from 'lucide-react';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { BulkInquiry, InquiryStatus } from '@/types';
import { getBulkInquiries, updateInquiryStatus } from '@/services/inquiry.service';
import { formatDate } from '@/lib/utils';

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState<BulkInquiry[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const [selectedInquiry, setSelectedInquiry] = useState<BulkInquiry | null>(null);

  const loadInquiries = async () => {
    setLoading(true);
    const data = await getBulkInquiries();
    setInquiries(data);
    setLoading(false);
  };

  useEffect(() => {
    loadInquiries();
  }, []);

  const handleStatusChange = async (id: string, newStatus: InquiryStatus) => {
    await updateInquiryStatus(id, newStatus);
    setInquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
    if (selectedInquiry?.id === id) {
      setSelectedInquiry((prev) => (prev ? { ...prev, status: newStatus } : null));
    }
  };

  const filteredInquiries = inquiries.filter((inq) => {
    if (statusFilter === 'all') return true;
    return inq.status === statusFilter;
  });

  return (
    <div className="flex-1 flex flex-col">
      <AdminHeader
        title="Bulk Trade Inquiries"
        subtitle="Review, manage, and respond to commercial buyer inquiries and distributor proposals."
      />

      <div className="p-6 sm:p-8 space-y-6 max-w-7xl">
        {/* Status Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {['all', 'pending', 'contacted', 'in_discussion', 'closed'].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
                statusFilter === status
                  ? 'bg-[#1C2C40] text-white shadow-sm'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
              }`}
            >
              {status.replace('_', ' ')}
            </button>
          ))}
        </div>

        {/* Inquiries Table & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Inquiries List */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-stone-200/90 shadow-sm overflow-hidden">
            {loading ? (
              <div className="p-12 text-center text-xs text-stone-400">Loading trade inquiries...</div>
            ) : filteredInquiries.length === 0 ? (
              <div className="p-12 text-center text-xs text-stone-400">
                No inquiries in this category.
              </div>
            ) : (
              <div className="divide-y divide-stone-100">
                {filteredInquiries.map((inq) => {
                  const isSelected = selectedInquiry?.id === inq.id;
                  return (
                    <div
                      key={inq.id}
                      onClick={() => setSelectedInquiry(inq)}
                      className={`p-5 cursor-pointer transition-colors ${
                        isSelected ? 'bg-pink-50/50 border-l-4 border-[#C9184A]' : 'hover:bg-stone-50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-semibold text-stone-900 text-sm">
                          {inq.company_name}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
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
                      </div>

                      <p className="text-xs text-stone-600">
                        Contact: <span className="font-medium text-stone-800">{inq.full_name}</span> ({inq.business_type})
                      </p>

                      <div className="mt-2 flex flex-wrap items-center gap-3 text-[11px] text-stone-500">
                        <span className="text-[#C9184A] font-medium">{inq.product_interest}</span>
                        <span>•</span>
                        <span>{inq.estimated_quantity}</span>
                        <span>•</span>
                        <span>{formatDate(inq.created_at)}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Inquiry Detail Drawer / Card */}
          <div className="lg:col-span-5 bg-white rounded-xl border border-stone-200/90 shadow-sm p-6 sticky top-20">
            {selectedInquiry ? (
              <div className="space-y-6">
                <div className="border-b border-stone-100 pb-4">
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-stone-400 block mb-1">
                    INQUIRY DETAILS #{selectedInquiry.id.slice(-6)}
                  </span>
                  <h3 className="font-serif text-2xl text-[#1C2C40]">
                    {selectedInquiry.company_name}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Submitted on {formatDate(selectedInquiry.created_at)}
                  </p>
                </div>

                {/* Status Dropdown */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                    Update Processing Status
                  </label>
                  <select
                    value={selectedInquiry.status}
                    onChange={(e) => handleStatusChange(selectedInquiry.id, e.target.value as InquiryStatus)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg text-xs font-semibold text-stone-800 bg-[#FAF7F2] focus:outline-none focus:border-[#C9184A]"
                  >
                    <option value="pending">Pending Review</option>
                    <option value="contacted">Contacted Buyer</option>
                    <option value="in_discussion">In Commercial Discussion</option>
                    <option value="closed">Closed / Fulfilled</option>
                  </select>
                </div>

                {/* Buyer Contact Details */}
                <div className="space-y-2.5 text-xs text-stone-700 bg-stone-50 p-4 rounded-lg border border-stone-200/80">
                  <div className="flex items-center space-x-2">
                    <Building className="w-4 h-4 text-stone-400 flex-shrink-0" />
                    <span>Business Type: <strong className="font-medium">{selectedInquiry.business_type}</strong></span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-stone-400 flex-shrink-0" />
                    <a href={`mailto:${selectedInquiry.email}`} className="text-[#C9184A] hover:underline">
                      {selectedInquiry.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-stone-400 flex-shrink-0" />
                    <a href={`tel:${selectedInquiry.phone}`} className="hover:underline">
                      {selectedInquiry.phone}
                    </a>
                  </div>
                  {selectedInquiry.delivery_region && (
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-stone-400 flex-shrink-0" />
                      <span>{selectedInquiry.delivery_region}</span>
                    </div>
                  )}
                </div>

                {/* Requirements Message */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                    Commercial Requirements & Notes
                  </h4>
                  <div className="p-4 bg-[#FAF7F2] rounded-lg border border-stone-200 text-xs text-stone-700 leading-relaxed whitespace-pre-wrap">
                    {selectedInquiry.message}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex space-x-3">
                  <a
                    href={`mailto:${selectedInquiry.email}?subject=Comfit%20Foods%20Trade%20Pricing%20Quote`}
                    className="flex-1 py-2.5 bg-[#C9184A] hover:bg-[#a5133c] text-white text-xs font-semibold uppercase tracking-wider rounded text-center transition-colors"
                  >
                    Reply via Email
                  </a>
                  <a
                    href={`tel:${selectedInquiry.phone}`}
                    className="px-4 py-2.5 border border-stone-300 text-stone-700 text-xs font-semibold uppercase tracking-wider rounded hover:bg-stone-50 text-center transition-colors"
                  >
                    Call
                  </a>
                </div>
              </div>
            ) : (
              <div className="py-16 text-center text-xs text-stone-400">
                Select an inquiry from the list to view complete buyer details, commercial specifications, and update status.
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

