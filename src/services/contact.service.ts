import { createClient } from '@/lib/supabase/client';
import { ContactMessage } from '@/types';
import { ContactFormData } from '@/lib/validations/contact';

let inMemoryMessages: ContactMessage[] = [
  {
    id: 'msg-1',
    name: 'Kunal Dave',
    email: 'kunal.dave@example.com',
    phone: '+91 98980 98765',
    subject: 'Product Inquiry',
    message: 'Hello Comfit team, I would like to request technical specifications and sample packets of your Rainbow Tutti Frutti.',
    status: 'read',
    created_at: new Date(Date.now() - 3600000 * 12).toISOString(),
  },
  {
    id: 'msg-2',
    name: 'Meera Trivedi',
    email: 'meera@confections.com',
    phone: '+91 97230 44556',
    subject: 'Distributor Partnership',
    message: 'Interested in retail distribution across North Gujarat. Please send across your trade pricing catalogue.',
    status: 'unread',
    created_at: new Date(Date.now() - 3600000 * 3).toISOString(),
  },
];

export async function submitContactMessage(data: ContactFormData): Promise<{ success: boolean; id?: string; error?: string }> {
  const newMsg: ContactMessage = {
    id: 'msg-' + Date.now(),
    name: data.name,
    email: data.email,
    phone: data.phone,
    subject: data.subject,
    message: data.message,
    status: 'unread',
    created_at: new Date().toISOString(),
  };

  try {
    const supabase = createClient();
    if (supabase) {
      const { data: dbData, error } = await supabase
        .from('contact_messages')
        .insert([{
          name: newMsg.name,
          email: newMsg.email,
          phone: newMsg.phone,
          subject: newMsg.subject,
          message: newMsg.message,
          status: newMsg.status,
        }])
        .select()
        .single();

      if (!error && dbData) {
        return { success: true, id: dbData.id };
      }
    }
  } catch (err) {
    console.warn('Supabase contact insert note:', err);
  }

  inMemoryMessages.unshift(newMsg);
  return { success: true, id: newMsg.id };
}

export async function getContactMessages(): Promise<ContactMessage[]> {
  try {
    const supabase = createClient();
    if (supabase) {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error && data) {
        return data as ContactMessage[];
      }
    }
  } catch (err) {
    console.warn('Supabase get contact messages note:', err);
  }

  return inMemoryMessages;
}

