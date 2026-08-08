import Link from 'next/link';
import { useCart } from '../components/CartContext';

const products = [
  { name: 'Velvet Espresso', price: 18, origin: 'Colombia' },
  { name: 'Midnight Latte', price: 18, origin: 'Ethiopia' },
  { name: 'Northwind Cold Brew', price: 18, origin: 'Brazil' },
];

export default function ShopPage() {
  const { add } = useCart();

  return (
    <main className="page-shell">
      <header className="site-header">
        <div className="brand-row">
          <Link href="/" className="brand-mark">
            <div className="brand-logo" aria-hidden>
              <svg width="132" height="46" viewBox="0 0 240 46" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="LX SHOT logo">
                <defs>
                  <linearGradient id="goldLogoShop" x1="0" x2="1">
                    <stop offset="0%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#C5A880" />
                  </linearGradient>
                </defs>
                <rect x="0" y="0" width="48" height="46" rx="10" fill="#111111" />
                <circle cx="24" cy="18" r="6" fill="url(#goldLogoShop)" />
                <text x="64" y="34" fontFamily="Georgia, serif" fontSize="24" fill="#F6EFE7" fontWeight="700" letterSpacing="5">LX SHOT</text>
              </svg>
            </div>
          </Link>
          <nav className="top-nav">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/story">Story</Link>
          </nav>
        </div>
      </header>

      <section className="hero-card">
        <div>
          <h1>Shop</h1>
          <p className="muted">Explore our current selection of small-batch roasts.</p>
        </div>
      </section>

      <section className="shop-grid">
        {products.map((product, index) => (
          <article key={product.name} className="product-card">
            <div className={`product-visual product-visual--${index}`}>
              <div className="product-abstract" />
              <div className="product-gold-stamp" aria-hidden>
                <svg width="84" height="84" viewBox="0 0 84 84" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0" y="0" width="84" height="84" rx="10" fill="#0B0B0B" />
                  <g transform="translate(6,10)">
                    <text x="36" y="34" textAnchor="middle" fontFamily="Georgia, serif" fontSize="18" fill="#D4AF37" fontWeight="700" letterSpacing="2">LX</text>
                    <text x="36" y="54" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="8" fill="#C5A880">SHOT</text>
                  </g>
                </svg>
              </div>
            </div>
            <div className="product-copy">
              <p className="product-origin">{product.origin} · 340g</p>
              <h2>{product.name}</h2>
              <div className="price-row">
                <div className="price">${product.price.toFixed(2)}</div>
                <button className="button-primary" onClick={() => add({ name: product.name, price: product.price })}>Add to cart</button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
