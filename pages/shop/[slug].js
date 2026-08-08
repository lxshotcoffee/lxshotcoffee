"use client";

import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '../../components/CartContext';
import ProductPackaging from '../../components/ProductPackaging';
import SiteFooter from '../../components/SiteFooter';
import SiteHeader from '../../components/SiteHeader';
import products from '../../data/products';

export default function ProductDetailPage({ product, related }) {
  const { add } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <main className="page-shell">
        <SiteHeader />
        <section className="hero-card">
          <h1>Product not found</h1>
          <p className="muted">Check the shop collection or return to the storefront.</p>
        </section>
      </main>
    );
  }

  return (
    <main className="page-shell">
      <Head>
        <title>{product.name} | LX SHOT</title>
        <meta name="description" content={product.description} />
      </Head>
      <SiteHeader />

      <section className="hero-card">
        <div>
          <p className="eyebrow">Product details</p>
          <h1>{product.name}</h1>
          <p className="muted">{product.description}</p>
        </div>
      </section>

      <section className="product-detail-grid">
        <div className="detail-visual">
          <ProductPackaging product={product} />
        </div>

        <div className="detail-copy">
          <span className="product-badge">{product.origin}</span>
          <h2>{product.name}</h2>
          <p>{product.description}</p>

          <div className="product-specs">
            <div>
              <dt>Roast</dt>
              <dd>{product.roast}</dd>
            </div>
            <div>
              <dt>Weight</dt>
              <dd>{product.weight}</dd>
            </div>
            <div>
              <dt>Category</dt>
              <dd>{product.category}</dd>
            </div>
            <div>
              <dt>Price</dt>
              <dd>${product.price.toFixed(2)}</dd>
            </div>
          </div>

          <ul className="detail-features">
            <li>
              <strong>Flavor notes:</strong> {product.flavorNotes}
            </li>
            <li>
              <strong>Brewing style:</strong> {product.brewStyle || 'Designed for elevated daily ritual'}
            </li>
          </ul>

          <div className="quantity-control">
            <label>
              Quantity
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(event) => setQuantity(Math.max(1, Number(event.target.value) || 1))}
              />
            </label>
          </div>

          <div className="shop-card-actions">
            <button className="button-primary" type="button" onClick={() => add(product, quantity)}>
              Add {quantity} to cart
            </button>
            <Link href="/shop/" className="button-secondary">
              Back to shop
            </Link>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="related-products">
          <h3>Related products</h3>
          <div className="related-grid">
            {related.map((item) => (
              <article key={item.id} className="product-card">
                <div className="product-visual">
                  <span className="product-badge">{item.origin}</span>
                  <ProductPackaging product={item} />
                </div>
                <div className="product-copy">
                  <p className="product-origin">{item.origin}</p>
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <div className="price-row">
                    <div className="price">${item.price.toFixed(2)}</div>
                    <Link href={`/shop/${item.slug}/`} className="button-secondary">
                      View
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <SiteFooter />
    </main>
  );
}

export async function getStaticPaths() {
  return {
    paths: products.map((product) => ({ params: { slug: product.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) {
    return { notFound: true };
  }

  const related = products.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 3);

  return {
    props: {
      product,
      related,
    },
  };
}
