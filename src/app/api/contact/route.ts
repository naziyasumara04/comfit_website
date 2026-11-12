import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/server';
import { ContactFormData } from '@/lib/validations/contact';

export async function GET() {
  try {
    const supabase = createAdminClient();
    if (supabase) {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) {
        return NextResponse.json(data);
      }
      if (error) {
        console.error('API get contact messages error:', error);
      }
    }
  } catch (err) {
    console.error('Server error fetching contact messages:', err);
  }

  return NextResponse.json([]);
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();

    const newMsg = {
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      subject: data.subject || 'Website Inquiry',
      message: data.message,
      status: 'unread',
      created_at: new Date().toISOString(),
    };

    const supabase = createAdminClient();
    if (supabase) {
      const { data: inserted, error } = await supabase
        .from('contact_messages')
        .insert([newMsg])
        .select()
        .single();

      if (!error && inserted) {
        return NextResponse.json({ success: true, id: inserted.id }, { status: 201 });
      }

      if (error) {
        console.error('Supabase admin insert contact message error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
      }
    }

    return NextResponse.json({ success: false, error: 'Database service unavailable' }, { status: 500 });
  } catch (error) {
    console.error('Failed to process contact message:', error);
    return NextResponse.json({ success: false, error: 'Server error processing contact message' }, { status: 500 });
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
        .from('contact_messages')
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
    return NextResponse.json({ error: 'Server error updating message status' }, { status: 500 });
  }
}
