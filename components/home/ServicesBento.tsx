"use client";

import { motion } from "framer-motion";
import {
    Briefcase,
    Users,
    Heart,
    TrendingUp,
    ShieldCheck,
    Scale,
    ArrowUpRight
} from "lucide-react";

const services = [
    {
        title: "HR Strategy",
        description: "Align People and Development initiatives with your business goals.",
        icon: Briefcase,
        colSpan: "md:col-span-2",
        bg: "bg-primary/5",
    },
    {
        title: "Workforce Planning",
        description: "Structure your team for success.",
        icon: Users,
        colSpan: "md:col-span-1",
        bg: "bg-accent",
    },
    {
        title: "Employee Engagement",
        description: "Create a motivated work environment.",
        icon: Heart,
        colSpan: "md:col-span-1",
        bg: "bg-accent",
    },
    {
        title: "Training & Development",
        description: "Build skills and enhance performance.",
        icon: TrendingUp,
        colSpan: "md:col-span-2",
        bg: "bg-primary/5",
    },
    {
        title: "HR Compliance",
        description: "Navigate complex HR laws.",
        icon: ShieldCheck,
        colSpan: "md:col-span-1",
        bg: "bg-accent",
    },
    {
        title: "Employment Relations",
        description: "Resolve disputes and maintain compliance.",
        icon: Scale,
        colSpan: "md:col-span-2", // Changed to span 2 to make the grid interesting
        bg: "bg-primary/5",
    }
];

// Adjusted to fit the 3-column grid logic:
// Row 1: 2 + 1 = 3
// Row 2: 1 + 2 = 3
// Row 3: 1 + 2 = 3 (Wait, last one was span 2, so previous must be 1)
// Let's reorder/resize to ensure it fits nicely.
// 1. HR Strategy (2)
// 2. Workforce Planning (1)
// 3. Employee Engagement (1)
// 4. Training & Development (2)
// 5. HR Compliance (1)
// 6. Employment Relations (2) -> This works.

export default function ServicesBento() {
    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-background overflow-hidden">
            <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-6">
                    Discover, Design, Deliver? <br />
                    <span className="text-foreground/40">Please. We actually do work.</span>
                </h2>
                <p className="text-xl text-foreground/60 max-w-2xl">
                    Real HR isn't about buzzwords. It's about solving the messy, complex, human problems that hold businesses back.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`group relative p-8 rounded-3xl border border-black/5 hover:border-primary/20 transition-all duration-500 overflow-hidden ${service.colSpan} ${service.bg} flex flex-col justify-between`}
                    >
                        <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ArrowUpRight className="w-6 h-6 text-primary" />
                        </div>

                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                <service.icon className="w-6 h-6 text-foreground" />
                            </div>
                            <h3 className="text-2xl font-serif font-medium text-foreground mb-3">
                                {service.title}
                            </h3>
                            <p className="text-foreground/70 leading-relaxed max-w-md">
                                {service.description}
                            </p>
                        </div>

                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
