import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: ''
  });
  const [submitted, setSubmitted] = useState(false);

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
  );
}
