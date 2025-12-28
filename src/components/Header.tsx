import { Search, ShoppingCart, Menu, Code2, CodeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Agent } from "http";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <span className="font-mono font-bold text-lg text-foreground">
              code<span className="text-accent">Shop</span>
            </span>
          </a>

          {/* Search - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar templates, scripts, APIs..."
                className="w-full pl-10 bg-secondary/50 border-border focus:border-accent/50 focus:ring-accent/20"
              />
            </div>
          </div>

          {/* Nav - Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#explore" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Explorar
            </a>
            <a href="#categories" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Categorias
            </a>
            <a href="#sell" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Vender
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-accent-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                2
              </span>
            </Button>
            
            <Button variant="outline" className="hidden sm:flex">
              Entrar
            </Button>
            
            <Button variant="glow" className="hidden sm:flex">
              Cadastrar
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar..."
                className="w-full pl-10 bg-secondary/50"
              />
            </div>
            <nav className="flex flex-col gap-2">
              <a href="#explore" className="py-2 text-muted-foreground hover:text-foreground transition-colors">
                Explorar
              </a>
              <a href="#categories" className="py-2 text-muted-foreground hover:text-foreground transition-colors">
                Categorias
              </a>
              <a href="#sell" className="py-2 text-muted-foreground hover:text-foreground transition-colors">
                Vender
              </a>
              <div className="flex gap-2 pt-2">
                <Button variant="outline" className="flex-1">Entrar</Button>
                <Button variant="glow" className="flex-1">Cadastrar</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
