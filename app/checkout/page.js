"use client";

import React, { useState } from 'react';
import { useCart } from '../components/CartContext';

export default function CheckoutPage(){
  const { items, clear } = useCart();
  const [submitted, setSubmitted] = useState(false);

  const totalItems = items.reduce((s,i)=>s + (i.qty||0), 0);

  return (
    <main className="page-shell">
      <section className="hero-card">
        <div>
          <h1>Checkout</h1>
          <p className="muted">Secure checkout — your information is private.</p>
          {!submitted ? (
            <form onSubmit={(e)=>{ e.preventDefault(); setSubmitted(true); clear(); }}>
              <div style={{display:'grid',gap:'0.75rem',maxWidth:520}}>
                <input name="name" placeholder="Full name" required />
                <input name="address" placeholder="Shipping address" required />
                <input name="email" placeholder="Email" type="email" required />
                <div style={{display:'flex',gap:'0.5rem'}}>
                  <button className="button-secondary" type="button">Back to shop</button>
                  <button className="button-primary" type="submit">Pay securely ({totalItems} items)</button>
                </div>
              </div>
            </form>
          ) : (
            <div>
              <h3>Thank you — your order is confirmed</h3>
              <p className="muted">A confirmation email is on its way.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
