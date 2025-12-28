import { Code2, Github, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Code2 className="w-5 h-5 text-foreground" />
              </div>
              <span className="font-mono font-bold text-lg">
                DevCode<span className="text-accent">.</span>store
              </span>
            </a>
            <p className="text-sm text-muted-foreground mb-4">
              O marketplace onde devs transformam código em renda.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-secondary hover:text-accent transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-secondary hover:text-accent transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-secondary hover:text-accent transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-secondary hover:text-accent transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Marketplace</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Explorar</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Categorias</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Mais Vendidos</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Novidades</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Vender</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Como funciona</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Criar loja</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Guia do vendedor</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Pagamentos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Suporte</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contato</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Comunidade</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacidade</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Licenças</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2024 DevCode.store. Todos os direitos reservados.</p>
          <p>Feito com 💙 por devs, para devs.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
