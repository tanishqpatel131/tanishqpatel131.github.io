"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart, cartCount } from "@/lib/cart";
import { CartDrawer } from "@/components/CartDrawer";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Our Story" },
  { href: "/reserve", label: "Reserve" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  const items = useCart((s) => s.items);
  const count = cartCount(items);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMounted(true), []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        style={{ scaleX: progress }}
        className="h-[3px] origin-left bg-gradient-to-r from-gold via-ember to-gold-light"
      />
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "glass border-b border-gold/15"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="group flex items-center gap-2">
            <span className="text-2xl">🔥</span>
            <span className="font-display text-2xl font-semibold tracking-wide text-cream">
              Patel's<span className="text-gold">&nbsp;Kitchen</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-9 md:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="group relative text-sm font-medium uppercase tracking-widest text-cream/80 transition-colors hover:text-cream"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCartOpen(true)}
              aria-label="Open cart"
              className="relative grid h-10 w-10 place-items-center rounded-full border border-gold/30 text-cream transition-colors hover:bg-gold/10"
            >
              <ShoppingBag size={20} />
              {mounted && count > 0 && (
                <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-gold px-1 text-xs font-bold text-ink">
                  {count}
                </span>
              )}
            </button>
            <Link
              href="/menu"
              className="hidden rounded-full bg-gold px-5 py-2 text-sm font-semibold text-ink shadow-lg shadow-gold/20 transition-transform hover:scale-105 hover:bg-gold-light md:inline-block"
            >
              Order Online
            </Link>
            <button
              aria-label="Open menu"
              className="text-cream md:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass border-t border-gold/10 md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-medium uppercase tracking-widest text-cream/90 hover:bg-gold/10"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/menu"
                  onClick={() => setOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ink"
                >
                  <ShoppingBag size={16} /> Order Online
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  );
}
