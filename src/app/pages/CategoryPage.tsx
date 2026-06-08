import { useParams, Link } from 'react-router';
import { ChevronLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ProductCard } from '../components/ProductCard';
import { useAdmin } from '../context/AdminContext';

export function CategoryPage() {
  const { categoryId } = useParams();
  const { products, categories } = useAdmin();
  const category = categories.find((c) => c.id === categoryId);
  const categoryProducts = products.filter((p) => p.category === categoryId);

  if (!category) {
    return (
      <div className="text-center py-20">
        <h2 className="mb-4">Категория не найдена</h2>
        <Link to="/">
          <Button>Вернуться на главную</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-20">
      <div className="mb-6">
        <Link to="/">
          <Button variant="ghost" size="sm" className="mb-3">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Назад
          </Button>
        </Link>
        <h1 className="mb-2">{category.name}</h1>
        <p className="text-gray-600">{category.description}</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
