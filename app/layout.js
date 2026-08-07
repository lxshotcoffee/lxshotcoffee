import './globals.css';
import Link from 'next/link';

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
              <img src="/lxshotcoffee/assets/logo.svg" alt="LX SHOT Coffee logo" />
              <span>LX SHOT</span>
            </Link>
            <nav className="top-nav">
              <Link href="/">Home</Link>
              <Link href="/shop">Shop</Link>
              <Link href="/story">Story</Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
