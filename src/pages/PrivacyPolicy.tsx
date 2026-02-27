import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container px-4 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft className="h-4 w-4" /> Voltar
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold font-heading mb-8">Política de Privacidade</h1>
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6 text-sm leading-relaxed">
          <p><strong className="text-foreground">Última atualização:</strong> {new Date().toLocaleDateString("pt-BR")}</p>

          <h2 className="text-xl font-heading font-semibold text-foreground">1. Informações que coletamos</h2>
          <p>Coletamos informações pessoais que você nos fornece diretamente, como nome, e-mail e número de telefone, quando preenche nossos formulários de cadastro ou entra em contato conosco.</p>

          <h2 className="text-xl font-heading font-semibold text-foreground">2. Como utilizamos seus dados</h2>
          <p>Utilizamos suas informações para: entrar em contato com propostas comerciais; enviar comunicações de marketing (com seu consentimento); melhorar nossos serviços; cumprir obrigações legais.</p>

          <h2 className="text-xl font-heading font-semibold text-foreground">3. Compartilhamento de dados</h2>
          <p>Não vendemos suas informações pessoais. Podemos compartilhar dados com plataformas de publicidade (como Meta/Facebook e Google) exclusivamente para fins de veiculação de campanhas e remarketing, sempre em conformidade com a LGPD.</p>

          <h2 className="text-xl font-heading font-semibold text-foreground">4. Cookies e tecnologias de rastreamento</h2>
          <p>Utilizamos cookies e pixels de rastreamento (incluindo o Pixel do Facebook/Meta) para medir a efetividade de campanhas publicitárias e melhorar a experiência do usuário. Você pode gerenciar as preferências de cookies no seu navegador.</p>

          <h2 className="text-xl font-heading font-semibold text-foreground">5. Seus direitos (LGPD)</h2>
          <p>Você tem direito a: acessar seus dados pessoais; solicitar correção ou exclusão; revogar consentimento a qualquer momento; solicitar portabilidade dos dados. Para exercer seus direitos, entre em contato pelo e-mail contato@wavedigital.com.br.</p>

          <h2 className="text-xl font-heading font-semibold text-foreground">6. Retenção de dados</h2>
          <p>Mantemos seus dados pelo tempo necessário para cumprir as finalidades descritas nesta política ou conforme exigido por lei.</p>

          <h2 className="text-xl font-heading font-semibold text-foreground">7. Segurança</h2>
          <p>Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acessos não autorizados, perda ou destruição.</p>

          <h2 className="text-xl font-heading font-semibold text-foreground">8. Contato</h2>
          <p>Em caso de dúvidas sobre esta política, entre em contato: contato@wavedigital.com.br</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
