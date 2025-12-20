import Icon from "@/components/ui/icon";

export const BenefitsSection = () => {
  return (
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
  );
};
