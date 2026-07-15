import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ember & Spice — Global Kitchen",
  description:
    "A premium global kitchen serving wood-fired pizza, char-grilled burgers, hand-rolled pasta, Mexican, Indian street food and seasonal specials. Order online or book a table.",
  keywords: [
    "premium restaurant",
    "pizza",
    "burgers",
    "pasta",
    "Indian food",
    "Mexican food",
    "order online",
  ],
  openGraph: {
    title: "Ember & Spice — Global Kitchen",
    description:
      "Wood-fired, char-grilled, hand-rolled. A premium global kitchen.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="min-h-full bg-ink text-cream antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
