import { NextResponse } from 'next/server';
import { getProducts, createProduct } from '@/services/product.service';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const activeOnly = searchParams.get('active') !== 'false';
  const featuredOnly = searchParams.get('featured') === 'true';

  const products = await getProducts({ activeOnly, featuredOnly });
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newProduct = await createProduct(body);
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}

