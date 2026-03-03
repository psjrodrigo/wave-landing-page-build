import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "5531999702936";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de saber mais sobre os serviços da Wave Digital Solutions.`;

interface CTASectionProps {
  onOpenSignup: () => void;
}

const CTASection = ({ onOpenSignup }: CTASectionProps) => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-primary opacity-10" />
      <div className="container px-4 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            Pronto para <span className="text-primary">escalar</span> seus resultados?
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Entre em contato agora e receba uma análise gratuita da sua presença digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="gradient-primary text-primary-foreground font-semibold text-lg px-8 py-6 box-glow hover:opacity-90 transition-opacity"
              onClick={onOpenSignup}
            >
              Cadastre-se <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/40 text-foreground hover:bg-primary/10 font-semibold text-lg px-8 py-6"
              asChild
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
