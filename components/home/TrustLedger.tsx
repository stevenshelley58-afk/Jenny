"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronDown } from "lucide-react";

const testimonials = [
    {
        headline: "Genuine HR professionals.",
        skim: "They bring a depth of knowledge, capability and experience that addresses all the requirements for a business of our size.",
        depth: "Jennie is strategically focused, well informed and highly experienced, and we trust her and her team fully to execute our required HR functions as if they were an internal part of our business. Ignite PCG are one of our trusted corporate partners.",
        author: "Dredge Robotics"
    },
    {
        headline: "Knowledge and insight are second to none.",
        skim: "Jennie from Ignite PCG has been incredible in helping me navigate the world of HR.",
        depth: "She has guided me through setting up the right policies, ensuring I’m doing the right thing by both my business and my team. Her genuine passion for helping people has been an absolute game-changer for me and my business.",
        author: "All Rangehoods Pty Ltd"
    },
    {
        headline: "The exact team you need on board.",
        skim: "Both Sam and Jennie are true professionals. They are personable, knowledgeable and are the exact team you need on board in very difficult HR situations.",
        depth: "Highly recommend.",
        author: "EWS Australia"
    }
];

export default function TrustLedger() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-background">
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-16">Trusted by leaders</h2>

            <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((t, index) => (
                    <div key={index} className="flex flex-col">
                        <Quote className="w-8 h-8 text-primary/20 mb-6" />
                        <h3 className="text-2xl font-serif font-medium text-foreground mb-4">{t.headline}</h3>
                        <p className="text-lg text-foreground mb-4">{t.skim}</p>

                        <AnimatePresence>
                            {expandedIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                >
                                    <p className="text-lg text-foreground mb-4">{t.depth}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="mt-auto pt-6 flex items-center justify-between border-t border-black/5">
                            <span className="font-medium text-foreground text-sm uppercase tracking-widest">{t.author}</span>
                            <button
                                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                                className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1"
                            >
                                {expandedIndex === index ? "Read less" : "Read full story"}
                                <ChevronDown className={`w-4 h-4 transition-transform ${expandedIndex === index ? "rotate-180" : ""}`} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

