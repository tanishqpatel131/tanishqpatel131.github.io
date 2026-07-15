import type { Metadata } from "next";
import { MenuShowcase } from "@/components/MenuShowcase";

export const metadata: Metadata = {
  title: "Menu — Patel's Kitchen",
  description:
    "Explore our full menu: pizza, burgers, pasta, wraps, Mexican, Indian street food, desserts, drinks and seasonal specials.",
};

export default function MenuPage() {
  return (
    <main className="pt-28">
      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            The full menu
          </p>
          <h1 className="mt-3 font-display text-5xl font-semibold text-cream sm:text-6xl">
            Something for <span className="text-gold">every craving</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-cream/60">
            Tap a cuisine to explore. Filter for vegetarian or chef-recommended
            dishes.
          </p>
        </div>
        <MenuShowcase />
      </section>
    </main>
  );
}
