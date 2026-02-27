import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de saber mais sobre os serviços da Wave Digital Solutions.`;

interface HeroSectionProps {
  onOpenSignup: () => void;
}

const HeroSection = ({ onOpenSignup }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/60" />

      <div className="container relative z-10 px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 text-glow">
            <span className="text-foreground">Wave </span>
            <span className="text-primary">Digital</span>
            <span className="text-foreground"> Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Transformamos sua presença digital com estratégias de marketing que geram resultados reais. 
            Mais leads, mais vendas, mais crescimento.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Button
            size="lg"
            className="gradient-primary text-primary-foreground font-semibold text-lg px-8 py-6 box-glow hover:opacity-90 transition-opacity"
            onClick={onOpenSignup}
          >
            Quero Crescer Agora
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/40 text-foreground hover:bg-primary/10 font-semibold text-lg px-8 py-6"
            asChild
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar no WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
