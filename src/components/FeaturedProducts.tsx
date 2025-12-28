import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "Dashboard Admin React + TypeScript",
    description: "Template completo de dashboard com autenticação, gráficos e dark mode. Pronto para produção.",
    price: 79.90,
    originalPrice: 149.90,
    rating: 4.9,
    reviews: 127,
    downloads: 892,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    author: {
      name: "Lucas Dev",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lucas",
    },
    tags: ["React", "TypeScript", "Tailwind"],
    featured: true,
  },
  {
    title: "API REST Node.js + Express Boilerplate",
    description: "Estrutura profissional com JWT, validação, testes e documentação Swagger incluída.",
    price: 49.90,
    rating: 4.7,
    reviews: 89,
    downloads: 654,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    author: {
      name: "Ana Silva",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ana",
    },
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "E-commerce Next.js Completo",
    description: "Loja virtual com carrinho, checkout Stripe, painel admin e integração com headless CMS.",
    price: 199.90,
    originalPrice: 349.90,
    rating: 4.8,
    reviews: 203,
    downloads: 1247,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    author: {
      name: "Pedro Santos",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=pedro",
    },
    tags: ["Next.js", "Stripe", "Prisma"],
    featured: true,
  },
  {
    title: "Landing Page Components Pack",
    description: "50+ componentes otimizados para conversão. Hero, features, pricing, testimonials e mais.",
    price: 39.90,
    rating: 4.6,
    reviews: 156,
    downloads: 987,
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=400&fit=crop",
    author: {
      name: "Julia Costa",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=julia",
    },
    tags: ["React", "Framer Motion", "UI"],
  },
  {
    title: "Bot Discord Multi-funcional",
    description: "Bot completo com moderação, música, economia, níveis e comandos customizáveis.",
    price: 29.90,
    rating: 4.5,
    reviews: 78,
    downloads: 432,
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=600&h=400&fit=crop",
    author: {
      name: "Rafael Gamer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rafael",
    },
    tags: ["Discord.js", "Node.js", "Bot"],
  },
  {
    title: "Sistema de Autenticação Firebase",
    description: "Login social, verificação de email, recuperação de senha e proteção de rotas React.",
    price: 34.90,
    rating: 4.4,
    reviews: 92,
    downloads: 567,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
    author: {
      name: "Mariana Tech",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mariana",
    },
    tags: ["Firebase", "React", "Auth"],
  },
];

const FeaturedProducts = () => {
  return (
    <section id="explore" className="py-20 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">
              Códigos em <span className="text-accent glow-text">Destaque</span>
            </h2>
            <p className="text-muted-foreground">
              Os projetos mais vendidos e bem avaliados da semana
            </p>
          </div>
          <Button variant="outline" className="shrink-0">
            Ver todos
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div 
              key={product.title} 
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
