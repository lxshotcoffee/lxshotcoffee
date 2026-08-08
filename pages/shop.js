"use client";

import Head from 'next/head';
import Link from 'next/link';
import { useCart } from '../components/CartContext';
import ProductPackaging from '../components/ProductPackaging';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';

import products from '../data/products';

const shopProducts = products;

export default function ShopPage() {
  const { add } = useCart();

  return (
    <main className="page-shell">
      <Head>
        <title>Shop | LX SHOT</title>
        <meta name="description" content="Browse LX SHOT specialty coffee, including whole bean, ground, instant, pods, and premium gift sets." />
      </Head>
      <SiteHeader />

      <section className="hero-card">
        <div>
          <h1>Shop</h1>
          <p className="muted">Explore our current selection of small-batch roasts.</p>
        </div>
      </section>

      <section className="shop-grid">
        {shopProducts.map((product) => (
          <article key={product.id} className="product-card">
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
                <div className="product-actions">
                  <button className="button-primary" onClick={() => add(product)}>
                    Add to cart
                  </button>
                  <Link href={`/shop/${product.slug}/`} className="button-secondary">
                    View
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <SiteFooter />
    </main>
  );
}
