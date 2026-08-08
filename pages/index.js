"use client";

import Head from 'next/head';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { useCart } from '../components/CartContext';
import ProductPackaging from '../components/ProductPackaging';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

import products from '../data/products';

const collections = [
  { title: 'Whole Bean', description: 'Single-origin and blend bags for espresso, drip, and cold brew rituals.', href: '/shop/velvet-espresso/' },
  { title: 'Ground Coffee', description: 'Ready-to-brew ground roasts for every specialty coffee moment.', href: '/shop/ember-ground/' },
  { title: 'Instant & Sticks', description: 'Everyday convenience with premium instant and stick packs.', href: '/shop/dawn-instant/' },
  { title: 'Pods', description: 'Machine-ready capsule blends with rich crema and balanced body.', href: '/shop/artisan-pods/' },
  { title: 'Reserve', description: 'Small-lot reserve collection with refined nuance and clarity.', href: '/shop/estate-reserve/' },
  { title: 'Luxury Gifts', description: 'Curated gift boxes and lifestyle sets for special occasions.', href: '/shop/black-ceremony-gift-box/' },
];

const featuredProducts = products.slice(0, 3);

export default function HomePage() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const trackRef = useRef(null);
  const { add } = useCart();

  return (
    <main className="page-shell">
      <Head>
        <title>LX SHOT | Luxury Specialty Coffee</title>
        <meta name="description" content="LX SHOT offers premium specialty coffee, luxury packaging, and a refined ecommerce experience." />
      </Head>
      <SiteHeader />

      <section className="hero-card">
        <div className="hero-copy">
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/logo.png`} alt="LX SHOT logo" className="hero-logo" />
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

      <section className="collections-grid" aria-label="Collections">
        <h2>Collections</h2>
        <div className="collection-items">
          {collections.map((collection) => (
            <Link key={collection.title} href={collection.href} className="collection-card">
              <h3>{collection.title}</h3>
              <p>{collection.description}</p>
            </Link>
          ))}
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
                    <button className="button-primary" onClick={() => add(product)}>Add to cart</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="story-grid" aria-label="Why LX SHOT">
        <div className="story-item">
          <h2>Refined sourcing</h2>
          <p>We partner with specialty farms to source single-origin lots that highlight clarity, sweetness, and terroir.</p>
        </div>
        <div className="story-item">
          <h2>Premium packaging</h2>
          <p>Matte black finishes, gold accents, and luxury unboxing combine for a premium coffee experience.</p>
        </div>
        <div className="story-item">
          <h2>Everyday ritual</h2>
          <p>From elegant capsules to signature beans, LX SHOT makes specialty coffee feel effortless and elevated.</p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
