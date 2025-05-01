
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { products } from '@/data/products';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Leaf, MapPin, Truck, Package, Info, Check, Wheat } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(product?.minOrder || 1);
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  };
  
  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} ${product?.unit} of ${product?.name} has been added to your cart.`,
    });
  };
  
  if (!product) {
    return (
      <Layout>
        <div className="harvest-container section-padding">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
            <p className="mb-6">The product you are looking for does not exist or has been removed.</p>
            <Button>
              <a href="/marketplace">Return to Marketplace</a>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="harvest-container py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto"
              />
            </div>
            {product.organic && (
              <Badge className="absolute top-4 left-4 bg-harvest-green/90 hover:bg-harvest-green flex items-center space-x-1">
                <Leaf className="h-3 w-3 mr-1" />
                Organic
              </Badge>
            )}
          </div>
          
          {/* Product Details */}
          <div>
            <div className="mb-6">
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <a href={`/category/${product.category}`} className="hover:text-harvest-green">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </a>
                <span className="mx-2">•</span>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {product.farmer.location}
                </div>
              </div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-harvest-green mr-2">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-gray-600">per {product.unit}</span>
              </div>
              <p className="text-gray-700 mb-6">{product.description}</p>
            </div>
            
            <Card className="mb-6 p-4 bg-gray-50">
              <div className="flex flex-col space-y-3">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <Package className="h-5 w-5 mr-2 text-harvest-green" />
                    <span className="text-gray-700">Available Stock</span>
                  </div>
                  <span className="font-medium">{product.stock} {product.unit}</span>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <Info className="h-5 w-5 mr-2 text-harvest-green" />
                    <span className="text-gray-700">Minimum Order</span>
                  </div>
                  <span className="font-medium">{product.minOrder} {product.unit}</span>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <Truck className="h-5 w-5 mr-2 text-harvest-green" />
                    <span className="text-gray-700">Estimated Delivery</span>
                  </div>
                  <span className="font-medium">1-3 Business Days</span>
                </div>
              </div>
            </Card>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Order Quantity ({product.unit})</h3>
              <div className="flex space-x-4">
                <div className="w-1/3">
                  <Input
                    type="number"
                    min={product.minOrder}
                    max={product.stock}
                    value={quantity}
                    onChange={handleQuantityChange}
                  />
                </div>
                <Button className="w-2/3 bg-harvest-green hover:bg-harvest-green-light" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
              </div>
              {quantity < product.minOrder && (
                <p className="text-red-500 text-sm mt-2">
                  Minimum order is {product.minOrder} {product.unit}
                </p>
              )}
            </div>
            
            <Card className="p-4">
              <h3 className="text-lg font-medium mb-3">About the Farmer</h3>
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-harvest-green/10 p-3 rounded-full">
                  <Wheat className="h-5 w-5 text-harvest-green" />
                </div>
                <div>
                  <div className="font-medium">{product.farmer.name}</div>
                  <div className="text-sm text-gray-600">{product.farmer.location}</div>
                </div>
              </div>
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-4 h-4 ${i < Math.floor(product.farmer.rating) ? 'text-yellow-500' : 'text-gray-300'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1 text-sm text-gray-600">{product.farmer.rating.toFixed(1)}</span>
              </div>
              <Button variant="outline" className="w-full border-harvest-green text-harvest-green hover:bg-harvest-green hover:text-white">
                <a href={`/farmer/${product.farmer.id}`} className="flex items-center justify-center w-full">
                  View Farmer Profile
                  <Check className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
