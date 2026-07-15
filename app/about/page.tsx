import type { Metadata } from "next";
import Link from "next/link";
import { Flame, Globe2, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story — Ember & Spice",
  description:
    "How a single wood-fired oven grew into a premium global kitchen serving the world on one menu.",
};

const milestones = [
  { year: "2010", text: "A single wood-fired oven and a stubborn belief in good food." },
  { year: "2015", text: "Our Mexican and Indian kitchens opened — the global menu was born." },
  { year: "2020", text: "Launched online ordering and contactless delivery." },
  { year: "2025", text: "Ember & Spice goes fully premium, 18 cuisines on one table." },
];

export default function AboutPage() {
  return (
    <main className="pt-28">
      <section className="mx-auto max-w-5xl px-5 pb-24 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Our story
          </p>
          <h1 className="mt-3 font-display text-5xl font-semibold text-cream sm:text-6xl">
            Born from <span className="text-gold">fire & spice</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-cream/70">
            We started with one obsession: food that makes you close your eyes
            and smile. Today our kitchen spans eighteen cuisines — each cooked
            with the same respect its tradition deserves.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {[
            { icon: Flame, title: "Fire", text: "Wood-fired, char-grilled, smoked — flavour starts with heat." },
            { icon: Globe2, title: "World", text: "Italy to India, Mexico to Morocco. One menu, no borders." },
            { icon: Heart, title: "Soul", text: "Made by people who care, served to people we love." },
          ].map((v) => (
            <div key={v.title} className="glass rounded-2xl p-7 text-center">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold/15 text-gold">
                <v.icon size={26} />
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold text-cream">
                {v.title}
              </h3>
              <p className="mt-2 text-sm text-cream/60">{v.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-center font-display text-3xl font-semibold text-cream">
            The journey
          </h2>
          <ol className="mt-10 space-y-6 border-l border-gold/20 pl-8">
            {milestones.map((m) => (
              <li key={m.year} className="relative">
                <span className="absolute -left-[2.55rem] grid h-9 w-9 place-items-center rounded-full bg-gold text-sm font-bold text-ink">
                  {m.year.slice(2)}
                </span>
                <p className="text-cream/70">
                  <span className="font-display text-xl font-semibold text-gold">
                    {m.year}
                  </span>{" "}
                  — {m.text}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/reserve"
            className="inline-block rounded-full bg-gold px-8 py-4 font-semibold text-ink transition-transform hover:scale-105"
          >
            Come dine with us
          </Link>
        </div>
      </section>
    </main>
  );
}
