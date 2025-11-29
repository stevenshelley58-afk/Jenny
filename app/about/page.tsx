import PartnerProfile from "@/components/home/PartnerProfile";
import TeamStrip from "@/components/home/TeamStrip";
import FinalCTA from "@/components/home/FinalCTA";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-warm-paper pt-24">
            <section className="px-6 md:px-12 lg:px-24 mb-24">
                <h1 className="text-5xl md:text-7xl font-serif font-medium text-foreground mb-12">
                    Fuelling growth.
                </h1>
                <div className="grid md:grid-cols-2 gap-12 text-lg text-foreground/80 leading-relaxed">
                    <div>
                        <h2 className="text-2xl font-serif font-medium text-foreground mb-4">Why we exist</h2>
                        <p className="mb-6">
                            Ignite was founded after seeing the same pattern in too many businesses: leaders who genuinely care about their people, stuck without the time, clarity or support to turn that intent into a strong, sustainable culture.
                        </p>
                        <p>
                            We saw HR treated as a box to tick, policies, contracts, compliance – while the real opportunities in leadership, culture and engagement were left on the table. That gap is why Ignite exists.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-serif font-medium text-foreground mb-4">Our Mission</h2>
                        <p className="mb-6">
                            We help leaders build better businesses through their people. With the right focus, tools and support, challenges become opportunities for growth.
                        </p>
                        <h2 className="text-2xl font-serif font-medium text-foreground mb-4">Our Vision</h2>
                        <p>
                            To be the trusted partner for leaders who understand that the smartest business strategy starts with their people.
                        </p>
                    </div>
                </div>
            </section>

            <PartnerProfile />
            <TeamStrip />
            <FinalCTA />
        </main>
    );
}


