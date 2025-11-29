"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function EditorialCover() {
    return (
        <section className="relative min-h-[95vh] flex items-center bg-ignite-hero text-white overflow-hidden">
            {/* Ambient Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-ignite-blue-500/20 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-ignite-blue-600/10 rounded-full blur-[100px] mix-blend-screen" />
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
                {/* Left Column: Text (Span 7) */}
                <div className="lg:col-span-7 space-y-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-center gap-3 text-ignite-blue-200/80 font-medium tracking-[0.2em] uppercase text-xs"
                    >
                        <span className="w-12 h-[1px] bg-ignite-blue-300/50"></span>
                        Ignite PCG
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-7xl lg:text-8xl font-serif font-medium leading-[0.95] tracking-tight"
                    >
                        Empowering <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-ignite-blue-100 to-ignite-blue-200">
                            Financial Future
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-xl md:text-2xl text-ignite-blue-100/80 max-w-xl leading-relaxed font-light"
                    >
                        Expert strategies for lasting success. We help you navigate the complexities of wealth management with confidence and clarity.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-wrap gap-6 pt-4"
                    >
                        <button className="group relative px-8 py-4 bg-white text-ignite-blue-900 font-medium text-lg rounded-sm overflow-hidden transition-all hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                            <span className="relative z-10 flex items-center gap-2">
                                Our Services
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </span>
                        </button>
                        <button className="px-8 py-4 text-white border border-white/20 hover:bg-white/5 font-medium text-lg rounded-sm transition-all backdrop-blur-sm">
                            Contact Us
                        </button>
                    </motion.div>
                </div>

                {/* Right Column: Image (Span 5) */}
                <div className="lg:col-span-5 relative h-full flex items-end justify-center lg:justify-end mt-12 lg:mt-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-ignite-blue-900 via-transparent to-transparent z-20 opacity-40" />
                        <img
                            src="/images/team-hero.png"
                            alt="Ignite PCG Team"
                            className="relative z-10 w-full max-w-[600px] object-contain drop-shadow-2xl mask-image-b-gradient"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
