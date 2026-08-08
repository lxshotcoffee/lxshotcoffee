"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem("lx_cart");
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try { localStorage.setItem("lx_cart", JSON.stringify(items)); } catch (e) {}
  }, [items]);

  const add = (product) => {
    setItems((prev) => {
      const exists = prev.find((p) => p.name === product.name);
      if (exists) return prev.map(p => p.name === product.name ? { ...p, qty: p.qty + 1 } : p);
      return [...prev, { ...product, qty: 1 }];
    });
    setOpen(true);
  };

  const remove = (name) => setItems((prev) => prev.filter(p => p.name !== name));
  const clear = () => setItems([]);

  return (
    <CartContext.Provider value={{ items, add, remove, clear, open, setOpen }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export default CartContext;
