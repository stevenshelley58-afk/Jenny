import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
});

// Using a local font or fallback for Satoshi since it's not on Google Fonts
// For now, we'll inject the font via a link tag in the head or assume it's loaded via globals.css @import if we had the URL.
// The user provided HTML had a link. We will add it to the head.

export const metadata: Metadata = {
  title: "Ignite PCG | People. Culture. Growth.",
  description: "Perth HR Consultants. We help leaders build businesses worth bragging about.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn(instrumentSerif.variable, "antialiased font-body bg-cream text-text")}>
        {children}
      </body>
    </html>
  );
}
