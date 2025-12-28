import { Star, Download, Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  downloads: number;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  tags: string[];
  featured?: boolean;
}

const ProductCard = ({
  title,
  description,
  price,
  originalPrice,
  rating,
  reviews,
  downloads,
  image,
  author,
  tags,
  featured = false,
}: ProductCardProps) => {
  return (
    <div className={`glass glass-hover group relative overflow-hidden ${featured ? "ring-1 ring-accent/30" : ""}`}>
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 left-4 z-10">
          <Badge className="bg-accent text-accent-foreground font-medium">
            Destaque
          </Badge>
        </div>
      )}

      {/* Wishlist Button */}
      <button className="absolute top-4 right-4 z-10 w-8 h-8 glass rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:text-accent">
        <Heart className="w-4 h-4" />
      </button>

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        
        {/* Quick View Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="glass" size="sm">
            <Eye className="w-4 h-4 mr-2" />
            Ver Preview
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-md bg-secondary/50 text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title & Description */}
        <h3 className="font-semibold text-foreground mb-2 line-clamp-1 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {description}
        </p>

        {/* Author */}
        <div className="flex items-center gap-2 mb-4">
          <img
            src={author.avatar}
            alt={author.name}
            className="w-6 h-6 rounded-full ring-1 ring-border"
          />
          <span className="text-sm text-muted-foreground">{author.name}</span>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            <span>{rating.toFixed(1)}</span>
            <span className="text-xs">({reviews})</span>
          </div>
          <div className="flex items-center gap-1">
            <Download className="w-4 h-4" />
            <span>{downloads}</span>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-foreground">
              R${price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                R${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <Button variant="default" size="sm">
            Comprar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
