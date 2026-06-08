import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAdmin } from '../context/AdminContext';
import { Package, Tag, Image as ImageIcon, LogOut, Plus, Edit2, Trash2 } from 'lucide-react';
import ProductForm from '../components/admin/ProductForm';
import CategoryForm from '../components/admin/CategoryForm';
import BannerForm from '../components/admin/BannerForm';
import { toast } from 'sonner';

type Tab = 'products' | 'categories' | 'banners';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('products');
  const [editingProduct, setEditingProduct] = useState<string | null>(null);
  const [editingCategory, setEditingCategory] = useState<string | null>(null);
  const [editingBanner, setEditingBanner] = useState<number | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const { products, categories, banners, deleteProduct, deleteCategory, logout, isAuthenticated } = useAdmin();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/admin');
    toast.success('Вы вышли из системы');
  };

  const handleDeleteProduct = (id: string) => {
    if (window.confirm('Удалить этот товар?')) {
      deleteProduct(id);
      toast.success('Товар удален');
    }
  };

  const handleDeleteCategory = (id: string) => {
    if (window.confirm('Удалить эту категорию?')) {
      deleteCategory(id);
      toast.success('Категория удалена');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Админ-панель</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Выйти
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-4">
            <button
              onClick={() => { setActiveTab('products'); setShowAddForm(false); }}
              className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
                activeTab === 'products'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <Package className="w-4 h-4" />
              Товары ({products.length})
            </button>
            <button
              onClick={() => { setActiveTab('categories'); setShowAddForm(false); }}
              className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
                activeTab === 'categories'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <Tag className="w-4 h-4" />
              Категории ({categories.length})
            </button>
            <button
              onClick={() => { setActiveTab('banners'); setShowAddForm(false); }}
              className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
                activeTab === 'banners'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              Баннеры ({banners.length})
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Products Tab */}
        {activeTab === 'products' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Управление товарами</h2>
              <button
                onClick={() => { setShowAddForm(!showAddForm); setEditingProduct(null); }}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Добавить товар
              </button>
            </div>

            {(showAddForm || editingProduct) && (
              <div className="mb-6 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <ProductForm
                  productId={editingProduct}
                  onClose={() => { setShowAddForm(false); setEditingProduct(null); }}
                />
              </div>
            )}

            <div className="grid gap-4">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex items-center gap-4">
                  <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded-lg" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.description.substring(0, 100)}...</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-sm text-gray-500">Категория: {categories.find(c => c.id === product.category)?.name}</span>
                      <span className="font-semibold text-purple-600">{product.price} ₽</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => { setEditingProduct(product.id); setShowAddForm(false); }}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Categories Tab */}
        {activeTab === 'categories' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Управление категориями</h2>
              <button
                onClick={() => { setShowAddForm(!showAddForm); setEditingCategory(null); }}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Добавить категорию
              </button>
            </div>

            {(showAddForm || editingCategory) && (
              <div className="mb-6 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <CategoryForm
                  categoryId={editingCategory}
                  onClose={() => { setShowAddForm(false); setEditingCategory(null); }}
                />
              </div>
            )}

            <div className="grid gap-4 md:grid-cols-2">
              {categories.map((category) => (
                <div key={category.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                  <img src={category.image} alt={category.name} className="w-full h-32 object-cover rounded-lg mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => { setEditingCategory(category.id); setShowAddForm(false); }}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                      Редактировать
                    </button>
                    <button
                      onClick={() => handleDeleteCategory(category.id)}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      Удалить
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Banners Tab */}
        {activeTab === 'banners' && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Управление баннерами</h2>

            <div className="grid gap-4">
              {banners.map((banner) => (
                <div key={banner.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="relative h-48">
                    <img src={banner.image} alt={banner.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="text-xl font-bold">{banner.title}</h3>
                        <p className="text-sm">{banner.subtitle}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    {editingBanner === banner.id ? (
                      <BannerForm
                        bannerId={banner.id}
                        onClose={() => setEditingBanner(null)}
                      />
                    ) : (
                      <button
                        onClick={() => setEditingBanner(banner.id)}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        <Edit2 className="w-4 h-4" />
                        Редактировать
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
