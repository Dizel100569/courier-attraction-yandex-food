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
    <section id="calculator" className="mb-24">
      <Card className="border shadow-lg overflow-hidden max-w-4xl mx-auto">
        <div className="bg-muted/50 p-8">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-3xl font-bold mb-2">Калькулятор дохода</CardTitle>
            <CardDescription className="text-base">Рассчитайте свой потенциальный заработок</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={courierImages[courierType]} 
                  alt={`${courierType === 'walking' ? 'Пеший курьер' : courierType === 'bike' ? 'Велокурьер' : 'Автокурьер'}`}
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <p className="text-base font-medium text-center mb-4">Выберите тип курьера:</p>
              <div className="grid grid-cols-3 gap-3">
                <Button
                  variant={courierType === 'walking' ? 'default' : 'outline'}
                  className="flex flex-col items-center gap-2 h-auto py-4"
                  onClick={() => setCourierType('walking')}
                >
                  <Icon name="PersonStanding" size={32} />
                  <span className="text-sm font-medium">Пеший</span>
                </Button>
                <Button
                  variant={courierType === 'bike' ? 'default' : 'outline'}
                  className="flex flex-col items-center gap-2 h-auto py-4"
                  onClick={() => setCourierType('bike')}
                >
                  <Icon name="Bike" size={32} />
                  <span className="text-sm font-medium">Велокурьер</span>
                </Button>
                <Button
                  variant={courierType === 'car' ? 'default' : 'outline'}
                  className="flex flex-col items-center gap-2 h-auto py-4"
                  onClick={() => setCourierType('car')}
                >
                  <Icon name="Car" size={32} />
                  <span className="text-sm font-medium">Автокурьер</span>
                </Button>
              </div>
            </div>
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
                <p className="text-3xl font-bold">~{courierType === 'walking' ? '2' : courierType === 'bike' ? '3' : '4'}</p>
              </div>
              <div className="bg-card rounded-2xl p-4">
                <p className="text-sm text-muted-foreground mb-1">За заказ</p>
                <p className="text-3xl font-bold">~{courierType === 'walking' ? '400' : courierType === 'bike' ? '550' : '700'}₽</p>
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
  );
}