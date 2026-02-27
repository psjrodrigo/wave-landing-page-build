import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container px-4 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft className="h-4 w-4" /> Voltar
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold font-heading mb-8">Termos de Uso</h1>
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6 text-sm leading-relaxed">
          <p><strong className="text-foreground">Última atualização:</strong> {new Date().toLocaleDateString("pt-BR")}</p>

          <h2 className="text-xl font-heading font-semibold text-foreground">1. Aceitação dos Termos</h2>
          <p>Ao acessar e utilizar este site, você concorda com estes Termos de Uso e com nossa Política de Privacidade.</p>

          <h2 className="text-xl font-heading font-semibold text-foreground">2. Serviços</h2>
          <p>A Wave Digital Solutions oferece serviços de marketing digital incluindo, mas não limitado a: gestão de tráfego pago, social media, SEO, criação de sites e automação de marketing.</p>

          <h2 className="text-xl font-heading font-semibold text-foreground">3. Cadastro</h2>
          <p>Ao se cadastrar, você se compromete a fornecer informações verdadeiras, atualizadas e completas. O uso de informações falsas poderá resultar no cancelamento do cadastro.</p>

          <h2 className="text-xl font-heading font-semibold text-foreground">4. Comunicações</h2>
          <p>Ao se cadastrar, você consente em receber comunicações da Wave Digital Solutions por e-mail, WhatsApp ou telefone. Você pode optar por não receber essas comunicações a qualquer momento.</p>

          <h2 className="text-xl font-heading font-semibold text-foreground">5. Propriedade Intelectual</h2>
          <p>Todo o conteúdo deste site, incluindo textos, imagens, logotipos e design, é propriedade da Wave Digital Solutions e protegido por leis de direitos autorais.</p>

          <h2 className="text-xl font-heading font-semibold text-foreground">6. Limitação de Responsabilidade</h2>
          <p>Os resultados de campanhas de marketing digital podem variar. A Wave Digital Solutions não garante resultados específicos, mas se compromete a utilizar as melhores práticas do mercado.</p>

          <h2 className="text-xl font-heading font-semibold text-foreground">7. Alterações</h2>
          <p>Reservamo-nos o direito de alterar estes termos a qualquer momento. Alterações serão publicadas nesta página com a data de atualização.</p>

          <h2 className="text-xl font-heading font-semibold text-foreground">8. Contato</h2>
          <p>Dúvidas sobre estes termos: contato@wavedigital.com.br</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
