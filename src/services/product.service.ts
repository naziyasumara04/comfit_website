import { createClient } from '@/lib/supabase/client';
import { INITIAL_PRODUCTS } from '@/lib/constants';
import { Product } from '@/types';

// In-memory cache for seamless local state management when running without live Supabase
let inMemoryProducts: Product[] = [...INITIAL_PRODUCTS];

export async function getProducts(options?: { activeOnly?: boolean; featuredOnly?: boolean }): Promise<Product[]> {
  try {
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
    const supabase = createClient();
    if (supabase) {
      const { data, error } = await supabase
        .from('products')
        .insert([newProduct])
        .select()
        .single();
      if (!error && data) {
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
    const supabase = createClient();
    if (supabase) {
      const { data, error } = await supabase
        .from('products')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();
      if (!error && data) {
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
    const supabase = createClient();
    if (supabase) {
      const { error } = await supabase.from('products').delete().eq('id', id);
      if (!error) return true;
    }
  } catch (err) {
    console.warn('Supabase delete error:', err);
  }

  inMemoryProducts = inMemoryProducts.filter(p => p.id !== id);
  return true;
}

