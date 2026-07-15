"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck } from "lucide-react";

const floaters = [
  { emoji: "🍕", className: "left-[8%] top-[22%] text-5xl", delay: 0 },
  { emoji: "🍔", className: "right-[10%] top-[30%] text-6xl", delay: 0.6 },
  { emoji: "🌮", className: "left-[14%] bottom-[18%] text-5xl", delay: 1.2 },
  { emoji: "🍝", className: "right-[14%] bottom-[22%] text-5xl", delay: 0.3 },
  { emoji: "🥤", className: "left-[42%] top-[12%] text-4xl", delay: 0.9 },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden gradient-ember">
      <div className="noise absolute inset-0" />
      {floaters.map((f, i) => (
        <motion.span
          key={i}
          className={`absolute animate-floaty ${f.className}`}
          style={{ animationDelay: `${f.delay}s` }}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ delay: 0.4 + i * 0.15, type: "spring" }}
        >
          {f.emoji}
        </motion.span>
      ))}

      <div className="relative mx-auto w-full max-w-5xl px-5 text-center lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-sm font-semibold uppercase tracking-[0.4em] text-gold"
        >
          Patel's Kitchen · Est. 2025
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-6xl font-semibold leading-[0.95] text-cream sm:text-7xl lg:text-8xl"
        >
          Fire. Kitchen.
          <br />
          <span className="shimmer-text">Soul.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-7 max-w-2xl text-lg text-cream/70"
        >
          Wood-fired pizzas, char-grilled burgers, hand-rolled pasta and
          street-food favourites from around the world — crafted with fire and
          finished with spice.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/menu"
            className="group flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-ink shadow-xl shadow-gold/30 transition-all hover:scale-105 hover:bg-gold-light"
          >
            Order Now <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/reserve"
            className="flex items-center gap-2 rounded-full border border-gold/40 px-8 py-4 text-base font-semibold text-cream transition-all hover:border-gold hover:bg-gold/10"
          >
            <CalendarCheck size={18} className="text-gold" /> Book a Table
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
