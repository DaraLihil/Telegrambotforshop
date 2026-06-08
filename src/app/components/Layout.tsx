import { Outlet, Link, useLocation } from 'react-router';
import { Home, Grid3x3, ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

export function Layout() {
  const location = useLocation();
  const { totalItems } = useCart();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-lg relative">
        <header className="sticky top-0 bg-white border-b px-4 py-4 z-10">
          <h1 className="text-center">✨ Эзотерические Свечи</h1>
        </header>

        <main className="p-4">
          <Outlet />
        </main>

        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
          <div className="max-w-md mx-auto flex justify-around">
            <Link
              to="/"
              className={`flex flex-col items-center py-3 px-6 transition-colors ${
                isActive('/') ? 'text-primary' : 'text-gray-600'
              }`}
            >
              <Home className="h-6 w-6 mb-1" />
              <span className="text-xs">Главная</span>
            </Link>

            <Link
              to="/catalog"
              className={`flex flex-col items-center py-3 px-6 transition-colors ${
                isActive('/catalog') ? 'text-primary' : 'text-gray-600'
              }`}
            >
              <Grid3x3 className="h-6 w-6 mb-1" />
              <span className="text-xs">Каталог</span>
            </Link>

            <Link
              to="/cart"
              className={`flex flex-col items-center py-3 px-6 transition-colors relative ${
                isActive('/cart') ? 'text-primary' : 'text-gray-600'
              }`}
            >
              <ShoppingCart className="h-6 w-6 mb-1" />
              {totalItems > 0 && (
                <span className="absolute top-1 right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
              <span className="text-xs">Корзина</span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
