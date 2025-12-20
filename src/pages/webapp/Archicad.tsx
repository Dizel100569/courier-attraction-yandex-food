import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Archicad = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      <div className="container mx-auto px-4 py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-12 transition">
          <Icon name="ArrowLeft" size={20} />
          Назад к проектам
        </Link>

        <div className="max-w-4xl mx-auto text-center">
          <div className="w-24 h-24 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <Icon name="Building2" className="text-white" size={48} />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            ARCHICAD
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Профессиональное BIM-решение для архитекторов и проектировщиков
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="p-6 bg-white/10 backdrop-blur border-white/20 text-center">
              <Icon name="Layers" className="text-blue-300 mx-auto mb-4" size={36} />
              <h3 className="text-xl font-bold text-white mb-2">3D Моделирование</h3>
              <p className="text-blue-200">Создавайте сложные архитектурные объекты</p>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur border-white/20 text-center">
              <Icon name="Users" className="text-blue-300 mx-auto mb-4" size={36} />
              <h3 className="text-xl font-bold text-white mb-2">Совместная работа</h3>
              <p className="text-blue-200">Работайте в команде над одним проектом</p>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur border-white/20 text-center">
              <Icon name="FileText" className="text-blue-300 mx-auto mb-4" size={36} />
              <h3 className="text-xl font-bold text-white mb-2">Документация</h3>
              <p className="text-blue-200">Автоматическая генерация чертежей</p>
            </Card>
          </div>

          <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-6">
            Узнать больше
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Archicad;
