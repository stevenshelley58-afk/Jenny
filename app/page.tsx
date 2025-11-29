import EditorialCover from "@/components/home/EditorialCover";
import CultureCalculator from "@/components/home/CultureCalculator";
import CulturePace from "@/components/home/CulturePace";
import ServicesBento from "@/components/home/ServicesBento";
import PackageGrid from "@/components/home/PackageGrid";
import MethodologyReveal from "@/components/home/MethodologyReveal";
import PartnerProfile from "@/components/home/PartnerProfile";
import TeamStrip from "@/components/home/TeamStrip";
import CaseStudyTimeline from "@/components/home/CaseStudyTimeline";
import InsightReel from "@/components/home/InsightReel";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-warm-paper">
      <EditorialCover />
      <section className="w-full flex justify-center py-12 px-6">
        <CultureCalculator />
      </section>
      <CulturePace />
      <ServicesBento />
      <PackageGrid />
      <MethodologyReveal />
      <PartnerProfile />
      <TeamStrip />
      <CaseStudyTimeline />
      <InsightReel />
      <FinalCTA />
    </main>
  );
}
