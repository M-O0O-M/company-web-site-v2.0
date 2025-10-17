import Navbar from '@/react-app/components/Navbar';
import HeroSection from '@/react-app/components/HeroSection';
import WhyChooseUs from '@/react-app/components/WhyChooseUs';
import ImpactSection from '@/react-app/components/ImpactSection';
import AIInnovationSection from '@/react-app/components/AIInnovationSection';
import WhyAIBlockchain from '@/react-app/components/WhyAIBlockchain';
import JourneySection from '@/react-app/components/JourneySection';
import IndustriesSection from '@/react-app/components/IndustriesSection';
import PortfolioSection from '@/react-app/components/PortfolioSection';
import ClientReviews from '@/react-app/components/ClientReviews';
import Footer from '@/react-app/components/Footer';
import FloatingContactButtons from '@/react-app/components/FloatingContactButtons';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <ImpactSection />
      <AIInnovationSection />
      <WhyAIBlockchain />
      <JourneySection />
      <IndustriesSection />
      <PortfolioSection />
      <ClientReviews />
      <Footer />
      <FloatingContactButtons />
    </div>
  );
}
