"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 18, suffix: "+", label: "Global cuisines" },
  { value: 120, suffix: "+", label: "Dishes on the menu" },
  { value: 45000, suffix: "+", label: "Happy guests" },
  { value: 15, suffix: " yrs", label: "Of craft" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf: number;
    const start = performance.now();
    const dur = 1600;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="gradient-ember border-y border-gold/15">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-16 lg:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-5xl font-semibold text-gold">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-2 text-sm uppercase tracking-widest text-cream/60">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
