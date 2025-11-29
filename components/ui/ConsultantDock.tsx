"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import TalentWizard from "./TalentWizard";

import { ReadingModeProvider, useReadingMode } from "@/components/providers/ReadingModeProvider";

export default function ConsultantDock() {
    const [isWizardOpen, setIsWizardOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isReadingMode } = useReadingMode();

    return (
        <>
            <div
                className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 p-2 bg-background/80 backdrop-blur-md border border-black/5 rounded-full shadow-2xl shadow-black/10 transition-opacity duration-500 ${isReadingMode ? "opacity-0 pointer-events-none" : "opacity-100"
                    }`}
            >
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-3 rounded-full hover:bg-black/5 transition-colors relative group"
                >
                    <Menu className="w-5 h-5 text-foreground" />
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        Menu
                    </span>
                </button>

                <div className="h-6 w-px bg-black/10 mx-1" />

                <Link href="/" className="px-4 py-2 font-serif font-medium text-foreground hover:text-primary transition-colors">
                    Ignite PCG
                </Link>

                <div className="h-6 w-px bg-black/10 mx-1" />

                <button
                    onClick={() => setIsWizardOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-full hover:bg-primary transition-colors"
                >
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">Let's chat</span>
                </button>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
                        exit={{ opacity: 0, y: 20, scale: 0.95, x: "-50%" }}
                        className="fixed bottom-24 left-1/2 w-64 bg-background border border-black/5 rounded-2xl shadow-xl p-2 z-40 origin-bottom"
                    >
                        <div className="flex flex-col gap-1">
                            {[
                                { label: "Home", href: "/" },
                                { label: "About", href: "/about" },
                                { label: "Services", href: "/services" },
                                { label: "Blog", href: "/blog" },
                                { label: "Contact", href: "/contact" },
                            ].map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="px-4 py-3 hover:bg-warm-paper rounded-xl text-foreground transition-colors text-sm font-medium"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <TalentWizard isOpen={isWizardOpen} onClose={() => setIsWizardOpen(false)} />
        </>
    );
}


