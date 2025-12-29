// src/components/Footer.tsx
'use client';

import { Github } from "lucide-react";
import { useState } from "react";
import * as Popups from '@/components/popup';

type PopupEntry = {
  key: string;
  label: string;
  Component: React.ComponentType<any>;
  props?: Record<string, any>;
};

// Mapeamento dos popups para uso no Footer
const POPUPS: Record<string, PopupEntry> = {
  // Legal
  'terms': {
    key: 'terms',
    label: 'Termos de Uso',
    Component: Popups.Terms,
  },
  'privacy': {
    key: 'privacy',
    label: 'Privacidade',
    Component: Popups.Privacy,
  },
  'cookies': {
    key: 'cookies',
    label: 'Cookies',
    Component: Popups.Cookies,
  },
  'license': {
    key: 'license',
    label: 'Licença',
    Component: Popups.License,
  },
  'how-it-works': {
    key: 'how-it-works',
    label: 'Como funciona',
    Component: Popups.Guide,
  },
  'first-sale': {
    key: 'first-sale',
    label: 'Faça seu primeiro',
    Component: Popups.SellGuide,
  },
  'transactions': {
    key: 'transactions',
    label: 'Transações',
    Component: Popups.Transactions,
  },
  // Marketplace (se quiser adicionar popups aqui também)
  'explore': {
    key: 'explore',
    label: 'Explorar',
    Component: Popups.Guide, // Pode mudar para um popup específico depois
  },
};

const Footer = () => {
  // Estado para controlar quais popups estão abertos
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({});

  // Funções para abrir e fechar popups
  const openPopup = (key: string) => {
    setOpenMap(prev => ({ ...prev, [key]: true }));
  };

  const closePopup = (key: string) => {
    setOpenMap(prev => ({ ...prev, [key]: false }));
  };

  // Handler para cliques nos links de popup
  const handlePopupClick = (e: React.MouseEvent<HTMLAnchorElement>, key: string) => {
    e.preventDefault();
    openPopup(key);
  };

  return (
    <>
      <footer className="border-t border-border py-12 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1">
              <a href="/" className="flex items-center gap-2 mb-4">              
                <span className="font-mono font-bold text-lg">
                  code<span className="text-accent">Shop</span>
                </span>
              </a>
              <p className="text-sm text-muted-foreground mb-4">
                O marketplace onde devs transformam código em renda.
              </p>
              <a href="#" className="w-9 h-9 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-secondary hover:text-accent transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>

            {/* Links Marketplace */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Marketplace</h4>
              <ul className="space-y-2 text-sm">
                {/* Page Guidance - placeholder por enquanto */}
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors cursor-not-allowed opacity-50">Explorar</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors cursor-not-allowed opacity-50">Categorias</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors cursor-not-allowed opacity-50">Mais Vendidos</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors cursor-not-allowed opacity-50">Novidades</a></li>
              </ul>
            </div>

            {/* Links Vender */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Vender</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href="#" 
                    onClick={(e) => handlePopupClick(e, 'how-it-works')}
                    className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    Como funciona
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    onClick={(e) => handlePopupClick(e, 'first-sale')}
                    className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    Faça seu primeiro
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    onClick={(e) => handlePopupClick(e, 'transactions')}
                    className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    Transações
                  </a>
                </li>
              </ul>
            </div>

            {/* Links Legal */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href="#" 
                    onClick={(e) => handlePopupClick(e, 'terms')}
                    className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    onClick={(e) => handlePopupClick(e, 'privacy')}
                    className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    Privacidade
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    onClick={(e) => handlePopupClick(e, 'license')}
                    className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    Licenças
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    onClick={(e) => handlePopupClick(e, 'cookies')}
                    className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    Cookies
                  </a>
                </li>
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

      {/* Renderizar todos os popups mapeados */}
      {Object.entries(POPUPS).map(([key, popup]) => {
        const Component = popup.Component;
        const isOpen = !!openMap[key];
        
        return (
          <Component
            key={key}
            isOpen={isOpen}
            onClose={() => closePopup(key)}
            {...(popup.props || {})}
          />
        );
      })}
    </>
  );
};

export default Footer;