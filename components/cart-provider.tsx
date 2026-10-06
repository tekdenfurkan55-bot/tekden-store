"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { SelectionId } from "@/lib/product";

export type CartLine = { id: SelectionId; quantity: number };
type CartContextValue = {
  items: CartLine[];
  itemCount: number;
  addItem: (id: SelectionId, quantity?: number) => void;
  updateQuantity: (id: SelectionId, quantity: number) => void;
  removeItem: (id: SelectionId) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const storageKey = "tekden-cart-v2";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved) setItems(JSON.parse(saved));
    } catch {
      window.localStorage.removeItem(storageKey);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) window.localStorage.setItem(storageKey, JSON.stringify(items));
  }, [items, ready]);

  const value = useMemo<CartContextValue>(() => ({
    items,
    itemCount: items.reduce((total, item) => total + item.quantity, 0),
    addItem(id, quantity = 1) {
      setItems((current) => {
        const found = current.find((item) => item.id === id);
        return found ? current.map((item) => item.id === id ? { ...item, quantity: item.quantity + quantity } : item) : [...current, { id, quantity }];
      });
    },
    updateQuantity(id, quantity) {
      if (quantity < 1) return;
      setItems((current) => current.map((item) => item.id === id ? { ...item, quantity } : item));
    },
    removeItem(id) { setItems((current) => current.filter((item) => item.id !== id)); },
    clearCart() { setItems([]); },
  }), [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
