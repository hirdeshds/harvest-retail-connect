
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'vegetables',
    name: 'Vegetables',
    image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&q=80&w=800',
    count: 158
  },
  {
    id: 'fruits',
    name: 'Fruits',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=800',
    count: 124
  },
  {
    id: 'dairy',
    name: 'Dairy',
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=800',
    count: 87
  },
  {
    id: 'grains',
    name: 'Grains',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1c0b24d15?auto=format&fit=crop&q=80&w=800',
    count: 52
  },
  {
    id: 'herbs',
    name: 'Herbs & Spices',
    image: 'https://images.unsplash.com/photo-1620841713108-18ad2b52d15c?auto=format&fit=crop&q=80&w=800',
    count: 45
  }
];

const CategorySection = () => {
  return (
    <section className="section-padding">
      <div className="harvest-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-harvest-green mb-3">Browse by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of farm-fresh products across different categories
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/category/${category.id}`}
              className="harvest-card group relative overflow-hidden h-64"
            >
              <div className="absolute inset-0">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-xl font-semibold">{category.name}</h3>
                <p className="text-sm opacity-85">{category.count} products</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
