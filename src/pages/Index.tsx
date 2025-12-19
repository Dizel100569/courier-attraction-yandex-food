import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const handleCTAClick = () => {
    window.open("https://ihclick.ru/?p=272195&o=272212&idp=314945&erid=2VtzqvHfAQk", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
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
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Archicad для дизайнеров и архитекторов
            </h1>
            <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto">
              Освойте профессиональное 3D-моделирование и проектирование с нуля. Базовый курс для старта карьеры.
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">2500+</div>
                <div className="text-sm text-blue-100">Учеников</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">8 недель</div>
                <div className="text-sm text-blue-100">Длительность</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">4.9/5</div>
                <div className="text-sm text-blue-100">Рейтинг курса</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700"
                onClick={handleCTAClick}
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
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
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
      <section className="container mx-auto px-4 py-16 bg-white/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
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

      {/* Author Section */}
      <section className="container mx-auto px-4 py-16 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
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
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
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
              <Card key={index} className="p-4 flex items-start gap-4 hover:shadow-md transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                  {index + 1}
                </div>
                <p className="text-slate-700 pt-1">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
            Стоимость курса
          </h2>
          <Card className="p-8 md:p-12 text-center shadow-xl border-2 border-blue-200">
            <div className="mb-6">
              <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-2">12 900 ₽</div>
              <div className="text-slate-600 text-lg">Полный доступ к курсу навсегда</div>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Icon name="CreditCard" className="text-blue-600" size={24} />
                <span className="text-lg font-semibold text-slate-900">Оплата Долями</span>
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-1">от 3 225 ₽ × 4 платежа</div>
              <div className="text-slate-600">Доступна рассрочка без процентов</div>
            </div>

            <div className="space-y-3 text-left mb-8">
              {[
                "Оплата производится на защищённом сайте",
                "После оплаты мгновенный доступ к материалам",
                "Можете сразу приступить к изучению",
                "Поддержка куратора на всём курсе"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="w-full text-lg py-6 bg-blue-600 hover:bg-blue-700"
              onClick={handleCTAClick}
            >
              Записаться на курс
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16 bg-white/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
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

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/35664f62-058c-4327-a458-46135950c5db/files/8c444f19-5037-4c77-99c1-8c00cb2eea47.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 to-slate-900/85" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Начните карьеру в архитектуре и дизайне
            </h2>
            <p className="text-lg mb-8 text-blue-50">
              Получите востребованную профессию и начните работать над реальными проектами уже через месяц обучения
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-white text-blue-600 hover:bg-blue-50 shadow-xl"
              onClick={handleCTAClick}
            >
              Записаться на курс
              <Icon name="Sparkles" className="ml-2" size={20} />
            </Button>
            <p className="text-sm mt-6 text-blue-100">
              Оплата безопасна • Гарантия возврата денег
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-slate-200">
        <p className="text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Курс Archicad. Все права защищены.
        </p>
      </footer>
    </div>
  );
};

export default Index;