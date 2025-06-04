"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import CartItemList from '../../components/CartItemList';
import CheckoutForm from '../../components/CheckoutForm';
import { useCart } from '../../lib/cartContext';
import { Button } from '@/components/ui/button';

export const ClientCart: React.FC = () => {
  const { items } = useCart();
  const router = useRouter();
  
  if (items.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-xl mb-4">Your cart is empty</p>
        <Button 
          onClick={() => router.push('/')}
          className="bg-black text-white py-2 px-6 rounded hover:bg-[#363636] transition-colors"
        >
          Continue Shopping
        </Button>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <CartItemList />
      </div>
      <div>
        <CheckoutForm />
      </div>
    </div>
  );
};