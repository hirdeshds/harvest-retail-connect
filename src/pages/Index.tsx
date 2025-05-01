
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import FeaturedProducts from '@/components/FeaturedProducts';
import CategorySection from '@/components/CategorySection';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <HowItWorks />
      <FeaturedProducts />
      <CategorySection />
      <BenefitsSection />
      <TestimonialsSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
