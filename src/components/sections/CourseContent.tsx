import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface CourseContentProps {
  onCTAClick: () => void;
}

const CourseContent = ({ onCTAClick }: CourseContentProps) => {
  return (
    <>
      {/* Author Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-slate-900">
            Автор курса
          </h2>
          <Card className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex-shrink-0">
                <img 
                  src="https://cdn.poehali.dev/files/Снимок экрана 2025-12-19 221939.png" 
                  alt="Ирина Бурцева"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-slate-900">Ирина Бурцева</h3>
                <div className="space-y-3 text-slate-600 text-lg leading-relaxed">
                  <p>
                    Практикующий 3D визуализатор интерьеров. Специалист по программам Archicad и 3D Max в сфере дизайна и архитектуры.
                  </p>
                  <p className="font-medium text-blue-600">
                    Основатель онлайн-школы «Учитель дома»
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
                  <div className="px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium">
                    <Icon name="Award" className="inline mr-2" size={16} />
                    Эксперт Archicad
                  </div>
                  <div className="px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium">
                    <Icon name="Star" className="inline mr-2" size={16} />
                    3D визуализатор
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="relative overflow-hidden py-12 md:py-16 scroll-mt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/35664f62-058c-4327-a458-46135950c5db/files/bb7c8b93-585a-45c9-b226-6819051dc45e.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-white/60" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-slate-900">
              Программа курса
            </h2>
            <div className="space-y-4">
              {[
                "Знакомство с интерфейсом и основными инструментами Archicad",
                "Создание и редактирование стен, перекрытий, крыш",
                "Работа с окнами, дверями и другими объектами",
                "3D-моделирование и визуализация проектов",
                "Создание чертежей и разрезов",
                "Оформление проектной документации",
                "Работа со слоями и библиотеками объектов",
                "Финальный проект: создание полноценного архитектурного проекта"
              ].map((item, index) => (
                <Card key={index} className="p-4 flex items-start gap-4 hover:shadow-md transition-shadow animate-fade-in bg-white/90 backdrop-blur-sm" style={{ animationDelay: `${index * 0.05}s` }}>
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-slate-700 pt-1">{item}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-slate-900">
            Стоимость курса
          </h2>
          <Card className="p-6 md:p-8 shadow-xl border-2 border-blue-200">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-2">12 900 ₽</div>
                <div className="text-slate-600 text-base md:text-lg mb-4 md:mb-6">Полный доступ к курсу навсегда</div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <Icon name="CreditCard" className="text-blue-600" size={20} />
                    <span className="text-base font-semibold text-slate-900">Оплата Долями</span>
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-blue-600 mb-1">от 3 225 ₽ × 4</div>
                  <div className="text-sm text-slate-600">Рассрочка без процентов</div>
                </div>
              </div>

              <div className="space-y-2">
                {[
                  "Защищённая оплата на сайте",
                  "Мгновенный доступ после оплаты",
                  "Можете сразу начать обучение",
                  "Поддержка куратора включена"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Icon name="CheckCircle2" className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-sm md:text-base text-slate-700">{item}</span>
                  </div>
                ))}
                <Button 
                  size="lg" 
                  className="w-full mt-4 text-base md:text-lg py-5 md:py-6 bg-blue-600 hover:bg-blue-700"
                  onClick={onCTAClick}
                >
                  Записаться на курс
                  <Icon name="ArrowRight" className="ml-2" size={18} />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
};

export default CourseContent;