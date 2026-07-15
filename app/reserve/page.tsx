import type { Metadata } from "next";
import { ReservationForm } from "@/components/ReservationForm";
import { Clock, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Reserve — Patel's Kitchen",
  description: "Book a table at Patel's Kitchen. Private dining, events and walk-ins welcome.",
};

export default function ReservePage() {
  return (
    <main className="pt-28">
      <section className="mx-auto max-w-6xl px-5 pb-24 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Book a table
          </p>
          <h1 className="mt-3 font-display text-5xl font-semibold text-cream sm:text-6xl">
            We saved you a <span className="text-gold">seat</span>
          </h1>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <aside className="space-y-5">
            {[
              { icon: Clock, title: "Opening hours", text: "Mon–Sun · 11:00 – 00:00" },
              { icon: MapPin, title: "Find us", text: "near sardardham hostel, sardar patel ring road, ahmedabad" },
              { icon: Phone, title: "Call ahead", text: "+91 9924305858" },
            ].map((c) => (
              <div key={c.title} className="glass flex items-start gap-4 rounded-2xl p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold">
                  <c.icon size={20} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-cream">
                    {c.title}
                  </h3>
                  <p className="text-sm text-cream/60">{c.text}</p>
                </div>
              </div>
            ))}
            <p className="px-2 text-sm text-cream/50">
              For parties of 9+ or private events, email{" "}
              <span className="text-gold">tanishqpatel131@gmail.com</span>.
            </p>
          </aside>

          <ReservationForm />
        </div>
      </section>
    </main>
  );
}
