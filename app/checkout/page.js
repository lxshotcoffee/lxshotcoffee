"use client";

import React, { useState } from 'react';
import { useCart } from '../components/CartContext';

export default function CheckoutPage(){
  const { items, clear } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const totalItems = items.reduce((s,i)=>s + (i.qty||0), 0);

  return (
    <main className="page-shell">
      <section className="hero-card">
        <div>
          <h1>Checkout</h1>
          <p className="muted">Secure checkout — your information is private.</p>
          {!submitted ? (
            <form onSubmit={(e)=>{ e.preventDefault(); setSubmitted(true); clear(); }} className="checkout-grid">
              <div className="checkout-shipping">
                <h3>Shipping</h3>
                <label>
                  Full name
                  <input name="name" placeholder="Full name" required />
                </label>
                <label>
                  Address
                  <input name="address" placeholder="Street, city, postal" required />
                </label>
                <label>
                  Email
                  <input name="email" placeholder="you@domain.com" type="email" required />
                </label>
              </div>

              <div className="checkout-payment">
                <h3>Payment</h3>
                <div className="card-preview">
                  <div className="card-chip" />
                  <div className="card-number">{cardNumber || '•••• •••• •••• ••••'}</div>
                  <div className="card-row"><div className="card-name">{cardName || 'FULL NAME'}</div><div className="card-expiry">{expiry || 'MM/YY'}</div></div>
                </div>
                <label>
                  Card number
                  <input name="cc" placeholder="1234 5678 9012 3456" value={cardNumber} onChange={(e)=>setCardNumber(e.target.value)} inputMode="numeric" required />
                </label>
                <label style={{display:'flex',gap:8}}>
                  <div style={{flex:1}}>
                    Expiry
                    <input name="expiry" placeholder="MM/YY" value={expiry} onChange={(e)=>setExpiry(e.target.value)} required />
                  </div>
                  <div style={{width:120}}>
                    CVV
                    <input name="cvv" placeholder="123" value={cvv} onChange={(e)=>setCvv(e.target.value)} inputMode="numeric" required />
                  </div>
                </label>

                <div className="payment-brands">
                  <svg width="48" height="28" viewBox="0 0 48 28" aria-hidden><rect width="48" height="28" rx="4" fill="#1565c0"/><text x="24" y="18" textAnchor="middle" fill="#fff" fontSize="10">VISA</text></svg>
                  <svg width="48" height="28" viewBox="0 0 48 28" aria-hidden><rect width="48" height="28" rx="4" fill="#f0a500"/><text x="24" y="18" textAnchor="middle" fill="#000" fontSize="10">MC</text></svg>
                  <svg width="48" height="28" viewBox="0 0 48 28" aria-hidden><rect width="48" height="28" rx="4" fill="#0b2545"/><text x="24" y="18" textAnchor="middle" fill="#fff" fontSize="8">AMEX</text></svg>
                </div>

                <div style={{display:'flex',gap:8,marginTop:12}}>
                  <button className="button-secondary" type="button" onClick={()=>{ /* back to shop */ }}>Back to shop</button>
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
