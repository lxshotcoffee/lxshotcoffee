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
                <svg width="42" height="42" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="brand-logo-svg">
                  <rect x="0" y="0" width="48" height="48" rx="8" fill="#0f0b09" />
                  <path d="M12 28c4-6 12-6 16 0" stroke="#d4a36b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <text x="24" y="30" textAnchor="middle" fontFamily="Verdana, Arial, sans-serif" fontSize="10" fill="#f6efe7" fontWeight="700">LX</text>
                </svg>
              </div>
              <span>LX SHOT</span>
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
                  <rect x="0" y="0" width="48" height="48" rx="8" fill="#0f0b09" />
                  <text x="24" y="30" textAnchor="middle" fontFamily="Verdana, Arial, sans-serif" fontSize="12" fill="#f6efe7" fontWeight="700">LX</text>
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
