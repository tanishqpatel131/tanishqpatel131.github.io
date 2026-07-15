import Link from "next/link";
import { Share2, MessageCircle, Send, MapPin, Phone, Mail } from "lucide-react";

const columns = [
  {
    title: "Explore",
    links: [
      { href: "/menu", label: "Full Menu" },
      { href: "/menu", label: "Combos" },
      { href: "/about", label: "Our Story" },
      { href: "/reserve", label: "Book a Table" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "Careers" },
      { href: "/about", label: "Franchise" },
      { href: "/about", label: "Events" },
      { href: "/about", label: "Blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/about", label: "Privacy Policy" },
      { href: "/about", label: "Terms" },
      { href: "/about", label: "Refund Policy" },
      { href: "/about", label: "FAQ" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-gold/15 bg-ink-soft">
      <div className="noise absolute inset-0" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔥</span>
            <span className="font-display text-2xl font-semibold text-cream">
              Ember<span className="text-gold">Spice</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
            A premium global kitchen. Wood-fired, char-grilled, hand-rolled —
            crafted with fire and spice.
          </p>
          <div className="mt-5 flex gap-3">
            {[Share2, MessageCircle, Send].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-10 w-10 place-items-center rounded-full border border-gold/20 text-cream/70 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-display text-lg font-semibold text-cream">
              {col.title}
            </h4>
            <ul className="mt-4 space-y-2">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-cream/60 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="relative border-t border-gold/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-sm text-cream/50 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span className="flex items-center gap-2">
              <MapPin size={15} className="text-gold" /> 42 Flame Avenue, Metropolis
            </span>
            <span className="flex items-center gap-2">
              <Phone size={15} className="text-gold" /> +1 (555) 012-3456
            </span>
            <span className="flex items-center gap-2">
              <Mail size={15} className="text-gold" /> hello@emberspice.com
            </span>
          </div>
          <p>© {new Date().getFullYear()} Ember & Spice. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
