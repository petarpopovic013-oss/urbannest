import { BelgradeMarket } from "@/components/BelgradeMarket";
import { BrandPromise } from "@/components/BrandPromise";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ManagementJourney } from "@/components/ManagementJourney";
import { OwnerComparison } from "@/components/OwnerComparison";
import { PropertyQuiz } from "@/components/PropertyQuiz";
import { Transparency } from "@/components/Transparency";

export default function Home() {
  return (
    <div id="top" className="site-shell">
      <Header />
      <main>
        <HeroSection />
        <BrandPromise />
        <OwnerComparison />
        <ManagementJourney />
        <Transparency />
        <BelgradeMarket />
        <PropertyQuiz />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
