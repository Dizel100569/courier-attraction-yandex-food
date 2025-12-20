import { Card, CardHeader, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import IncomeCalculator from '@/components/IncomeCalculator';

export const CalculatorAndReviews = () => {
  return (
    <>
      <section id="calculator" className="mb-16 md:mb-24">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-foreground">Рассчитайте свой доход</h2>
          <p className="text-base md:text-lg text-muted-foreground">Узнайте, сколько вы сможете зарабатывать</p>
        </div>
        <IncomeCalculator />
      </section>

      <section id="reviews" className="mb-16 md:mb-24">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-foreground">Отзывы курьеров</h2>
          <p className="text-base md:text-lg text-muted-foreground">Реальный опыт наших партнёров</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              name: 'Александр', 
              role: 'Курьер на авто', 
              period: '8 месяцев работы',
              text: 'Работаю курьером уже полгода. График удобный, доход стабильный. Особенно нравится поддержка — всегда помогут решить любой вопрос быстро.',
              rating: 5
            },
            { 
              name: 'Мария', 
              role: 'Курьер на велосипеде', 
              period: '1 год работы',
              text: 'Совмещаю работу с учёбой. Выбираю удобные часы и зарабатываю на все свои нужды. Приложение простое, заказов всегда достаточно.',
              rating: 5
            },
            { 
              name: 'Дмитрий', 
              role: 'Курьер пеший', 
              period: '3 месяца работы',
              text: 'Решил попробовать после увольнения. Не пожалел! Доход даже выше, чем на прошлой работе. Плюс свобода действий и никакого офиса.',
              rating: 5
            }
          ].map((review, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-semibold text-lg">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.role}</div>
                    <div className="text-xs text-muted-foreground mt-1">{review.period}</div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};
