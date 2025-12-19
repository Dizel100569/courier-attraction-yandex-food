import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const projects = [
    {
      id: 'yandex-eda',
      title: 'Яндекс Еда',
      description: 'Работа курьером с официальным трудоустройством',
      icon: 'Truck',
      color: 'from-yellow-400 to-orange-500',
      path: '/yandex-eda',
      stats: ['120К-275К₽', 'Свободный график', '24/7 поддержка']
    },
    {
      id: 'archicad',
      title: 'Курс по ArchiCAD',
      description: 'Профессиональное обучение 3D моделированию',
      icon: 'Box',
      color: 'from-blue-400 to-cyan-500',
      path: '/archicad',
      stats: ['От новичка до профи', 'Сертификат', 'Практика']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
              <Icon name="Rocket" size={32} className="text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Поехали!
          </h1>
          <p className="text-xl text-slate-300">
            Выберите проект
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id}
              className="group hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border-2 hover:border-primary"
              onClick={() => navigate(project.path)}
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon name={project.icon as any} size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stats.map((stat, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 text-sm bg-secondary rounded-full text-secondary-foreground"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Открыть проект
                  <Icon name="ArrowRight" className="ml-2" size={18} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
