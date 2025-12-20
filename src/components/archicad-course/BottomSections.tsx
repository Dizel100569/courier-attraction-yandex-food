import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

interface BottomSectionsProps {
  onCTAClick: () => void;
}

export const BottomSections = ({ onCTAClick }: BottomSectionsProps) => {
  return (
    <>
      {/* Author Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-slate-900">
            Автор курса
          </h2>
          <Card className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex-shrink-0">
                <img 
                  src="https://cdn.poehali.dev/files/Снимок экрана 2025-12-19 221939.png" 
                  alt="Ирина Бурцева"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-slate-900">Ирина Бурцева</h3>
                <div className="space-y-3 text-slate-600 text-lg leading-relaxed">
                  <p>
                    Практикующий 3D визуализатор интерьеров. Специалист по программам Archicad и 3D Max в сфере дизайна и архитектуры.
                  </p>
                  <p className="font-medium text-blue-600">
                    Основатель онлайн-школы «Учитель дома»
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
                  <div className="px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium">
                    <Icon name="Award" className="inline mr-2" size={16} />
                    Эксперт Archicad
                  </div>
                  <div className="px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium">
                    <Icon name="Users" className="inline mr-2" size={16} />
                    2500+ учеников
                  </div>
                  <div className="px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium">
                    <Icon name="Star" className="inline mr-2" size={16} />
                    Рейтинг 4.9
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Program Section with Light Background */}
      <section className="container mx-auto px-4 py-12 md:py-16 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.03]"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/35664f62-058c-4327-a458-46135950c5db/files/c53039b8-fab5-4038-b667-849cf83716b8.jpg)'
          }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-slate-900">
            Программа курса
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "Модуль 1: Введение в Archicad",
                lessons: ["Установка и настройка", "Интерфейс программы", "Основные инструменты", "Первый проект"]
              },
              {
                title: "Модуль 2: Создание стен и перекрытий",
                lessons: ["Инструмент Стена", "Многослойные конструкции", "Перекрытия и крыши", "Работа с материалами"]
              },
              {
                title: "Модуль 3: Окна и двери",
                lessons: ["Библиотека элементов", "Настройка параметров", "Создание собственных объектов", "Размещение в проекте"]
              },
              {
                title: "Модуль 4: 3D моделирование",
                lessons: ["3D виды", "Навигация в 3D", "Сложные формы", "Визуализация"]
              },
              {
                title: "Модуль 5: Документация",
                lessons: ["Планы этажей", "Разрезы и фасады", "Размеры и аннотации", "Печать чертежей"]
              },
              {
                title: "Модуль 6: Итоговый проект",
                lessons: ["Создание полноценного проекта", "Оформление документации", "Презентация результата", "Получение сертификата"]
              }
            ].map((module, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <Accordion type="single" collapsible>
                  <AccordionItem value={`module-${index}`} className="border-none">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center gap-4 text-left">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-600 font-bold">{index + 1}</span>
                        </div>
                        <span className="text-lg font-semibold text-slate-900">{module.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <ul className="space-y-2 ml-14">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <li key={lessonIndex} className="flex items-center gap-2 text-slate-600">
                            <Icon name="CheckCircle2" className="text-green-500 flex-shrink-0" size={16} />
                            <span>{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-slate-900">
            Отзывы выпускников
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Анна Петрова",
                role: "Дизайнер интерьеров",
                text: "Отличный курс для начинающих! Всё объясняется понятно и по делу. За 2 месяца я научилась создавать полноценные проекты.",
                rating: 5
              },
              {
                name: "Михаил Иванов",
                role: "Студент архитектурного факультета",
                text: "Курс помог мне освоить Archicad с нуля. Теперь использую его для всех своих учебных проектов. Рекомендую!",
                rating: 5
              },
              {
                name: "Елена Смирнова",
                role: "Начинающий архитектор",
                text: "Ирина - отличный преподаватель! Весь материал структурирован, есть практические задания. Очень довольна результатом.",
                rating: 5
              },
              {
                name: "Дмитрий Козлов",
                role: "Фрилансер",
                text: "После курса начал брать первые заказы. Навыки, полученные здесь, реально работают. Спасибо за качественное обучение!",
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={18} />
                  ))}
                </div>
                <p className="text-slate-600 mb-4 italic">"{review.text}"</p>
                <div>
                  <div className="font-semibold text-slate-900">{review.name}</div>
                  <div className="text-sm text-slate-500">{review.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
            Инвестиция в ваше будущее
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-8 md:mb-12">
            Получите востребованный навык и начните зарабатывать
          </p>
          
          <Card className="p-8 md:p-12 max-w-2xl mx-auto shadow-xl">
            <div className="mb-6">
              <div className="text-5xl md:text-6xl font-bold text-slate-900 mb-2">4 990₽</div>
              <div className="text-slate-500 line-through text-xl">9 990₽</div>
              <div className="inline-block mt-4 px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                Скидка 50% действует до конца недели
              </div>
            </div>
            
            <div className="space-y-3 mb-8 text-left">
              {[
                "8 недель обучения",
                "6 модулей с видеоуроками",
                "Практические задания",
                "Поддержка куратора",
                "Сертификат о прохождении",
                "Доступ к материалам навсегда"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Icon name="CheckCircle2" className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="w-full text-lg py-6 bg-blue-600 hover:bg-blue-700"
              onClick={onCTAClick}
            >
              Записаться на курс со скидкой
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            
            <p className="text-sm text-slate-500 mt-4">
              Безопасная оплата через платежную систему
            </p>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-slate-900">
            Часто задаваемые вопросы
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "Нужен ли опыт работы в программах для 3D-моделирования?",
                answer: "Нет, курс рассчитан на начинающих. Мы начинаем с самых основ и постепенно переходим к более сложным темам."
              },
              {
                question: "Какая версия Archicad используется в курсе?",
                answer: "В курсе используется актуальная версия Archicad. Все основные принципы применимы и к более ранним версиям программы."
              },
              {
                question: "Сколько времени нужно уделять обучению?",
                answer: "Рекомендуем заниматься 3-4 часа в неделю. Вы можете учиться в своем темпе, доступ к материалам не ограничен по времени."
              },
              {
                question: "Что делать, если возникнут вопросы в процессе обучения?",
                answer: "У вас будет доступ к поддержке куратора. Вы сможете задавать вопросы и получать развернутые ответы от экспертов."
              },
              {
                question: "Выдается ли сертификат после окончания курса?",
                answer: "Да, после успешного завершения курса и выполнения итогового проекта вы получите сертификат о прохождении обучения."
              },
              {
                question: "Можно ли вернуть деньги, если курс не подойдет?",
                answer: "Да, у нас есть гарантия возврата денег в течение 14 дней с момента покупки, если вы не удовлетворены качеством обучения."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold text-slate-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-12 md:py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Начните свой путь в 3D-проектировании уже сегодня
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Присоединяйтесь к 2500+ успешных выпускников нашего курса
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-white text-blue-600 hover:bg-blue-50"
            onClick={onCTAClick}
          >
            Записаться на курс
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
          <p className="text-sm text-blue-100 mt-4">
            Старт обучения сразу после оплаты
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2024 Учитель дома. Онлайн-школа профессиональных навыков.
          </p>
          <p className="text-xs mt-2">
            <a href="#" className="hover:text-white transition">Политика конфиденциальности</a>
            {" • "}
            <a href="#" className="hover:text-white transition">Пользовательское соглашение</a>
          </p>
        </div>
      </footer>
    </>
  );
};
