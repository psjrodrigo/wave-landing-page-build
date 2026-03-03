import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5531999702936";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de saber mais sobre os serviços da Wave Digital Solutions.`;

const WhatsAppFab = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full gradient-primary flex items-center justify-center box-glow hover:opacity-90 transition-opacity animate-float"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-primary-foreground" />
    </a>
  );
};

export default WhatsAppFab;
