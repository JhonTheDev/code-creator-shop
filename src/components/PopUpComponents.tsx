// components/PopUp.tsx
import React, { useEffect } from 'react';
import { X, Sparkles, Code, Zap, ArrowRight } from 'lucide-react';
import { PopupProp, PopupModelDefault } from '@/components/model/PopUpModel';

const Popup: React.FC<PopupProp> = ({
  isOpen = PopupModelDefault.isOpen,
  onClose = PopupModelDefault.onClose,
  title = PopupModelDefault.title ?? 'Welcome to CodeShop',
  description = PopupModelDefault.description ?? 'Get started with your coding journey today!',
  content = PopupModelDefault.content ?? 'Welcome to CodeShop! Your ultimate destination for coding resources and tools.',
  showFooter = PopupModelDefault.showFooter ?? true,
  textFooter = PopupModelDefault.textFooter ?? 'Limited time offer • No credit card required',
  cardTitle1 = 'Your First Steps',
  cardContent1 = 'Here are some tips to get you started with CodeShop.',
  cardTitle2 = 'Your Second Steps',
  cardContent2 = 'Here are some more tips to get you started with CodeShop.',
  size = PopupModelDefault.size ?? 'md',
  showCloseButton = PopupModelDefault.showCloseButton ?? true,
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm animate-in fade-in-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className={`${sizeClasses[size]} w-full animate-in slide-up duration-300`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative rounded-2xl border bg-gradient-to-br from-background to-surface shadow-2xl overflow-hidden">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-hero-glow opacity-30" />

            {/* Glass overlay */}
            <div className="relative bg-glass/30 backdrop-blur-xl border border-white/10 rounded-2xl">
              {/* Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div>
                      <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                        {title}
                      </h2>
                      <p className="text-accent glow-text text-sm text-muted-foreground mt-1">
                        {description} 
                      </p>
                    </div>
                  </div>

                  {showCloseButton && (
                    <button
                      onClick={onClose}
                      className="p-2 rounded-lg hover:bg-accent/10 transition-colors group"
                      aria-label="Close"
                    >
                      <X className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </button>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="space-y-4">
                  <p className="text-foreground/80 leading-relaxed">
                    {content}
                  </p>

                  <div className="space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="p-4 rounded-lg bg-gradient-to-br from-surface to-background border border-white/5">
                        <h4 className="font-medium text-foreground mb-2">{cardTitle1}</h4>
                        <p className="text-sm text-muted-foreground">
                          {cardContent1}
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-gradient-to-br from-surface to-background border border-white/5">
                        <h4 className="font-medium text-foreground mb-2">{cardTitle2}</h4>
                        <p className="text-sm text-muted-foreground">
                          {cardContent2}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              {showFooter && (
                <div className="p-6 border-t border-white/10 bg-gradient-to-t from-background/50 to-transparent">
                  <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                      {textFooter}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;