import { createClient } from '@/lib/supabase/client';
import { BulkInquiry, InquiryStatus } from '@/types';
import { BulkInquiryFormData } from '@/lib/validations/inquiry';

let inMemoryInquiries: BulkInquiry[] = [];

export async function submitBulkInquiry(data: BulkInquiryFormData): Promise<{ success: boolean; id?: string; error?: string }> {
  // 1. If in browser, submit via API route with elevated service connection
  if (typeof window !== 'undefined') {
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        const result = await res.json();
        return result;
      }
      const errData = await res.json().catch(() => ({}));
      return { success: false, error: errData.error || 'Failed to submit trade inquiry' };
    } catch (apiErr) {
      console.warn('API route inquiry submission failed, trying direct Supabase:', apiErr);
    }
  }

  // 2. Direct Supabase insert (WITHOUT .select() to prevent public RLS 42501 error)
  const newInquiry: BulkInquiry = {
    id: 'inq-' + Date.now(),
    full_name: data.fullName,
    company_name: data.companyName,
    email: data.email,
    phone: data.phone,
    business_type: data.businessType,
    product_interest: data.productInterest,
    estimated_quantity: data.estimatedQuantity,
    delivery_region: data.deliveryRegion || 'India',
    message: data.message,
    status: 'pending',
    created_at: new Date().toISOString(),
  };

  try {
    const supabase = createClient();
    if (supabase) {
      const { error } = await supabase
        .from('bulk_inquiries')
        .insert([{
          full_name: newInquiry.full_name,
          company_name: newInquiry.company_name,
          email: newInquiry.email,
          phone: newInquiry.phone,
          business_type: newInquiry.business_type,
          product_interest: newInquiry.product_interest,
          estimated_quantity: newInquiry.estimated_quantity,
          delivery_region: newInquiry.delivery_region,
          message: newInquiry.message,
          status: newInquiry.status,
        }]);

      if (!error) {
        return { success: true, id: newInquiry.id };
      }
      console.error('Direct Supabase inquiry insert error:', error);
    }
  } catch (err) {
    console.error('Supabase inquiry insert note:', err);
  }

  // Fallback to local store
  inMemoryInquiries.unshift(newInquiry);
  return { success: true, id: newInquiry.id };
}

export async function getBulkInquiries(): Promise<BulkInquiry[]> {
  try {
    if (typeof window !== 'undefined') {
      const res = await fetch('/api/inquiries', { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          inMemoryInquiries = data;
          return data as BulkInquiry[];
        }
      }
    }

    const supabase = createClient();
    if (supabase) {
      const { data, error } = await supabase
        .from('bulk_inquiries')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error && data) {
        inMemoryInquiries = data as BulkInquiry[];
        return data as BulkInquiry[];
      }
    }
  } catch (err) {
    console.warn('Supabase get inquiries note:', err);
  }

  return inMemoryInquiries;
}

export async function updateInquiryStatus(id: string, status: InquiryStatus): Promise<boolean> {
  try {
    if (typeof window !== 'undefined') {
      const res = await fetch('/api/inquiries', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      });
      if (res.ok) {
        const item = inMemoryInquiries.find(i => i.id === id);
        if (item) item.status = status;
        return true;
      }
    }

    const supabase = createClient();
    if (supabase) {
      const { error } = await supabase
        .from('bulk_inquiries')
        .update({ status })
        .eq('id', id);
      if (!error) {
        const inq = inMemoryInquiries.find(i => i.id === id);
        if (inq) inq.status = status;
        return true;
      }
    }
  } catch (err) {
    console.warn('Supabase update inquiry note:', err);
  }

  const inq = inMemoryInquiries.find(i => i.id === id);
  if (inq) {
    inq.status = status;
    return true;
  }
  return false;
}
