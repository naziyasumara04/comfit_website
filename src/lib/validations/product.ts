import { z } from 'zod';

export const productSchema = z.object({
  name: z.string().min(2, 'Product name is required'),
  slug: z.string().min(2, 'Slug is required'),
  category: z.string().min(2, 'Category is required'),
  short_description: z.string().min(5, 'Short description is required'),
  description: z.string().min(10, 'Full description is required'),
  image_url: z.string().min(1, 'Image URL is required'),
  pack_size: z.string().min(2, 'Pack size is required'),
  color_code: z.string().optional(),
  is_featured: z.boolean().default(true),
  is_active: z.boolean().default(true),
  ingredients: z.string().optional(),
  shelf_life: z.string().optional(),
  storage: z.string().optional(),
});

export type ProductFormData = z.infer<typeof productSchema>;

