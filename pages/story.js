import Link from 'next/link';

export default function StoryPage() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <div className="brand-row">
          <Link href="/" className="brand-mark">
            <div className="brand-logo" aria-hidden>
              <svg width="132" height="46" viewBox="0 0 240 46" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="LX SHOT logo">
                <defs>
                  <linearGradient id="goldLogoStory" x1="0" x2="1">
                    <stop offset="0%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#C5A880" />
                  </linearGradient>
                </defs>
                <rect x="0" y="0" width="48" height="46" rx="10" fill="#111111" />
                <circle cx="24" cy="18" r="6" fill="url(#goldLogoStory)" />
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
