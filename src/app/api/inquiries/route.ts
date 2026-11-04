import { NextResponse } from 'next/server';
import { getBulkInquiries, submitBulkInquiry } from '@/services/inquiry.service';

export async function GET() {
  const inquiries = await getBulkInquiries();
  return NextResponse.json(inquiries);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await submitBulkInquiry(body);
    if (result.success) {
      return NextResponse.json(result, { status: 201 });
    }
    return NextResponse.json(result, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process bulk trade inquiry' }, { status: 500 });
  }
}

