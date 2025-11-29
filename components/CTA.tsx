import Link from "next/link";

export default function CTA() {
    return (
        <section className="cta py-40 bg-gradient-to-b from-cream to-ignite-50" id="contact">
            <div className="container">
                <div className="cta-inner max-w-[700px] mx-auto text-center reveal">
                    <h2 className="cta-title font-display text-[clamp(2.5rem,5vw,4rem)] font-normal text-ignite-800 leading-[1.15] mb-6">
                        Ready to ignite <em className="italic text-coral">your</em> potential?
                    </h2>
                    <p className="cta-text text-lg text-text-muted mb-12 max-w-[500px] mx-auto">
                        Let's have a conversation about where you're headed and how your people can get you there.
                    </p>
                    <div className="cta-buttons flex justify-center gap-4 flex-wrap">
                        <Link href="/cdn-cgi/l/email-protection#afc7cac3c3c0efc6c8c1c6dbcadfccc881ccc0c281ceda" className="btn-ignite-primary inline-flex items-center gap-3 text-[0.9375rem] font-semibold text-white bg-ignite-700 px-8 py-[18px] rounded-full transition-all duration-400 ease-out-expo hover:bg-ignite-800 hover:-translate-y-1 hover:shadow-lg hover:shadow-ignite-700/35 group">
                            Book a coffee chat
                            <svg className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link href="tel:+61893888888" className="btn-ignite-secondary inline-flex items-center gap-3 text-[0.9375rem] font-semibold text-ignite-700 bg-white px-8 py-[18px] rounded-full border border-ignite-200 transition-all duration-400 ease-out-expo hover:border-ignite-400 hover:shadow-lg hover:shadow-black/5">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            08 9388 8888
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
