import { Link } from 'react-router';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useCart } from '../contexts/CartContext';

export function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <ShoppingBag className="h-24 w-24 text-gray-300 mb-4" />
        <h2 className="mb-2">Корзина пуста</h2>
        <p className="text-gray-600 mb-6">Добавьте товары для оформления заказа</p>
        <Link to="/">
          <Button>Перейти к покупкам</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-32">
      <h1 className="mb-6">Корзина ({totalItems})</h1>

      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-lg p-4 flex gap-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="flex-1 min-w-0">
              <h3 className="mb-1 line-clamp-1">{item.name}</h3>
              <p className="text-lg mb-3">{item.price} ₽</p>
              <div className="flex items-center gap-3">
                <div className="flex items-center border rounded">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-10 text-center">{item.quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-16 left-0 right-0 bg-white border-t p-4">
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg">Итого:</span>
            <span className="text-2xl">{totalPrice} ₽</span>
          </div>
          <Link to="/checkout">
            <Button size="lg" className="w-full">
              Оформить заказ
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
