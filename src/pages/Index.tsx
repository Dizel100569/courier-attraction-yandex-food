import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import IncomeCalculator from '@/components/IncomeCalculator';
import ApplicationForm from '@/components/ApplicationForm';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <div className="w-full px-4 py-6">
        <Header />

        <section className="mb-24 relative overflow-hidden rounded-3xl" style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/35664f62-058c-4327-a458-46135950c5db/files/ce3d2191-4ffd-4696-a4a3-61fcd84624f4.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          filter: 'contrast(1.2) saturate(1.3) brightness(1.1)'
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/75 via-foreground/65 to-transparent"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center py-16 px-8">
            <div className="space-y-8">
              <div className="inline-block">
                <Badge variant="outline" className="text-sm px-4 py-2 border-foreground text-foreground font-semibold bg-background/95">
                  Официальное трудоустройство
                </Badge>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-background">
                Работа курьером в Яндекс Еда
              </h2>
              <p className="text-lg text-background/90 leading-relaxed">
                Официальное трудоустройство с полным социальным пакетом. Стабильный доход от 120 000₽ до 275 000₽ в месяц, свободный график работы и выплаты два раза в неделю.
              </p>
              <div className="grid grid-cols-3 gap-4 py-4">
                <div className="text-center p-4 bg-background/95 backdrop-blur-md rounded-lg shadow-lg">
                  <div className="text-3xl font-bold text-primary">275К₽</div>
                  <div className="text-sm text-foreground mt-1">Максимальный доход</div>
                </div>
                <div className="text-center p-4 bg-background/95 backdrop-blur-md rounded-lg shadow-lg">
                  <div className="text-3xl font-bold text-primary">2х</div>
                  <div className="text-sm text-foreground mt-1">Выплаты в неделю</div>
                </div>
                <div className="text-center p-4 bg-background/95 backdrop-blur-md rounded-lg shadow-lg">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-foreground mt-1">Поддержка</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="px-8 py-6 text-foreground"
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
            <div className="relative lg:block hidden">
            </div>
          </div>
        </section>

        <section id="benefits" className="mb-24 bg-[#FFD700] py-16 -mx-4 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Преимущества работы курьером</h2>
                <p className="text-lg text-muted-foreground">Комфортные условия и стабильный доход</p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://cdn.poehali.dev/projects/35664f62-058c-4327-a458-46135950c5db/files/1db65878-d029-43a4-8b26-6c414c994d1c.jpg" 
                  alt="Мобильное приложение для курьеров" 
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: 'Clock', title: 'Свободный график', desc: 'Выбирайте удобное время работы. Совмещайте с учёбой или основной работой' },
                { icon: 'Wallet', title: 'Стабильный доход', desc: 'От 120 000₽ до 275 000₽ в месяц. Выплаты два раза в неделю без задержек' },
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

        <IncomeCalculator />

        <section id="reviews" className="mb-24 bg-[#FFD700] py-16 -mx-4 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Отзывы курьеров</h2>
              <p className="text-lg text-muted-foreground">Реальный опыт работы от наших сотрудников</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Алексей', age: '24 года', income: '215 000₽', review: 'Работаю 5 месяцев. Отличный заработок при свободном графике. Успеваю учиться и зарабатывать!', rating: 5, photo: 'https://cdn.poehali.dev/projects/35664f62-058c-4327-a458-46135950c5db/files/550e6c73-8013-44fb-8ac2-71e32b05ac18.jpg' },
              { name: 'Мария', age: '28 лет', income: '192 000₽', review: 'Совмещаю с основной работой по вечерам. За 3-4 часа делаю дополнительные 50к в месяц. Супер!', rating: 5, photo: 'https://cdn.poehali.dev/projects/35664f62-058c-4327-a458-46135950c5db/files/718dbe92-f7f7-429b-8fa7-ad8a7e8586ca.jpg' },
              { name: 'Дмитрий', age: '31 год', income: '268 000₽', review: 'Перешёл с офиса на курьера — лучшее решение. Больше зарабатываю и свободного времени стало больше.', rating: 5, photo: 'https://cdn.poehali.dev/projects/35664f62-058c-4327-a458-46135950c5db/files/1b802a22-7b32-40e1-b363-b0cc86da8d8e.jpg' },
              { name: 'Елена', age: '26 лет', income: '225 000₽', review: 'Начинала с самоката, через месяц перешла на авто. Заработок вырос в 2 раза! Команда поддержки всегда помогает.', rating: 5, photo: 'https://cdn.poehali.dev/projects/35664f62-058c-4327-a458-46135950c5db/files/8adefab7-97ea-4b62-a22b-8a6c2c953584.jpg' },
              { name: 'Игорь', age: '29 лет', income: '240 000₽', review: 'Работаю только по выходным, получаю больше чем на основной работе за 5 дней. Очень доволен!', rating: 5, photo: 'https://cdn.poehali.dev/projects/35664f62-058c-4327-a458-46135950c5db/files/dd3a43d9-268f-4d8f-9709-95e32099eef0.jpg' },
              { name: 'Анна', age: '22 года', income: '178 000₽', review: 'Студентка, работаю между парами. Удобное приложение, быстрые выплаты. Рекомендую всем друзьям!', rating: 5, photo: 'https://cdn.poehali.dev/projects/35664f62-058c-4327-a458-46135950c5db/files/2ca4df53-2aa2-4dcc-8aa7-0e3f2c2175de.jpg' },
              { name: 'Сергей', age: '35 лет', income: '275 000₽', review: 'После увольнения попробовал курьерить — и остался! Зарабатываю больше, никакого начальства, полная свобода.', rating: 5, photo: 'https://cdn.poehali.dev/projects/35664f62-058c-4327-a458-46135950c5db/files/1cd63c51-c542-49da-ac81-691d82ae8d85.jpg' },
              { name: 'Ольга', age: '30 лет', income: '205 000₽', review: 'Совмещаю с воспитанием ребёнка. Работаю когда удобно, делаю хорошие деньги. Идеальный вариант для мам!', rating: 5, photo: 'https://cdn.poehali.dev/projects/35664f62-058c-4327-a458-46135950c5db/files/0d2d41ba-72cc-4c4c-907a-5b409fc74842.jpg' },
              { name: 'Артём', age: '27 лет', income: '235 000₽', review: 'Велосипед, свежий воздух и отличный заработок. За год купил новый байк и накопил на отпуск. Лучше офиса в 100 раз!', rating: 5, photo: 'https://cdn.poehali.dev/projects/35664f62-058c-4327-a458-46135950c5db/files/5d2f0204-3bf0-4e98-85be-17647b5427ed.jpg' }
            ].map((review, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex gap-3">
                      {review.photo ? (
                        <img src={review.photo} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                      ) : (
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-xl font-semibold text-primary">
                          {review.name[0]}
                        </div>
                      )}
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
          </div>
        </section>

        <ApplicationForm />

        <section className="mb-24 relative overflow-hidden rounded-3xl" style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/35664f62-058c-4327-a458-46135950c5db/files/dbc08166-0543-4c7e-882d-bc167ef3a63d.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          filter: 'contrast(1.2) saturate(1.3) brightness(1.1)'
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/60 to-foreground/70"></div>
          <div className="relative z-10 py-32 px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-background">Присоединяйся к команде</h2>
            <p className="text-xl text-background/90 mb-8 max-w-2xl mx-auto">Тысячи курьеров уже работают с нами и зарабатывают на своих условиях</p>
            <Button size="lg" className="px-12 py-6 text-lg text-foreground" asChild>
              <a href="#application-form">
                Стать курьером
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </a>
            </Button>
          </div>
        </section>

        <section id="faq" className="mb-24 bg-[#FFD700] py-16 -mx-4 px-4">
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

        <Footer />
      </div>
    </div>
  );
}