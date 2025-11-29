"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import Image from "next/image";

export default function PartnerProfile() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-background">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-[4/5] bg-warm-paper rounded-2xl overflow-hidden">
                    {/* Placeholder for Jennie's image */}
                    <div className="absolute inset-0 flex items-center justify-center text-foreground/40 text-xl font-serif p-8 text-center border-2 border-dashed border-foreground/20 m-4 rounded-xl">
                        Portrait: Professional photo of Jennie Lamb
                    </div>
                </div>

                <div>
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-2">Jennie Lamb</h2>
                    <p className="text-xl text-foreground mb-8">Founder & Principal</p>

                    <p className="text-2xl text-foreground leading-relaxed mb-8">
                        "I help leaders build better businesses through their people.
                        Turning people and culture into a clear business advantage."
                    </p>

                    <button
                        onClick={() => setIsOpen(true)}
                        className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full hover:bg-primary transition-colors"
                    >
                        Read Jennie's story
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-end bg-black/20 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="w-full max-w-lg h-full bg-background p-8 md:p-12 shadow-2xl overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-6 right-6 p-2 hover:bg-warm-paper rounded-full transition-colors"
                            >
                                <X className="w-6 h-6 text-foreground" />
                            </button>

                            <div className="mt-12 space-y-6 text-lg text-foreground/80 leading-relaxed">
                                <h3 className="text-3xl font-serif font-medium text-foreground mb-6">About Jennie</h3>
                                <p>
                                    Jennie is a strategic HR leader with a passion for helping businesses grow through their people.
                                    With years of experience in both corporate and consulting roles, she understands the unique challenges
                                    leaders face when scaling their teams and culture.
                                </p>
                                <p>
                                    She founded Ignite to bridge the gap between compliance-focused HR and true people strategy.
                                    Her approach is practical, human, and commercially grounded, ensuring that every people initiative
                                    delivers real business value.
                                </p>
                                <p>
                                    When she's not partnering with clients, you can find her exploring Perth's coast or enjoying a good coffee.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}


