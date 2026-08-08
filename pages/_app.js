import '../globals.css';
import { CartProvider } from '../components/CartContext';
import CartDrawer from '../components/CartDrawer';

export default function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
      <CartDrawer />
    </CartProvider>
  );
}
