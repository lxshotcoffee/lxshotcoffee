import Link from 'next/link';
import { useRef, useState } from 'react';
import { useCart } from '../components/CartContext';
import CartDrawer from '../components/CartDrawer';

const featuredProducts = [
  {
    name: 'Velvet Espresso',
    origin: 'Colombia',
    description: 'Smooth caramel, dark chocolate, and a velvety crema finish.',
    price: 18,
    badge: '200G',
    notes: 'A tall matte pouch ideal for espresso rituals.',
    style: 'bag',
  },
  {
    name: 'Midnight Latte',
    origin: 'Ethiopia',
    description: 'Silky florals with milk-warmth and a polished, smooth finish.',
    price: 18,
    badge: '100G',
    notes: 'A sleek pouch with premium labeled weight detail.',
    style: 'bag',
  },
  {
    name: 'Northwind Cold Brew',
    origin: 'Brazil',
    description: 'Bold, low-acid coffee crafted for slow mornings and late nights.',
    price: 18,
    badge: '10 CT',
    notes: 'A luxury coffee pod box designed to bring premium convenience.',
    style: 'pods',
  },
];

function ProductPackaging({ product }) {
  if (product.style === 'pods') {
    return (
      <div className="pod-box">
        <div className="pod-panel">
          <img src="/lxshotcoffee/assets/logo.png" alt="LX SHOT logo" className="pod-logo" />
          <div className="pod-brand">PREMIUM COFFEE PODS</div>
          <div className="pod-detail">{product.badge}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-bag">
      <div className="bag-seal" />
      <div className="bag-body">
        <img src="/lxshotcoffee/assets/logo.png" alt="LX SHOT logo" className="bag-logo" />
        <div className="bag-title">{product.name}</div>
        <div className="bag-badge">{product.badge}</div>
        <p className="bag-copy">{product.notes}</p>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const trackRef = useRef(null);
  const { add } = useCart();

  return (
    <main className="page-shell">
      <header className="site-header">
        <div className="brand-row">
          <Link href="/" className="brand-mark">
            <img src="/lxshotcoffee/assets/logo.png" alt="LX SHOT logo" className="brand-logo-img" />
          </Link>
          <nav className="top-nav">
            <Link href="/">Home</Link>
            <Link href="/shop/">Shop</Link>
            <Link href="/story/">Story</Link>
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
          <div className="carousel-track" ref={trackRef} style={{ transform: `translateX(-${carouselIndex * 100}%)` }}>
            {featuredProducts.map((product) => (
              <article key={product.name} className="product-card">
                <div className="product-visual">
                  <span className="product-badge">{product.origin}</span>
                  <ProductPackaging product={product} />
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
