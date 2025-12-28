import { ArrowRight, DollarSign, Zap, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: DollarSign,
    title: "Ganhe dinheiro",
    description: "Monetize projetos que já criou para estudar ou trabalho",
  },
  {
    icon: Zap,
    title: "Rápido e simples",
    description: "Publique em minutos com nossa plataforma intuitiva",
  },
  {
    icon: Shield,
    title: "Pagamento seguro",
    description: "Receba via Pix ou transferência bancária",
  },
  {
    icon: TrendingUp,
    title: "Alcance global",
    description: "Milhares de devs buscando código diariamente",
  },
];

const SellCTA = () => {
  return (
    <section id="sell" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-glow opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="glass p-8 sm:p-12 lg:p-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-2 rounded-full mb-6">
            <span className="text-accent text-sm font-medium">💰 Comece a ganhar hoje</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Seu código pode valer{" "}
            <span className="gradient-text">muito mais</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Aquele projeto de portfólio, o template que você fez para estudar, 
            ou aquela automação que simplificou seu trabalho — tudo isso pode 
            se transformar em dinheiro.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="p-6 bg-secondary/30 rounded-xl border border-border hover:border-accent/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-accent/10 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Button variant="glow" size="lg" className="text-lg px-8">
            Criar minha loja grátis
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          <p className="text-sm text-muted-foreground mt-4">
            Sem taxas de adesão • Comissão de apenas 10%
          </p>
        </div>
      </div>
    </section>
  );
};

export default SellCTA;
