
import { products } from '@/data/products';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  const featuredProducts = products.filter(product => product.featured);
  
  return (
    <section className="section-padding bg-harvest-gray">
      <div className="harvest-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-harvest-green mb-3">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our selection of high-quality products directly from trusted farmers
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="/marketplace" 
            className="btn-outline inline-block"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
