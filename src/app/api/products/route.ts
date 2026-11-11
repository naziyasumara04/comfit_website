import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { createAdminClient } from '@/lib/supabase/server';
import { getProducts } from '@/services/product.service';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const activeOnly = searchParams.get('active') !== 'false';
  const featuredOnly = searchParams.get('featured') === 'true';

  try {
    const supabase = createAdminClient();
    if (supabase) {
      let query = supabase.from('products').select('*');
      if (activeOnly) {
        query = query.eq('is_active', true);
      }
      if (featuredOnly) {
        query = query.eq('is_featured', true);
      }
      const { data, error } = await query.order('created_at', { ascending: true });
      if (!error && data && data.length > 0) {
        return NextResponse.json(data);
      }
    }
  } catch (err) {
    console.error('API get products error:', err);
  }

  const products = await getProducts({ activeOnly, featuredOnly });
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const supabase = createAdminClient();

    if (supabase) {
      const { data, error } = await supabase
        .from('products')
        .insert([{
          ...body,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }])
        .select()
        .single();

      if (!error && data) {
        revalidatePath('/', 'layout');
        revalidatePath('/products');
        return NextResponse.json(data, { status: 201 });
      }
      if (error) {
        console.error('Supabase admin create error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
    }

    return NextResponse.json({ error: 'Database client unavailable' }, { status: 500 });
  } catch (error) {
    console.error('Server error creating product:', error);
    return NextResponse.json({ error: 'Server error creating product' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const { id, updates } = await request.json();
    if (!id) {
      return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
    }

    const supabase = createAdminClient();
    if (supabase) {
      const { data, error } = await supabase
        .from('products')
        .update({
          ...updates,
          updated_at: new Date().toISOString(),
        })
        .eq('id', id)
        .select()
        .single();

      if (!error && data) {
        revalidatePath('/', 'layout');
        revalidatePath('/products');
        if (data.slug) {
          revalidatePath(`/products/${data.slug}`);
        }
        return NextResponse.json(data);
      }
      if (error) {
        console.error('Supabase admin update error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
    }

    return NextResponse.json({ error: 'Database client unavailable' }, { status: 500 });
  } catch (error) {
    console.error('Server error updating product:', error);
    return NextResponse.json({ error: 'Server error updating product' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
    }

    const supabase = createAdminClient();
    if (supabase) {
      const { error } = await supabase.from('products').delete().eq('id', id);
      if (!error) {
        revalidatePath('/', 'layout');
        revalidatePath('/products');
        return NextResponse.json({ success: true });
      }
      console.error('Supabase admin delete error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ error: 'Database client unavailable' }, { status: 500 });
  } catch (error) {
    console.error('Server error deleting product:', error);
    return NextResponse.json({ error: 'Server error deleting product' }, { status: 500 });
  }
}
