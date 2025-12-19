import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  onCTAClick: () => void;
}

const HeroSection = ({ onCTAClick }: HeroSectionProps) => {
  return (
    <>
      {/* Hero Section */}
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

      {/* For Whom Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-slate-900">
            Для кого этот курс
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "Pencil",
                title: "Начинающие дизайнеры",
                description: "Хотите освоить 3D-проектирование интерьеров и экстерьеров с профессиональным инструментом"
              },
              {
                icon: "Building2",
                title: "Будущие архитекторы",
                description: "Планируете работать в архитектурных бюро и нужны навыки работы в Archicad"
              },
              {
                icon: "GraduationCap",
                title: "Студенты",
                description: "Изучаете архитектуру или дизайн и хотите получить востребованный навык"
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={item.icon} className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 bg-white/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-slate-900">
            Что вы получите
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "BookOpen",
                title: "Полный курс для новичков",
                description: "От установки программы до создания полноценных проектов"
              },
              {
                icon: "Video",
                title: "Видеоуроки в HD-качестве",
                description: "Понятные пошаговые инструкции с примерами"
              },
              {
                icon: "FileCheck",
                title: "Практические задания",
                description: "Закрепляйте навыки на реальных проектах"
              },
              {
                icon: "Award",
                title: "Сертификат о прохождении",
                description: "Подтвердите свою квалификацию официальным документом"
              },
              {
                icon: "Clock",
                title: "Доступ навсегда",
                description: "Возвращайтесь к материалам курса в любое время"
              },
              {
                icon: "Users",
                title: "Поддержка куратора",
                description: "Получайте ответы на вопросы от экспертов"
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-4 animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
