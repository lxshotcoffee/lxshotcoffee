"use client";

"use client";

import Head from 'next/head';
import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../components/CartContext';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';

export default function CheckoutPage() {
  const { items, clear } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const totalItems = items.reduce((sum, item) => sum + (item.qty || 0), 0);
  const totalPrice = items.reduce((sum, item) => sum + (item.price || 0) * (item.qty || 1), 0).toFixed(2);

  return (
    <main className="page-shell">
      <Head>
        <title>Checkout | LX SHOT</title>
        <meta name="description" content="Complete your order with LX SHOT. Secure payment, shipping details, and premium order review." />
      </Head>
      <SiteHeader />

      <section className="hero-card">
        <div className="checkout-hero">
          <div>
            <h1>Checkout</h1>
            <p className="muted">Complete your order with secure payment and premium shipping.</p>
          </div>
        </div>

        <form className="checkout-grid" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); clear(); }}>
          <div className="checkout-card checkout-shipping">
            <h3>Shipping details</h3>
            <label>
              Full name
              <input name="name" placeholder="Alex Morgan" required />
            </label>
            <label>
              Email address
              <input name="email" type="email" placeholder="you@lxshot.com" required />
            </label>
            <label>
              Shipping address
              <input name="address" placeholder="123 Roast Ave, Coffee City" required />
            </label>
            <label>
              City / Postal code
              <input name="city" placeholder="City, ZIP" required />
            </label>
          </div>

          <div className="checkout-card checkout-payment">
            <h3>Payment</h3>
            <div className="card-preview">
              <div className="card-chip" />
              <div className="card-number">{cardNumber || '•••• •••• •••• ••••'}</div>
              <div className="card-row">
                <span className="card-name">{cardName || 'CARDHOLDER NAME'}</span>
                <span className="card-expiry">{expiry || 'MM/YY'}</span>
              </div>
            </div>
            <label>
              Card number
              <input value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} placeholder="1234 5678 9012 3456" inputMode="numeric" required />
            </label>
            <label>
              Cardholder name
              <input value={cardName} onChange={(e) => setCardName(e.target.value)} placeholder="ALEX MORGAN" required />
            </label>
            <div className="two-column">
              <label>
                Expiry
                <input value={expiry} onChange={(e) => setExpiry(e.target.value)} placeholder="MM/YY" inputMode="numeric" required />
              </label>
              <label>
                CVV
                <input value={cvv} onChange={(e) => setCvv(e.target.value)} placeholder="123" inputMode="numeric" required />
              </label>
            </div>
            <div className="payment-brands">
              <div className="brand-pill visa">VISA</div>
              <div className="brand-pill mastercard">MC</div>
              <div className="brand-pill amex">AMEX</div>
            </div>
            <div className="checkout-summary">
              <span>{totalItems} item(s)</span>
              <strong>${totalPrice}</strong>
            </div>
            <button className="button-primary button-block" type="submit">Pay securely</button>
            <Link href="/shop/" className="button-secondary button-block">Back to shop</Link>
          </div>
        </form>

        {submitted && (
          <div className="checkout-confirmation">
            <h3>Order placed</h3>
            <p className="muted">Your premium roast is being prepared. A confirmation email will arrive shortly.</p>
          </div>
        )}
      </section>

      <SiteFooter />
    </main>
  );
}
