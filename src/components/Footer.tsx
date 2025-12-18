import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="text-center py-12 border-t bg-muted/50 mt-16">
      <div className="container mx-auto space-y-6">
        <div className="flex items-center justify-center gap-3">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <Icon name="Bike" className="text-primary-foreground" size={28} />
          </div>
          <div className="text-left">
            <h3 className="text-xl font-bold">Яндекс Еда</h3>
            <p className="text-sm text-muted-foreground">Официальное трудоустройство</p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex flex-col items-center gap-2">
            <a href="tel:88006000111" className="flex items-center gap-2 text-base font-medium hover:text-primary transition-colors">
              <Icon name="Phone" size={18} />
              8 800 600-01-11
            </a>
            <a href="https://t.me/yandex_eda_courier" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-base font-medium hover:text-primary transition-colors">
              <Icon name="Send" size={18} />
              @yandex_eda_courier
            </a>
          </div>
          <div className="flex justify-center gap-6 text-muted-foreground text-sm">
            <a href="#" className="hover:text-primary transition-colors">О компании</a>
            <a href="#" className="hover:text-primary transition-colors">Вакансии</a>
            <a href="#" className="hover:text-primary transition-colors">Поддержка</a>
            <a href="#" className="hover:text-primary transition-colors">Контакты</a>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <a href="https://www.instagram.com/yandex.eda" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
            <Icon name="Instagram" size={20} />
          </a>
          <a href="https://www.youtube.com/@yandexeda" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
            <Icon name="Youtube" size={20} />
          </a>
          <a href="https://t.me/yandex_eda_courier" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
            <Icon name="Send" size={20} />
          </a>
        </div>
        <p className="text-sm text-muted-foreground">© 2024 Яндекс Еда. Все права защищены.</p>
      </div>
    </footer>
  );
}