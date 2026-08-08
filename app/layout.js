import './globals.css';
import Link from 'next/link';
import { CartProvider } from './components/CartContext';
import CartDrawer from './components/CartDrawer';

export const metadata = {
  title: 'LX SHOT Coffee',
  description: 'Premium coffee landing experience for GitHub Pages.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="brand-row">
            <Link href="/" className="brand-mark">
              <div className="brand-logo" aria-hidden>
                <svg width="120" height="42" viewBox="0 0 220 42" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="LX SHOT logo">
                  <defs>
                    <linearGradient id="gold" x1="0" x2="1">
                      <stop offset="0%" stopColor="#D4AF37" />
                      <stop offset="100%" stopColor="#C5A880" />
                    </linearGradient>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <rect x="0" y="0" width="44" height="42" rx="8" fill="#0B0B0B" />
                    <g transform="translate(6,6)">
                      <circle cx="12" cy="12" r="6" fill="url(#gold)" opacity="0.95" />
                    </g>
                    <text x="64" y="28" fontFamily="Georgia, 'Times New Roman', serif" fontSize="20" fill="#F6EFE7" fontWeight="600" letterSpacing="6">LX SHOT</text>
                  </g>
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
        <CartProvider>
          {children}
          <CartDrawer />

          <footer className="site-footer">
          <div className="footer-inner">
            <div className="footer-brand">
              <div className="brand-logo-sm" aria-hidden>
                <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0" y="0" width="48" height="48" rx="8" fill="#0B0B0B" />
                  <circle cx="24" cy="16" r="6" fill="#D4AF37" />
                  <text x="24" y="36" textAnchor="middle" fontFamily="Georgia, serif" fontSize="12" fill="#D4AF37" fontWeight="700">LX</text>
                </svg>
              </div>
              <div className="brand-copy">
                <strong>LX SHOT</strong>
                <p className="muted">Crafted roasts · Direct trade · Small batches</p>
              </div>
            </div>

            <div className="footer-links">
              <div className="col">
                <h4>Shop</h4>
                <ul>
                  <li><Link href="/shop">Whole Bean</Link></li>
                  <li><Link href="/shop">Cold Brew</Link></li>
                  <li><Link href="/shop">Limited Releases</Link></li>
                  <li><Link href="/shop">Subscription</Link></li>
                </ul>
              </div>
              <div className="col">
                <h4>Support</h4>
                <ul>
                  <li><Link href="/support">Track Order</Link></li>
                  <li><Link href="/support">Shipping & Returns</Link></li>
                  <li><Link href="/support">Brewing Guides</Link></li>
                  <li><Link href="/support">FAQs</Link></li>
                </ul>
              </div>
              <div className="col">
                <h4>Legal</h4>
                <ul>
                  <li><Link href="/privacy">Privacy Policy</Link></li>
                  <li><Link href="/terms">Terms of Service</Link></li>
                  <li><Link href="/accessibility">Accessibility</Link></li>
                </ul>
              </div>

              <div className="col contact">
                <h4>Contact</h4>
                <p>support@lxshot.com</p>
                <p>123 Roast Lane, Coffee City</p>
                <form className="newsletter" action="#" method="post">
                  <input type="email" name="email" placeholder="Email address" aria-label="newsletter email" />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
          <div className="legal-bar">© {new Date().getFullYear()} LX SHOT — All rights reserved</div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
