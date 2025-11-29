"use client";

import { useEffect, useRef } from "react";

export default function Services() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );

        const reveals = document.querySelectorAll(".reveal");
        reveals.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="services py-40" id="services" ref={sectionRef}>
            <div className="container">
                <div className="section-header mb-20 reveal">
                    <p className="section-eyebrow text-xs font-semibold uppercase tracking-[0.15em] text-coral mb-4">What we do</p>
                    <h2 className="section-title font-display text-[clamp(2rem,4vw,3rem)] font-normal text-ignite-800 max-w-[600px]">Real HR for real problems. No buzzwords.</h2>
                </div>
                <div className="bento-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="bento-card featured lg:col-span-2 bg-gradient-to-br from-ignite-700 to-ignite-600 text-white rounded-3xl p-10 relative overflow-hidden transition-all duration-500 ease-out-expo border border-black/5 hover:-translate-y-2 hover:shadow-xl reveal reveal-delay-1">
                        <div className="bento-icon w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 stroke-white" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                <path d="M2 17l10 5 10-5" />
                                <path d="M2 12l10 5 10-5" />
                            </svg>
                        </div>
                        <h3 className="bento-title font-display text-2xl font-normal text-white mb-3">HR Strategy</h3>
                        <p className="bento-text text-[0.9375rem] text-ignite-100 leading-[1.7]">Align your people initiatives with business goals. We create strategies that actually get implemented, not PowerPoints that gather dust.</p>
                    </div>
                    <div className="bento-card bg-white rounded-3xl p-10 relative overflow-hidden transition-all duration-500 ease-out-expo border border-black/5 hover:-translate-y-2 hover:shadow-xl reveal reveal-delay-2">
                        <div className="bento-icon w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 stroke-ignite-600" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                        </div>
                        <h3 className="bento-title font-display text-2xl font-normal text-ignite-800 mb-3">Workforce Planning</h3>
                        <p className="bento-text text-[0.9375rem] text-text-muted leading-[1.7]">Structure your team for where you're going, not where you've been.</p>
                    </div>
                    <div className="bento-card accent bg-gradient-to-br from-coral to-coral-light text-white rounded-3xl p-10 relative overflow-hidden transition-all duration-500 ease-out-expo border border-black/5 hover:-translate-y-2 hover:shadow-xl reveal reveal-delay-3">
                        <div className="bento-icon w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 stroke-white" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                        </div>
                        <h3 className="bento-title font-display text-2xl font-normal text-white mb-3">Engagement</h3>
                        <p className="bento-text text-[0.9375rem] text-white/85 leading-[1.7]">Create environments where people actually want to show up.</p>
                    </div>
                    <div className="bento-card bg-white rounded-3xl p-10 relative overflow-hidden transition-all duration-500 ease-out-expo border border-black/5 hover:-translate-y-2 hover:shadow-xl reveal reveal-delay-4">
                        <div className="bento-icon w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 stroke-ignite-600" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                            </svg>
                        </div>
                        <h3 className="bento-title font-display text-2xl font-normal text-ignite-800 mb-3">Leadership Development</h3>
                        <p className="bento-text text-[0.9375rem] text-text-muted leading-[1.7]">Build confident leaders who inspire rather than manage.</p>
                    </div>
                    <div className="bento-card bg-white rounded-3xl p-10 relative overflow-hidden transition-all duration-500 ease-out-expo border border-black/5 hover:-translate-y-2 hover:shadow-xl reveal reveal-delay-5">
                        <div className="bento-icon w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 stroke-ignite-600" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                        </div>
                        <h3 className="bento-title font-display text-2xl font-normal text-ignite-800 mb-3">Compliance & IR</h3>
                        <p className="bento-text text-[0.9375rem] text-text-muted leading-[1.7]">Navigate complexity with confidence. We handle disputes so you can focus on growth.</p>
                    </div>
                    <div className="bento-card bg-white rounded-3xl p-10 relative overflow-hidden transition-all duration-500 ease-out-expo border border-black/5 hover:-translate-y-2 hover:shadow-xl reveal reveal-delay-5">
                        <div className="bento-icon w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 stroke-ignite-600" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                            </svg>
                        </div>
                        <h3 className="bento-title font-display text-2xl font-normal text-ignite-800 mb-3">Rapid Response</h3>
                        <p className="bento-text text-[0.9375rem] text-text-muted leading-[1.7]">Expert answers when you need them. From quick calls to complex fixes.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
