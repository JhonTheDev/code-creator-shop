import { Layout, Server, Smartphone, Palette, Database, Bot, Globe, Terminal } from "lucide-react";

const categories = [
  { name: "Templates React", icon: Layout, count: 234, color: "from-blue-500 to-cyan-500" },
  { name: "APIs & Backend", icon: Server, count: 189, color: "from-green-500 to-emerald-500" },
  { name: "Mobile Apps", icon: Smartphone, count: 156, color: "from-purple-500 to-pink-500" },
  { name: "UI Components", icon: Palette, count: 312, color: "from-orange-500 to-red-500" },
  { name: "Scripts & Utils", icon: Terminal, count: 278, color: "from-yellow-500 to-orange-500" },
  { name: "Database", icon: Database, count: 98, color: "from-indigo-500 to-purple-500" },
  { name: "AI & Bots", icon: Bot, count: 145, color: "from-pink-500 to-rose-500" },
  { name: "Full Stack", icon: Globe, count: 87, color: "from-teal-500 to-cyan-500" },
];

const Categories = () => {
  return (
    <section id="categories" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Explore por <span className="gradient-text">Categoria</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Encontre exatamente o que você precisa navegando por nossas categorias curadas
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href={`#${category.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="glass glass-hover p-6 group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {category.count} produtos
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
