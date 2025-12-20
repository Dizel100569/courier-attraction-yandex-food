import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function CourseInfoSection() {
  return (
    <>
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
                    <Icon name="Users" className="inline mr-2" size={16} />
                    2500+ учеников
                  </div>
                  <div className="px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium">
                    <Icon name="Star" className="inline mr-2" size={16} />
                    Рейтинг 4.9/5
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
