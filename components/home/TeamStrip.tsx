"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

const team = [
    {
        name: "Samantha Lawrence",
        title: "Senior Consultant",
        skim: "Expert in employee relations and organisational development.",
        depth: "Samantha brings a wealth of experience in navigating complex employee relations issues and driving organisational change. She is passionate about creating fair and productive workplaces."
    },
    {
        name: "Hannah Keech",
        title: "Business Partner",
        skim: "Specialist in talent acquisition and culture building.",
        depth: "Hannah is known for her genuine connection, curiosity, and strong business insight. She is passionate about empowering leaders and nurturing positive culture."
    },
    {
        name: "Jamie Frazer",
        title: "HR Coordinator",
        skim: "Ensuring smooth operations and employee support.",
        depth: "Jamie supports the company’s goals through effective HR strategies, clear communication, and a collaborative approach that ensures every team member feels valued."
    }
];

export default function TeamStrip() {
    const [activeMember, setActiveMember] = useState<number | null>(null);

    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-accent border-t border-black/5">
            <div className="grid md:grid-cols-3 gap-8">
                {team.map((member, index) => (
                    <div key={index} className="group">
                        <div className="aspect-square bg-background rounded-2xl mb-6 flex items-center justify-center text-foreground/20">
                            {/* Placeholder */}
                            Photo
                        </div>
                        <h3 className="text-2xl font-serif font-medium text-foreground mb-1">{member.name}</h3>
                        <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">{member.title}</p>
                        <p className="text-foreground mb-6">{member.skim}</p>

                        <button
                            onClick={() => setActiveMember(index)}
                            className="flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-primary transition-colors"
                        >
                            View profile
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {activeMember !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-end bg-black/20 backdrop-blur-sm"
                        onClick={() => setActiveMember(null)}
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
                                onClick={() => setActiveMember(null)}
                                className="absolute top-6 right-6 p-2 hover:bg-accent rounded-full transition-colors"
                            >
                                <X className="w-6 h-6 text-foreground" />
                            </button>

                            <div className="mt-12">
                                <h3 className="text-3xl font-serif font-medium text-foreground mb-2">{team[activeMember].name}</h3>
                                <p className="text-primary font-medium uppercase tracking-widest mb-8">{team[activeMember].title}</p>
                                <p className="text-lg text-foreground/80 leading-relaxed">
                                    {team[activeMember].depth}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

