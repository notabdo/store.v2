"use client";

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../lib/cartContext';
import { sendOrderToTelegram } from '../lib/telegramBot';
import { CustomerInfo } from '../types';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

const CheckoutForm: React.FC = () => {
  const [shows, setShows] = useState(false);
  const [showsd, setShowsd] = useState(false);
  const [discount, setDiscount] = useState(0);
  const couponRef = useRef<HTMLInputElement>(null);

  const { items, clearCart, total } = useCart();
  const router = useRouter();
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: '',
    phone: '',
    location: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderStatus, setOrderStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Calculate final total - fixed to work without coupon
  const getFinalTotal = () => {
    if (discount > 0) {
      return total / discount;
    }
    return total;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (items.length === 0) {
      alert('Your cart is empty');
      return;
    }

    setIsSubmitting(true);

    try {
      // Use the fixed total calculation
      const success = await sendOrderToTelegram(customerInfo, items, getFinalTotal());

      if (success) {
        setOrderStatus('success');
        clearCart();
        setTimeout(() => {
          router.push('/');
        }, 3000);
      } else {
        setOrderStatus('error');
      }
    } catch (error) {
      setOrderStatus('error');
      console.error('Order submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const applyCoupon = () => {
    const code = couponRef.current?.value.trim().toLowerCase();
    if (code === "right") {
      setDiscount(2);
      setShowsd(true);
    } else {
      alert("Invalid coupon code");
      setDiscount(0);
      setShowsd(false);
    }
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg sticky top-4">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>

      <div className="flex justify-between py-2 border-b">
        <span>Subtotal</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <div className="grid text-lg justify-items-start py-2 border-b items-center">
        <button type="button" onClick={() => setShows(!shows)} className=" cursor-pointer text-[#3ea191]">
          Have a Coupon?
        </button>
        {shows && (
          <div className="flex gap-2 items-center mt-2">
            <Input ref={couponRef} placeholder="Enter coupon" />
            <Button type="button" onClick={applyCoupon}>Apply</Button>
          </div>
        )}

        {showsd && (
          <h1 className='p-5 text-4xl text-[#21bb54] font-extrabold'>
            Discount -{Math.round(100 - (100 / discount))}%
          </h1>
        )}
      </div>

      <div className="flex justify-between py-2 font-bold text-lg mt-4">
        <span>Total</span>
        <span>${getFinalTotal().toFixed(2)}</span>
      </div>

      <form onSubmit={handleSubmit} className="mt-6">
        <div className="mb-4">
          <Label htmlFor="name">Full Name</Label>
          <Input 
            type="text" 
            id="name" 
            name="name" 
            value={customerInfo.name} 
            onChange={handleInputChange} 
            required 
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="phone">Phone Number</Label>
          <Input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={customerInfo.phone} 
            onChange={handleInputChange} 
            required 
          />
        </div>

        <div className="mb-6">
          <Label htmlFor="location">Delivery Location</Label>
          <Input 
            type="text" 
            id="location" 
            name="location" 
            value={customerInfo.location} 
            onChange={handleInputChange} 
            required 
          />
        </div>

        <Button 
          type="submit" 
          disabled={isSubmitting} 
          className={`w-full py-3 px-4 rounded font-medium cursor-pointer ${
            isSubmitting ? 'bg-gray-400' : 'bg-[#3a3a3a] hover:bg-black'
          } text-white transition-colors`}
        >
          {isSubmitting ? 'Processing...' : 'Complete Order'}
        </Button>

        {orderStatus === 'success' && (
          <div className="mt-4 p-3 bg-green-100 text-green-700 rounded">
            Order submitted successfully! Thank you for your purchase.
          </div>
        )}

        {orderStatus === 'error' && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">
            There was an error processing your order. Please try again.
          </div>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;