import { createClient } from '@/lib/supabase/client';
import { ContactMessage } from '@/types';
import { ContactFormData } from '@/lib/validations/contact';

let inMemoryMessages: ContactMessage[] = [];

export async function submitContactMessage(data: ContactFormData): Promise<{ success: boolean; id?: string; error?: string }> {
  // 1. If in browser, submit via API route with elevated service connection
  if (typeof window !== 'undefined') {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        const result = await res.json();
        return result;
      }
      const errData = await res.json().catch(() => ({}));
      return { success: false, error: errData.error || 'Failed to submit contact message' };
    } catch (apiErr) {
      console.warn('API route contact submission failed, trying direct Supabase:', apiErr);
    }
  }

  // 2. Direct Supabase insert (WITHOUT .select() to prevent public RLS 42501 error)
  const newMsg: ContactMessage = {
    id: 'msg-' + Date.now(),
    name: data.name,
    email: data.email,
    phone: data.phone,
    subject: data.subject || 'Website Inquiry',
    message: data.message,
    status: 'unread',
    created_at: new Date().toISOString(),
  };

  try {
    const supabase = createClient();
    if (supabase) {
      const { error } = await supabase
        .from('contact_messages')
        .insert([{
          name: newMsg.name,
          email: newMsg.email,
          phone: newMsg.phone,
          subject: newMsg.subject,
          message: newMsg.message,
          status: newMsg.status,
        }]);

      if (!error) {
        return { success: true, id: newMsg.id };
      }
      console.error('Direct Supabase contact insert error:', error);
    }
  } catch (err) {
    console.error('Supabase contact message error:', err);
  }

  // Fallback to local store
  inMemoryMessages.unshift(newMsg);
  return { success: true, id: newMsg.id };
}

export async function getContactMessages(): Promise<ContactMessage[]> {
  try {
    if (typeof window !== 'undefined') {
      const res = await fetch('/api/contact', { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          inMemoryMessages = data;
          return data as ContactMessage[];
        }
      }
    }

    const supabase = createClient();
    if (supabase) {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error && data) {
        inMemoryMessages = data as ContactMessage[];
        return data as ContactMessage[];
      }
    }
  } catch (err) {
    console.warn('Supabase get contact messages note:', err);
  }

  return inMemoryMessages;
}
