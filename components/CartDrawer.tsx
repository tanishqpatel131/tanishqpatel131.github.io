"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart, calcTotals } from "@/lib/cart";

export function CartDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const items = useCart((s) => s.items);
  const setQty = useCart((s) => s.setQty);
  const remove = useCart((s) => s.remove);
  const clear = useCart((s) => s.clear);

  const { subtotal, gst, delivery, total } = calcTotals(items);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-ink-soft shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 34 }}
          >
            <div className="flex items-center justify-between border-b border-gold/15 px-6 py-5">
              <h2 className="flex items-center gap-2 font-display text-2xl font-semibold text-cream">
                <ShoppingBag size={22} className="text-gold" /> Your Cart
              </h2>
              <button
                onClick={onClose}
                aria-label="Close cart"
                className="text-cream/70 hover:text-cream"
              >
                <X size={24} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
                <ShoppingBag size={48} className="text-cream/30" />
                <p className="text-cream/60">Your cart is empty.</p>
                <Link
                  href="/menu"
                  onClick={onClose}
                  className="rounded-full bg-gold px-6 py-2.5 font-semibold text-ink"
                >
                  Browse Menu
                </Link>
              </div>
            ) : (
              <>
                <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
                  {items.map((it) => (
                    <div
                      key={it.id}
                      className="flex gap-3 rounded-xl border border-gold/10 bg-black/20 p-3"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-cream">{it.name}</p>
                        <p className="text-sm text-gold">₹{it.price}</p>
                        <div className="mt-2 flex items-center gap-2">
                          <button
                            onClick={() => setQty(it.id, it.qty - 1)}
                            className="grid h-7 w-7 place-items-center rounded-full border border-gold/30 text-cream hover:bg-gold/10"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-6 text-center text-cream">
                            {it.qty}
                          </span>
                          <button
                            onClick={() => setQty(it.id, it.qty + 1)}
                            className="grid h-7 w-7 place-items-center rounded-full border border-gold/30 text-cream hover:bg-gold/10"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <span className="font-semibold text-cream">
                          ₹{it.price * it.qty}
                        </span>
                        <button
                          onClick={() => remove(it.id)}
                          className="text-cream/40 hover:text-ember"
                          aria-label="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gold/15 px-6 py-5">
                  <div className="space-y-1 text-sm text-cream/70">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>GST (5%)</span>
                      <span>₹{gst}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery</span>
                      <span>{delivery === 0 ? "Free" : `₹${delivery}`}</span>
                    </div>
                    <div className="flex justify-between border-t border-gold/10 pt-2 text-base font-semibold text-cream">
                      <span>Total</span>
                      <span className="text-gold">₹{total}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-3">
                    <button
                      onClick={clear}
                      className="rounded-full border border-gold/30 px-4 py-2.5 text-sm font-medium text-cream/80 hover:bg-gold/10"
                    >
                      Clear
                    </button>
                    <Link
                      href="/checkout"
                      onClick={onClose}
                      className="flex-1 rounded-full bg-gold px-4 py-2.5 text-center font-semibold text-ink hover:bg-gold-light"
                    >
                      Checkout
                    </Link>
                  </div>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
