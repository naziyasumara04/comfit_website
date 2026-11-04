import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProductBySlug, getProducts } from '@/services/product.service';
import { ProductDetailView } from '@/components/products/ProductDetailView';
import { BulkOrderCTA } from '@/components/home/BulkOrderCTA';
import { Metadata } from 'next';

export const instant = false;

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found | Comfit Foods',
    };
  }

  return {
    title: `${product.name} | Comfit Foods Tutti Frutti`,
    description: product.short_description,
    openGraph: {
      title: `${product.name} | Comfit Foods`,
      description: product.short_description,
      images: [
        {
          url: product.image_url,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const allProducts = await getProducts({ activeOnly: true });
  const relatedProducts = allProducts.filter((p) => p.slug !== slug);

  return (
    <div className="bg-[#FFFCF8]">
      {/* Breadcrumbs */}
      <div className="border-b border-stone-200/60 bg-[#FAF7F2] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-xs text-stone-500">
            <Link href="/" className="hover:text-stone-900 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-stone-900 transition-colors">
              Our Products
            </Link>
            <span>/</span>
            <span className="text-[#C9184A] font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <ProductDetailView product={product} relatedProducts={relatedProducts} />
      </div>

      {/* Bulk CTA */}
      <BulkOrderCTA
        customHeading={`Inquire commercial carton pricing for ${product.name}`}
        customDescription="Available in 10kg, 15kg and 20kg heavy-duty corrugated cartons for bakery and food manufacturing."
        customButtonText="Discuss bulk order"
      />
    </div>
  );
}

