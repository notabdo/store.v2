import React from 'react';
import Link from 'next/link';
import { Product } from '../types';
import Image from 'next/image';
import { Button } from './ui/button';

interface ProductCardProps {
  product: Product;
}



const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
let fix_it;
  if(product.vid){
    fix_it = "mt-8"
  }

  return (
    <div className=" bg-[#e9e9e9] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative w-full h-48">
        {product.vid && 
        <video autoPlay muted src={product.vid} className=''></video>
        }
        
     
        {product.image && <Image 
          src={product.image} 
          alt={product.name} 
          fill
          style={{ objectFit: 'cover' }}
        /> }
      </div>
      <div className={`p-4 ${fix_it} `}>
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-[#3a3a3a]">${product.price.toLocaleString()}</span>
          <Link href={`/products/${product.id}`}>
            <Button className="bg-[#3a3a3a] text-white py-2 px-4 rounded hover:bg-[#000000] transition-colors cursor-pointer">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
