
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Leaf, MapPin } from 'lucide-react';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="harvest-card group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.organic && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-harvest-green/80 hover:bg-harvest-green flex items-center space-x-1">
              <Leaf className="h-3 w-3 mr-1" />
              Organic
            </Badge>
          </div>
        )}
        {product.featured && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-amber-500/80 hover:bg-amber-500">Featured</Badge>
          </div>
        )}
      </div>
      
      <div className="p-4 space-y-3">
        <div className="flex justify-between items-start">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-semibold text-lg hover:text-harvest-green transition-colors">
              {product.name}
            </h3>
          </Link>
          <span className="font-bold text-harvest-green">${product.price.toFixed(2)}/{product.unit}</span>
        </div>
        
        <div className="flex items-center space-x-1 text-sm text-gray-600">
          <MapPin className="h-3 w-3" />
          <span>{product.farmer.location}</span>
        </div>
        
        <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
        
        <div className="flex justify-between items-center pt-2">
          <span className="text-sm font-medium">
            Min order: {product.minOrder} {product.unit}
          </span>
          <Button size="sm" className="bg-harvest-green hover:bg-harvest-green-light">
            <Link to={`/product/${product.id}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
