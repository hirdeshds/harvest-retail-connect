
import { Check, Leaf, Search, ShoppingCart, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="h-8 w-8 text-harvest-green" />,
      title: 'Find Products',
      description: 'Browse our extensive marketplace to discover fresh products directly from local farmers.'
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-harvest-green" />,
      title: 'Place an Order',
      description: 'Select your desired products and quantities, then confirm your bulk order.'
    },
    {
      icon: <Truck className="h-8 w-8 text-harvest-green" />,
      title: 'Fast Delivery',
      description: 'We ensure quick delivery from the farm to your retail store, maintaining freshness.'
    },
    {
      icon: <Check className="h-8 w-8 text-harvest-green" />,
      title: 'Sell Fresh Products',
      description: 'Stock your shelves with farm-fresh products that your customers will love.'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-r from-harvest-green/10 to-harvest-green/5">
      <div className="harvest-container">
        <div className="text-center mb-12">
          <div className="inline-block p-2 bg-harvest-green/10 rounded-full mb-3">
            <Leaf className="h-6 w-6 text-harvest-green" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-harvest-green mb-3">How HarvestConnect Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform makes it easy for retailers to source fresh products directly from farmers,
            eliminating middlemen and ensuring fair prices for everyone.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              <div className="mt-6 text-sm text-harvest-green font-medium">Step {index + 1}</div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
          <Button className="bg-harvest-green hover:bg-harvest-green-light text-white px-8 py-6 h-auto">
            <a href="/register" className="text-lg">Register as Retailer</a>
          </Button>
          <Button variant="outline" className="border-harvest-green text-harvest-green hover:bg-harvest-green hover:text-white px-8 py-6 h-auto">
            <a href="/register-farmer" className="text-lg">Register as Farmer</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
