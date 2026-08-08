import Link from 'next/link';
import { useMemo, useRef, useState } from 'react';
import { useCart } from '../components/CartContext';
import CartDrawer from '../components/CartDrawer';

const featuredProducts = [
  {
    name: 'Velvet Espresso',
    origin: 'Colombia',
    description: 'A rich roast with caramel sweetness and a glossy crema finish.',
    price: 18,
  },
  {
    name: 'Midnight Latte',
    origin: 'Ethiopia',
    description: 'Silky milk notes with floral brightness and a smooth finish.',
    price: 18,
  },
  {
    name: 'Northwind Cold Brew',
    origin: 'Brazil',
    description: 'Bold, low-acid coffee crafted for slow mornings and late nights.',
    price: 18,
  },
];

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const trackRef = useRef(null);
  const { add } = useCart();

  const activeProduct = useMemo(() => featuredProducts[activeIndex], [activeIndex]);

  return (
    <main className="page-shell">
      <header className="site-header">
        <div className="brand-row">
          <Link href="/" className="brand-mark">
            <div className="brand-logo" aria-hidden>
              <svg width="132" height="46" viewBox="0 0 240 46" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="LX SHOT logo">
                <defs>
                  <linearGradient id="goldLogo" x1="0" x2="1">
                    <stop offset="0%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#C5A880" />
                  </linearGradient>
                </defs>
                <rect x="0" y="0" width="48" height="46" rx="10" fill="#111111" />
                <circle cx="24" cy="18" r="6" fill="url(#goldLogo)" />
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
        <div className="hero-copy">
          <p className="eyebrow">Premium coffee for modern rituals</p>
          <h1>Crafted roasts that turn every sip into a signature moment.</h1>
          <p className="hero-text">Discover elevated blends, seasonal release notes, and refined house brewing essentials.</p>
          <div className="cta-row">
            <Link href="/shop" className="button-primary">Shop the collection</Link>
            <Link href="/story" className="button-secondary">Read our story</Link>
          </div>
        </div>
        <div className="hero-media">
          <div className="hero-art">
            <svg viewBox="0 0 600 600" preserveAspectRatio="xMidYMid meet" className="hero-svg">
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0%" stopColor="#1f120e" />
                  <stop offset="100%" stopColor="#3a1f17" />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" rx="26" fill="url(#g1)" />
              <g transform="translate(60,120)">
                <text x="0" y="60" fontFamily="Georgia, serif" fontSize="48" fill="#D4AF37">LX</text>
                <text x="110" y="60" fontFamily="Inter, sans-serif" fontSize="34" fill="#F6EFE7">SHOT</text>
              </g>
            </svg>
          </div>
        </div>
      </section>

      <section className="shop-grid" aria-label="Featured coffee products">
        <div className="carousel-controls">
          <button className="button-secondary" onClick={() => setCarouselIndex(Math.max(0, carouselIndex - 1))}>Prev</button>
          <div className="dots">
            {featuredProducts.map((product, index) => (
              <button key={product.name} className={index === carouselIndex ? 'dot active' : 'dot'} onClick={() => setCarouselIndex(index)} aria-label={product.name} />
            ))}
          </div>
          <button className="button-secondary" onClick={() => setCarouselIndex(Math.min(featuredProducts.length - 1, carouselIndex + 1))}>Next</button>
        </div>

        <div className="carousel-viewport">
          <div className="carousel-track" ref={trackRef}>
            {featuredProducts.map((product, index) => (
              <article key={product.name} className="product-card">
                <div className={`product-visual product-visual--${index}`}>
                  <div className="product-badge">{product.origin}</div>
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
                  <p className="product-origin">{product.origin}</p>
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                  <div className="price-row">
                    <div className="price">${product.price.toFixed(2)}</div>
                    <button className="button-primary" onClick={() => add({ name: product.name, price: product.price })}>Add to cart</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CartDrawer />
    </main>
  );
}
