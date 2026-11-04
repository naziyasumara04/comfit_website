export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  short_description: string;
  image_url: string;
  gallery?: string[];
  pack_size: string;
  color_code?: string;
  is_featured: boolean;
  is_active: boolean;
  ingredients?: string;
  shelf_life?: string;
  storage?: string;
  applications?: string[];
  created_at: string;
  updated_at?: string;
}

export type InquiryStatus = 'pending' | 'contacted' | 'in_discussion' | 'closed';

export interface BulkInquiry {
  id: string;
  full_name: string;
  company_name: string;
  email: string;
  phone: string;
  business_type: string;
  product_interest: string;
  estimated_quantity: string;
  delivery_region?: string;
  message: string;
  status: InquiryStatus;
  created_at: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status?: 'unread' | 'read' | 'replied';
  created_at: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image_url?: string;
  created_at: string;
}

export interface AdminProfile {
  id: string;
  full_name: string;
  role: 'admin' | 'superadmin' | 'editor';
  created_at: string;
}

