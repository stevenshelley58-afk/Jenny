"use client";

import Link from "next/link";

export default function Hero() {
    return (
        <section className="hero min-h-screen flex items-center relative py-36 overflow-hidden">
            <div className="hero-orb absolute -top-1/5 -right-1/10 w-[70%] h-[140%] bg-[radial-gradient(ellipse_at_center,var(--ignite-100)_0%,transparent_60%)] opacity-60 pointer-events-none animate-[orbFloat_20s_ease-in-out_infinite]"></div>
            <div className="container">
                <div className="hero-inner relative z-10">
                    <div className="hero-eyebrow inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-coral mb-8 opacity-0 translate-y-5 animate-[fadeUp_1s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards]">
                        <span className="hero-eyebrow-line w-10 h-[1.5px] bg-coral"></span>
                        Perth HR Consultants
                    </div>
                    <h1 className="hero-title font-display text-[clamp(3rem,8vw,6.5rem)] font-normal leading-[1.05] text-ignite-800 max-w-[900px] mb-10 opacity-0 translate-y-10 animate-[fadeUp_1s_cubic-bezier(0.16,1,0.3,1)_0.4s_forwards]">
                        Ignite your potential with <em className="italic text-coral">people, culture</em> and development.
                    </h1>
                    <p className="hero-subtitle text-xl text-text-muted max-w-[520px] leading-[1.7] mb-12 opacity-0 translate-y-5 animate-[fadeUp_1s_cubic-bezier(0.16,1,0.3,1)_0.6s_forwards]">
                        We help leaders build businesses worth bragging about. Turn culture into competitive advantage.
                    </p>
                    <div className="hero-actions flex flex-col md:flex-row items-start md:items-center gap-8 opacity-0 translate-y-5 animate-[fadeUp_1s_cubic-bezier(0.16,1,0.3,1)_0.8s_forwards]">
                        <Link href="#contact" className="btn-primary inline-flex items-center gap-3 text-[0.9375rem] font-semibold text-white bg-ignite-700 px-8 py-[18px] rounded-full transition-all duration-400 ease-out-expo hover:bg-ignite-800 hover:-translate-y-1 hover:shadow-lg hover:shadow-ignite-700/35 group">
                            Start a conversation
                            <svg className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link href="#approach" className="btn-text inline-flex items-center gap-2 text-[0.9375rem] font-medium text-text-muted transition-colors duration-300 ease-out hover:text-coral group">
                            See how we work
                            <svg className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted text-xs font-medium tracking-[0.1em] opacity-0 animate-[fadeIn_1s_ease_1.5s_forwards]">
                <span>Scroll</span>
                <div className="scroll-line w-px h-[60px] bg-gradient-to-b from-ignite-300 to-transparent relative overflow-hidden after:content-[''] after:absolute after:-top-full after:left-0 after:w-full after:h-[30%] after:bg-coral after:animate-[scrollDown_2s_ease-in-out_infinite]"></div>
            </div>
        </section>
    );
}
