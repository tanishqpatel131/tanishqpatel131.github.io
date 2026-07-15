"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarCheck, CheckCircle2 } from "lucide-react";

export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "19:00",
    guests: "2",
    notes: "",
  });

  const update = (k: keyof typeof form) => (e: any) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass flex flex-col items-center rounded-3xl px-8 py-16 text-center"
      >
        <CheckCircle2 size={56} className="text-gold" />
        <h3 className="mt-5 font-display text-3xl font-semibold text-cream">
          Table reserved!
        </h3>
        <p className="mt-3 max-w-sm text-cream/70">
          Thanks, {form.name.split(" ")[0] || "guest"}. We&apos;ve sent a
          confirmation to {form.email}. We can&apos;t wait to host you.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-7 rounded-full border border-gold/40 px-6 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-gold/10"
        >
          Book another table
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="glass grid gap-5 rounded-3xl p-8 sm:grid-cols-2"
    >
      <div className="sm:col-span-1">
        <label className="mb-1.5 block text-sm font-medium text-cream/80">
          Full name
        </label>
        <input
          required
          value={form.name}
          onChange={update("name")}
          className="w-full rounded-xl border border-gold/20 bg-black/30 px-4 py-3 text-cream outline-none transition-colors focus:border-gold"
          placeholder="Jane Doe"
        />
      </div>
      <div className="sm:col-span-1">
        <label className="mb-1.5 block text-sm font-medium text-cream/80">
          Email
        </label>
        <input
          required
          type="email"
          value={form.email}
          onChange={update("email")}
          className="w-full rounded-xl border border-gold/20 bg-black/30 px-4 py-3 text-cream outline-none transition-colors focus:border-gold"
          placeholder="jane@email.com"
        />
      </div>
      <div className="sm:col-span-1">
        <label className="mb-1.5 block text-sm font-medium text-cream/80">
          Phone
        </label>
        <input
          required
          type="tel"
          value={form.phone}
          onChange={update("phone")}
          className="w-full rounded-xl border border-gold/20 bg-black/30 px-4 py-3 text-cream outline-none transition-colors focus:border-gold"
          placeholder="+91 9924305858"
        />
      </div>
      <div className="sm:col-span-1">
        <label className="mb-1.5 block text-sm font-medium text-cream/80">
          Guests
        </label>
        <select
          value={form.guests}
          onChange={update("guests")}
          className="w-full rounded-xl border border-gold/20 bg-black/30 px-4 py-3 text-cream outline-none transition-colors focus:border-gold"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <option key={n} value={n} className="bg-ink">
              {n} {n === 1 ? "guest" : "guests"}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-1">
        <label className="mb-1.5 block text-sm font-medium text-cream/80">
          Date
        </label>
        <input
          required
          type="date"
          value={form.date}
          onChange={update("date")}
          className="w-full rounded-xl border border-gold/20 bg-black/30 px-4 py-3 text-cream outline-none transition-colors focus:border-gold"
        />
      </div>
      <div className="sm:col-span-1">
        <label className="mb-1.5 block text-sm font-medium text-cream/80">
          Time
        </label>
        <input
          type="time"
          value={form.time}
          onChange={update("time")}
          className="w-full rounded-xl border border-gold/20 bg-black/30 px-4 py-3 text-cream outline-none transition-colors focus:border-gold"
        />
      </div>
      <div className="sm:col-span-2">
        <label className="mb-1.5 block text-sm font-medium text-cream/80">
          Special requests
        </label>
        <textarea
          value={form.notes}
          onChange={update("notes")}
          rows={3}
          className="w-full rounded-xl border border-gold/20 bg-black/30 px-4 py-3 text-cream outline-none transition-colors focus:border-gold"
          placeholder="Anniversary, allergies, seating preference…"
        />
      </div>
      <button
        type="submit"
        className="flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 font-semibold text-ink transition-transform hover:scale-[1.02] sm:col-span-2"
      >
        <CalendarCheck size={18} /> Confirm Reservation
      </button>
    </form>
  );
}
