import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export const HeroSection = () => {
  return (
    <section className="mb-24 relative overflow-hidden rounded-3xl bg-cover bg-center md:bg-[right_15%]" style={{
      backgroundImage: 'url(https://cdn.poehali.dev/projects/35664f62-058c-4327-a458-46135950c5db/files/c5ca2b30-ec89-48ef-83eb-e390c5313dc0.jpg)',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      filter: 'contrast(1.2) saturate(1.3) brightness(1.1)'
    }}>
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/75 via-foreground/65 to-transparent"></div>
      <div className="relative z-10 grid lg:grid-cols-2 gap-8 md:gap-16 items-center py-8 md:py-16 px-4 md:px-8">
        <div className="space-y-8">
          <div className="inline-block">
            <Badge variant="outline" className="text-sm px-4 py-2 border-foreground text-foreground font-semibold bg-background/95">
              Официальное трудоустройство
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-background">
            Работа курьером в Яндекс Еда
          </h2>
          <p className="text-base md:text-lg text-background/90 leading-relaxed">
            Официальное трудоустройство с полным социальным пакетом. Стабильный доход от 120 000₽ до 275 000₽ в месяц, свободный график работы и выплаты два раза в неделю.
          </p>
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 md:gap-4 py-4">
            <div className="text-center p-1.5 sm:p-2 md:p-4 backdrop-blur-md rounded-lg shadow-lg bg-yellow-300">
              <div className="text-base sm:text-xl md:text-3xl font-bold text-foreground leading-tight">275К₽</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-foreground mt-0.5 sm:mt-1 leading-tight">Макс. доход</div>
            </div>
            <div className="text-center p-1.5 sm:p-2 md:p-4 backdrop-blur-md rounded-lg shadow-lg bg-yellow-300">
              <div className="text-base sm:text-xl md:text-3xl font-bold text-foreground leading-tight">2х</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-foreground mt-0.5 sm:mt-1 leading-tight">Выплаты</div>
            </div>
            <div className="text-center p-1.5 sm:p-2 md:p-4 backdrop-blur-md rounded-lg shadow-lg bg-yellow-300">
              <div className="text-base sm:text-xl md:text-3xl font-bold text-foreground leading-tight">24/7</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-foreground mt-0.5 sm:mt-1 leading-tight">Поддержка</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto px-6 md:px-8 py-5 md:py-6 !bg-white hover:!bg-[#FFD700] !text-slate-900 hover:!text-slate-900 !border-0 transition-all font-semibold"
              asChild
            >
              <a href="#application-form" onClick={() => {
                if (typeof window !== 'undefined' && (window as any).ym) {
                  (window as any).ym(105912288, 'reachGoal', 'click_apply_button');
                }
              }}>
                Подать заявку
                <Icon name="ArrowRight" className="ml-2" size={18} />
              </a>
            </Button>
            <Button 
              size="lg"
              className="w-full sm:w-auto px-6 md:px-8 py-5 md:py-6 !bg-white hover:!bg-[#FFD700] !text-slate-900 hover:!text-slate-900 !border-0 transition-all font-semibold"
              onClick={() => {
                document.getElementById('benefits')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              Подробнее об условиях
            </Button>
          </div>
        </div>
        <div className="relative lg:block hidden">
        </div>
      </div>
    </section>
  );
};