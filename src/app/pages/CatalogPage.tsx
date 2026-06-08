import { ProductCard } from '../components/ProductCard';
import { useAdmin } from '../context/AdminContext';

export function CatalogPage() {
  const { products } = useAdmin();
  return (
    <div className="pb-20">
      <h1 className="mb-6">Все товары</h1>
      <div className="grid grid-cols-2 gap-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
