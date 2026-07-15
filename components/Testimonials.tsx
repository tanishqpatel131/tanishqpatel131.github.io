"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Ava Mitchell",
    role: "Regular since 2021",
    text: "The truffle Margherita is the best pizza I've had outside Naples. Ember & Spice nails the balance of fire and finesse every single time.",
  },
  {
    name: "Rohan Kapoor",
    role: "Food blogger",
    text: "Their paneer tikka wrap and masala fries are unreal. A global menu done with real respect for each cuisine — not a gimmick.",
  },
  {
    name: "Sofia Reyes",
    role: "Event planner",
    text: "We hosted 80 guests for a private tasting. Impeccable service, gorgeous room, and the seasonal specials stole the show.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const r = reviews[i];

  return (
    <section className="mx-auto max-w-4xl px-5 py-24 text-center lg:px-8">
      <h2 className="font-display text-4xl font-semibold text-cream">
        Loved by our <span className="text-gold">guests</span>
      </h2>
      <div className="relative mt-12 glass min-h-[220px] rounded-3xl p-10">
        <Quote className="mx-auto mb-6 text-gold" size={36} />
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
          >
            <p className="font-display text-2xl leading-relaxed text-cream/90">
              “{r.text}”
            </p>
            <div className="mt-6 flex items-center justify-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} size={16} fill="currentColor" />
              ))}
            </div>
            <footer className="mt-3">
              <p className="font-semibold text-cream">{r.name}</p>
              <p className="text-sm text-cream/50">{r.role}</p>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>
      <div className="mt-6 flex justify-center gap-2">
        {reviews.map((_, k) => (
          <button
            key={k}
            aria-label={`Review ${k + 1}`}
            onClick={() => setI(k)}
            className={`h-2.5 rounded-full transition-all ${
              k === i ? "w-8 bg-gold" : "w-2.5 bg-gold/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
