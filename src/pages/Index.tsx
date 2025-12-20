import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { HeroSection } from '@/components/yandex-eda/HeroSection';
import { BenefitsAndSteps } from '@/components/yandex-eda/BenefitsAndSteps';
import { CalculatorAndReviews } from '@/components/yandex-eda/CalculatorAndReviews';
import { FAQAndForm } from '@/components/yandex-eda/FAQAndForm';

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <div className="w-full px-4 py-6">
        <Header />
        
        <HeroSection />
        <BenefitsAndSteps />
        <CalculatorAndReviews />
        <FAQAndForm />

        <Footer />
      </div>
    </div>
  );
}
