import EditorialCover from "@/components/home/EditorialCover";
import CulturePace from "@/components/home/CulturePace";
import ServiceAisle from "@/components/home/ServiceAisle";
import PackageGrid from "@/components/home/PackageGrid";
import MethodologyReveal from "@/components/home/MethodologyReveal";
import PartnerProfile from "@/components/home/PartnerProfile";
import TeamStrip from "@/components/home/TeamStrip";
import TrustLedger from "@/components/home/TrustLedger";
import InsightReel from "@/components/home/InsightReel";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-accent">
      <EditorialCover />
      <CulturePace />
      <ServiceAisle />
      <PackageGrid />
      <MethodologyReveal />
      <PartnerProfile />
      <TeamStrip />
      <TrustLedger />
      <InsightReel />
      <FinalCTA />
    </main>
  );
}
