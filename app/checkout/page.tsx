"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Tag, MapPin, Phone, User } from "lucide-react";
import { useCart, calcTotals, COUPONS } from "@/lib/cart";

export default function CheckoutPage() {
  const items = useCart((s) => s.items);
  const clear = useCart((s) => s.clear);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    coupon: "",
  });
  const [placed, setPlaced] = useState<string | null>(null);

  const totals = calcTotals(items, form.coupon);
  const couponValid =
    form.coupon.trim().length > 0 &&
    !!COUPONS[form.coupon.trim().toUpperCase()];

  const update = (k: keyof typeof form) => (e: any) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const placeOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    const id = "PK" + Math.floor(100000 + Math.random() * 900000);
    setPlaced(id);
    clear();
  };

  if (placed) {
    return (
      <main className="pt-32">
        <div className="mx-auto max-w-lg px-5 pb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass flex flex-col items-center rounded-3xl px-8 py-16 text-center"
          >
            <CheckCircle2 size={56} className="text-gold" />
            <h1 className="mt-5 font-display text-3xl font-semibold text-cream">
              Order Placed!
            </h1>
            <p className="mt-3 text-cream/70">
              Thanks{form.name ? `, ${form.name.split(" ")[0]}` : ""}. Your
              order <span className="font-semibold text-gold">#{placed}</span>{" "}
              is confirmed. We&apos;ll call you shortly to arrange delivery.
            </p>
            <div className="mt-7 flex gap-3">
              <Link
                href="/menu"
                className="rounded-full border border-gold/40 px-6 py-2.5 font-semibold text-cream hover:bg-gold/10"
              >
                Order More
              </Link>
              <Link
                href="/"
                className="rounded-full bg-gold px-6 py-2.5 font-semibold text-ink"
              >
                Home
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="pt-32">
        <div className="mx-auto max-w-lg px-5 pb-24 text-center">
          <h1 className="font-display text-3xl font-semibold text-cream">
            Your cart is empty
          </h1>
          <p className="mt-3 text-cream/60">
            Add some delicious items before checking out.
          </p>
          <Link
            href="/menu"
            className="mt-6 inline-block rounded-full bg-gold px-8 py-3 font-semibold text-ink"
          >
            Browse Menu
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-28">
      <section className="mx-auto max-w-5xl px-5 pb-24 lg:px-8">
        <h1 className="mb-10 text-center font-display text-4xl font-semibold text-cream sm:text-5xl">
          Checkout
        </h1>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          {/* Delivery details */}
          <form onSubmit={placeOrder} className="glass space-y-5 rounded-3xl p-8">
            <h2 className="font-display text-2xl font-semibold text-cream">
              Delivery Details
            </h2>
            <div className="flex items-center gap-2 rounded-xl border border-gold/20 bg-black/30 px-4 py-3">
              <User size={18} className="text-gold" />
              <input
                required
                value={form.name}
                onChange={update("name")}
                placeholder="Full name"
                className="w-full bg-transparent text-cream outline-none placeholder:text-cream/40"
              />
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-gold/20 bg-black/30 px-4 py-3">
              <Phone size={18} className="text-gold" />
              <input
                required
                type="tel"
                value={form.phone}
                onChange={update("phone")}
                placeholder="+91 9924305858"
                className="w-full bg-transparent text-cream outline-none placeholder:text-cream/40"
              />
            </div>
            <div className="flex items-start gap-2 rounded-xl border border-gold/20 bg-black/30 px-4 py-3">
              <MapPin size={18} className="mt-1 text-gold" />
              <textarea
                required
                value={form.address}
                onChange={update("address")}
                rows={3}
                placeholder="Delivery address"
                className="w-full resize-none bg-transparent text-cream outline-none placeholder:text-cream/40"
              />
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-gold/20 bg-black/30 px-4 py-3">
              <Tag size={18} className="text-gold" />
              <input
                value={form.coupon}
                onChange={update("coupon")}
                placeholder="Coupon (try PATEL10)"
                className="w-full bg-transparent uppercase text-cream outline-none placeholder:text-cream/40"
              />
            </div>
            {form.coupon && (
              <p
                className={`text-sm ${
                  couponValid ? "text-emerald-400" : "text-ember"
                }`}
              >
                {couponValid
                  ? `Coupon applied — ${(COUPONS[
                      form.coupon.trim().toUpperCase()
                    ] * 100).toFixed(0)}% off!`
                  : "Invalid coupon code."}
              </p>
            )}
            <button
              type="submit"
              className="w-full rounded-full bg-gold px-8 py-4 font-semibold text-ink transition-transform hover:scale-[1.01]"
            >
              Place Order · ₹{totals.total}
            </button>
          </form>

          {/* Order summary */}
          <aside className="glass h-fit rounded-3xl p-8">
            <h2 className="font-display text-2xl font-semibold text-cream">
              Order Summary
            </h2>
            <div className="mt-5 space-y-3">
              {items.map((it) => (
                <div
                  key={it.id}
                  className="flex justify-between text-sm text-cream/80"
                >
                  <span>
                    {it.qty} × {it.name}
                  </span>
                  <span>₹{it.price * it.qty}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 space-y-1 border-t border-gold/15 pt-4 text-sm text-cream/70">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{totals.subtotal}</span>
              </div>
              {totals.discountRate > 0 && (
                <div className="flex justify-between text-emerald-400">
                  <span>Discount</span>
                  <span>
                    −₹{Math.round(totals.subtotal * totals.discountRate)}
                  </span>
                </div>
              )}
              <div className="flex justify-between">
                <span>GST (5%)</span>
                <span>₹{totals.gst}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span>{totals.delivery === 0 ? "Free" : `₹${totals.delivery}`}</span>
              </div>
              <div className="flex justify-between border-t border-gold/10 pt-2 text-base font-semibold text-cream">
                <span>Total</span>
                <span className="text-gold">₹{totals.total}</span>
              </div>
              {totals.subtotal < 499 && totals.subtotal > 0 && (
                <p className="pt-2 text-xs text-gold/70">
                  Add ₹{499 - totals.subtotal} more for free delivery.
                </p>
              )}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
