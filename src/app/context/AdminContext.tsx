import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, Category, products as initialProducts, categories as initialCategories, banners as initialBanners } from '../data/products';

interface Banner {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

interface AdminContextType {
  products: Product[];
  categories: Category[];
  banners: Banner[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  addCategory: (category: Omit<Category, 'id'>) => void;
  updateCategory: (id: string, category: Partial<Category>) => void;
  deleteCategory: (id: string) => void;
  updateBanner: (id: number, banner: Partial<Banner>) => void;
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const ADMIN_PASSWORD = 'admin123'; // В продакшене использовать env переменные
const STORAGE_KEY = 'esotericsShopData';
const AUTH_KEY = 'esotericsAdminAuth';

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [banners, setBanners] = useState<Banner[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    const savedAuth = localStorage.getItem(AUTH_KEY);

    if (savedData) {
      try {
        const data = JSON.parse(savedData);
        setProducts(data.products || initialProducts);
        setCategories(data.categories || initialCategories);
        setBanners(data.banners || initialBanners);
      } catch (error) {
        setProducts(initialProducts);
        setCategories(initialCategories);
        setBanners(initialBanners);
      }
    } else {
      setProducts(initialProducts);
      setCategories(initialCategories);
      setBanners(initialBanners);
    }

    if (savedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (products.length > 0 || categories.length > 0 || banners.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ products, categories, banners }));
    }
  }, [products, categories, banners]);

  const login = (password: string): boolean => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem(AUTH_KEY, 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem(AUTH_KEY);
  };

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newId = 'p' + Date.now();
    setProducts([...products, { ...product, id: newId }]);
  };

  const updateProduct = (id: string, updatedProduct: Partial<Product>) => {
    setProducts(products.map(p => p.id === id ? { ...p, ...updatedProduct } : p));
  };

  const deleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const addCategory = (category: Omit<Category, 'id'>) => {
    const newId = 'cat' + Date.now();
    setCategories([...categories, { ...category, id: newId }]);
  };

  const updateCategory = (id: string, updatedCategory: Partial<Category>) => {
    setCategories(categories.map(c => c.id === id ? { ...c, ...updatedCategory } : c));
  };

  const deleteCategory = (id: string) => {
    setCategories(categories.filter(c => c.id !== id));
  };

  const updateBanner = (id: number, updatedBanner: Partial<Banner>) => {
    setBanners(banners.map(b => b.id === id ? { ...b, ...updatedBanner } : b));
  };

  return (
    <AdminContext.Provider
      value={{
        products,
        categories,
        banners,
        addProduct,
        updateProduct,
        deleteProduct,
        addCategory,
        updateCategory,
        deleteCategory,
        updateBanner,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
};
