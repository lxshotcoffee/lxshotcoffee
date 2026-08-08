'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

const featuredProducts = [
  {
    name: 'Velvet Espresso',
    origin: 'Colombia',
    description: 'A rich roast with caramel sweetness and a glossy crema finish.',
    image: '/assets/espresso.svg',
  },
  {
    name: 'Midnight Latte',
    origin: 'Ethiopia',
    description: 'Silky milk notes with floral brightness and a smooth finish.',
    image: '/assets/latte.svg',
  },
  {
    name: 'Northwind Cold Brew',
    origin: 'Brazil',
    description: 'Bold, low-acid coffee crafted for slow mornings and late nights.',
    image: '/assets/cold-brew.svg',
  },
];

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProduct = useMemo(() => featuredProducts[activeIndex], [activeIndex]);

  return (
    <main className="page-shell">
      <section className="hero-card">
        <div className="hero-copy">
          <p className="eyebrow">Premium coffee for modern rituals</p>
          <h1>Crafted roasts that turn every sip into a signature moment.</h1>
          <p className="hero-text">
            Discover elevated blends, seasonal release notes, and refined house brewing essentials.
          </p>
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
                <text x="0" y="60" fontFamily="Georgia, serif" fontSize="48" fill="#d4a36b">LX</text>
                <text x="110" y="60" fontFamily="Inter, sans-serif" fontSize="34" fill="#f6efe7">SHOT</text>
              </g>
            </svg>
          </div>
        </div>
      </section>

      <section className="shop-grid" aria-label="Featured coffee products">
        {featuredProducts.map((product, index) => (
          <article key={product.name} className="product-card">
            <div className={`product-visual product-visual--${index}`} aria-hidden>
              <div className="product-badge">{product.origin}</div>
              <div className="product-abstract" />
            </div>
            <div className="product-copy">
              <p className="product-origin">{product.origin}</p>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="showcase-card" aria-label="Interactive product showcase">
        <div className="showcase-media">
          <div className="showcase-visual">
            <div className="showcase-abstract" aria-hidden />
            <div className="showcase-label">{activeProduct.name}</div>
          </div>
        </div>
        <div className="showcase-copy">
          <p className="eyebrow">Featured highlight</p>
          <h2>{activeProduct.name}</h2>
          <p>{activeProduct.description}</p>
          <div className="dot-row" role="tablist" aria-label="Coffee showcase selector">
            {featuredProducts.map((product, index) => (
              <button
                key={product.name}
                type="button"
                aria-label={`Show ${product.name}`}
                className={index === activeIndex ? 'dot active' : 'dot'}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          <div className="slider-actions">
            <button
              type="button"
              className="button-secondary"
              onClick={() => setActiveIndex((activeIndex + featuredProducts.length - 1) % featuredProducts.length)}
            >
              Previous
            </button>
            <button
              type="button"
              className="button-primary"
              onClick={() => setActiveIndex((activeIndex + 1) % featuredProducts.length)}
            >
              Next
            </button>
          </div>
          <Link href="/shop" className="button-primary">Explore the roast</Link>
        </div>
      </section>
    </main>
  );
}
