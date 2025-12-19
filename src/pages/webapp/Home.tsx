import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Home = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: "yandex-eda",
      title: "Яндекс Еда",
      description: "Сервис доставки еды и продуктов",
      icon: "UtensilsCrossed",
      color: "bg-yellow-500",
      path: "/yandex-eda"
    },
    {
      id: "archicad",
      title: "ARCHICAD",
      description: "BIM-решение для архитекторов",
      icon: "Building2",
      color: "bg-blue-600",
      path: "/archicad"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Мои проекты</h1>
          <p className="text-xl text-slate-400">Выберите проект для просмотра</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card 
              key={project.id}
              className="p-8 bg-white/5 backdrop-blur border-white/10 hover:bg-white/10 transition cursor-pointer group"
              onClick={() => navigate(project.path)}
            >
              <div className={`w-16 h-16 ${project.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition`}>
                <Icon name={project.icon} className="text-white" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-slate-400 mb-6">{project.description}</p>
              <Button className="w-full" variant="outline">
                Открыть проект
                <Icon name="ArrowRight" className="ml-2" size={16} />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;