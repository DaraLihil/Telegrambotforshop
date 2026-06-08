import { BannerCarousel } from '../components/BannerCarousel';
import { CategoryCard } from '../components/CategoryCard';
import { ProductCard } from '../components/ProductCard';
import { useAdmin } from '../context/AdminContext';

export function Home() {
  const { products, categories } = useAdmin();
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="space-y-6 pb-20">
      <BannerCarousel />

      <section>
        <h2 className="mb-4">Категории</h2>
        <div className="grid grid-cols-2 gap-3">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4">Популярные товары</h2>
        <div className="grid grid-cols-2 gap-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
