'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';

const featuredProducts = [
  {
    name: 'Velvet Espresso',
    origin: 'Colombia',
    description: 'A rich roast with caramel sweetness and a glossy crema finish.',
    image: '/lxshotcoffee/assets/espresso.svg',
  },
  {
    name: 'Midnight Latte',
    origin: 'Ethiopia',
    description: 'Silky milk notes with floral brightness and a smooth finish.',
    image: '/lxshotcoffee/assets/latte.svg',
  },
  {
    name: 'Northwind Cold Brew',
    origin: 'Brazil',
    description: 'Bold, low-acid coffee crafted for slow mornings and late nights.',
    image: '/lxshotcoffee/assets/cold-brew.svg',
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
          <Image
            src="/lxshotcoffee/assets/logo.svg"
            alt="LX SHOT Coffee emblem"
            width={360}
            height={360}
          />
        </div>
      </section>

      <section className="shop-grid" aria-label="Featured coffee products">
        {featuredProducts.map((product, index) => (
          <article key={product.name} className="product-card">
            <Image
              src={product.image}
              alt={product.name}
              width={420}
              height={220}
              className="product-image"
            />
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
          <Image
            src={activeProduct.image}
            alt={activeProduct.name}
            width={520}
            height={520}
            className="showcase-image"
          />
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
