'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Plus, Edit2, Trash2, CheckCircle, XCircle } from 'lucide-react';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { ProductFormModal } from '@/components/admin/ProductFormModal';
import { Product } from '@/types';
import { getProducts, createProduct, updateProduct, deleteProduct } from '@/services/product.service';

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const loadProducts = async () => {
    setLoading(true);
    const data = await getProducts({ activeOnly: false });
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleCreateOrUpdate = async (formData: Partial<Product>) => {
    if (editingProduct) {
      await updateProduct(editingProduct.id, formData);
    } else {
      await createProduct({
        name: formData.name || 'New Product',
        slug: formData.slug || 'new-product',
        category: formData.category || 'Tutti Frutti',
        short_description: formData.short_description || '',
        description: formData.description || '',
        image_url: formData.image_url || '/images/products/red-tutti-frutti.jpg',
        pack_size: formData.pack_size || '250g POUCH',
        color_code: formData.color_code || '#C9184A',
        is_featured: formData.is_featured ?? true,
        is_active: formData.is_active ?? true,
        ingredients: formData.ingredients,
        storage: formData.storage,
      });
    }
    await loadProducts();
  };

  const handleToggleActive = async (product: Product) => {
    await updateProduct(product.id, { is_active: !product.is_active });
    await loadProducts();
  };

  const handleDelete = async (id: string, name: string) => {
    if (confirm(`Are you sure you want to delete ${name}?`)) {
      await deleteProduct(id);
      await loadProducts();
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      <AdminHeader
        title="Products Management"
        subtitle="Create, update, and manage published Tutti Frutti products and master carton specifications."
      />

      <div className="p-6 sm:p-8 space-y-6 max-w-7xl">
        {/* Actions Bar */}
        <div className="flex items-center justify-between">
          <p className="text-xs text-stone-500">
            Total products: <span className="font-semibold text-stone-800">{products.length}</span>
          </p>

          <button
            onClick={() => {
              setEditingProduct(null);
              setIsModalOpen(true);
            }}
            className="inline-flex items-center px-4 py-2.5 bg-[#C9184A] hover:bg-[#a5133c] text-white text-xs font-semibold uppercase tracking-wider rounded-lg shadow-sm transition-colors space-x-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Product</span>
          </button>
        </div>

        {/* Product Table */}
        <div className="bg-white rounded-xl border border-stone-200/90 shadow-sm overflow-hidden">
          {loading ? (
            <div className="p-12 text-center text-xs text-stone-400">Loading catalogue...</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs divide-y divide-stone-200">
                <thead className="bg-[#FAF7F2] text-stone-500 font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="py-3 px-6">Product</th>
                    <th className="py-3 px-6">Slug</th>
                    <th className="py-3 px-6">Pack Format</th>
                    <th className="py-3 px-6">Status</th>
                    <th className="py-3 px-6">Featured</th>
                    <th className="py-3 px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {products.map((product) => (
                    <tr key={product.id} className="hover:bg-stone-50/80 transition-colors">
                      <td className="py-4 px-6 flex items-center space-x-3">
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-stone-100 border border-stone-200 flex-shrink-0">
                          <Image src={product.image_url} alt={product.name} fill className="object-cover" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-1.5">
                            <span
                              className="w-2 h-2 rounded-full flex-shrink-0"
                              style={{ backgroundColor: product.color_code || '#C9184A' }}
                            />
                            <p className="font-semibold text-stone-900">{product.name}</p>
                          </div>
                          <p className="text-[11px] text-stone-400 mt-0.5 line-clamp-1">{product.short_description}</p>
                        </div>
                      </td>

                      <td className="py-4 px-6 font-mono text-[11px] text-stone-500">
                        {product.slug}
                      </td>

                      <td className="py-4 px-6 font-medium text-stone-700">
                        {product.pack_size}
                      </td>

                      <td className="py-4 px-6">
                        <button
                          onClick={() => handleToggleActive(product)}
                          className={`inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider transition-colors ${
                            product.is_active
                              ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                              : 'bg-stone-200 text-stone-600 hover:bg-stone-300'
                          }`}
                        >
                          {product.is_active ? <CheckCircle className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                          <span>{product.is_active ? 'Active' : 'Draft'}</span>
                        </button>
                      </td>

                      <td className="py-4 px-6">
                        <span
                          className={`text-[11px] font-medium ${
                            product.is_featured ? 'text-[#C9184A]' : 'text-stone-400'
                          }`}
                        >
                          {product.is_featured ? 'Yes' : 'No'}
                        </span>
                      </td>

                      <td className="py-4 px-6 text-right space-x-2 whitespace-nowrap">
                        <button
                          onClick={() => {
                            setEditingProduct(product);
                            setIsModalOpen(true);
                          }}
                          className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded transition-colors"
                          title="Edit product"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(product.id, product.name)}
                          className="p-1.5 text-red-400 hover:text-red-700 hover:bg-red-50 rounded transition-colors"
                          title="Delete product"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <ProductFormModal
          product={editingProduct}
          onClose={() => {
            setIsModalOpen(false);
            setEditingProduct(null);
          }}
          onSave={handleCreateOrUpdate}
        />
      )}
    </div>
  );
}

