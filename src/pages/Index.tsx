import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [hoursPerDay, setHoursPerDay] = useState([6]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const calculateIncome = () => {
    const avgOrdersPerHour = 2.5;
    const avgPayPerOrder = 450;
    const hours = hoursPerDay[0];
    const daysPerMonth = 22;
    return Math.round(avgOrdersPerHour * avgPayPerOrder * hours * daysPerMonth);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.city) {
      setSubmitted(true);
      setTimeout(() => {
        window.open('https://reg.eda.yandex.ru/?advertisement_campaign=forms_for_agents&user_invite_code=97ea05f4a54f41f59d3b2aafca5efea2&utm_content=blank', '_blank');
      }, 500);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };



  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <header className="mb-16 border-b pb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Bike" className="text-primary-foreground" size={32} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Яндекс Еда</h1>
                <p className="text-sm text-muted-foreground">Официальное трудоустройство</p>
              </div>
            </div>
            <Button size="lg" className="hidden md:flex items-center gap-2" asChild>
              <a href="tel:88006000111">
                <Icon name="Phone" size={18} />
                8 800 600-01-11
              </a>
            </Button>
          </div>
        </header>

        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <Badge variant="outline" className="text-sm px-4 py-2 border-primary text-primary font-semibold">
                  Официальное трудоустройство
                </Badge>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
                Работа курьером в Яндекс Еда
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Официальное трудоустройство с полным социальным пакетом. Стабильный доход от 120 000₽ до 180 000₽ в месяц, свободный график работы и выплаты два раза в неделю.
              </p>
              <div className="grid grid-cols-3 gap-4 py-4">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary">180К₽</div>
                  <div className="text-sm text-muted-foreground mt-1">Максимальный доход</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary">2х</div>
                  <div className="text-sm text-muted-foreground mt-1">Выплаты в неделю</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground mt-1">Поддержка</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="px-8 py-6"
                  asChild
                >
                  <a href="#application-form">
                    Подать заявку
                    <Icon name="ArrowRight" className="ml-2" size={18} />
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-8 py-6"
                  onClick={() => {
                    document.getElementById('benefits')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                >
                  Подробнее об условиях
                </Button>
              </div>
            </div>
            <div className="relative">
              <Card className="overflow-hidden shadow-xl">
                <img 
                  src="https://cdn.poehali.dev/projects/35664f62-058c-4327-a458-46135950c5db/files/f3df6ee4-1773-4cef-a63b-33d9dd96fa7c.jpg" 
                  alt="Курьер доставляет заказы" 
                  className="w-full h-[500px] object-cover"
                />
              </Card>
            </div>
          </div>
        </section>

        <section id="benefits" className="mb-24 bg-muted/30 py-16 -mx-4 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Преимущества работы курьером</h2>
              <p className="text-lg text-muted-foreground">Комфортные условия и стабильный доход</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: 'Clock', title: 'Свободный график', desc: 'Выбирайте удобное время работы. Совмещайте с учёбой или основной работой' },
                { icon: 'Wallet', title: 'Стабильный доход', desc: 'От 120 000₽ до 180 000₽ в месяц. Выплаты два раза в неделю без задержек' },
                { icon: 'Headphones', title: 'Техподдержка 24/7', desc: 'Круглосуточная поддержка курьеров. Быстрое решение любых вопросов' },
                { icon: 'Shield', title: 'Официальное оформление', desc: 'Полный социальный пакет, страхование, соблюдение трудового законодательства' },
                { icon: 'Smartphone', title: 'Удобное приложение', desc: 'Простой интерфейс для управления заказами, статистикой и выплатами' },
                { icon: 'TrendingUp', title: 'Карьерный рост', desc: 'Система рейтингов и бонусов. Возможность стать наставником или менеджером' }
              ].map((benefit, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon name={benefit.icon as any} size={24} className="text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{benefit.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Как начать работать</h2>
            <p className="text-lg text-muted-foreground">Простой процесс трудоустройства за 3 шага</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', icon: 'FileText', title: 'Оставьте заявку', desc: 'Заполните простую форму на сайте. Мы свяжемся с вами в течение 24 часов' },
              { step: '2', icon: 'UserCheck', title: 'Пройдите собеседование', desc: 'Короткая встреча онлайн или в офисе. Расскажем об условиях и ответим на вопросы' },
              { step: '3', icon: 'Rocket', title: 'Начните зарабатывать', desc: 'Получите доступ к приложению и начните принимать заказы уже на следующий день' }
            ].map((step, idx) => (
              <Card key={idx} className="text-center relative overflow-hidden">
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10">{step.step}</div>
                <CardHeader className="pt-8">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                    <Icon name={step.icon as any} size={28} className="text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl mb-3">{step.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{step.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <Card className="border shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="bg-muted/50 p-8">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl font-bold mb-2">Калькулятор дохода</CardTitle>
                <CardDescription className="text-base">Рассчитайте свой потенциальный заработок</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-base font-medium">Количество рабочих часов в день:</span>
                    <Badge variant="secondary" className="text-lg px-4 py-2">{hoursPerDay[0]} ч</Badge>
                  </div>
                  <Slider
                    value={hoursPerDay}
                    onValueChange={setHoursPerDay}
                    min={2}
                    max={12}
                    step={1}
                    className="py-4"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>2 часа</span>
                    <span>12 часов</span>
                  </div>
                </div>
                <div className="bg-background rounded-lg p-8 border-2 border-primary">
                  <div className="text-center space-y-2">
                    <p className="text-muted-foreground text-base">Ваш ежемесячный доход:</p>
                    <p className="text-5xl font-bold text-primary">{calculateIncome().toLocaleString('ru-RU')} ₽</p>
                    <p className="text-sm text-muted-foreground">≈ {Math.round(calculateIncome() / 22).toLocaleString('ru-RU')} ₽ в день</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="bg-card rounded-2xl p-4">
                    <p className="text-sm text-muted-foreground mb-1">Заказов в час</p>
                    <p className="text-3xl font-bold">~2.5</p>
                  </div>
                  <div className="bg-card rounded-2xl p-4">
                    <p className="text-sm text-muted-foreground mb-1">За заказ</p>
                    <p className="text-3xl font-bold">~450₽</p>
                  </div>
                  <div className="bg-card rounded-2xl p-4">
                    <p className="text-sm text-muted-foreground mb-1">Рабочих дней</p>
                    <p className="text-3xl font-bold">22</p>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </section>

        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Отзывы курьеров</h2>
            <p className="text-lg text-muted-foreground">Реальный опыт работы от наших сотрудников</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Алексей', age: '24 года', income: '165 000₽', review: 'Работаю 5 месяцев. Отличный заработок при свободном графике. Успеваю учиться и зарабатывать!', rating: 5 },
              { name: 'Мария', age: '28 лет', income: '142 000₽', review: 'Совмещаю с основной работой по вечерам. За 3-4 часа делаю дополнительные 50к в месяц. Супер!', rating: 5 },
              { name: 'Дмитрий', age: '31 год', income: '178 000₽', review: 'Перешёл с офиса на курьера — лучшее решение. Больше зарабатываю и свободного времени стало больше.', rating: 5 },
              { name: 'Елена', age: '26 лет', income: '155 000₽', review: 'Начинала с самоката, через месяц перешла на авто. Заработок вырос в 2 раза! Команда поддержки всегда помогает.', rating: 5 },
              { name: 'Игорь', age: '29 лет', income: '170 000₽', review: 'Работаю только по выходным, получаю больше чем на основной работе за 5 дней. Очень доволен!', rating: 5 },
              { name: 'Анна', age: '22 года', income: '138 000₽', review: 'Студентка, работаю между парами. Удобное приложение, быстрые выплаты. Рекомендую всем друзьям!', rating: 5 },
              { name: 'Сергей', age: '35 лет', income: '182 000₽', review: 'После увольнения попробовал курьерить — и остался! Зарабатываю больше, никакого начальства, полная свобода.', rating: 5 },
              { name: 'Ольга', age: '30 лет', income: '160 000₽', review: 'Совмещаю с воспитанием ребёнка. Работаю когда удобно, делаю хорошие деньги. Идеальный вариант для мам!', rating: 5 },
              { name: 'Артём', age: '27 лет', income: '175 000₽', review: 'Велосипед, свежий воздух и отличный заработок. За год купил новый байк и накопил на отпуск. Лучше офиса в 100 раз!', rating: 5 }
            ].map((review, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-xl font-semibold text-primary">
                        {review.name[0]}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{review.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{review.age}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="font-semibold">{review.income}</Badge>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="fill-primary text-primary" size={16} />
                    ))}
                  </div>
                  <CardDescription className="text-sm leading-relaxed">{review.review}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section id="application-form" className="mb-24">
          <Card className="max-w-2xl mx-auto border shadow-lg">
            <CardHeader className="text-center bg-muted/30">
              <CardTitle className="text-3xl font-bold mb-2">Форма заявки на трудоустройство</CardTitle>
              <CardDescription className="text-base">Заполните данные и мы свяжемся с вами в течение 24 часов</CardDescription>
            </CardHeader>
            <CardContent className="pt-8">
              {submitted ? (
                <div className="text-center space-y-4 py-8">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-primary">Заявка отправлена!</h3>
                  <p className="text-muted-foreground">Мы свяжемся с тобой в ближайшее время</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">Имя и фамилия *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Иванов Иван"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">Номер телефона *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-sm font-medium">Город проживания *</Label>
                    <Input
                      id="city"
                      name="city"
                      type="text"
                      placeholder="Москва"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="h-11"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full py-6 font-semibold"
                  >
                    Отправить заявку
                    <Icon name="ArrowRight" className="ml-2" size={18} />
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь с <a href="#" className="underline">политикой обработки персональных данных</a>
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </section>

        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Часто задаваемые вопросы</h2>
            <p className="text-lg text-muted-foreground">Ответы на популярные вопросы о работе курьером</p>
          </div>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-3">
            {[
              { q: 'Какие требования для трудоустройства курьером?', a: 'Базовые требования: возраст от 18 лет, гражданство РФ или разрешение на работу, наличие смартфона с доступом в интернет. Опыт работы курьером не требуется — мы обучим всему необходимому.' },
              { q: 'Как быстро можно начать работать после подачи заявки?', a: 'Процесс трудоустройства занимает 2-3 рабочих дня. После одобрения заявки вы проходите онлайн-обучение (1-2 часа), получаете доступ к приложению и можете сразу выходить на заказы.' },
              { q: 'Какой график работы и можно ли его менять?', a: 'График полностью гибкий — вы сами выбираете удобные смены через приложение. Можно работать полный день, несколько часов в день или только по выходным. Минимальных требований по количеству смен нет.' },
              { q: 'Когда и как выплачивается заработная плата?', a: 'Выплаты производятся два раза в неделю (вторник и пятница) автоматически на банковскую карту. Вся статистика заработка доступна в личном кабинете приложения в реальном времени.' },
              { q: 'Нужен ли собственный транспорт для работы курьером?', a: 'Собственный транспорт не обязателен. Мы предоставляем в аренду электросамокаты и велосипеды по льготной цене. Также можно работать пешком в зоне пешеходных доставок или использовать свой транспорт (велосипед, самокат, автомобиль).' },
              { q: 'Какая система оплаты и из чего складывается доход?', a: 'Доход формируется из: базовой ставки за доставку (от 250₽), надбавок за сложность заказа, бонусов за выполнение плана, чаевых от клиентов. Средний заработок при 8-часовом графике составляет 3000-4000₽ в день.' },
              { q: 'Предоставляется ли экипировка и оборудование?', a: 'Да, при трудоустройстве вы получаете: термосумку для доставки, фирменную куртку (сезонную), держатель для смартфона. Вся экипировка предоставляется бесплатно и остается у вас.' },
              { q: 'Есть ли поддержка и помощь во время работы?', a: 'Работает служба поддержки курьеров 24/7. Вы можете обратиться по любому вопросу через чат в приложении или по телефону. Среднее время ответа — 3-5 минут. Также есть наставники, которые помогают новичкам в первые дни работы.' }
            ].map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-lg px-6 bg-card hover:bg-muted/50 transition-colors">
                <AccordionTrigger className="text-base font-medium hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <footer className="text-center py-12 border-t bg-muted/20 mt-16">
          <div className="container mx-auto space-y-6">
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Bike" className="text-primary-foreground" size={28} />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold">Яндекс Еда</h3>
                <p className="text-sm text-muted-foreground">Официальное трудоустройство</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex flex-col items-center gap-2">
                <a href="tel:88006000111" className="flex items-center gap-2 text-base font-medium hover:text-primary transition-colors">
                  <Icon name="Phone" size={18} />
                  8 800 600-01-11
                </a>
                <a href="https://t.me/yandex_eda_courier" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-base font-medium hover:text-primary transition-colors">
                  <Icon name="Send" size={18} />
                  @yandex_eda_courier
                </a>
              </div>
              <div className="flex justify-center gap-6 text-muted-foreground text-sm">
                <a href="#" className="hover:text-primary transition-colors">О компании</a>
                <a href="#" className="hover:text-primary transition-colors">Вакансии</a>
                <a href="#" className="hover:text-primary transition-colors">Поддержка</a>
                <a href="#" className="hover:text-primary transition-colors">Контакты</a>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <a href="https://www.instagram.com/yandex.eda" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="https://www.youtube.com/@yandexeda" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
                <Icon name="Youtube" size={20} />
              </a>
              <a href="https://t.me/yandex_eda_courier" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
                <Icon name="Send" size={20} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 Яндекс Еда. Все права защищены.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}