import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const YandexEda = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Стань курьером Яндекс Еды
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto">
            Свободный график, достойный доход и работа рядом с домом
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-yellow-500 hover:bg-yellow-600 text-slate-900"
            >
              Подать заявку
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Свободный график</h3>
              <p className="text-slate-600">Работайте когда удобно вам</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="DollarSign" className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Хороший доход</h3>
              <p className="text-slate-600">Зарабатывайте до 3000₽ в день</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Рядом с домом</h3>
              <p className="text-slate-600">Выбирайте удобный район</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="container mx-auto px-4 py-16 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
            Требования
          </h2>
          <div className="space-y-4">
            {[
              "Возраст от 18 лет",
              "Наличие смартфона",
              "Велосипед, самокат или автомобиль",
              "Готовность к активной работе"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <Icon name="CheckCircle2" className="text-green-600 flex-shrink-0" size={24} />
                <span className="text-lg text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            Начни зарабатывать уже сегодня
          </h2>
          <p className="text-xl text-slate-700 mb-8">
            Заполни анкету и получи первый заказ в течение 24 часов
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-yellow-500 hover:bg-yellow-600 text-slate-900"
          >
            Подать заявку сейчас
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-slate-200 mt-16">
        <p className="text-center text-slate-600">
          © 2024 Яндекс Еда. Работа курьером.
        </p>
      </footer>
    </div>
  );
};

export default YandexEda;
