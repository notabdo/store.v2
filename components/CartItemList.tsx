"use client";

import React from 'react';
import Image from 'next/image';
import { useCart } from '../lib/cartContext';

const CartItemList: React.FC = () => {
  const { items, removeFromCart, updateQuantity } = useCart();
  
  if (items.length === 0) {
    return null;
  }
  
  return (
    <div className="border rounded-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4 text-left">Product</th>
            <th className="py-3 px-4 text-center">Quantity</th>
            <th className="py-3 px-4 text-right">Price</th>
            <th className="py-3 px-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="py-4 px-4">
                <div className="flex items-center">
                  <div className="relative w-16 h-16 mr-4">
                    {/* <Image 
                      src={item.image} 
                      alt={item.name} 
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded"
                    /> */}

{item.vid && 
        <video autoPlay muted src={item.vid} className=''></video>
        }
        
     
        {item.image && <Image 
          src={item.image} 
          alt={item.name} 
          fill
          style={{ objectFit: 'cover' }}
        /> }
                  </div>
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-600">${item.price.toLocaleString()} each</p>
                  </div>
                </div>
              </td>
              <td className="py-4 px-4 text-center">
                <select 
                  value={item.quantity} 
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="border rounded p-1"
                >
                  {[...Array(item.stock)].map((_, i) => (
                    <option key={i+1} value={i+1}>{i+1}</option>
                  ))}
                </select>
              </td>
              <td className="py-4 px-4 text-right font-medium">
                ${(item.price * item.quantity).toLocaleString()}
              </td>
              <td className="py-4 px-4 text-right">
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartItemList;