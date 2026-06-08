import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAdmin } from '../context/AdminContext';
import { Lock } from 'lucide-react';
import { toast } from 'sonner';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const { login } = useAdmin();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (login(password)) {
      toast.success('Вход выполнен успешно');
      navigate('/admin/dashboard');
    } else {
      toast.error('Неверный пароль');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Lock className="w-8 h-8 text-white" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-white text-center mb-2">
            Админ-панель
          </h1>
          <p className="text-gray-300 text-center mb-8">
            Введите пароль для доступа
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-2">
                Пароль
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Введите пароль"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Войти
            </button>
          </form>

          <div className="mt-6 p-4 bg-blue-500/20 border border-blue-400/30 rounded-lg">
            <p className="text-sm text-blue-200 text-center">
              Пароль по умолчанию: <span className="font-mono font-bold">admin123</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
