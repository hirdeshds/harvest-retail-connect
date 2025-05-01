
export interface Product {
  id: string;
  name: string;
  category: 'vegetables' | 'fruits' | 'dairy' | 'grains' | 'herbs';
  image: string;
  price: number;
  unit: string;
  stock: number;
  minOrder: number;
  farmer: {
    id: string;
    name: string;
    location: string;
    rating: number;
  };
  description: string;
  organic: boolean;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Farm Fresh Tomatoes',
    category: 'vegetables',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=800',
    price: 1.99,
    unit: 'kg',
    stock: 500,
    minOrder: 50,
    farmer: {
      id: 'f1',
      name: 'Green Valley Farms',
      location: 'Sonoma, CA',
      rating: 4.8
    },
    description: 'Juicy, ripe tomatoes grown using sustainable farming practices. Perfect for salads, sauces, and sandwiches.',
    organic: true,
    featured: true
  },
  {
    id: '2',
    name: 'Organic Carrots',
    category: 'vegetables',
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=800',
    price: 1.49,
    unit: 'kg',
    stock: 350,
    minOrder: 40,
    farmer: {
      id: 'f2',
      name: 'Sunshine Organics',
      location: 'Napa, CA',
      rating: 4.5
    },
    description: 'Crunchy and sweet organic carrots. Rich in beta-carotene and antioxidants.',
    organic: true
  },
  {
    id: '3',
    name: 'Fresh Spinach',
    category: 'vegetables',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=800',
    price: 2.99,
    unit: 'kg',
    stock: 200,
    minOrder: 20,
    farmer: {
      id: 'f1',
      name: 'Green Valley Farms',
      location: 'Sonoma, CA',
      rating: 4.8
    },
    description: 'Nutrient-packed spinach leaves. Great for salads, smoothies, and cooking.',
    organic: true
  },
  {
    id: '4',
    name: 'Golden Apples',
    category: 'fruits',
    image: 'https://images.unsplash.com/photo-1567306226408-c02fe98cb0e0?auto=format&fit=crop&q=80&w=800',
    price: 2.49,
    unit: 'kg',
    stock: 400,
    minOrder: 30,
    farmer: {
      id: 'f3',
      name: 'Orchard Hills',
      location: 'Petaluma, CA',
      rating: 4.7
    },
    description: 'Sweet and crisp Golden Delicious apples. Excellent for eating fresh or baking.',
    organic: false,
    featured: true
  },
  {
    id: '5',
    name: 'Fresh Strawberries',
    category: 'fruits',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80&w=800',
    price: 3.99,
    unit: 'kg',
    stock: 150,
    minOrder: 15,
    farmer: {
      id: 'f4',
      name: 'Berry Good Farms',
      location: 'Santa Rosa, CA',
      rating: 4.9
    },
    description: 'Plump and juicy strawberries, freshly picked at peak ripeness.',
    organic: true,
    featured: true
  },
  {
    id: '6',
    name: 'Organic Brown Rice',
    category: 'grains',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800',
    price: 2.29,
    unit: 'kg',
    stock: 700,
    minOrder: 100,
    farmer: {
      id: 'f5',
      name: 'Whole Harvest Grains',
      location: 'Davis, CA',
      rating: 4.6
    },
    description: 'Nutrient-rich organic brown rice. High in fiber and essential minerals.',
    organic: true
  },
  {
    id: '7',
    name: 'Fresh Cow Milk',
    category: 'dairy',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=800',
    price: 1.89,
    unit: 'liter',
    stock: 250,
    minOrder: 25,
    farmer: {
      id: 'f6',
      name: 'Happy Cow Dairy',
      location: 'Petaluma, CA',
      rating: 4.8
    },
    description: 'Fresh, pasteurized cow milk from free-range, grass-fed cows.',
    organic: false
  },
  {
    id: '8',
    name: 'Fresh Basil',
    category: 'herbs',
    image: 'https://images.unsplash.com/photo-1618164533147-1e2e63ba48b0?auto=format&fit=crop&q=80&w=800',
    price: 1.99,
    unit: 'bunch',
    stock: 100,
    minOrder: 10,
    farmer: {
      id: 'f2',
      name: 'Sunshine Organics',
      location: 'Napa, CA',
      rating: 4.5
    },
    description: 'Aromatic fresh basil leaves. Perfect for Italian cuisine, pesto, and garnishes.',
    organic: true
  }
];
