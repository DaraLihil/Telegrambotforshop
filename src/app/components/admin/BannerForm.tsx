import React from 'react';
import { useForm } from 'react-hook-form';
import { useAdmin } from '../../context/AdminContext';
import { X } from 'lucide-react';
import { toast } from 'sonner';

interface BannerFormProps {
  bannerId: number;
  onClose: () => void;
}

interface BannerFormData {
  title: string;
  subtitle: string;
  image: string;
}

export default function BannerForm({ bannerId, onClose }: BannerFormProps) {
  const { banners, updateBanner } = useAdmin();

  const banner = banners.find(b => b.id === bannerId);

  const { register, handleSubmit, watch, formState: { errors } } = useForm<BannerFormData>({
    defaultValues: banner ? {
      title: banner.title,
      subtitle: banner.subtitle,
      image: banner.image,
    } : {
      title: '',
      subtitle: '',
      image: '',
    }
  });

  const selectedImage = watch('image');

  const onSubmit = (data: BannerFormData) => {
    updateBanner(bannerId, data);
    toast.success('Баннер обновлен');
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Редактировать баннер #{bannerId}
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
          Заголовок *
        </label>
        <input
          type="text"
          {...register('title', { required: 'Обязательное поле' })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          placeholder="Например: Магия огня в каждой свече"
        />
        {errors.title && <p className="text-sm text-red-600 mt-1">{errors.title.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Подзаголовок *
        </label>
        <input
          type="text"
          {...register('subtitle', { required: 'Обязательное поле' })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          placeholder="Например: Откройте силу ритуальных практик"
        />
        {errors.subtitle && <p className="text-sm text-red-600 mt-1">{errors.subtitle.message}</p>}
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
            <div className="relative h-48 rounded-lg overflow-hidden">
              <img
                src={selectedImage}
                alt="Preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-bold">{watch('title')}</h3>
                  <p className="text-sm">{watch('subtitle')}</p>
                </div>
              </div>
            </div>
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
          Сохранить
        </button>
      </div>
    </form>
  );
}
