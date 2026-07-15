"use client";

import { MessageCircle } from "lucide-react";

const PHONE = "919924305858";
const MSG = "Hi Patel's Kitchen! I'd like to place an order 🍽️";

export function WhatsAppFloat() {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MSG)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-semibold text-white shadow-2xl transition-transform hover:scale-105"
    >
      <MessageCircle size={22} />
      <span className="hidden sm:inline">Order on WhatsApp</span>
    </a>
  );
}
