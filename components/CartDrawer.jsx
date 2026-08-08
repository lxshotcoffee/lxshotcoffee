"use client";

import React from 'react';
import Link from 'next/link';
import { useCart } from './CartContext';

export default function CartDrawer() {
  const { items, remove, clear, open, setOpen } = useCart();

  return (
    <aside className={"cart-drawer" + (open ? ' cart-open' : '')} aria-hidden={!open}>
      <div className="cart-inner">
        <button className="cart-close" onClick={() => setOpen(false)}>Close</button>
        <h3>Your Cart</h3>
        <div className="cart-items">
          {items.length === 0 && <p className="muted">Your cart is empty.</p>}
          {items.map((item) => (
            <div className="cart-row" key={item.name}>
              <div>
                <strong>{item.name}</strong>
                <div className="muted">Qty: {item.qty}</div>
              </div>
              <div>
                <button className="button-secondary" onClick={() => remove(item.name)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-actions">
          <button className="button-secondary" onClick={() => clear()}>Clear</button>
          <Link href="/checkout" className="button-primary" onClick={() => setOpen(false)}>Proceed to Checkout</Link>
        </div>
      </div>
    </aside>
  );
}
