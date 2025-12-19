import HeroSection from "@/components/sections/HeroSection";
import CourseContent from "@/components/sections/CourseContent";
import SocialProof from "@/components/sections/SocialProof";
import FAQSection from "@/components/sections/FAQSection";

const Archicad = () => {
  const handleCTAClick = () => {
    if (typeof window !== 'undefined' && (window as any).ym) {
      (window as any).ym(105927786, 'reachGoal', 'click_enroll');
    }
    
    let affiliateUrl = "https://ihclick.ru/?p=272195&o=272212&idp=314945&erid=2VtzqvHfAQk";
    
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'yclid'];
      
      const utmString = utmParams
        .filter(param => urlParams.has(param))
        .map(param => `${param}=${urlParams.get(param)}`)
        .join('&');
      
      if (utmString) {
        affiliateUrl += '&' + utmString;
      }
    }
    
    window.open(affiliateUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <HeroSection onCTAClick={handleCTAClick} />
      <CourseContent onCTAClick={handleCTAClick} />
      <SocialProof />
      <FAQSection onCTAClick={handleCTAClick} />
    </div>
  );
};

export default Archicad;
