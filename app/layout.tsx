import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import ConsultantDock from "@/components/ui/ConsultantDock";
import { ReadingModeProvider } from "@/components/providers/ReadingModeProvider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"]
});

export const metadata: Metadata = {
  title: "Ignite PCG",
  description: "HR Consulting in Perth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, newsreader.variable, "antialiased font-sans")}>
        <SmoothScroll>
          <ReadingModeProvider>
            {children}
            <ConsultantDock />
          </ReadingModeProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
