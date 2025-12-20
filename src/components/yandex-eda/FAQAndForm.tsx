import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ApplicationForm from '@/components/ApplicationForm';

export const FAQAndForm = () => {
  return (
    <>
      <section id="faq" className="mb-16 md:mb-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-foreground">Часто задаваемые вопросы</h2>
            <p className="text-base md:text-lg text-muted-foreground">Ответы на популярные вопросы</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'Какие требования к курьерам?',
                a: 'Возраст от 18 лет, наличие смартфона и желание работать. Для курьеров на авто — водительские права и автомобиль в исправном состоянии.'
              },
              {
                q: 'Как часто происходят выплаты?',
                a: 'Выплаты производятся два раза в неделю на банковскую карту. График выплат вы можете выбрать в приложении.'
              },
              {
                q: 'Нужно ли покупать специальную форму?',
                a: 'Нет, форму предоставляет компания. Вы получите фирменную одежду и термосумку бесплатно после оформления.'
              },
              {
                q: 'Можно ли совмещать с другой работой?',
                a: 'Да, абсолютно. Вы сами выбираете, когда и сколько работать. Многие наши курьеры совмещают доставку с учёбой или основной работой.'
              },
              {
                q: 'Что делать при проблемах с заказом?',
                a: 'В приложении есть кнопка связи с поддержкой. Оператор поможет решить любую ситуацию в режиме реального времени.'
              }
            ].map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold">{faq.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="application-form" className="mb-16 md:mb-24">
        <ApplicationForm />
      </section>
    </>
  );
};
