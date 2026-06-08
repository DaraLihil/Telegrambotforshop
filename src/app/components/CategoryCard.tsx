import { Link } from 'react-router';
import { Category } from '../data/products';
import { Flame, Sparkles, Flower, Shield, Heart } from 'lucide-react';

const iconMap: Record<string, typeof Flame> = {
  flame: Flame,
  sparkles: Sparkles,
  flower: Flower,
  shield: Shield,
  heart: Heart,
};

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const Icon = iconMap[category.icon] || Flame;

  return (
    <Link to={`/category/${category.id}`}>
      <div className="relative h-40 rounded-lg overflow-hidden group cursor-pointer">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
          <div className="flex items-center gap-2 mb-1">
            <Icon className="h-5 w-5 text-white" />
            <h3 className="text-white">{category.name}</h3>
          </div>
          <p className="text-white/80 text-sm">{category.description}</p>
        </div>
      </div>
    </Link>
  );
}
