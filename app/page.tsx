import Link from "next/link";
import { Hero } from "@/components/Hero";
import { MenuShowcase } from "@/components/MenuShowcase";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import {
  Award,
  Leaf,
  Truck,
  Clock,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const features = [
  { icon: Award, title: "Award-winning chefs", text: "Trained across Italy, Mexico & India." },
  { icon: Leaf, title: "Sourced with care", text: "Local, seasonal, sustainable produce." },
  { icon: Truck, title: "Fast delivery", text: "Hot food at your door in 30 minutes." },
  { icon: Clock, title: "Open late", text: "Kitchen runs till midnight, every day." },
  { icon: Sparkles, title: "Seasonal drops", text: "New chef specials every fortnight." },
  { icon: ShieldCheck, title: "Safe & clean", text: "Five-star hygiene, always." },
];

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Why choose us */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Why Patel's Kitchen
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-cream sm:text-5xl">
            A kitchen built on <span className="text-gold">craft</span>
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="glass flex items-start gap-4 rounded-2xl p-6 transition-colors hover:border-gold/40"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold">
                <f.icon size={22} />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-cream">
                  {f.title}
                </h3>
                <p className="mt-1 text-sm text-cream/60">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured menu */}
      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            From the menu
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-cream sm:text-5xl">
            Taste the <span className="text-gold">world</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/60">
            Filter by cuisine or dietary preference — every dish is made to
            order.
          </p>
        </div>
        <MenuShowcase limit={9} />
        <div className="mt-12 text-center">
          <Link
            href="/menu"
            className="inline-block rounded-full border border-gold/40 px-8 py-3 font-semibold text-cream transition-colors hover:bg-gold hover:text-ink"
          >
            View Full Menu
          </Link>
        </div>
      </section>

      <Stats />

      <Testimonials />

      {/* Reservation CTA */}
      <section className="gradient-ember">
        <div className="mx-auto max-w-5xl px-5 py-24 text-center lg:px-8">
          <h2 className="font-display text-4xl font-semibold text-cream sm:text-5xl">
            Hungry yet?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/70">
            Order for delivery, or book a table and let our team take care of
            the rest.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/menu"
              className="rounded-full bg-gold px-8 py-4 font-semibold text-ink transition-transform hover:scale-105"
            >
              Order Online
            </Link>
            <Link
              href="/reserve"
              className="rounded-full border border-gold/40 px-8 py-4 font-semibold text-cream transition-colors hover:bg-gold/10"
            >
              Book a Table
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
