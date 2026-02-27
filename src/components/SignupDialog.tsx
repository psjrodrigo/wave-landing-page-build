import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { toast } from "sonner";

interface SignupDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SignupDialog = ({ open, onOpenChange }: SignupDialogProps) => {
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreed) {
      toast.error("Você precisa aceitar a política de privacidade.");
      return;
    }
    toast.success("Cadastro realizado com sucesso! Entraremos em contato em breve.");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-border sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">Cadastre-se</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Preencha seus dados e receba uma análise gratuita.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-2">
            <Label htmlFor="name">Nome completo</Label>
            <Input id="name" required placeholder="Seu nome" className="bg-secondary border-border" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" required placeholder="seu@email.com" className="bg-secondary border-border" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">WhatsApp</Label>
            <Input id="phone" required placeholder="(11) 99999-9999" className="bg-secondary border-border" />
          </div>
          <div className="flex items-start gap-2">
            <Checkbox
              id="privacy"
              checked={agreed}
              onCheckedChange={(v) => setAgreed(v === true)}
              className="mt-1"
            />
            <label htmlFor="privacy" className="text-xs text-muted-foreground leading-relaxed">
              Li e concordo com a{" "}
              <Link to="/politica-de-privacidade" className="text-primary underline" target="_blank">
                Política de Privacidade
              </Link>{" "}
              e os{" "}
              <Link to="/termos-de-uso" className="text-primary underline" target="_blank">
                Termos de Uso
              </Link>.
            </label>
          </div>
          <Button type="submit" className="w-full gradient-primary text-primary-foreground font-semibold hover:opacity-90">
            Enviar Cadastro
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SignupDialog;
