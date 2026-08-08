import Link from 'next/link';

export default function StoryPage() {
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
          <h1>Our Story</h1>
          <p className="muted">LX SHOT was founded to create refined, small-batch coffees with a focus on terroir and craft.</p>
        </div>
      </section>

      <section className="showcase-card">
        <div className="showcase-copy">
          <h2>From seed to cup</h2>
          <p className="muted">We work directly with growers to source unique lots and roast them to highlight clarity and sweetness.</p>
        </div>
      </section>
    </main>
  );
}
