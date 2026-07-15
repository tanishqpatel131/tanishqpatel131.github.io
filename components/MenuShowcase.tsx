"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Flame, Leaf, Star } from "lucide-react";
import { menuItems, categories } from "@/lib/menu-data";

type Filter = "all" | "veg" | "chef";

export function MenuShowcase({ limit }: { limit?: number }) {
  const [active, setActive] = useState("all");
  const [filter, setFilter] = useState<Filter>("all");

  const activeCat = categories.find((c) => c.id === active);

  const items = useMemo(() => {
    let list = menuItems.filter(
      (m) => active === "all" || m.category === active
    );
    if (filter === "veg") list = list.filter((m) => m.veg);
    if (filter === "chef") list = list.filter((m) => m.chefSpecial);
    return limit ? list.slice(0, limit) : list;
  }, [active, filter, limit]);

  return (
    <div>
      {/* Category pills */}
      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setActive("all")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
            active === "all"
              ? "bg-gold text-ink"
              : "border border-gold/25 text-cream/70 hover:border-gold"
          }`}
        >
          All
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all ${
              active === c.id
                ? "bg-gold text-ink"
                : "border border-gold/25 text-cream/70 hover:border-gold"
            }`}
          >
            <span>{c.emoji}</span> {c.name}
          </button>
        ))}
      </div>

      {/* Quick filters */}
      <div className="mt-5 flex justify-center gap-3">
        {([
          { id: "all", label: "Everything" },
          { id: "veg", label: "🌱 Veg" },
          { id: "chef", label: "⭐ Chef Specials" },
        ] as { id: Filter; label: string }[]).map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
              filter === f.id
                ? "bg-ember text-cream"
                : "bg-white/5 text-cream/60 hover:bg-white/10"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {activeCat && active !== "all" && (
        <p className="mt-6 text-center text-sm text-gold/80">
          {activeCat.tagline}
        </p>
      )}

      {/* Grid */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
            className="group glass flex flex-col rounded-2xl p-5 transition-all hover:border-gold/40 hover:shadow-xl hover:shadow-gold/5"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-xl font-semibold text-cream">
                {item.name}
              </h3>
              <div className="flex shrink-0 gap-1.5">
                {item.veg && (
                  <span title="Vegetarian" className="text-leaf">
                    <Leaf size={16} className="text-emerald-400" />
                  </span>
                )}
                {item.spicy && (
                  <span title="Spicy">
                    <Flame size={16} className="text-ember" />
                  </span>
                )}
                {item.chefSpecial && (
                  <span title="Chef Special">
                    <Star size={16} className="text-gold" fill="currentColor" />
                  </span>
                )}
              </div>
            </div>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-cream/60">
              {item.description}
            </p>
            <div className="mt-4 flex items-center justify-between">
              <span className="font-display text-2xl font-semibold text-gold">
                ₹{item.price.toFixed(2)}
              </span>
              <button className="rounded-full border border-gold/40 px-4 py-1.5 text-sm font-semibold text-cream transition-colors hover:bg-gold hover:text-ink">
                Add
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      {items.length === 0 && (
        <p className="mt-10 text-center text-cream/50">
          No items match this filter yet.
        </p>
      )}
    </div>
  );
}
