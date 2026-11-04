import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { COMPANY_INFO } from '@/lib/constants';

const serifFont = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_INFO.name} | Premium Tutti Frutti & Food Manufacturing`,
    template: `%s | ${COMPANY_INFO.name}`,
  },
  description:
    'Comfit Foods crafts premium candied papaya Tutti Frutti in vibrant red, green, yellow and rainbow varieties for bakeries, distributors, and dessert creators.',
  keywords: [
    'Tutti Frutti manufacturer',
    'Candied papaya cubes',
    'Bulk tutti frutti India',
    'Bakery ingredients Gujarat',
    'Comfit Foods',
    'GHK Foods',
    'Red Tutti Frutti',
    'Green Tutti Frutti',
    'Yellow Tutti Frutti',
    'Rainbow Mix Tutti Frutti',
    'Commercial bakery supplier',
  ],
  authors: [{ name: 'COMFIT FOODS' }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'COMFIT FOODS – Adding Colours of Joy to Every Bite!',
    description:
      'Premium candied papaya Tutti Frutti for bakeries, distributors and confectionery creators across India.',
    url: 'https://comfitfoods.com',
    siteName: 'COMFIT FOODS',
    images: [
      {
        url: '/images/hero/hero-tutti-frutti.jpg',
        width: 1200,
        height: 630,
        alt: 'Comfit Tutti Frutti Range',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${sansFont.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#FFFCF8] text-[#1C2C40] selection:bg-[#C9184A] selection:text-white">
        {children}
      </body>
    </html>
  );
}
