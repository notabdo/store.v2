"use client";

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { useCart } from '../lib/cartContext';

interface LayoutProps {
  children: ReactNode;
  className?: string; // أضف هذا السطر لدعم className
}

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  const { items } = useCart();
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);
  
  return (
    <div className={`min-h-screen flex flex-col bg-[#fdfdfd] ${className}`}>
      <header className="bg-[#061b36ab] text-white p-4 sticky top-0 z-50 blury">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <span className="text-2xl font-bold cursor-pointer">Random Store</span>
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/">
                  <span className="hover:underline cursor-pointer">Products</span>
                </Link>
              </li>
              <li>
                <Link href="/cart">
                  <span className="hover:underline cursor-pointer flex items-center">
                    Cart ({itemCount})
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      
      <footer className="bg-gray-100 p-4">
        <div className="container mx-auto text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Beauty Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
