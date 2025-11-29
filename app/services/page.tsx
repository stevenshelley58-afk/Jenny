import ServiceAisle from "@/components/home/ServiceAisle";
import PackageGrid from "@/components/home/PackageGrid";
import MethodologyReveal from "@/components/home/MethodologyReveal";
import FinalCTA from "@/components/home/FinalCTA";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-warm-paper pt-24">
            <section className="px-6 md:px-12 lg:px-24 mb-12">
                <h1 className="text-5xl md:text-7xl font-serif font-medium text-foreground mb-8">
                    Our Services
                </h1>
                <p className="text-xl text-foreground max-w-2xl">
                    Comprehensive HR solutions tailored to your business goals. From strategy to execution, we're with you every step of the way.
                </p>
            </section>

            <ServiceAisle />
            <PackageGrid />
            <MethodologyReveal />

            <FinalCTA />
        </main>
    );
}


