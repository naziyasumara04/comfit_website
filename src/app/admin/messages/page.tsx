'use client';

import React, { useEffect, useState } from 'react';
import { Mail, Phone, Calendar, MessageSquare, Reply } from 'lucide-react';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { ContactMessage } from '@/types';
import { getContactMessages } from '@/services/contact.service';
import { formatDate } from '@/lib/utils';

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const data = await getContactMessages();
      setMessages(data);
      setLoading(false);
    }
    load();
  }, []);

  return (
    <div className="flex-1 flex flex-col">
      <AdminHeader
        title="Contact Messages"
        subtitle="Manage general inquiries, sample requests, and customer messages submitted from the contact page."
      />

      <div className="p-6 sm:p-8 space-y-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <p className="text-xs text-stone-500">
            Total messages: <span className="font-semibold text-stone-800">{messages.length}</span>
          </p>
        </div>

        {loading ? (
          <div className="p-12 text-center text-xs text-stone-400">Loading messages...</div>
        ) : messages.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-xl border border-stone-200 text-stone-400 text-xs">
            No contact messages received yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="bg-white rounded-xl border border-stone-200/90 shadow-sm p-6 flex flex-col justify-between space-y-4 hover:border-stone-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-stone-100 pb-3 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#C9184A] bg-pink-50 px-2.5 py-1 rounded">
                      {msg.subject}
                    </span>
                    <span className="text-[11px] text-stone-400">
                      {formatDate(msg.created_at)}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg text-[#1C2C40] font-medium">
                    {msg.name}
                  </h3>

                  <div className="mt-2 space-y-1 text-xs text-stone-500">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-3.5 h-3.5 text-stone-400" />
                      <a href={`mailto:${msg.email}`} className="text-stone-700 hover:text-[#C9184A]">
                        {msg.email}
                      </a>
                    </div>
                    {msg.phone && (
                      <div className="flex items-center space-x-2">
                        <Phone className="w-3.5 h-3.5 text-stone-400" />
                        <a href={`tel:${msg.phone}`} className="text-stone-700 hover:text-[#C9184A]">
                          {msg.phone}
                        </a>
                      </div>
                    )}
                  </div>

                  <p className="mt-4 text-xs text-stone-700 bg-[#FAF7F2] p-4 rounded-lg border border-stone-200/80 leading-relaxed whitespace-pre-wrap">
                    {msg.message}
                  </p>
                </div>

                <div className="pt-2 flex justify-end">
                  <a
                    href={`mailto:${msg.email}?subject=Re:%20${encodeURIComponent(msg.subject)}`}
                    className="inline-flex items-center space-x-1.5 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium rounded transition-colors"
                  >
                    <Reply className="w-3.5 h-3.5" />
                    <span>Reply to {msg.name.split(' ')[0]}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

