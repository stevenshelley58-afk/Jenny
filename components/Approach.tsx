export default function Approach() {
    return (
        <section className="approach py-40 bg-ignite-800 relative overflow-hidden" id="approach">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20viewBox=%270%200%2060%2060%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg%20fill=%27none%27%20fill-rule=%27evenodd%27%3E%3Cg%20fill=%27%23ffffff%27%20fill-opacity=%270.03%27%3E%3Cpath%20d=%27M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
            <div className="container relative z-10">
                <div className="section-header mb-20 reveal">
                    <p className="section-eyebrow text-xs font-semibold uppercase tracking-[0.15em] text-coral-light mb-4">Our approach</p>
                    <h2 className="section-title font-display text-[clamp(2rem,4vw,3rem)] font-normal text-white max-w-[600px]">A simple framework that delivers.</h2>
                </div>
                <div className="approach-grid grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="approach-card bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-12 transition-all duration-500 ease-out-expo hover:bg-white/10 hover:-translate-y-2 reveal reveal-delay-1">
                        <div className="approach-number font-display text-[4rem] font-normal text-coral leading-none mb-6">01</div>
                        <h3 className="approach-title font-display text-[1.75rem] font-normal text-white mb-4">Discover</h3>
                        <p className="approach-text text-[0.9375rem] text-ignite-200 leading-[1.7]">We dig deep. Not surface-level audits—we find root causes and hidden opportunities in your culture.</p>
                    </div>
                    <div className="approach-card bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-12 transition-all duration-500 ease-out-expo hover:bg-white/10 hover:-translate-y-2 reveal reveal-delay-2">
                        <div className="approach-number font-display text-[4rem] font-normal text-coral leading-none mb-6">02</div>
                        <h3 className="approach-title font-display text-[1.75rem] font-normal text-white mb-4">Design</h3>
                        <p className="approach-text text-[0.9375rem] text-ignite-200 leading-[1.7]">Bespoke strategy. No templates. Every initiative designed specifically for your objectives.</p>
                    </div>
                    <div className="approach-card bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-12 transition-all duration-500 ease-out-expo hover:bg-white/10 hover:-translate-y-2 reveal reveal-delay-3">
                        <div className="approach-number font-display text-[4rem] font-normal text-coral leading-none mb-6">03</div>
                        <h3 className="approach-title font-display text-[1.75rem] font-normal text-white mb-4">Deliver</h3>
                        <p className="approach-text text-[0.9375rem] text-ignite-200 leading-[1.7]">We don't hand over a plan and disappear. We partner with you to execute, refine, and sustain.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
