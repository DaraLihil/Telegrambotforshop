import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { ChevronLeft, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { useCart } from '../contexts/CartContext';

export function CheckoutPage() {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    comment: '',
  });
  const [orderComplete, setOrderComplete] = useState(false);

  if (items.length === 0 && !orderComplete) {
    navigate('/cart');
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderComplete(true);
    clearCart();
  };

  if (orderComplete) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <CheckCircle className="h-24 w-24 text-green-500 mb-4" />
        <h2 className="mb-2">Заказ оформлен!</h2>
        <p className="text-gray-600 mb-6 text-center">
          Мы свяжемся с вами в ближайшее время для подтверждения заказа
        </p>
        <Link to="/">
          <Button>Вернуться на главную</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-20">
      <Link to="/cart">
        <Button variant="ghost" size="sm" className="mb-6">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Назад в корзину
        </Button>
      </Link>

      <h1 className="mb-6">Оформление заказа</h1>

      <div className="bg-white rounded-lg p-4 mb-6">
        <h3 className="mb-3">Ваш заказ</h3>
        <div className="space-y-2 mb-4">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between text-sm">
              <span className="flex-1">
                {item.name} × {item.quantity}
              </span>
              <span>{item.price * item.quantity} ₽</span>
            </div>
          ))}
        </div>
        <div className="border-t pt-3 flex justify-between items-center">
          <span className="text-lg">Итого:</span>
          <span className="text-2xl">{totalPrice} ₽</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg p-4 space-y-4">
        <h3 className="mb-2">Контактные данные</h3>

        <div className="space-y-2">
          <Label htmlFor="name">Имя *</Label>
          <Input
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Введите ваше имя"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Телефон *</Label>
          <Input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+7 (___) ___-__-__"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Адрес доставки *</Label>
          <Textarea
            id="address"
            required
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            placeholder="Введите адрес доставки"
            rows={3}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="comment">Комментарий к заказу</Label>
          <Textarea
            id="comment"
            value={formData.comment}
            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
            placeholder="Дополнительная информация"
            rows={3}
          />
        </div>

        <Button type="submit" size="lg" className="w-full">
          Подтвердить заказ
        </Button>
      </form>
    </div>
  );
}
