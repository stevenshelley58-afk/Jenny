import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TeamBreak from "@/components/TeamBreak";
import Approach from "@/components/Approach";
import Testimonial from "@/components/Testimonial";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <Services />
      <TeamBreak />
      <Approach />
      <Testimonial />
      <CTA />
      <Footer />
    </main>
  );
}

