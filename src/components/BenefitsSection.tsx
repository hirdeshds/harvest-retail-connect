
import { Package, ShoppingBag, TrendingUp, Users, Wheat } from 'lucide-react';

const BenefitsSection = () => {
  const retailerBenefits = [
    {
      icon: <ShoppingBag className="h-6 w-6 text-harvest-green" />,
      title: 'Direct Sourcing',
      description: 'Source products directly from farms, ensuring you get the freshest produce at competitive prices.'
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-harvest-green" />,
      title: 'Increase Profit Margins',
      description: 'Eliminate middlemen to increase your profit margins while offering better prices to your customers.'
    },
    {
      icon: <Package className="h-6 w-6 text-harvest-green" />,
      title: 'Quality Assurance',
      description: 'All products on our platform meet strict quality standards and come with transparent information.'
    }
  ];

  const farmerBenefits = [
    {
      icon: <Users className="h-6 w-6 text-harvest-green" />,
      title: 'Wider Market Access',
      description: 'Connect with retailers across the region and expand your customer base beyond local markets.'
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-harvest-green" />,
      title: 'Better Prices',
      description: 'Sell directly to retailers at fair prices without losing revenue to intermediaries.'
    },
    {
      icon: <Wheat className="h-6 w-6 text-harvest-green" />,
      title: 'Focus on Farming',
      description: 'Spend less time on marketing and sales, and focus more on what you do best - farming.'
    }
  ];

  return (
    <section className="section-padding">
      <div className="harvest-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-harvest-green mb-3">Benefits for Everyone</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform provides significant advantages for both retailers and farmers
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Retailer Benefits */}
          <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-harvest-green/10 rounded-full">
                <ShoppingBag className="h-6 w-6 text-harvest-green" />
              </div>
              <h3 className="text-2xl font-semibold ml-4">For Retailers</h3>
            </div>
            <div className="space-y-6">
              {retailerBenefits.map((benefit, index) => (
                <div key={index} className="flex">
                  <div className="mt-1 mr-4">{benefit.icon}</div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">{benefit.title}</h4>
                    <p className="text-gray-600 mt-1">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Farmer Benefits */}
          <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-harvest-green/10 rounded-full">
                <Wheat className="h-6 w-6 text-harvest-green" />
              </div>
              <h3 className="text-2xl font-semibold ml-4">For Farmers</h3>
            </div>
            <div className="space-y-6">
              {farmerBenefits.map((benefit, index) => (
                <div key={index} className="flex">
                  <div className="mt-1 mr-4">{benefit.icon}</div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">{benefit.title}</h4>
                    <p className="text-gray-600 mt-1">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
