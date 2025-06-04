import { CustomerInfo, CartItem } from '../types';

export const sendOrderToTelegram = async (customerInfo: CustomerInfo, items: CartItem[], total: number): Promise<boolean> => {
  try {
    // إرسال الطلب إلى نقطة النهاية الخاصة بالخادم
    const response = await fetch('/api/send-telegram-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        customerInfo,
        items,
        total
      }),
    });
    
    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('فشل في إرسال الطلب:', error);
    return false;
  }
};