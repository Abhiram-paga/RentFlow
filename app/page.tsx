import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/sections/HeroSection";
import TrustedBySection from "@/app/components/sections/TrustedBySection";
import FeaturesSection from "@/app/components/sections/FeaturesSection";
import DashboardSection from "@/app/components/sections/DashboardSection";
import BenefitsSection from "@/app/components/sections/BenefitsSection";
import HowItWorksSection from "@/app/components/sections/HowItWorksSection";
import AdvancedFeaturesSection from "@/app/components/sections/AdvancedFeaturesSection";
import PricingSection from "@/app/components/sections/PricingSection";
import TestimonialsSection from "@/app/components/sections/TestimonialsSection";
import FAQSection from "@/app/components/sections/FAQSection";
import MobileAppSection from "@/app/components/sections/MobileAppSection";
import CTASection from "@/app/components/sections/CTASection";
import ContactSection from "@/app/components/sections/ContactSection";
import Footer from "@/app/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <TrustedBySection />
        <FeaturesSection />
        <DashboardSection />
        <BenefitsSection />
        <HowItWorksSection />
        <AdvancedFeaturesSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <MobileAppSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
