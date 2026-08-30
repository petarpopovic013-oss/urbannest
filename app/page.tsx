import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ManagementJourney } from "@/components/ManagementJourney";
import { ProfessionalCleaning } from "@/components/ProfessionalCleaning";
import { PropertyQuiz } from "@/components/PropertyQuiz";
import { ServiceOverview } from "@/components/ServiceOverview";

export default function Home() {
  return (
    <div id="top" className="site-shell">
      <Header />
      <main>
        <HeroSection />
        <ServiceOverview />
        <ManagementJourney />
        <ProfessionalCleaning />
        <PropertyQuiz />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
