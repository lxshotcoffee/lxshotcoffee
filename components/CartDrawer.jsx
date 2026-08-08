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
            <div className="cart-row" key={item.id}>
              <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                {item.image && (
                  <img src={item.image} alt={item.imageAlt || item.name} style={{width:56, height:56, objectFit:'cover', borderRadius:8, background:'#080707', border:'1px solid rgba(255,255,255,0.04)'}} />
                )}
                <div>
                  <strong>{item.name}</strong>
                  <div className="muted">Qty: {item.qty}</div>
                </div>
              </div>
              <div style={{textAlign:'right'}}>
                <div className="muted">${((item.price || 0) * item.qty).toFixed(2)}</div>
                <button className="button-secondary" onClick={() => remove(item.id)}>Remove</button>
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
