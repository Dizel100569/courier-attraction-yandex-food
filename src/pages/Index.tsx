import HeroSection from "@/components/archicad/HeroSection";
import CourseInfoSection from "@/components/archicad/CourseInfoSection";
import ProgramSection from "@/components/archicad/ProgramSection";
import PricingCTASection from "@/components/archicad/PricingCTASection";

const Index = () => {
  const handleCTAClick = () => {
    window.open("https://ihclick.ru/?p=272195&o=272212&idp=314945&erid=2VtzqvHfAQk", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <HeroSection onCTAClick={handleCTAClick} />
      <CourseInfoSection />
      <ProgramSection />
      <PricingCTASection onCTAClick={handleCTAClick} />
    </div>
  );
};

export default Index;
