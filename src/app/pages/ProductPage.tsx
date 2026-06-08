import { useParams, Link } from 'react-router';
import { ChevronLeft, ShoppingCart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { useAdmin } from '../context/AdminContext';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';

export function ProductPage() {
  const { productId } = useParams();
  const { products } = useAdmin();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="mb-4">Товар не найден</h2>
        <Link to="/">
          <Button>Вернуться на главную</Button>
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast.success('Товар добавлен в корзину', {
      description: product.name,
    });
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="pb-20">
      <Link to={`/category/${product.category}`}>
        <Button variant="ghost" size="sm" className="mb-4">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Назад
        </Button>
      </Link>

      <div className="bg-white rounded-lg overflow-hidden mb-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover"
        />
        <div className="p-6">
          <h1 className="mb-3">{product.name}</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {product.properties.map((prop, index) => (
              <Badge key={index} variant="secondary">
                {prop}
              </Badge>
            ))}
          </div>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-500 mb-1">Цена</div>
              <div className="text-3xl">{product.price} ₽</div>
            </div>
            <Button size="lg" onClick={handleAddToCart}>
              <ShoppingCart className="h-5 w-5 mr-2" />
              В корзину
            </Button>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div>
          <h2 className="mb-4">Похожие товары</h2>
          <div className="grid grid-cols-2 gap-3">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`}>
                <div className="bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-shadow">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-3">
                    <h3 className="text-sm mb-1 line-clamp-1">{p.name}</h3>
                    <p className="text-lg">{p.price} ₽</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
