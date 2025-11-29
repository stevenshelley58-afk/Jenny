export default function Testimonial() {
    return (
        <section className="testimonial py-40 bg-white">
            <div className="container">
                <div className="testimonial-inner max-w-[900px] mx-auto text-center reveal">
                    <div className="testimonial-quote-mark font-display text-[8rem] text-ignite-100 leading-[0.5] mb-6">"</div>
                    <p className="testimonial-text font-display text-[clamp(1.5rem,3vw,2.25rem)] font-normal italic text-ignite-800 leading-[1.5] mb-12">
                        Jennie and her team are genuine HR professionals. They consider our requirements as if they were an integral part of our business. Strategic, focused, and highly experienced.
                    </p>
                    <div className="testimonial-attribution flex items-center justify-center gap-4">
                        <div className="testimonial-avatar w-14 h-14 bg-gradient-to-br from-coral to-coral-light rounded-full flex items-center justify-center text-white font-display text-xl">DR</div>
                        <div className="testimonial-info text-left">
                            <div className="testimonial-name font-semibold text-text">David Reynolds</div>
                            <div className="testimonial-role text-sm text-text-muted">Managing Director, Dredge Robotics</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
