import { Link } from 'react-router';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../data/products';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    toast.success('Товар добавлен в корзину', {
      description: product.name,
    });
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-shadow">
        <div className="relative h-48">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="mb-2 line-clamp-1">{product.name}</h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="flex flex-wrap gap-1 mb-3">
            {product.properties.slice(0, 2).map((prop, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {prop}
              </Badge>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xl">{product.price} ₽</span>
            <Button size="sm" onClick={handleAddToCart}>
              <ShoppingCart className="h-4 w-4 mr-1" />
              В корзину
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
