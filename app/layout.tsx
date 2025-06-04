import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '../lib/cartContext';

export const metadata: Metadata = {
  title: 'Beauty Store',
  description: 'Shop the latest makeup products',
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