import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SignupDialog from "@/components/SignupDialog";
import WhatsAppFab from "@/components/WhatsAppFab";

const Index = () => {
  const [signupOpen, setSignupOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenSignup={() => setSignupOpen(true)} />
      <HeroSection onOpenSignup={() => setSignupOpen(true)} />
      <ServicesSection />
      <AboutSection />
      <CTASection onOpenSignup={() => setSignupOpen(true)} />
      <Footer />
      <WhatsAppFab />
      <SignupDialog open={signupOpen} onOpenChange={setSignupOpen} />
    </div>
  );
};

export default Index;
