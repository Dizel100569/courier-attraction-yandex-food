import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="mb-16 border-b pb-6 sticky top-0 bg-muted/60 backdrop-blur-sm z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/yandex-eda" className="flex items-center gap-3 hover:opacity-80 transition">
            <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Bike" className="text-primary-foreground" size={32} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Яндекс Еда</h1>
              <p className="text-sm text-muted-foreground">Официальное трудоустройство</p>
            </div>
          </Link>
          <Link to="/archicad" className="flex items-center gap-3 hover:opacity-80 transition">
            <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center">
              <Icon name="Building2" className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">ARCHICAD</h1>
              <p className="text-sm text-muted-foreground">BIM-решение</p>
            </div>
          </Link>
        </div>
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#benefits" className="text-sm font-medium hover:text-primary transition-colors">Преимущества</a>
          <a href="#calculator" className="text-sm font-medium hover:text-primary transition-colors">Калькулятор</a>
          <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">Вопросы</a>
          <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
        </nav>
        <Button size="lg" className="hidden md:flex items-center gap-2" asChild>
          <a href="tel:88006000111" onClick={() => {
            if (typeof window !== 'undefined' && (window as any).ym) {
              (window as any).ym(105912288, 'reachGoal', 'click_phone');
            }
          }}>
            <Icon name="Phone" size={18} />
            8 800 600-01-11
          </a>
        </Button>
      </div>
    </header>
  );
}