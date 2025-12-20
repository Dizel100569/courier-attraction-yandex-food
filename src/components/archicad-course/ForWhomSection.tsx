import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export const ForWhomSection = () => {
  return (
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
  );
};
