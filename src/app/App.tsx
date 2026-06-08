import { RouterProvider } from 'react-router';
import { Toaster } from './components/ui/sonner';
import { CartProvider } from './contexts/CartContext';
import { AdminProvider } from './context/AdminContext';
import { router } from './routes';

export default function App() {
  return (
    <AdminProvider>
      <CartProvider>
        <RouterProvider router={router} />
        <Toaster position="top-center" />
      </CartProvider>
    </AdminProvider>
  );
}
