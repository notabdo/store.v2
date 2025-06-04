"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Product } from '../types';
import { useCart } from '../lib/cartContext';
import { Button } from './ui/button';

interface ProductQuantitySelectorProps {
  product: Product;
}

const ProductQuantitySelector: React.FC<ProductQuantitySelectorProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const router = useRouter();
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value));
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
    router.push('/cart');
  };
  
  return (
    <>
      <div className="flex items-center mb-6">
        <label htmlFor="quantity" className="mr-4">Quantity:</label>
        <select 
          id="quantity" 
          value={quantity} 
          onChange={handleQuantityChange}
          className="border rounded p-2"
        >
          {[...Array(product.stock)].map((_, i) => (
            <option key={i+1} value={i+1}>{i+1}</option>
          ))}
        </select>
      </div>
      
      <Button 
        onClick={handleAddToCart}
        className="w-full cursor-pointer bg-[#3a3a3a] text-white py-3 px-4 rounded-lg hover:bg-black transition-colors"
      >
        Add to Cart
      </Button>
    </>
  );
};

export default ProductQuantitySelector;