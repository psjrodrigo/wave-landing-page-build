import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenSignup: () => void;
}

const Navbar = ({ onOpenSignup }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container px-4 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 text-xl font-heading font-bold">
          <img src="/favicon.png" alt="Wave Digital Solutions" className="h-8 w-8" />
          <span><span className="text-primary">Wave</span> Digital</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <Button size="sm" className="gradient-primary text-primary-foreground hover:opacity-90" onClick={onOpenSignup}>
            Cadastre-se
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="block text-sm text-muted-foreground hover:text-foreground" onClick={() => setIsOpen(false)}>
              {l.label}
            </a>
          ))}
          <Button size="sm" className="gradient-primary text-primary-foreground w-full" onClick={() => { onOpenSignup(); setIsOpen(false); }}>
            Cadastre-se
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
