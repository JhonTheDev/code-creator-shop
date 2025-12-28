import { ArrowRight, Sparkles, Code, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-glow opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-slide-up">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">
              Marketplace exclusivo para desenvolvedores
            </span>
          </div>

          {/* Heading */}
          <h1 
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Transforme seu{" "}
            <span className="gradient-text">código</span>
            <br />
            em <span className="text-accent glow-text">renda extra</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            A plataforma onde devs iniciantes e experientes vendem seus projetos, 
            templates e scripts. Comece a monetizar o código que você já tem.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="glow" size="lg" className="w-full sm:w-auto">
              Começar a Vender
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="glass" size="lg" className="w-full sm:w-auto">
              Explorar Códigos
            </Button>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="glass p-4 sm:p-6 glass-hover">
              <div className="flex items-center justify-center mb-2">
                <Code className="w-5 h-5 text-primary" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-foreground">2.5k+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Códigos</div>
            </div>
            <div className="glass p-4 sm:p-6 glass-hover">
              <div className="flex items-center justify-center mb-2">
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-foreground">850+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Devs Vendendo</div>
            </div>
            <div className="glass p-4 sm:p-6 glass-hover">
              <div className="flex items-center justify-center mb-2">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-foreground">R$180k</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Pagos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
