import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface PricingCTASectionProps {
  onCTAClick: () => void;
}

export default function PricingCTASection({ onCTAClick }: PricingCTASectionProps) {
  return (
    <>
      <section className="container mx-auto px-4 py-12 md:py-16 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 text-slate-900">
            Стоимость обучения
          </h2>
          <p className="text-center text-slate-600 mb-12 text-lg">
            Выберите удобный формат обучения
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 hover:shadow-2xl transition-all border-2">
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-1 bg-slate-100 rounded-full text-slate-700 text-sm font-medium mb-4">
                  Самостоятельное обучение
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Базовый</h3>
                <div className="flex items-baseline justify-center gap-2 mb-4">
                  <span className="text-5xl font-bold text-slate-900">4 990₽</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Доступ ко всем видеоурокам",
                  "Практические задания",
                  "Файлы проектов для практики",
                  "Доступ навсегда",
                  "Сертификат о прохождении"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Icon name="Check" className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full text-lg py-6"
                variant="outline"
                onClick={onCTAClick}
              >
                Выбрать тариф
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  Рекомендуем
                </span>
              </div>
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-1 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-4">
                  С поддержкой куратора
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Премиум</h3>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">9 990₽</span>
                </div>
                <div className="text-slate-500 line-through text-sm mb-4">14 990₽</div>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Всё из тарифа Базовый",
                  "Персональный куратор",
                  "Проверка домашних заданий",
                  "Ответы на вопросы в чате",
                  "Разбор ошибок и рекомендации",
                  "Помощь с итоговым проектом",
                  "Именной сертификат"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Icon name="Check" className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-600 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full text-lg py-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                onClick={onCTAClick}
              >
                Выбрать тариф
              </Button>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">
              <Icon name="Shield" className="inline mr-2" size={20} />
              Гарантия возврата денег в течение 14 дней
            </p>
            <p className="text-sm text-slate-500">
              Возможна оплата частями • Все цены указаны с учётом НДС
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Начните карьеру в архитектуре сегодня
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к 2500+ выпускникам, которые уже освоили Archicad и работают в ведущих компаниях
          </p>
          <Button 
            size="lg"
            className="text-lg px-8 py-6 bg-white text-blue-700 hover:bg-blue-50"
            onClick={onCTAClick}
          >
            Записаться на курс сейчас
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
          <p className="text-sm text-blue-200 mt-6">
            Старт обучения сразу после оплаты • Доступ навсегда
          </p>
        </div>
      </section>
    </>
  );
}
