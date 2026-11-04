import { createClient } from '@/lib/supabase/client';
import { BulkInquiry, InquiryStatus } from '@/types';
import { BulkInquiryFormData } from '@/lib/validations/inquiry';

let inMemoryInquiries: BulkInquiry[] = [
  {
    id: 'inq-1',
    full_name: 'Rajesh Patel',
    company_name: 'Shree Krishna Bakery & Confectioners',
    email: 'rajesh@shreekrishnabakes.com',
    phone: '+91 98250 12345',
    business_type: 'Bakery',
    product_interest: 'Rainbow Mix & Red Tutti Frutti',
    estimated_quantity: '20kg Master Carton (500kg / month)',
    delivery_region: 'Ahmedabad, Gujarat',
    message: 'We require monthly deliveries of fresh tutti frutti for our festive milk bread and plum cake production.',
    status: 'pending',
    created_at: new Date(Date.now() - 3600000 * 24).toISOString(),
  },
  {
    id: 'inq-2',
    full_name: 'Ananya Sharma',
    company_name: 'Delight Artisan Ice Creams',
    email: 'ananya@delightcreams.in',
    phone: '+91 94220 54321',
    business_type: 'Ice Cream Manufacturer',
    product_interest: 'Green Tutti Frutti & Yellow Tutti Frutti',
    estimated_quantity: '15kg Master Carton (200kg)',
    delivery_region: 'Mumbai, Maharashtra',
    message: 'Looking for food-grade specifications and sample shipment for cassata and sundae preparations.',
    status: 'contacted',
    created_at: new Date(Date.now() - 3600000 * 48).toISOString(),
  },
];

export async function submitBulkInquiry(data: BulkInquiryFormData): Promise<{ success: boolean; id?: string; error?: string }> {
  const newInquiry: BulkInquiry = {
    id: 'inq-' + Date.now(),
    full_name: data.fullName,
    company_name: data.companyName,
    email: data.email,
    phone: data.phone,
    business_type: data.businessType,
    product_interest: data.productInterest,
    estimated_quantity: data.estimatedQuantity,
    delivery_region: data.deliveryRegion,
    message: data.message,
    status: 'pending',
    created_at: new Date().toISOString(),
  };

  try {
    const supabase = createClient();
    if (supabase) {
      const { data: dbData, error } = await supabase
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
        }])
        .select()
        .single();

      if (!error && dbData) {
        return { success: true, id: dbData.id };
      }
    }
  } catch (err) {
    console.warn('Supabase inquiry insert note:', err);
  }

  // Fallback to local store
  inMemoryInquiries.unshift(newInquiry);
  return { success: true, id: newInquiry.id };
}

export async function getBulkInquiries(): Promise<BulkInquiry[]> {
  try {
    const supabase = createClient();
    if (supabase) {
      const { data, error } = await supabase
        .from('bulk_inquiries')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error && data) {
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
    const supabase = createClient();
    if (supabase) {
      const { error } = await supabase
        .from('bulk_inquiries')
        .update({ status })
        .eq('id', id);
      if (!error) return true;
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

