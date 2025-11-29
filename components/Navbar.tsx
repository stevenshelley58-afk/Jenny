"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={cn("nav fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-400 ease-out-expo", scrolled && "scrolled bg-cream/90 backdrop-blur-md py-4 border-b border-black/5")}>
            <div className="container">
                <div className="nav-inner flex justify-between items-center">
                    <Link href="#" className="logo font-display text-2xl text-ignite-800 flex items-center gap-2.5">
                        <div className="logo-mark w-8 h-8 bg-gradient-to-br from-coral to-coral-light rounded-lg relative overflow-hidden after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:w-3/5 after:h-3/5 after:bg-white/30 after:rounded after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45"></div>
                        Ignite
                    </Link>
                    <ul className="nav-links hidden md:flex items-center gap-12 list-none">
                        <li><Link href="#services" className="text-sm font-medium text-text-muted hover:text-text transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1.5px] after:bg-coral after:transition-all after:duration-300 after:ease-out-expo hover:after:w-full">Services</Link></li>
                        <li><Link href="#approach" className="text-sm font-medium text-text-muted hover:text-text transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1.5px] after:bg-coral after:transition-all after:duration-300 after:ease-out-expo hover:after:w-full">Approach</Link></li>
                        <li><Link href="#contact" className="text-sm font-medium text-text-muted hover:text-text transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1.5px] after:bg-coral after:transition-all after:duration-300 after:ease-out-expo hover:after:w-full">Contact</Link></li>
                    </ul>
                    <Link href="#contact" className="nav-cta hidden md:block text-sm font-semibold text-white bg-ignite-700 px-6 py-3 rounded-full transition-all duration-300 ease-out-expo hover:bg-ignite-800 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ignite-700/30">
                        Let's Talk
                    </Link>
                    <button
                        className="mobile-menu-btn md:hidden flex flex-col gap-1.5 p-2 z-50"
                        aria-label="Menu"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className={cn("w-6 h-0.5 bg-ignite-700 transition-all duration-300", mobileMenuOpen && "rotate-45 translate-y-2")}></span>
                        <span className={cn("w-6 h-0.5 bg-ignite-700 transition-all duration-300", mobileMenuOpen && "opacity-0")}></span>
                        <span className={cn("w-6 h-0.5 bg-ignite-700 transition-all duration-300", mobileMenuOpen && "-rotate-45 -translate-y-2")}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 bg-cream z-40 flex flex-col items-center justify-center gap-8 md:hidden">
                    <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display text-ignite-800">Services</Link>
                    <Link href="#approach" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display text-ignite-800">Approach</Link>
                    <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display text-ignite-800">Contact</Link>
                </div>
            )}
        </nav>
    );
}
