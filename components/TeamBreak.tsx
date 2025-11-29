"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function TeamBreak() {
    const imageRef = useRef<HTMLImageElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current && imageRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const scrollProgress = -rect.top / (window.innerHeight + sectionRef.current.offsetHeight);
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    const yOffset = scrollProgress * 100;
                    imageRef.current.style.transform = `translateY(${yOffset}px)`;
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="team-break relative overflow-hidden" ref={sectionRef}>
            <div className="team-break-image h-[75vh] min-h-[500px] max-h-[800px] overflow-hidden relative">
                <Image
                    ref={imageRef}
                    src="/images/team-photo.png"
                    alt="The Ignite team — Jennie, Samantha, Hannah & Jamie"
                    fill
                    className="object-cover object-top absolute top-0 left-0 w-full h-[120%] will-change-transform"
                />
            </div>
            <p className="team-break-caption text-center py-8 px-6 font-display text-base italic text-text-muted bg-cream tracking-wide">
                Jennie, Samantha, Hannah & Jamie — your Ignite team.
            </p>
        </section>
    );
}
