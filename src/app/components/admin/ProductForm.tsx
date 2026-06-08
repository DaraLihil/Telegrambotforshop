import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAdmin } from '../../context/AdminContext';
import { Product } from '../../data/products';
import { Search, X } from 'lucide-react';
import { toast } from 'sonner';

interface ProductFormProps {
  productId?: string | null;
  onClose: () => void;
}

interface ProductFormData {
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  properties: string;
}

export default function ProductForm({ productId, onClose }: ProductFormProps) {
  const { products, categories, addProduct, updateProduct } = useAdmin();
  const [searchingImage, setSearchingImage] = useState(false);
  const [imageResults, setImageResults] = useState<Array<{ url: string; alt: string }>>([]);

  const product = productId ? products.find(p => p.id === productId) : null;

  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<ProductFormData>({
    defaultValues: product ? {
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      image: product.image,
      properties: product.properties.join(', '),
    } : {
      name: '',
      description: '',
      price: 0,
      category: categories[0]?.id || '',
      image: '',
      properties: '',
    }
  });

  const selectedImage = watch('image');

  const searchImages = async (query: string) => {
    setSearchingImage(true);
    try {
      // Здесь должен быть вызов к Unsplash API через MCP
      // Пока используем заглушку
      toast.info('Поиск изображений в разработке. Пожалуйста, введите URL изображения вручную.');
      setImageResults([]);
    } catch (error) {
      toast.error('Ошибка поиска изображений');
    } finally {
      setSearchingImage(false);
    }
  };

  const onSubmit = (data: ProductFormData) => {
    const productData = {
      name: data.name,
      description: data.description,
      price: Number(data.price),
      category: data.category,
      image: data.image,
      properties: data.properties.split(',').map(p => p.trim()).filter(p => p),
    };

    if (productId) {
      updateProduct(productId, productData);
      toast.success('Товар обновлен');
    } else {
      addProduct(productData);
      toast.success('Товар добавлен');
    }

    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {productId ? 'Редактировать товар' : 'Добавить товар'}
        </h3>
        <button
          type="button"
          onClick={onClose}
          className="p-2 text-gray-400 hover:text-gray-600 rounded-lg"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Название товара *
          </label>
          <input
            type="text"
            {...register('name', { required: 'Обязательное поле' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Например: Черная магическая свеча"
          />
          {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Цена (₽) *
          </label>
          <input
            type="number"
            {...register('price', { required: 'Обязательное поле', min: 0 })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="850"
          />
          {errors.price && <p className="text-sm text-red-600 mt-1">{errors.price.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Описание *
        </label>
        <textarea
          {...register('description', { required: 'Обязательное поле' })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          rows={3}
          placeholder="Подробное описание товара"
        />
        {errors.description && <p className="text-sm text-red-600 mt-1">{errors.description.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Категория *
        </label>
        <select
          {...register('category', { required: 'Обязательное поле' })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        {errors.category && <p className="text-sm text-red-600 mt-1">{errors.category.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Свойства (через запятую)
        </label>
        <input
          type="text"
          {...register('properties')}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          placeholder="Банишинг, Защита, Время горения: 4 часа"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          URL изображения *
        </label>
        <input
          type="url"
          {...register('image', { required: 'Обязательное поле' })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          placeholder="https://example.com/image.jpg"
        />
        {errors.image && <p className="text-sm text-red-600 mt-1">{errors.image.message}</p>}

        {selectedImage && (
          <div className="mt-3">
            <p className="text-sm text-gray-600 mb-2">Предпросмотр:</p>
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full h-48 object-cover rounded-lg border border-gray-200"
            />
          </div>
        )}
      </div>

      <div className="flex gap-3 pt-4 border-t border-gray-200">
        <button
          type="button"
          onClick={onClose}
          className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Отмена
        </button>
        <button
          type="submit"
          className="flex-1 px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
        >
          {productId ? 'Сохранить' : 'Добавить'}
        </button>
      </div>
    </form>
  );
}
