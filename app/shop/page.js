"use client";

import Link from 'next/link';
import { useCart } from '../components/CartContext';

const products = [
  { name: 'Velvet Espresso', price: 18, origin: 'Colombia' },
  { name: 'Midnight Latte', price: 18, origin: 'Ethiopia' },
  { name: 'Northwind Cold Brew', price: 18, origin: 'Brazil' },
];

export default function ShopPage(){
  const { add } = useCart();

  return (
    <main className="page-shell">
      <section className="hero-card">
        <div>
          <h1>Shop</h1>
          <p className="muted">Explore our current selection of small-batch roasts.</p>
        </div>
      </section>

      <section className="shop-grid">
        {products.map((p, i) => (
          <article key={p.name} className="product-card">
            <div className={`product-visual product-visual--${i}`}>
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
              <p className="product-origin">{p.origin} · 340g</p>
              <h2>{p.name}</h2>
              <div className="price-row"><div className="price">${p.price.toFixed(2)}</div><button className="button-primary" onClick={() => add({ name: p.name, price: p.price })}>Add to cart</button></div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
