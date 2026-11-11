'use client';

import React, { useState } from 'react';
import { X, Save } from 'lucide-react';
import { Product } from '@/types';

interface ProductFormModalProps {
  product?: Product | null;
  onClose: () => void;
  onSave: (productData: Partial<Product>) => Promise<void>;
}

export const ProductFormModal: React.FC<ProductFormModalProps> = ({
  product,
  onClose,
  onSave,
}) => {
  const isEditing = !!product;

  const [formData, setFormData] = useState({
    name: product?.name || '',
    slug: product?.slug || '',
    category: product?.category || 'Tutti Frutti',
    pack_size: product?.pack_size || '250g POUCH',
    short_description: product?.short_description || '',
    description: product?.description || '',
    image_url: product?.image_url || '/images/products/red-tutti-frutti.jpg',
    color_code: product?.color_code || '#C9184A',
    is_featured: product?.is_featured ?? true,
    is_active: product?.is_active ?? true,
    ingredients: product?.ingredients || 'Raw Papaya, Sugar, Permitted Food Colours & Preservatives.',
    storage: product?.storage || 'Store in a cool, dry place away from direct sunlight.',
  });

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFormData((prev) => ({
      ...prev,
      name: val,
      slug: isEditing ? prev.slug : val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');

    try {
      await onSave(formData);
      onClose();
    } catch {
      setError('Failed to save product details.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto p-5 sm:p-8 border border-stone-200 relative my-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 text-stone-400 hover:text-stone-800 p-2 rounded-full hover:bg-stone-100 min-h-[40px] min-w-[40px] flex items-center justify-center"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-serif text-2xl text-[#1C2C40] mb-1">
          {isEditing ? `Edit: ${product?.name}` : 'Add New Product'}
        </h3>
        <p className="text-xs text-stone-500 mb-6">
          Configure product details, pack sizes, color accents, and specifications.
        </p>

        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-700 text-xs rounded border border-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-stone-700 font-semibold mb-1">Product Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={handleNameChange}
                placeholder="e.g. Red Tutti Frutti"
                className="w-full px-3 py-2 border rounded border-stone-300 focus:border-[#C9184A] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-stone-700 font-semibold mb-1">Slug *</label>
              <input
                type="text"
                required
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                placeholder="e.g. red-tutti-frutti"
                className="w-full px-3 py-2 border rounded border-stone-300 focus:border-[#C9184A] focus:outline-none bg-stone-50 font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-stone-700 font-semibold mb-1">Category</label>
              <input
                type="text"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 border rounded border-stone-300 focus:border-[#C9184A] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-stone-700 font-semibold mb-1">Pack Size Badge</label>
              <input
                type="text"
                value={formData.pack_size}
                onChange={(e) => setFormData({ ...formData, pack_size: e.target.value })}
                placeholder="250g POUCH"
                className="w-full px-3 py-2 border rounded border-stone-300 focus:border-[#C9184A] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-stone-700 font-semibold mb-1">Color Code Accent</label>
              <div className="flex items-center space-x-2">
                <input
                  type="color"
                  value={formData.color_code}
                  onChange={(e) => setFormData({ ...formData, color_code: e.target.value })}
                  className="w-8 h-8 rounded border cursor-pointer p-0"
                />
                <input
                  type="text"
                  value={formData.color_code}
                  onChange={(e) => setFormData({ ...formData, color_code: e.target.value })}
                  className="w-full px-2 py-1.5 border rounded border-stone-300 font-mono text-[11px]"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-stone-700 font-semibold mb-1">Image URL</label>
            <input
              type="text"
              value={formData.image_url}
              onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
              placeholder="/images/products/..."
              className="w-full px-3 py-2 border rounded border-stone-300 focus:border-[#C9184A] focus:outline-none font-mono text-[11px]"
            />
          </div>

          <div>
            <label className="block text-stone-700 font-semibold mb-1">Short Description *</label>
            <input
              type="text"
              required
              value={formData.short_description}
              onChange={(e) => setFormData({ ...formData, short_description: e.target.value })}
              placeholder="1-line summary for cards"
              className="w-full px-3 py-2 border rounded border-stone-300 focus:border-[#C9184A] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-stone-700 font-semibold mb-1">Full Description *</label>
            <textarea
              rows={3}
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Detailed culinary and production description"
              className="w-full px-3 py-2 border rounded border-stone-300 focus:border-[#C9184A] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-stone-700 font-semibold mb-1">Ingredients</label>
              <textarea
                rows={2}
                value={formData.ingredients}
                onChange={(e) => setFormData({ ...formData, ingredients: e.target.value })}
                className="w-full px-3 py-2 border rounded border-stone-300 focus:border-[#C9184A] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-stone-700 font-semibold mb-1">Storage Guidelines</label>
              <textarea
                rows={2}
                value={formData.storage}
                onChange={(e) => setFormData({ ...formData, storage: e.target.value })}
                className="w-full px-3 py-2 border rounded border-stone-300 focus:border-[#C9184A] focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 pt-2">
            <label className="flex items-center space-x-2 cursor-pointer min-h-[32px]">
              <input
                type="checkbox"
                checked={formData.is_active}
                onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                className="w-4 h-4 text-[#C9184A] rounded flex-shrink-0"
              />
              <span className="font-semibold text-stone-800">Active (Visible on website)</span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer min-h-[32px]">
              <input
                type="checkbox"
                checked={formData.is_featured}
                onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
                className="w-4 h-4 text-[#C9184A] rounded flex-shrink-0"
              />
              <span className="font-semibold text-stone-800">Featured on Homepage</span>
            </label>
          </div>

          <div className="pt-4 border-t border-stone-200 flex flex-col-reverse sm:flex-row justify-end gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 text-stone-600 hover:text-stone-900 border border-stone-300 rounded font-medium min-h-[44px] flex items-center justify-center"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="w-full sm:w-auto px-5 py-2.5 bg-[#C9184A] hover:bg-[#a5133c] text-white uppercase tracking-wider font-semibold rounded flex items-center justify-center space-x-1.5 disabled:opacity-70 min-h-[44px]"
            >
              <Save className="w-3.5 h-3.5" />
              <span>{saving ? 'Saving...' : 'Save Product'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

