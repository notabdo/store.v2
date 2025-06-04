//   "use client";
//   import { redirect } from 'next/navigation'
//   import MobilePreview from "@/components/MobilePreview";
//   import { useState , useEffect } from 'react';
//   import { Button } from '@/components/ui/button';
//   import Logts from "@/app/logts/page"
//   import Image from 'next/image'
// import Link from 'next/link';


//   export default function Home() {
//     // redirect('/login') // ينقل المستخدم إلى صفحة تسجيل الدخول تلقائيًا



//     return (
//       <div className='grid justify-items-center '> 
// <header className='w-dvw'>
//   <nav className='bg-[#dfdfdfcb] flex justify-between p-2'>
//     <h1 className='font-extrabold text-4xl pl-3'>Do Xe</h1>
//     <div className='flex justify-end py-1'>
//     <Link href={"/login"}>
//     <Button className='mx-2'>Login</Button>
//     </Link>
//     <Link href={"/Register-Req"}>
//     <Button className='mx-2 bg-white text-black hover:bg-[#c5c5c5]'>Register Req</Button>
//     </Link>
//     </div>
//   </nav>
// </header>



// <h1 className='text-3xl'>
// </h1>




//       </div>
//     );
//   }
































//   // const [show, setshow] = useState(false)
//   // const [count, setCount] = useState(0)


//   // const phonePrev = () =>{
//   //     setshow((prev) => !prev)
//   // }

//   // useEffect(() => {
//   //   let intervalId: number | undefined; // تعريف المتغير خارج if لسهولة الوصول إليه في الـ cleanup

//   //   if (count < 6) {
//   //     intervalId = setInterval(() => {
//   //       setCount((prev) => prev + 1);
//   //     }, 500);
//   //   } 
//   //   // تنظيف المدى الزمني عند تدمير المكون أو عند تغيير `count`
//   //   return () => clearInterval(intervalId);

//   // }, [count]); // عند تغيير `count`


//   // useEffect(() => {
//   //   let intervalId: number | undefined;

//   //   if (count >= 6) {
//   //     intervalId = setInterval(() => {
//   //       setCount(1);
//   //     }, 1000);
//   //   }
//   //   return () => clearInterval(intervalId);

//   // }, [count])
  
  

//   // const numbers = Array.from({ length: count }, (_, index) => index + 1);




//    {/* <div>
//         <Button onClick={phonePrev}>show</Button>
//         </div> 
                              
//                               <Image 
//   width={1280}
//   height={1280}
//   src="/phone_035.jpg" 
//   alt='Transparent Image'
//   className="!mix-blend-multiply  top-[-12px] w-[320px] h-[67%] right-[12px] absolute"
//   />


//             <span onClick={phonePrev} className='mr-4'>
//                     <MobilePreview >
//                       {show ? null :                    
//                       <div className='grid justify-items-center  '>
//                         {numbers.map((number) => (
//                             <h1 key={number} className='text-2xl font-bold relative pl-1'>
//                                     Tap to see Phone preview
//                             </h1>
//                             ))}
//                       </div>}
  

//                         {show &&
//                             <iframe
//                             src="http://localhost:3000/logts"
//                             className="w-full h-full border-none z-50"
//                             ></iframe>
//                         }       
                   
//                       </MobilePreview>
//               </span> */}


'use client';
import { useState } from 'react';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { products as allProducts } from '../lib/data';
import { Input } from '@/components/ui/input';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6 text-center">Random x</h1>

      <div className="flex justify-center mb-6">
        <Input
          type="text"
          placeholder="Search products..."
          className="border px-4 py-2 w-full max-w-md rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No products found</p>
        )}
      </div>
    </Layout>
  );
}
