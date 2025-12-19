import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const SocialProof = () => {
  return (
    <>
      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 bg-white/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-slate-900">
            Отзывы учеников
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Анна Смирнова",
                role: "Дизайнер интерьеров",
                text: "Курс превзошёл все ожидания! За месяц освоила Archicad и уже работаю над реальными проектами. Ирина объясняет сложные вещи простым языком.",
                rating: 5,
                avatar: "https://cdn.poehali.dev/projects/35664f62-058c-4327-a458-46135950c5db/files/431e87e7-191d-4b1b-89fe-eccb6ad0356a.jpg"
              },
              {
                name: "Дмитрий Волков",
                role: "Студент архитектурного факультета",
                text: "Отличная структура курса и практические задания. Теперь могу создавать профессиональные чертежи и 3D-модели для учёбы и фриланса.",
                rating: 5,
                avatar: "https://cdn.poehali.dev/projects/35664f62-058c-4327-a458-46135950c5db/files/d9123350-1f5d-40ff-a4fe-845560d5251d.jpg"
              },
              {
                name: "Екатерина Новикова",
                role: "Начинающий архитектор",
                text: "Очень довольна! Получила все необходимые навыки для работы в архитектурном бюро. Поддержка куратора помогла разобраться во всех нюансах.",
                rating: 5,
                avatar: "https://cdn.poehali.dev/projects/35664f62-058c-4327-a458-46135950c5db/files/738e6f01-1ad7-4c2c-b854-66e46bc44ac8.jpg"
              }
            ].map((review, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={review.avatar} 
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-slate-900">{review.name}</p>
                    <p className="text-sm text-slate-500">{review.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={18} />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed">"{review.text}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Showcase Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-slate-900">
            Результаты наших учеников
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "Briefcase",
                number: "87%",
                text: "Выпускников начали работать в сфере дизайна и архитектуры"
              },
              {
                icon: "DollarSign",
                number: "от 250 000 ₽",
                text: "Средний доход фрилансеров после прохождения курса"
              },
              {
                icon: "TrendingUp",
                number: "3-6 мес",
                text: "Выход на профессиональный уровень владения Archicad"
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon} className="text-blue-600" size={32} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-3">{item.number}</div>
                <p className="text-slate-600">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 bg-white/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-slate-900">
            Бонусы при покупке курса
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "Gift",
                title: "Библиотека готовых объектов",
                description: "Более 500 готовых 3D-моделей мебели, техники и декора для ваших проектов",
                badge: "Бонус 1"
              },
              {
                icon: "FileText",
                title: "Шаблоны документации",
                description: "Готовые шаблоны чертежей и спецификаций по ГОСТу",
                badge: "Бонус 2"
              },
              {
                icon: "PlayCircle",
                title: "Мастер-класс по визуализации",
                description: "Дополнительный урок: как создавать фотореалистичные рендеры в Archicad",
                badge: "Бонус 3"
              },
              {
                icon: "BookOpen",
                title: "Чек-лист профессионала",
                description: "PDF-руководство с горячими клавишами и лайфхаками работы в Archicad",
                badge: "Бонус 4"
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} className="text-green-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">{item.badge}</span>
                    </div>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="ShieldCheck" className="text-green-600" size={48} />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                  Гарантия возврата денег
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  Если в течение <span className="font-bold text-green-600">первых 7 дней</span> вы поймёте, что курс вам не подходит — мы вернём вам 100% стоимости. Без вопросов и сложных процедур.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Icon name="CheckCircle2" className="text-green-600" size={20} />
                    <span>7 дней на возврат</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Icon name="CheckCircle2" className="text-green-600" size={20} />
                    <span>100% гарантия</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Icon name="CheckCircle2" className="text-green-600" size={20} />
                    <span>Нулевой риск</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
};

export default SocialProof;