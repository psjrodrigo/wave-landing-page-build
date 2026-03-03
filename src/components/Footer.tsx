import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contato" className="py-12 bg-card border-t border-border">
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-heading font-bold mb-3">
              <span className="text-primary">Wave</span> Digital Solutions
            </h3>
            <p className="text-sm text-muted-foreground">
              Agência de marketing digital focada em resultados para o seu negócio.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-3">Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#servicos" className="hover:text-foreground transition-colors">Serviços</a></li>
              <li><a href="#sobre" className="hover:text-foreground transition-colors">Sobre</a></li>
              <li><Link to="/politica-de-privacidade" className="hover:text-foreground transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/termos-de-uso" className="hover:text-foreground transition-colors">Termos de Uso</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-3">Contato</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>contato@wavesolutionsdigital.com</li>
              <li>(31) 99970-2936</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Wave Digital Solutions. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
