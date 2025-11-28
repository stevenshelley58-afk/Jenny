"use client";

import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
    return (
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-foreground text-background text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-serif font-medium mb-8">
                    Ready to transform your HR strategy?
                </h2>
                <p className="text-xl md:text-2xl text-background/80 mb-12">
                    Let’s chat over coffee and discover how we can help you build a better business through your people.
                </p>

                <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full text-lg font-medium hover:bg-primary/90 transition-colors mb-24"
                >
                    Book a Consultation
                    <ArrowRight className="w-5 h-5" />
                </a>

                <div className="max-w-md mx-auto text-left">
                    <p className="text-sm font-medium text-background/60 uppercase tracking-widest mb-4">
                        Join the newsletter
                    </p>
                    <form className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="flex-1 bg-background/10 border border-background/20 rounded-lg px-4 py-3 text-background placeholder:text-background/40 focus:outline-none focus:border-primary transition-colors"
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 bg-background text-foreground font-medium rounded-lg hover:bg-white/90 transition-colors"
                        >
                            Join
                        </button>
                    </form>
                    <p className="text-xs text-background/40 mt-4">
                        Expert HR insights, compliance updates, and people-first strategies.
                    </p>
                </div>
            </div>
        </section>
    );
}

