"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function CulturePace() {
    const [isStoryOpen, setIsStoryOpen] = useState(false);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
    const y = useTransform(scrollYProgress, [0.2, 0.4], [50, 0]);

    return (
        <section ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 bg-background relative">
            <motion.div style={{ opacity, y }} className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-serif font-medium text-foreground mb-8">
                    Your partner in People & Culture
                </h2>

                <p className="text-xl md:text-2xl text-foreground mb-12">
                    When you want your culture to keep pace with your growth.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {[
                        "Outgrowing what once worked",
                        "Need clearer direction and alignment",
                        "Ready to take leadership and culture to the next level"
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                            <p className="text-lg text-foreground">{item}</p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <button
                        onClick={() => setIsStoryOpen(!isStoryOpen)}
                        className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/10 rounded-full hover:bg-warm-paper transition-colors group"
                    >
                        <span className="font-medium text-foreground">Our role beside you</span>
                        {isStoryOpen ? (
                            <Minus className="w-4 h-4 text-foreground" />
                        ) : (
                            <Plus className="w-4 h-4 text-foreground group-hover:rotate-90 transition-transform" />
                        )}
                    </button>
                </div>

                <AnimatePresence>
                    {isStoryOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: "auto", opacity: 1, marginTop: 32 }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            className="overflow-hidden bg-warm-paper rounded-2xl"
                        >
                            <div className="p-8 md:p-12 space-y-6 text-lg text-foreground/80 leading-relaxed">
                                <p>
                                    You’ve built something great – a business with purpose, momentum, and people who care.
                                    But as things evolve, you know success isn’t just about strategy or structure – it’s about
                                    how your people work together, lead, and grow.
                                </p>
                                <p>
                                    That’s where Ignite comes in. We help you make people and culture simple to get right –
                                    creating clarity, connection, and confidence that fuels sustainable growth.
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}


