"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('lx_cart');
      if (raw) setItems(JSON.parse(raw));
    } catch {
      setItems([]);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('lx_cart', JSON.stringify(items));
    } catch {
      // ignore local storage errors
    }
  }, [items]);

  const add = (product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + quantity }
            : item
        );
      }
      return [...prev, { ...product, qty: quantity }];
    });
    setOpen(true);
  };

  const adjustQty = (id, delta) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, qty: Math.max(1, item.qty + delta) }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const remove = (id) => setItems((prev) => prev.filter((item) => item.id !== id));
  const clear = () => setItems([]);

  return (
    <CartContext.Provider value={{ items, add, remove, clear, open, setOpen }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
