import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  onCTAClick: () => void;
}

export const HeroSection = ({ onCTAClick }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden mb-16">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/35664f62-058c-4327-a458-46135950c5db/files/c53039b8-fab5-4038-b667-849cf83716b8.jpg)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 via-slate-900/65 to-slate-900/55" />
      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-blue-500/90 rounded-full text-white text-sm font-medium mb-4">
            Онлайн-обучение • Сертификат о прохождении
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight px-2">
            Archicad для дизайнеров и архитекторов
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-blue-50 max-w-3xl mx-auto px-2">
            Освойте профессиональное 3D-моделирование и проектирование с нуля. Базовый курс для старта карьеры.
          </p>
          <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-2xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">2500+</div>
              <div className="text-xs md:text-sm text-blue-100">Учеников</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">8 недель</div>
              <div className="text-xs md:text-sm text-blue-100">Обучение</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">4.9/5</div>
              <div className="text-xs md:text-sm text-blue-100">Рейтинг</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700"
              onClick={onCTAClick}
            >
              Записаться на курс
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <div className="text-sm text-blue-100">
              Старт обучения сразу после оплаты
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
