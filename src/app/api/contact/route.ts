import { NextResponse } from 'next/server';
import { getContactMessages, submitContactMessage } from '@/services/contact.service';

export async function GET() {
  const messages = await getContactMessages();
  return NextResponse.json(messages);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await submitContactMessage(body);
    if (result.success) {
      return NextResponse.json(result, { status: 201 });
    }
    return NextResponse.json(result, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process contact message' }, { status: 500 });
  }
}

