"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";

const packages = [
    {
        title: "Spark",
        tagline: "Fast, expert answers when you need them.",
        inclusions: ["On-call HR advice", "Policy interpretation", "Compliance checks"]
    },
    {
        title: "Resolve",
        tagline: "Fixing complex people problems.",
        inclusions: ["Dispute resolution", "Investigation support", "Mediation"]
    },
    {
        title: "Partner",
        tagline: "Your external HR department.",
        inclusions: ["End-to-end HR management", "Strategic planning", "Regular onsite presence"]
    },
    {
        title: "Lead & Lift",
        tagline: "Developing your leaders.",
        inclusions: ["Leadership coaching", "Team workshops", "Performance frameworks"]
    }
];

export default function PackageGrid() {
    const [expandedPackage, setExpandedPackage] = useState<number | null>(null);

    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-background">
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-16">How we work with you</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {packages.map((pkg, index) => (
                    <TiltCard
                        key={index}
                        className="p-6 rounded-2xl border border-black/5 hover:border-primary/20 transition-colors bg-warm-paper/30 h-full"
                    >
                        <h3 className="text-2xl font-serif font-medium text-foreground mb-2">{pkg.title}</h3>
                        <p className="text-foreground mb-6 min-h-[3rem]">{pkg.tagline}</p>

                        <button
                            onClick={() => setExpandedPackage(expandedPackage === index ? null : index)}
                            className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors w-full"
                        >
                            <span>{expandedPackage === index ? "Close details" : "Open details"}</span>
                            <ChevronDown className={`w-4 h-4 transition-transform ${expandedPackage === index ? "rotate-180" : ""}`} />
                        </button>

                        <AnimatePresence>
                            {expandedPackage === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                    animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                    className="overflow-hidden"
                                >
                                    <ul className="space-y-2 pt-4 border-t border-black/5">
                                        {pkg.inclusions.map((item, i) => (
                                            <li key={i} className="text-sm text-foreground flex items-center gap-2">
                                                <div className="w-1 h-1 rounded-full bg-primary" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </TiltCard>
                ))}
            </div>
        </section>
    );
}


