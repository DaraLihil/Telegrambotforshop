import React from 'react';
import { useForm } from 'react-hook-form';
import { useAdmin } from '../../context/AdminContext';
import { X } from 'lucide-react';
import { toast } from 'sonner';

interface CategoryFormProps {
  categoryId?: string | null;
  onClose: () => void;
}

interface CategoryFormData {
  name: string;
  description: string;
  image: string;
  icon: string;
}

const iconOptions = [
  { value: 'flame', label: '🔥 Огонь (flame)' },
  { value: 'sparkles', label: '✨ Искры (sparkles)' },
  { value: 'flower', label: '🌸 Цветок (flower)' },
  { value: 'shield', label: '🛡️ Щит (shield)' },
  { value: 'heart', label: '❤️ Сердце (heart)' },
  { value: 'star', label: '⭐ Звезда (star)' },
  { value: 'moon', label: '🌙 Луна (moon)' },
  { value: 'sun', label: '☀️ Солнце (sun)' },
];

export default function CategoryForm({ categoryId, onClose }: CategoryFormProps) {
  const { categories, addCategory, updateCategory } = useAdmin();

  const category = categoryId ? categories.find(c => c.id === categoryId) : null;

  const { register, handleSubmit, watch, formState: { errors } } = useForm<CategoryFormData>({
    defaultValues: category ? {
      name: category.name,
      description: category.description,
      image: category.image,
      icon: category.icon,
    } : {
      name: '',
      description: '',
      image: '',
      icon: 'flame',
    }
  });

  const selectedImage = watch('image');

  const onSubmit = (data: CategoryFormData) => {
    if (categoryId) {
      updateCategory(categoryId, data);
      toast.success('Категория обновлена');
    } else {
      addCategory(data);
      toast.success('Категория добавлена');
    }

    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {categoryId ? 'Редактировать категорию' : 'Добавить категорию'}
        </h3>
        <button
          type="button"
          onClick={onClose}
          className="p-2 text-gray-400 hover:text-gray-600 rounded-lg"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Название категории *
        </label>
        <input
          type="text"
          {...register('name', { required: 'Обязательное поле' })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          placeholder="Например: Ритуальные свечи"
        />
        {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Описание *
        </label>
        <textarea
          {...register('description', { required: 'Обязательное поле' })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          rows={2}
          placeholder="Краткое описание категории"
        />
        {errors.description && <p className="text-sm text-red-600 mt-1">{errors.description.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Иконка *
        </label>
        <select
          {...register('icon', { required: 'Обязательное поле' })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          {iconOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.icon && <p className="text-sm text-red-600 mt-1">{errors.icon.message}</p>}
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
              className="w-full h-40 object-cover rounded-lg border border-gray-200"
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
          {categoryId ? 'Сохранить' : 'Добавить'}
        </button>
      </div>
    </form>
  );
}
