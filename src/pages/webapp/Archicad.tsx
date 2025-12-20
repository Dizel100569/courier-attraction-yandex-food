import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Archicad = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Icon name="Building2" className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">ARCHICAD</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-slate-600 hover:text-slate-900 transition">Возможности</a>
            <a href="#products" className="text-slate-600 hover:text-slate-900 transition">Продукты</a>
            <a href="#training" className="text-slate-600 hover:text-slate-900 transition">Обучение</a>
            <a href="#support" className="text-slate-600 hover:text-slate-900 transition">Поддержка</a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Попробовать бесплатно
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              BIM-решение для архитекторов
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Проектируйте с точностью.
              <br />
              <span className="text-blue-600">Творите с вдохновением.</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              ARCHICAD — профессиональное BIM-решение для создания архитектурных проектов любой сложности. 
              От концепции до рабочей документации.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Icon name="Download" className="mr-2" size={20} />
                Скачать пробную версию
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть демо
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 shadow-2xl">
              <Icon name="Box" className="text-white/20 absolute top-8 right-8" size={200} />
              <div className="relative z-10">
                <Icon name="Boxes" className="text-white mb-4" size={64} />
                <h3 className="text-white text-2xl font-bold mb-2">3D Проектирование</h3>
                <p className="text-blue-100">Создавайте сложные архитектурные объекты в реальном времени</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Ключевые возможности</h2>
            <p className="text-xl text-slate-600">Всё необходимое для создания профессиональных проектов</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Layers",
                title: "BIM-моделирование",
                description: "Полноценная работа с информационными моделями зданий",
                color: "blue"
              },
              {
                icon: "Workflow",
                title: "Совместная работа",
                description: "Teamwork для эффективного взаимодействия команды",
                color: "green"
              },
              {
                icon: "FileText",
                title: "Документация",
                description: "Автоматическая генерация чертежей и спецификаций",
                color: "purple"
              },
              {
                icon: "Zap",
                title: "Производительность",
                description: "Быстрая работа даже с крупными проектами",
                color: "yellow"
              },
              {
                icon: "Sparkles",
                title: "Визуализация",
                description: "Встроенные инструменты для рендеринга",
                color: "pink"
              },
              {
                icon: "Code",
                title: "GDL & Python",
                description: "Расширяемость через скриптинг и API",
                color: "orange"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition group cursor-pointer">
                <div className={`w-12 h-12 bg-${feature.color}-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                  <Icon name={feature.icon} className={`text-${feature.color}-600`} size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Выберите свою версию</h2>
          <p className="text-xl text-slate-600">Решения для любых задач и бюджетов</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "ARCHICAD Solo",
              price: "От 2 500₽/мес",
              features: ["Базовые инструменты BIM", "Локальная работа", "Техподдержка", "Обновления"]
            },
            {
              name: "ARCHICAD Collaborate",
              price: "От 3 500₽/мес",
              features: ["Всё из Solo", "BIMcloud для команды", "До 20 пользователей", "Приоритетная поддержка"],
              featured: true
            },
            {
              name: "ARCHICAD Enterprise",
              price: "Индивидуально",
              features: ["Всё из Collaborate", "Безлимитные пользователи", "Персональный менеджер", "Кастомизация"]
            }
          ].map((plan, index) => (
            <Card key={index} className={`p-6 ${plan.featured ? 'border-blue-600 border-2 shadow-xl' : ''}`}>
              {plan.featured && (
                <div className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                  Популярный выбор
                </div>
              )}
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-blue-600 mb-6">{plan.price}</div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className={`w-full ${plan.featured ? 'bg-blue-600 hover:bg-blue-700' : ''}`} variant={plan.featured ? 'default' : 'outline'}>
                Выбрать план
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Готовы начать проектировать?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Попробуйте ARCHICAD бесплатно в течение 30 дней. Без ограничений функционала.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Icon name="Download" className="mr-2" size={20} />
              Скачать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Icon name="Phone" className="mr-2" size={20} />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name="Building2" className="text-white" size={16} />
                </div>
                <span className="text-white font-bold">ARCHICAD</span>
              </div>
              <p className="text-sm">Профессиональное BIM-решение для архитекторов</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Продукты</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">ARCHICAD</a></li>
                <li><a href="#" className="hover:text-white transition">BIMcloud</a></li>
                <li><a href="#" className="hover:text-white transition">BIMx</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Ресурсы</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Обучение</a></li>
                <li><a href="#" className="hover:text-white transition">Документация</a></li>
                <li><a href="#" className="hover:text-white transition">Сообщество</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">О нас</a></li>
                <li><a href="#" className="hover:text-white transition">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition">Карьера</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 ARCHICAD. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Archicad;