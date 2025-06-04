    import { NextRequest, NextResponse } from 'next/server';
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    import { CustomerInfo, CartItem } from '../../../types';

    export async function POST(request: NextRequest) {
    try {
        // استخراج البيانات من الطلب
        const { customerInfo, items, total } = await request.json();
        
        // التحقق من صحة البيانات
        if (!customerInfo || !items || !total) {
        return NextResponse.json({ success: false, error: 'بيانات غير كاملة' }, { status: 400 });
        }
        
        // الحصول على التوكن من متغيرات البيئة (على الخادم فقط)
        const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
        const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
        
        if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
        console.error('لم يتم تعيين توكن البوت أو معرف الدردشة في متغيرات البيئة');
        return NextResponse.json({ success: false, error: 'خطأ في التكوين' }, { status: 500 });
        }
        
        // تنسيق رسالة الطلب
        const orderDetails = items.map((item: CartItem) => 
        `${item.name} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}`
        ).join('\n');
        
        const message = `
    🛍️ new order :

    👤 cliant:
    Name: ${customerInfo.name}
    phone number : ${customerInfo.phone}
    loction: ${customerInfo.location}

    🛒 items:
    ${orderDetails}

    💰 total: $${total.toLocaleString()}
        `;
        
        // إرسال إلى تيليجرام (هذا يحدث على الخادم، وليس في المتصفح)
        const telegramResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: 'HTML'
        }),
        });
        
        const data = await telegramResponse.json();
        
        if (data.ok) {
        return NextResponse.json({ success: true });
        } else {
        return NextResponse.json({ success: false, error: data.description }, { status: 500 });
        }
    } catch (error) {
        console.error('فشل في إرسال الطلب إلى تيليجرام:', error);
        return NextResponse.json({ success: false, error: 'حدث خطأ داخلي' }, { status: 500 });
    }
    }
