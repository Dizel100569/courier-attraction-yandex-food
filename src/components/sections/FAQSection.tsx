import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface FAQSectionProps {
  onCTAClick: () => void;
}

const FAQSection = ({ onCTAClick }: FAQSectionProps) => {
  return (
    <>
      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-slate-900">
            Частые вопросы
          </h2>
          <div className="space-y-4">
            {[
              {
                question: "Нужны ли специальные знания для прохождения курса?",
                answer: "Нет, курс разработан для новичков. Мы начинаем с самых основ: установки программы и знакомства с интерфейсом."
              },
              {
                question: "Какая версия Archicad нужна для обучения?",
                answer: "Курс подходит для Archicad версий 22-27. Мы покажем, где скачать пробную версию бесплатно на 30 дней."
              },
              {
                question: "Сколько времени нужно уделять обучению?",
                answer: "Рекомендуем заниматься 3-4 часа в неделю. Вы можете учиться в удобном темпе — доступ к курсу навсегда."
              },
              {
                question: "Выдаётся ли сертификат после обучения?",
                answer: "Да, после успешного прохождения курса и выполнения финального проекта вы получите сертификат о прохождении обучения."
              },
              {
                question: "Можно ли задавать вопросы во время обучения?",
                answer: "Конечно! У вас будет доступ к куратору, который ответит на все ваши вопросы и поможет разобраться в сложных моментах."
              },
              {
                question: "Что если мне не понравится курс?",
                answer: "У вас есть 7 дней с момента покупки, чтобы вернуть деньги, если курс вам не подойдёт. Мы вернём 100% стоимости."
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-md transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <h3 className="text-lg font-semibold mb-3 text-slate-900 flex items-start gap-3">
                  <Icon name="HelpCircle" className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  {item.question}
                </h3>
                <p className="text-slate-600 pl-8">{item.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/35664f62-058c-4327-a458-46135950c5db/files/8c444f19-5037-4c77-99c1-8c00cb2eea47.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 to-slate-900/85" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Начните карьеру в архитектуре и дизайне
            </h2>
            <p className="text-lg mb-8 text-blue-50">
              Получите востребованную профессию и начните работать над реальными проектами уже через месяц обучения
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-white text-blue-600 hover:bg-blue-50 shadow-xl"
              onClick={onCTAClick}
            >
              Записаться на курс
              <Icon name="Sparkles" className="ml-2" size={20} />
            </Button>
            <p className="text-sm mt-6 text-blue-100">
              Оплата безопасна • Гарантия возврата денег
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-slate-200">
        <p className="text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Курс Archicad. Все права защищены.
        </p>
      </footer>
    </>
  );
};

export default FAQSection;
