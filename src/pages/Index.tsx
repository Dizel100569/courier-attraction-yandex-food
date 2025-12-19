import Header from '@/components/Header';
import ApplicationForm from '@/components/ApplicationForm';
import IncomeCalculator from '@/components/IncomeCalculator';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-slate-50">
      <div className="container mx-auto px-4 py-8">
        <Header />
        
        <section className="text-center mb-16 md:mb-24 mt-12">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-primary/10 text-primary font-medium text-sm animate-pulse">
            ⚡ Набор курьеров по всей России
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight animate-fade-in">
            Стань <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-transparent bg-clip-text">курьером</span><br />Яндекс Еды
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Гибкий график, стабильный доход до <strong className="text-foreground">150 000 ₽/месяц</strong> и работа рядом с домом
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-base px-8 shadow-lg" onClick={scrollToForm}>
              Подать заявку
              <Icon name="ArrowRight" className="ml-2" size={18} />
            </Button>
            <Button size="lg" variant="outline" className="text-base" asChild>
              <a href="tel:88006000111">
                <Icon name="Phone" className="mr-2" size={18} />
                8 800 600-01-11
              </a>
            </Button>
          </div>
        </section>

        <section id="benefits" className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Преимущества работы с нами</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border shadow-md hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="CalendarCheck" className="text-primary" size={28} />
                </div>
                <CardTitle className="text-xl">Свободный график</CardTitle>
                <CardDescription className="text-base">
                  Работайте когда удобно: утром, днем, вечером или ночью. Вы сами решаете сколько времени уделять работе
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border shadow-md hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Wallet" className="text-primary" size={28} />
                </div>
                <CardTitle className="text-xl">Высокий доход</CardTitle>
                <CardDescription className="text-base">
                  Зарабатывайте от 80 000 до 150 000 ₽ в месяц. Получайте бонусы за выполненные заказы и чаевые от клиентов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border shadow-md hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="MapPin" className="text-primary" size={28} />
                </div>
                <CardTitle className="text-xl">Работа рядом с домом</CardTitle>
                <CardDescription className="text-base">
                  Выбирайте удобный район и время. Не нужно тратить время на долгую дорогу до работы
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border shadow-md hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="CreditCard" className="text-primary" size={28} />
                </div>
                <CardTitle className="text-xl">Еженедельные выплаты</CardTitle>
                <CardDescription className="text-base">
                  Получайте деньги каждую неделю на карту любого банка. Никаких задержек и комиссий
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border shadow-md hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" className="text-primary" size={28} />
                </div>
                <CardTitle className="text-xl">Официальное оформление</CardTitle>
                <CardDescription className="text-base">
                  Работайте по договору самозанятого или ИП. Все легально и прозрачно
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border shadow-md hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Headphones" className="text-primary" size={28} />
                </div>
                <CardTitle className="text-xl">Поддержка 24/7</CardTitle>
                <CardDescription className="text-base">
                  Наша команда всегда на связи. Поможем решить любой вопрос в любое время суток
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <IncomeCalculator />

        <section className="mb-16 md:mb-24 bg-muted/50 -mx-4 px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Как начать работать</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">
                  1
                </div>
                <h3 className="text-xl font-bold">Оставь заявку</h3>
                <p className="text-muted-foreground">
                  Заполни простую форму на сайте. Это займет всего 2 минуты
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">
                  2
                </div>
                <h3 className="text-xl font-bold">Пройди обучение</h3>
                <p className="text-muted-foreground">
                  Смотри короткое видео о работе с приложением. Это займет 15-20 минут
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">
                  3
                </div>
                <h3 className="text-xl font-bold">Начни зарабатывать</h3>
                <p className="text-muted-foreground">
                  Получай заказы и зарабатывай деньги уже в первый день работы
                </p>
              </div>
            </div>
          </div>
        </section>

        <ApplicationForm />

        <section id="faq" className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'Какие требования к курьерам?',
                answer: 'Вам должно быть не менее 18 лет, иметь смартфон и средство передвижения (велосипед, самокат, машина или пешком). Опыт работы не требуется.'
              },
              {
                question: 'Сколько можно заработать?',
                answer: 'Средний доход курьера составляет 80-150 тысяч рублей в месяц. Итоговая сумма зависит от количества часов работы, района и типа транспорта.'
              },
              {
                question: 'Когда я получу первую выплату?',
                answer: 'Выплаты производятся еженедельно. Первую выплату вы получите через неделю после начала работы на карту любого банка.'
              },
              {
                question: 'Нужно ли покупать термосумку?',
                answer: 'Нет, термосумку мы предоставляем бесплатно после подписания договора. Также вы получите фирменную одежду.'
              },
              {
                question: 'Могу ли я совмещать с основной работой?',
                answer: 'Да, конечно! Многие наши курьеры работают в свободное время. Вы сами выбираете удобный график и количество часов.'
              },
              {
                question: 'Что если я не справлюсь?',
                answer: 'Мы обучим вас всем необходимым навыкам. Служба поддержки работает 24/7 и всегда поможет решить любой вопрос. Большинство курьеров начинают уверенно работать уже в первый день.'
              }
            ].map((item, index) => (
              <Card key={index} className="border shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg flex items-start gap-3">
                    <Icon name="HelpCircle" className="text-primary mt-1 flex-shrink-0" size={24} />
                    <span>{item.question}</span>
                  </CardTitle>
                  <CardDescription className="text-base pl-9">{item.answer}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section id="reviews" className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Отзывы наших курьеров</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Дмитрий',
                role: 'Велокурьер, Москва',
                text: 'Работаю 3 месяца, очень доволен! Зарабатываю около 120к в месяц. График гибкий, могу совмещать с учёбой.',
                rating: 5
              },
              {
                name: 'Анна',
                role: 'Автокурьер, Санкт-Петербург',
                text: 'Отличный вариант для подработки! Выезжаю вечером после основной работы. За 3-4 часа делаю 2-3 тысячи рублей.',
                rating: 5
              },
              {
                name: 'Михаил',
                role: 'Пеший курьер, Казань',
                text: 'Начал работать месяц назад. Удобно работать в своём районе, не нужно далеко ехать. Поддержка реально помогает, если что-то непонятно.',
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="border shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                      <Icon name="User" className="text-muted-foreground" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-base">{review.name}</CardTitle>
                      <CardDescription className="text-sm">{review.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                    ))}
                  </div>
                  <CardDescription className="text-base">"{review.text}"</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center mb-16 bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 -mx-4 px-4 py-16 rounded-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Готов начать зарабатывать?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Заполни заявку прямо сейчас и получи первый заказ уже сегодня!
          </p>
          <Button size="lg" className="text-base px-8 shadow-lg" onClick={scrollToForm}>
            Подать заявку сейчас
            <Icon name="ArrowRight" className="ml-2" size={18} />
          </Button>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
