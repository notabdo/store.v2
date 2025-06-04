import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '../lib/cartContext';

export const metadata: Metadata = {
  title: 'X Store',
  description: 'Do Shop',
  openGraph: {
    title: 'X Store',
    description: 'أفضل متجر لمنتجاتك المفضلة',
    url: 'https://Abddo.com',
    siteName: 'X Store',
    images: [
      {
        url: 'https://store-v2-phi.vercel.app/_next/image?url=%2FChatGPT.png&w=1920&q=75',
        width: 1200,
        height: 630,
        alt: 'X Store Image',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}