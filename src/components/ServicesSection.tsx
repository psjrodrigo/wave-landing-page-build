import { motion } from "framer-motion";
import { BarChart3, Target, Megaphone, TrendingUp, Globe, Users } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Tráfego Pago",
    description: "Campanhas otimizadas no Google Ads e Meta Ads para atrair clientes qualificados.",
  },
  {
    icon: Megaphone,
    title: "Social Media",
    description: "Gestão estratégica das suas redes sociais com conteúdo que engaja e converte.",
  },
  {
    icon: BarChart3,
    title: "Analytics & BI",
    description: "Dashboards e relatórios para decisões baseadas em dados reais.",
  },
  {
    icon: Globe,
    title: "Criação de Sites",
    description: "Sites modernos, responsivos e otimizados para conversão.",
  },
  {
    icon: TrendingUp,
    title: "SEO",
    description: "Posicione sua marca no topo do Google de forma orgânica e sustentável.",
  },
  {
    icon: Users,
    title: "CRM & Automação",
    description: "Automações inteligentes para nutrir leads e fechar mais vendas.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 gradient-dark">
      <div className="container px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Soluções completas para escalar seu negócio no digital.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary/40 transition-colors group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <service.icon className="h-10 w-10 text-primary mb-4 group-hover:text-accent transition-colors" />
              <h3 className="text-xl font-heading font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
