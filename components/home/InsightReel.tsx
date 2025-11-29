"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const posts = [
    {
        title: "The Future of HR in Perth",
        description: "How local businesses are adapting to new workforce demands.",
        date: "Oct 24, 2024",
        image: "/images/blog-1.jpg" // Placeholder path
    },
    {
        title: "Engagement is not a Survey",
        description: "Why annual surveys fail and what to do instead.",
        date: "Sep 12, 2024",
        image: "/images/blog-2.jpg"
    },
    {
        title: "Culture as a Competitive Advantage",
        description: "Attracting top talent in a tight market.",
        date: "Aug 05, 2024",
        image: "/images/blog-3.jpg"
    }
];

export default function InsightReel() {
    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-warm-paper">
            <div className="flex items-end justify-between mb-16">
                <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground">Journal</h2>
                <Link href="/blog" className="hidden md:flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                    View all articles
                    <ArrowUpRight className="w-4 h-4" />
                </Link>
            </div>

            <div className="space-y-8">
                {posts.map((post, index) => (
                    <motion.a
                        key={index}
                        href="/blog/post-slug"
                        initial="initial"
                        whileHover="hover"
                        className="group block border-b border-black/10 pb-8"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="space-y-2">
                                <div className="flex items-center gap-4 text-sm text-foreground/60 uppercase tracking-widest">
                                    <span>{post.date}</span>
                                    <span className="w-1 h-1 rounded-full bg-primary" />
                                    <span>Insight</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-serif font-medium text-foreground group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>
                                <motion.p
                                    variants={{
                                        initial: { height: 0, opacity: 0 },
                                        hover: { height: "auto", opacity: 1 }
                                    }}
                                    className="text-lg text-foreground overflow-hidden"
                                >
                                    {post.description}
                                </motion.p>
                            </div>

                            <div className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 duration-300">
                                <ArrowUpRight className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>

            <div className="mt-8 md:hidden">
                <Link href="/blog" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                    View all articles
                    <ArrowUpRight className="w-4 h-4" />
                </Link>
            </div>
        </section>
    );
}


