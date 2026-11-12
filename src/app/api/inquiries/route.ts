import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/server';
import { BulkInquiryFormData } from '@/lib/validations/inquiry';

export async function GET() {
  try {
    const supabase = createAdminClient();
    if (supabase) {
      const { data, error } = await supabase
        .from('bulk_inquiries')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) {
        return NextResponse.json(data);
      }
      if (error) {
        console.error('API get inquiries error:', error);
      }
    }
  } catch (err) {
    console.error('Server error fetching inquiries:', err);
  }

  return NextResponse.json([]);
}

export async function POST(request: Request) {
  try {
    const data: BulkInquiryFormData = await request.json();

    const newInquiry = {
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

    const supabase = createAdminClient();
    if (supabase) {
      const { data: inserted, error } = await supabase
        .from('bulk_inquiries')
        .insert([newInquiry])
        .select()
        .single();

      if (!error && inserted) {
        return NextResponse.json({ success: true, id: inserted.id }, { status: 201 });
      }

      if (error) {
        console.error('Supabase admin insert inquiry error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
      }
    }

    return NextResponse.json({ success: false, error: 'Database service unavailable' }, { status: 500 });
  } catch (error) {
    console.error('Failed to process bulk trade inquiry:', error);
    return NextResponse.json({ success: false, error: 'Server error processing inquiry' }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const { id, status } = await request.json();
    if (!id || !status) {
      return NextResponse.json({ error: 'ID and status are required' }, { status: 400 });
    }

    const supabase = createAdminClient();
    if (supabase) {
      const { data, error } = await supabase
        .from('bulk_inquiries')
        .update({ status })
        .eq('id', id)
        .select()
        .single();

      if (!error && data) {
        return NextResponse.json(data);
      }
      return NextResponse.json({ error: error?.message }, { status: 500 });
    }

    return NextResponse.json({ error: 'Database unavailable' }, { status: 500 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error updating status' }, { status: 500 });
  }
}
