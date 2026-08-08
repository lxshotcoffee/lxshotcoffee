import Link from 'next/link';
import { useCart } from '../components/CartContext';

import products from '../data/products';

const shopProducts = products;

function ProductPackaging({ product }) {
  if (product.style === 'pods') {
    return (
      <div className="pod-box">
        <div className="pod-panel">
          <img src={product.image} alt={product.imageAlt} className="pod-logo" />
          <div className="pod-brand">PREMIUM COFFEE PODS</div>
          <div className="pod-detail">{product.weight}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-bag">
      <div className="bag-seal" />
      <div className="bag-body">
        <img src={product.image} alt={product.imageAlt} className="bag-logo" />
        <div className="bag-title">{product.name}</div>
        <div className="bag-badge">{product.weight}</div>
        <p className="bag-copy">{product.description}</p>
      </div>
    </div>
  );
}

export default function ShopPage() {
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
        <div>
          <h1>Shop</h1>
          <p className="muted">Explore our current selection of small-batch roasts.</p>
        </div>
      </section>

      <section className="shop-grid">
        {shopProducts.map((product) => (
          <article key={product.name} className="product-card">
            <div className="product-visual">
              <span className="product-badge">{product.origin}</span>
              <ProductPackaging product={product} />
            </div>
            <div className="product-copy">
              <p className="product-origin">{product.origin}</p>
              <h2>{product.name}</h2>
              <p>{product.notes}</p>
              <div className="price-row">
                <div className="price">${product.price.toFixed(2)}</div>
                <button className="button-primary" onClick={() => add(product)}>Add to cart</button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
