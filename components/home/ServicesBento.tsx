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
        gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
        title: "Workforce Planning",
        description: "Structure your team for success.",
        icon: Users,
        colSpan: "md:col-span-1",
        gradient: "from-emerald-500/20 to-teal-500/20",
    },
    {
        title: "Employee Engagement",
        description: "Create a motivated work environment.",
        icon: Heart,
        colSpan: "md:col-span-1",
        gradient: "from-rose-500/20 to-orange-500/20",
    },
    {
        title: "Training & Development",
        description: "Build skills and enhance performance.",
        icon: TrendingUp,
        colSpan: "md:col-span-2",
        gradient: "from-amber-500/20 to-yellow-500/20",
    },
    {
        title: "HR Compliance",
        description: "Navigate complex HR laws.",
        icon: ShieldCheck,
        colSpan: "md:col-span-1",
        gradient: "from-indigo-500/20 to-cyan-500/20",
    },
    {
        title: "Employment Relations",
        description: "Resolve disputes and maintain compliance.",
        icon: Scale,
        colSpan: "md:col-span-2",
        gradient: "from-fuchsia-500/20 to-pink-500/20",
    }
];

export default function ServicesBento() {
    return (
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#050505] text-white overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-serif font-medium mb-6 leading-tight"
                    >
                        Discover, Design, Deliver? <br />
                        <span className="text-white/40">Please. We actually do work.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-white/60 max-w-2xl leading-relaxed"
                    >
                        Real HR isn't about buzzwords. It's about solving the messy, complex, human problems that hold businesses back.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 overflow-hidden ${service.colSpan} flex flex-col justify-between backdrop-blur-sm`}
                        >
                            {/* Hover Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-4">
                                <ArrowUpRight className="w-6 h-6 text-white/80" />
                            </div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                                    <service.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-serif font-medium text-white mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-white/60 leading-relaxed max-w-sm group-hover:text-white/80 transition-colors">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
