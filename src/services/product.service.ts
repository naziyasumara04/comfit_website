import { createClient } from '@/lib/supabase/client';
import { INITIAL_PRODUCTS } from '@/lib/constants';
import { Product } from '@/types';

// In-memory cache for seamless local state management when running without live Supabase
let inMemoryProducts: Product[] = [...INITIAL_PRODUCTS];

export async function getProducts(options?: { activeOnly?: boolean; featuredOnly?: boolean }): Promise<Product[]> {
  try {
    // If in browser, prefer fresh data from /api/products or Supabase
    if (typeof window !== 'undefined') {
      try {
        const queryParams = new URLSearchParams();
        if (options?.activeOnly !== undefined) queryParams.set('active', String(options.activeOnly));
        if (options?.featuredOnly !== undefined) queryParams.set('featured', String(options.featuredOnly));

        const res = await fetch(`/api/products?${queryParams.toString()}`, { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            inMemoryProducts = data;
            return data as Product[];
          }
        }
      } catch (fetchErr) {
        console.warn('API products fetch failed, checking client Supabase:', fetchErr);
      }
    }

    const supabase = createClient();
    if (supabase) {
      let query = supabase.from('products').select('*');
      if (options?.activeOnly !== false) {
        query = query.eq('is_active', true);
      }
      if (options?.featuredOnly) {
        query = query.eq('is_featured', true);
      }
      const { data, error } = await query.order('created_at', { ascending: true });
      if (!error && data && data.length > 0) {
        inMemoryProducts = data as Product[];
        return data as Product[];
      }
    }
  } catch (err) {
    console.warn('Supabase fetch failed or not configured, using fallback catalog:', err);
  }

  // Fallback to in-memory catalogue
  let result = inMemoryProducts;
  if (options?.activeOnly !== false) {
    result = result.filter(p => p.is_active);
  }
  if (options?.featuredOnly) {
    result = result.filter(p => p.is_featured);
  }
  return result;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const supabase = createClient();
    if (supabase) {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('slug', slug)
        .single();
      if (!error && data) {
        return data as Product;
      }
    }
  } catch (err) {
    console.warn('Supabase fetch error for slug:', slug, err);
  }

  const found = inMemoryProducts.find(p => p.slug === slug);
  return found || null;
}

export async function createProduct(productData: Omit<Product, 'id' | 'created_at'>): Promise<Product> {
  const newProduct: Product = {
    ...productData,
    id: 'prod-' + Date.now(),
    created_at: new Date().toISOString(),
  };

  try {
    if (typeof window !== 'undefined') {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData),
      });
      if (res.ok) {
        const created = await res.json();
        inMemoryProducts.unshift(created);
        return created as Product;
      }
    }

    const supabase = createClient();
    if (supabase) {
      const { data, error } = await supabase
        .from('products')
        .insert([newProduct])
        .select()
        .single();
      if (!error && data) {
        inMemoryProducts.unshift(data as Product);
        return data as Product;
      }
    }
  } catch (err) {
    console.warn('Supabase create error:', err);
  }

  inMemoryProducts.unshift(newProduct);
  return newProduct;
}

export async function updateProduct(id: string, updates: Partial<Product>): Promise<Product | null> {
  try {
    if (typeof window !== 'undefined') {
      const res = await fetch('/api/products', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, updates }),
      });
      if (res.ok) {
        const updated = await res.json();
        const idx = inMemoryProducts.findIndex(p => p.id === id);
        if (idx !== -1) inMemoryProducts[idx] = updated;
        return updated as Product;
      }
    }

    const supabase = createClient();
    if (supabase) {
      const { data, error } = await supabase
        .from('products')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();
      if (!error && data) {
        const idx = inMemoryProducts.findIndex(p => p.id === id);
        if (idx !== -1) inMemoryProducts[idx] = data as Product;
        return data as Product;
      }
    }
  } catch (err) {
    console.warn('Supabase update error:', err);
  }

  const idx = inMemoryProducts.findIndex(p => p.id === id);
  if (idx !== -1) {
    inMemoryProducts[idx] = { ...inMemoryProducts[idx], ...updates, updated_at: new Date().toISOString() };
    return inMemoryProducts[idx];
  }
  return null;
}

export async function deleteProduct(id: string): Promise<boolean> {
  try {
    if (typeof window !== 'undefined') {
      const res = await fetch(`/api/products?id=${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        inMemoryProducts = inMemoryProducts.filter(p => p.id !== id);
        return true;
      }
    }

    const supabase = createClient();
    if (supabase) {
      const { error } = await supabase.from('products').delete().eq('id', id);
      if (!error) {
        inMemoryProducts = inMemoryProducts.filter(p => p.id !== id);
        return true;
      }
    }
  } catch (err) {
    console.warn('Supabase delete error:', err);
  }

  inMemoryProducts = inMemoryProducts.filter(p => p.id !== id);
  return true;
}
