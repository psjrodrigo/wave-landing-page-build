import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const stats = [
  { value: "200+", label: "Clientes atendidos" },
  { value: "5M+", label: "Em resultados gerados" },
  { value: "98%", label: "De satisfação" },
];

const differentials = [
  "Equipe especializada e certificada",
  "Relatórios transparentes e detalhados",
  "Estratégias personalizadas para seu negócio",
  "Suporte dedicado e atendimento ágil",
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
              Por que escolher a <span className="text-primary">Wave?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Somos uma agência focada em performance. Cada estratégia é criada sob medida
              para maximizar seu retorno sobre investimento.
            </p>
            <ul className="space-y-4">
              {differentials.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card border border-border rounded-lg p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold font-heading text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
