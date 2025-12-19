import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

export default function IncomeCalculator() {
  const [hoursPerDay, setHoursPerDay] = useState([6]);
  const [courierType, setCourierType] = useState<'walking' | 'bike' | 'car'>('bike');

  const courierImages = {
    walking: 'https://cdn.poehali.dev/projects/35664f62-058c-4327-a458-46135950c5db/files/666ceae2-b39b-404c-a7c2-6dc5b477b594.jpg',
    bike: 'https://cdn.poehali.dev/projects/35664f62-058c-4327-a458-46135950c5db/files/06866e70-b558-47cf-b01e-35181071bf93.jpg',
    car: 'https://cdn.poehali.dev/projects/35664f62-058c-4327-a458-46135950c5db/files/334f7b5f-1000-4aed-b0e8-0d2cd6b3c152.jpg'
  };

  const calculateIncome = () => {
    const courierRates = {
      walking: { ordersPerHour: 2, payPerOrder: 400 },
      bike: { ordersPerHour: 3, payPerOrder: 550 },
      car: { ordersPerHour: 4, payPerOrder: 700 }
    };
    
    const rate = courierRates[courierType];
    const hours = hoursPerDay[0];
    const daysPerMonth = 22;
    return Math.round(rate.ordersPerHour * rate.payPerOrder * hours * daysPerMonth);
  };

  return (
    <section id="calculator" className="mb-16 md:mb-24">
      <Card className="border shadow-lg overflow-hidden max-w-4xl mx-auto">
        <div className="bg-muted/50 p-4 md:p-8">
          <CardHeader className="text-center pb-4 md:pb-6">
            <CardTitle className="text-2xl md:text-3xl font-bold mb-2">Калькулятор дохода</CardTitle>
            <CardDescription className="text-sm md:text-base">Рассчитайте свой потенциальный заработок</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <p className="text-sm md:text-base font-medium text-center mb-3 md:mb-4">Выберите тип курьера:</p>
              <div className="grid grid-cols-3 gap-2 md:gap-4">
                <div 
                  onClick={() => {
                    setCourierType('walking');
                    if (typeof window !== 'undefined' && (window as any).ym) {
                      (window as any).ym(105912288, 'reachGoal', 'use_calculator');
                    }
                  }}
                  className={`cursor-pointer rounded-xl overflow-hidden transition-all ${courierType === 'walking' ? 'ring-4 ring-primary shadow-xl' : 'opacity-70 hover:opacity-100'}`}
                >
                  <img 
                    src={courierImages.walking} 
                    alt="Пеший курьер"
                    className="w-full h-[120px] md:h-[200px] object-cover"
                  />
                  <div className={`p-1.5 md:p-3 text-center font-semibold ${courierType === 'walking' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                    <Icon name="PersonStanding" size={18} className="mx-auto mb-0.5 md:hidden" />
                    <Icon name="PersonStanding" size={24} className="mx-auto mb-1 hidden md:block" />
                    <div className="text-[10px] leading-tight md:text-sm">Пеший</div>
                  </div>
                </div>
                <div 
                  onClick={() => {
                    setCourierType('bike');
                    if (typeof window !== 'undefined' && (window as any).ym) {
                      (window as any).ym(105912288, 'reachGoal', 'use_calculator');
                    }
                  }}
                  className={`cursor-pointer rounded-xl overflow-hidden transition-all ${courierType === 'bike' ? 'ring-4 ring-primary shadow-xl' : 'opacity-70 hover:opacity-100'}`}
                >
                  <img 
                    src={courierImages.bike} 
                    alt="Велокурьер"
                    className="w-full h-[120px] md:h-[200px] object-cover"
                  />
                  <div className={`p-1.5 md:p-3 text-center font-semibold ${courierType === 'bike' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                    <Icon name="Bike" size={18} className="mx-auto mb-0.5 md:hidden" />
                    <Icon name="Bike" size={24} className="mx-auto mb-1 hidden md:block" />
                    <div className="text-[10px] leading-tight md:text-sm">Велокурьер</div>
                  </div>
                </div>
                <div 
                  onClick={() => {
                    setCourierType('car');
                    if (typeof window !== 'undefined' && (window as any).ym) {
                      (window as any).ym(105912288, 'reachGoal', 'use_calculator');
                    }
                  }}
                  className={`cursor-pointer rounded-xl overflow-hidden transition-all ${courierType === 'car' ? 'ring-4 ring-primary shadow-xl' : 'opacity-70 hover:opacity-100'}`}
                >
                  <img 
                    src={courierImages.car} 
                    alt="Автокурьер"
                    className="w-full h-[120px] md:h-[200px] object-cover"
                  />
                  <div className={`p-1.5 md:p-3 text-center font-semibold ${courierType === 'car' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                    <Icon name="Car" size={18} className="mx-auto mb-0.5 md:hidden" />
                    <Icon name="Car" size={24} className="mx-auto mb-1 hidden md:block" />
                    <div className="text-[10px] leading-tight md:text-sm">Автокурьер</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-3 md:space-y-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <span className="text-sm md:text-base font-medium">Количество рабочих часов в день:</span>
                <Badge variant="secondary" className="text-base md:text-lg px-3 md:px-4 py-1.5 md:py-2">{hoursPerDay[0]} ч</Badge>
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
            <div className="bg-background rounded-lg p-4 md:p-8 border-2 border-primary">
              <div className="text-center space-y-1 md:space-y-2">
                <p className="text-muted-foreground text-sm md:text-base">Ваш ежемесячный доход:</p>
                <p className="text-3xl md:text-5xl font-bold text-primary">{calculateIncome().toLocaleString('ru-RU')} ₽</p>
                <p className="text-xs md:text-sm text-muted-foreground">≈ {Math.round(calculateIncome() / 22).toLocaleString('ru-RU')} ₽ в день</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 md:gap-4 text-center">
              <div className="bg-card rounded-xl md:rounded-2xl p-2 md:p-4">
                <p className="text-xs md:text-sm text-muted-foreground mb-1">Заказов в час</p>
                <p className="text-xl md:text-3xl font-bold">~{courierType === 'walking' ? '2' : courierType === 'bike' ? '3' : '4'}</p>
              </div>
              <div className="bg-card rounded-xl md:rounded-2xl p-2 md:p-4">
                <p className="text-xs md:text-sm text-muted-foreground mb-1">За заказ</p>
                <p className="text-xl md:text-3xl font-bold">~{courierType === 'walking' ? '400' : courierType === 'bike' ? '550' : '700'}₽</p>
              </div>
              <div className="bg-card rounded-xl md:rounded-2xl p-2 md:p-4">
                <p className="text-xs md:text-sm text-muted-foreground mb-1">Рабочих дней</p>
                <p className="text-xl md:text-3xl font-bold">22</p>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </section>
  );
}