"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from './CartContext';

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const { setOpen, items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + (item.qty || 0), 0);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="brand-row">
        <Link href="/" className="brand-mark" onClick={closeMenu}>
          <img src={`${basePath}/assets/logo.png`} alt="LX SHOT logo" className="brand-logo-img" />
        </Link>

        <button type="button" className="mobile-toggle" onClick={() => setMenuOpen((prev) => !prev)} aria-label="Toggle navigation">
          <span />
          <span />
          <span />
        </button>

        <nav className={`top-nav${menuOpen ? ' open' : ''}`}>
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/shop/" onClick={closeMenu}>Shop</Link>
          <Link href="/story/" onClick={closeMenu}>Story</Link>
        </nav>

        <button type="button" className="cart-toggle" onClick={() => setOpen(true)}>
          Cart{itemCount > 0 ? ` (${itemCount})` : ''}
        </button>
      </div>
    </header>
  );
}
