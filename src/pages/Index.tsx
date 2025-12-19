import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
              🚀 Начни зарабатывать уже сегодня
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              Стань курьером<br />Яндекс Еды
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
              Свободный график, стабильный доход до 150 000 ₽ в месяц и работа рядом с домом
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button 
                size="lg" 
                className="text-xl px-10 py-8 bg-white text-orange-600 hover:bg-gray-100 font-bold shadow-2xl"
              >
                Подать заявку
                <Icon name="ArrowRight" className="ml-2" size={24} />
              </Button>
              <div className="text-base text-white/90">
                ⚡ Регистрация за 5 минут
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-yellow-50 to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12 -mt-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: "150 000 ₽", label: "Средний доход в месяц", icon: "TrendingUp" },
              { number: "15 000+", label: "Активных курьеров", icon: "Users" },
              { number: "24/7", label: "Поддержка курьеров", icon: "Headphones" },
              { number: "200+", label: "Городов России", icon: "MapPin" }
            ].map((stat, index) => (
              <Card key={index} className="p-6 text-center bg-white shadow-lg hover:shadow-xl transition-shadow">
                <Icon name={stat.icon} className="mx-auto mb-3 text-orange-500" size={40} />
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-slate-900">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Icon name="Clock" className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 text-center">Свободный график</h3>
              <p className="text-slate-600 text-center text-lg">Работайте когда хотите: утром, днём, вечером или ночью. Сами решаете сколько зарабатывать</p>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Icon name="Wallet" className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 text-center">Высокий доход</h3>
              <p className="text-slate-600 text-center text-lg">До 3 000 ₽ в день + бонусы и чаевые. Еженедельные выплаты на карту любого банка</p>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Icon name="MapPin" className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 text-center">Рядом с домом</h3>
              <p className="text-slate-600 text-center text-lg">Выбирайте удобный район для работы. Не нужно ехать через весь город</p>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-slate-900">
              Как начать работать
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Подайте заявку",
                  description: "Заполните простую форму онлайн за 5 минут. Никаких сложных документов",
                  icon: "FileText"
                },
                {
                  step: "2",
                  title: "Пройдите обучение",
                  description: "Онлайн-курс займёт 30 минут. Узнаете как работать с приложением и получать заказы",
                  icon: "GraduationCap"
                },
                {
                  step: "3",
                  title: "Начните зарабатывать",
                  description: "Получите первый заказ в тот же день. Деньги выводите когда удобно",
                  icon: "Rocket"
                }
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mb-6 shadow-xl">
                      <Icon name={item.icon} className="text-white" size={40} />
                    </div>
                    <div className="absolute top-0 -right-8 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-2xl text-white shadow-lg hidden md:block">
                      {item.step}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h3>
                    <p className="text-slate-600 text-lg">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-slate-900">
            Требования к курьерам
          </h2>
          <Card className="p-10 bg-gradient-to-br from-white to-orange-50">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: "User", text: "Возраст от 18 лет" },
                { icon: "Smartphone", text: "Смартфон с интернетом" },
                { icon: "Bike", text: "Велосипед, самокат, машина или пешком" },
                { icon: "Shield", text: "Официальное трудоустройство" },
                { icon: "CreditCard", text: "Банковская карта для выплат" },
                { icon: "Heart", text: "Ответственность и пунктуальность" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} className="text-white" size={24} />
                  </div>
                  <span className="text-lg text-slate-800 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-slate-900">
              Частые вопросы
            </h2>
            <div className="space-y-6">
              {[
                {
                  question: "Сколько можно заработать?",
                  answer: "В среднем курьеры зарабатывают 100-150 тысяч рублей в месяц. Доход зависит от количества часов работы и города. За смену 8-10 часов можно заработать 2500-3500 рублей."
                },
                {
                  question: "Как часто нужно работать?",
                  answer: "Вы сами решаете когда и сколько работать. Можете выходить на смены каждый день или пару раз в неделю. Минимальных требований по часам нет."
                },
                {
                  question: "Когда приходят выплаты?",
                  answer: "Деньги можно выводить каждую неделю на карту любого банка. Выплаты приходят в течение 1-2 рабочих дней."
                },
                {
                  question: "Нужен ли опыт работы?",
                  answer: "Опыт не требуется. Мы обучим всему необходимому за 30 минут. Вы узнаете как работать с приложением, принимать заказы и общаться с клиентами."
                },
                {
                  question: "Какой транспорт подходит?",
                  answer: "Подойдёт велосипед, электросамокат, скутер, мотоцикл или автомобиль. Можно работать даже пешком в центре города."
                },
                {
                  question: "Что если не получится?",
                  answer: "Вы можете прекратить работу в любой момент без объяснения причин. Никаких штрафов или обязательств."
                }
              ].map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-slate-900 flex items-center gap-3">
                    <Icon name="HelpCircle" className="text-orange-500" size={24} />
                    {item.question}
                  </h3>
                  <p className="text-slate-600 text-lg pl-9">{item.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Начни зарабатывать уже сегодня
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-white/90">
              Заполни анкету за 5 минут и получи первый заказ в течение 24 часов
            </p>
            <Button 
              size="lg" 
              className="text-xl px-12 py-8 bg-white text-orange-600 hover:bg-gray-100 font-bold shadow-2xl"
            >
              Подать заявку сейчас
              <Icon name="ArrowRight" className="ml-3" size={24} />
            </Button>
            <p className="mt-6 text-white/80">
              ✓ Без скрытых платежей &nbsp;&nbsp; ✓ Поддержка 24/7 &nbsp;&nbsp; ✓ Выплаты каждую неделю
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Яндекс Еда</h3>
              <p className="text-slate-400">Стань частью команды курьеров</p>
            </div>
            <div className="border-t border-slate-700 pt-6">
              <p className="text-slate-400">© 2024 Яндекс Еда. Работа курьером. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;