"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReadingModeTrigger } from "@/components/providers/ReadingModeProvider";

const steps = [
    {
        title: "Discover",
        skim: "We dive deep to understand your business, culture, and goals.",
        depth: "We don't just scratch the surface. We conduct deep-dive sessions to uncover the root causes of your challenges and the hidden opportunities in your culture."
    },
    {
        title: "Design",
        skim: "We create a tailored people strategy.",
        depth: "No cookie-cutter solutions. We design a bespoke strategy that aligns with your specific business objectives, ensuring every initiative drives measurable growth."
    },
    {
        title: "Deliver",
        skim: "We help you implement, refine, and sustain success.",
        depth: "We don't just hand over a plan and walk away. We partner with you to execute, monitor, and refine the strategy, ensuring long-term sustainability and impact."
    }
];

export default function MethodologyReveal() {
    return (
        <section className="py-24 bg-warm-paper">
            <div className="px-6 md:px-12 lg:px-24 mb-16 text-center">
                <p className="text-sm font-medium text-foreground uppercase tracking-widest mb-4">Our Approach</p>
                <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground">
                    A simple framework that keeps your people and business aligned
                </h2>
            </div>

            <div className="px-6 md:px-12 lg:px-24 space-y-24">
                {steps.map((step, index) => (
                    <Step key={index} step={step} index={index} />
                ))}
            </div>
        </section>
    );
}

function Step({ step, index }: { step: typeof steps[0]; index: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity, scale }}
            className="max-w-4xl mx-auto text-center"
        >
            <ReadingModeTrigger className="mx-auto">
                <div className="inline-block px-4 py-1 rounded-full border border-primary/20 text-primary text-sm font-medium mb-6">
                    0{index + 1}
                </div>
                <h3 className="text-5xl md:text-7xl font-serif font-medium text-foreground mb-6">
                    {step.title}
                </h3>
                <p className="text-2xl md:text-3xl text-foreground mb-6">
                    {step.skim}
                </p>
                <p className="text-lg text-foreground max-w-2xl mx-auto leading-relaxed">
                    {step.depth}
                </p>
            </ReadingModeTrigger>
        </motion.div>
    );
}


