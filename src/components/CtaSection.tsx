
import { Button } from '@/components/ui/button';
import { Leaf } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="section-padding bg-harvest-green">
      <div className="harvest-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white md:w-2/3">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-1 rounded-full mb-4">
              <Leaf className="h-4 w-4" />
              <span className="text-sm font-medium">Join Our Community</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Revolutionize Your Supply Chain?</h2>
            <p className="text-white/85 text-lg">
              Whether you're a farmer looking to expand your market or a retailer seeking fresher produce, 
              HarvestConnect is here to help you succeed. Sign up today to experience the benefits of our platform.
            </p>
          </div>
          
          <div className="md:w-1/3 flex flex-col space-y-3">
            <Button size="lg" className="bg-white text-harvest-green hover:bg-harvest-brown-light w-full">
              <a href="/register" className="w-full">Register Now</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 w-full">
              <a href="/contact" className="w-full">Contact Sales</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
