"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowDown } from "lucide-react";


export default function EditorialCover() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-24 pb-12 overflow-hidden bg-primary text-white">
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="w-full h-full bg-gradient-to-br from-white to-white flex items-center justify-center border-2 border-dashed border-white/20">
                    <p className="text-4xl font-serif text-white/40 rotate-12">
                        Hero Image: High-tech abstract visualization (Nano Banana style)
                    </p>
                </div>
            </div>

            <div className="max-w-4xl z-10 relative">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-white leading-[1.1] mb-8"
                >
                    Be the boss <br />
                    <span className="text-white">they brag about.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed mb-12"
                >
                    Build the team they won’t quit. At Ignite, we believe people are the spark behind every successful business.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="group flex items-center gap-3 text-white hover:text-accent transition-colors"
                    >
                        <span className="text-lg font-medium border-b border-current pb-0.5">
                            Why culture first?
                        </span>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="overflow-hidden"
                            >
                                <div className="pt-8 max-w-2xl space-y-6 text-lg text-white/80 leading-relaxed">
                                    <p>
                                        When you want your culture to keep pace with your growth, you need more than just policies.
                                        You’ve built something great – a business with purpose, momentum, and people who care.
                                        But as things evolve, you know success isn’t just about strategy or structure – it’s about
                                        how your people work together, lead, and grow.
                                    </p>
                                    <p>
                                        Maybe you’ve outgrown what once worked. Maybe your team needs clearer direction or stronger alignment.
                                        Or maybe you’re simply ready to take your culture and leadership to the next level.
                                        That’s where Ignite comes in. We help you make people and culture simple to get right.
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>



            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4 text-white/60 text-sm uppercase tracking-widest"
            >
                <ArrowDown className="w-4 h-4 animate-bounce" />
                See how we work with Perth leaders
            </motion.div>
        </section>
    );
}

