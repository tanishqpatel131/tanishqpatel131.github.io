import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  category: string;
  veg: boolean;
  qty: number;
  notes?: string;
};

type CartState = {
  items: CartItem[];
  add: (item: Omit<CartItem, "qty">, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      add: (item, qty = 1) =>
        set((state) => {
          const existing = state.items.find((i) => i.id === item.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === item.id ? { ...i, qty: i.qty + qty } : i
              ),
            };
          }
          return { items: [...state.items, { ...item, qty }] };
        }),
      remove: (id) =>
        set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
      setQty: (id, qty) =>
        set((state) => ({
          items: state.items
            .map((i) => (i.id === id ? { ...i, qty: Math.max(0, qty) } : i))
            .filter((i) => i.qty > 0),
        })),
      clear: () => set({ items: [] }),
    }),
    { name: "patels-kitchen-cart" }
  )
);

// ---- Pricing helpers (Indian billing) ----
export const GST_RATE = 0.05;
export const DELIVERY_FLAT = 49;
export const FREE_DELIVERY_ABOVE = 499;
export const COUPONS: Record<string, number> = {
  PATEL10: 0.1,
  WELCOME25: 0.25,
  FOODIE50: 0.5,
};

export function cartCount(items: CartItem[]) {
  return items.reduce((n, i) => n + i.qty, 0);
}

export function cartSubtotal(items: CartItem[]) {
  return items.reduce((s, i) => s + i.price * i.qty, 0);
}

export function calcTotals(items: CartItem[], couponCode?: string) {
  const subtotal = cartSubtotal(items);
  const discountRate = couponCode
    ? COUPONS[couponCode.trim().toUpperCase()] ?? 0
    : 0;
  const discounted = subtotal * (1 - discountRate);
  const gst = Math.round(discounted * GST_RATE);
  const delivery = subtotal >= FREE_DELIVERY_ABOVE || subtotal === 0 ? 0 : DELIVERY_FLAT;
  const total = Math.round(discounted + gst + delivery);
  return { subtotal, discountRate, discounted, gst, delivery, total };
}
