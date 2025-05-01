
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-harvest-green py-10 md:py-16 lg:py-20">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=1200"
          alt="Farm background"
          className="w-full h-full object-cover opacity-15"
        />
      </div>
      <div className="harvest-container relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm inline-block mb-4 animate-fade-up">
              Revolutionizing Farm-to-Retail Supply Chain
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Connect Directly with <span className="text-harvest-brown-light">Farmers</span> for Fresh Produce
            </h1>
            <p className="text-lg text-white/85 mb-8 max-w-lg animate-fade-up" style={{ animationDelay: '0.2s' }}>
              HarvestConnect brings farmers and retailers together on a single platform, cutting out middlemen 
              and ensuring fresher products at fair prices.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" className="bg-white text-harvest-green hover:bg-harvest-brown-light hover:text-harvest-green px-8">
                <a href="/register" className="flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20 px-8">
                <a href="/how-it-works">Learn More</a>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <div className="relative rounded-lg overflow-hidden shadow-xl animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <img 
                src="https://images.unsplash.com/photo-1595329088732-83081a2d7f79?auto=format&fit=crop&q=80&w=800" 
                alt="Farmer with fresh produce" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
