import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export const BenefitsAndSteps = () => {
  return (
    <>
      <section id="benefits" className="mb-16 md:mb-24 bg-[#FFD700] py-8 md:py-16 -mx-4 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center mb-8 md:mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-foreground">Преимущества работы курьером</h2>
              <p className="text-base md:text-lg text-muted-foreground">Комфортные условия и стабильный доход</p>
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
                  <div className={`${benefit.icon === 'Clock' ? 'w-16 h-12 rounded-full bg-[#FFD700]' : 'w-12 h-12 rounded-lg bg-primary/10'} flex items-center justify-center mb-4`}>
                    <Icon name={benefit.icon as any} size={24} className={benefit.icon === 'Clock' ? 'text-slate-800' : 'text-primary'} />
                  </div>
                  <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{benefit.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="mb-16 md:mb-24">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-foreground">Как начать работать</h2>
          <p className="text-base md:text-lg text-muted-foreground">Простой процесс трудоустройства за 3 шага</p>
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
    </>
  );
};