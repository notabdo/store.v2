import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Layout from '../../../components/Layout';
import ProductQuantitySelector from '../../../components/ProductQuantitySelector';
import { products } from '../../../lib/data';

export default function ProductPage({ params }) {
  const product = products.find((p) => p.id.toString() === params.id);
  
  if (!product) {
    notFound();
  }
  
  // Fix: declare and assign amd variable properly
  let amd = '';
  if (product.name === "AMD Ryzen™ Threadripper™ PRO 7995WX") {
    amd = '';
  }

  return (
    <Layout className='!bg-[#ffffff]'>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative w-full aspect-square">
          {product.vid && 
            <video autoPlay muted src={product.vid} className="w-full "></video>
          }

          {product.image && 
            <Image 
              src={product.image} 
              alt={product.name} 
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          }
        </div>
        
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl text-[#6473ca] font-semibold mb-4">${product.price.toLocaleString()}</p>
          <div className="mb-4">
            <p className="font-medium">Stock: {product.stock} available</p>
          </div>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <h3 className="font-semibold mb-2">Details:</h3>
            <p>{product.details}</p>
          </div>
          
          <ProductQuantitySelector product={product} />
        </div>
      </div>
    </Layout>
  );
}

export function generateMetadata({ params }) {
  const product = products.find((p) => p.id.toString() === params.id);
  
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }
  
  return {
    title: `${product.name} - Beauty Store`,
    description: product.description,
  };
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}