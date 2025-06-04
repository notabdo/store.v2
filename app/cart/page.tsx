import Layout from '../../components/Layout';
import { ClientCart } from './client-cart';

export const metadata = {
  title: 'Your Cart - Beauty Store',
};

export default function CartPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6 text-center">Your Shopping Cart</h1>
      <ClientCart />
    </Layout>
  );
}