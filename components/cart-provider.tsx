"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { PackageSize } from "@/lib/product";

export type CartLine = {
  id: string;
  packageSize: PackageSize;
  quantity: number;
  withObd: boolean;
};

type CartContextValue = {
  items: CartLine[];
  itemCount: number;
  addItem: (packageSize: PackageSize, withObd: boolean) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const storageKey = "tekden-cart-v1";

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
    addItem(packageSize, withObd) {
      const id = `${packageSize}-${withObd ? "obd" : "standart"}`;
      setItems((current) => {
        const found = current.find((item) => item.id === id);
        return found
          ? current.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
          : [...current, { id, packageSize, withObd, quantity: 1 }];
      });
    },
    updateQuantity(id, quantity) {
      if (quantity < 1) return;
      setItems((current) => current.map((item) => item.id === id ? { ...item, quantity } : item));
    },
    removeItem(id) {
      setItems((current) => current.filter((item) => item.id !== id));
    },
    clearCart() {
      setItems([]);
    },
  }), [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
