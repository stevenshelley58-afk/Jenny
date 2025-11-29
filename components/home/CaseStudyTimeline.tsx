"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingDown, TrendingUp, Users, ShieldCheck } from "lucide-react";

const caseStudies = [
    {
        company: "Dredge Robotics",
        industry: "Robotics & Engineering",
        before: {
            stats: ["12 Employees", "40% Turnover", "No HR Function"],
            icon: Users,
        },
        after: {
            timeframe: "6 Months Later",
            stats: ["Structured Onboarding", "15% Turnover", "First Internal Promotion"],
            icon: TrendingUp,
        },
    },
    {
        company: "All Rangehoods",
        industry: "Retail & Manufacturing",
        before: {
            stats: ["Compliance Risks", "Unclear Policies", "Reactive Management"],
            icon: ShieldCheck,
        },
        after: {
            timeframe: "3 Months Later",
            stats: ["Full Compliance Audit", "Custom Handbook", "Confident Leadership"],
            icon: ShieldCheck,
        },
    },
    {
        company: "EWS Australia",
        industry: "Environmental Services",
        before: {
            stats: ["Complex Disputes", "High Legal Risk", "Stalled Growth"],
            icon: TrendingDown,
        },
        after: {
            timeframe: "Resolved in 4 Weeks",
            stats: ["Dispute Settled", "Risk Mitigated", "Focus Back on Growth"],
            icon: TrendingUp,
        },
    },
];

export default function CaseStudyTimeline() {
    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-background border-t border-black/5">
            <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-6">
                    Proof, not promises.
                </h2>
                <p className="text-xl text-foreground/60 max-w-2xl">
                    We don't just give advice. We change the trajectory of your business.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {caseStudies.map((study, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-warm-paper/30 rounded-3xl p-8 border border-black/5 hover:border-primary/20 transition-all duration-300"
                    >
                        <div className="mb-8">
                            <h3 className="text-2xl font-serif font-medium text-foreground">
                                {study.company}
                            </h3>
                            <p className="text-sm text-foreground/40 uppercase tracking-widest mt-1">
                                {study.industry}
                            </p>
                        </div>

                        <div className="relative space-y-8">
                            {/* Vertical Line */}
                            <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-red-500/20 via-foreground/10 to-green-500/20" />

                            {/* Before */}
                            <div className="relative flex gap-6">
                                <div className="relative z-10 w-10 h-10 rounded-full bg-background border border-red-500/20 flex items-center justify-center shrink-0">
                                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-foreground/60 mb-2">Before</h4>
                                    <ul className="space-y-1">
                                        {study.before.stats.map((stat, i) => (
                                            <li key={i} className="text-sm text-foreground/60 flex items-center gap-2">
                                                <span className="w-1 h-1 rounded-full bg-red-500/40" />
                                                {stat}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* After */}
                            <div className="relative flex gap-6">
                                <div className="relative z-10 w-10 h-10 rounded-full bg-background border border-green-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                                        {study.after.timeframe}
                                        <ArrowRight className="w-3 h-3 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </h4>
                                    <ul className="space-y-1">
                                        {study.after.stats.map((stat, i) => (
                                            <li key={i} className="text-sm text-foreground font-medium flex items-center gap-2">
                                                <span className="w-1 h-1 rounded-full bg-green-500" />
                                                {stat}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

