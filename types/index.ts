export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string | boolean;
    stock: number;
    details: string;
    vid: string | boolean;
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }
  
  export interface CustomerInfo {
    name: string;
    phone: string;
    location: string;
  }

  