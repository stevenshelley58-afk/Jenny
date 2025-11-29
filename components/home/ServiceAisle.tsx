"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

const services = [
    {
        title: "HR Strategy",
        skim: "Align People and Development initiatives with your business goals.",
        depth: "HR strategy services help you align People and Development initiatives with your business goals and objectives, ensuring that your HR efforts support your overall success."
    },
    {
        title: "Workforce Planning",
        skim: "Align your organisational structure with your business strategy.",
        depth: "Align your organisational structure with your business strategy, so you can attract, retain, and empower top talent with the right support and tools to succeed. If a restructure is required, we’ve got you covered."
    },
    {
        title: "Employee Engagement",
        skim: "Create a positive and motivated work environment.",
        depth: "Help you create a positive and motivated work environment, fostering employee satisfaction, productivity, and loyalty."
    },
    {
        title: "Training & Development",
        skim: "Build skills and enhance performance.",
        depth: "Training and development programs, including leadership to help your employees build their skills and enhance their performance."
    },
    {
        title: "HR Compliance",
        skim: "Navigate complex HR laws and regulations.",
        depth: "Navigate complex HR laws and regulations, ensuring that you stay in compliance and avoid costly legal issues."
    },
    {
        title: "Employment Relations",
        skim: "Navigate workplace issues and maintain compliance.",
        depth: "Award Interpretation, employee and industrial relations, helping you navigate workplace issues and investigations, resolve disputes, and maintain compliance with legislation."
    }
];

export default function ServiceAisle() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeService, setActiveService] = useState<number | null>(null);

    return (
        <section className="py-24 overflow-hidden bg-cream">
            <div className="px-6 md:px-12 lg:px-24 mb-12">
                <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground">What we do</h2>
            </div>

            <div
                ref={containerRef}
                className="flex overflow-x-auto snap-x snap-mandatory px-6 md:px-12 lg:px-24 gap-6 pb-12 scrollbar-hide"
            >
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="snap-center shrink-0 w-[85vw] md:w-[400px] bg-background p-8 rounded-2xl border border-black/5 hover:border-primary/20 transition-colors flex flex-col justify-between h-[300px]"
                    >
                        <div>
                            <h3 className="text-2xl font-serif font-medium text-foreground mb-4">{service.title}</h3>
                            <p className="text-lg text-foreground leading-relaxed">{service.skim}</p>
                        </div>

                        <button
                            onClick={() => setActiveService(index)}
                            className="self-start flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors mt-8"
                        >
                            View full description
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {activeService !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-end bg-black/20 backdrop-blur-sm"
                        onClick={() => setActiveService(null)}
                    >
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="w-full max-w-md h-full bg-background p-8 md:p-12 shadow-2xl overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setActiveService(null)}
                                className="absolute top-6 right-6 p-2 hover:bg-cream rounded-full transition-colors"
                            >
                                <X className="w-6 h-6 text-foreground" />
                            </button>

                            <div className="mt-12">
                                <h3 className="text-3xl font-serif font-medium text-foreground mb-8">
                                    {services[activeService].title}
                                </h3>
                                <p className="text-xl text-foreground leading-relaxed">
                                    {services[activeService].depth}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}



