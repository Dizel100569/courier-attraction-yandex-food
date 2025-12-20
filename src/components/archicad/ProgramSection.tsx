import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function ProgramSection() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-slate-900">
          Программа курса
        </h2>
        <div className="space-y-6">
          {[
            {
              number: 1,
              title: "Введение в Archicad",
              lessons: "5 уроков",
              topics: ["Установка и настройка программы", "Знакомство с интерфейсом", "Основные инструменты и панели", "Навигация в 3D-пространстве"]
            },
            {
              number: 2,
              title: "Построение стен и перекрытий",
              lessons: "6 уроков",
              topics: ["Создание стен различных типов", "Работа с перекрытиями", "Настройка материалов", "Редактирование конструкций"]
            },
            {
              number: 3,
              title: "Окна, двери и лестницы",
              lessons: "7 уроков",
              topics: ["Размещение окон и дверей", "Настройка параметров проёмов", "Создание лестниц", "Работа с библиотекой объектов"]
            },
            {
              number: 4,
              title: "Крыши и навесы",
              lessons: "5 уроков",
              topics: ["Построение простых крыш", "Сложные кровельные конструкции", "Мансардные окна", "Работа с уклонами"]
            },
            {
              number: 5,
              title: "Визуализация проекта",
              lessons: "6 уроков",
              topics: ["Настройка камер и видов", "Освещение сцены", "Применение материалов и текстур", "Создание фотореалистичных рендеров"]
            },
            {
              number: 6,
              title: "Чертежи и документация",
              lessons: "5 уроков",
              topics: ["Создание планов этажей", "Разрезы и фасады", "Размеры и аннотации", "Подготовка к печати"]
            },
            {
              number: 7,
              title: "Итоговый проект",
              lessons: "4 урока",
              topics: ["Разработка комплексного проекта", "Применение всех полученных навыков", "Проверка куратором", "Получение сертификата"]
            }
          ].map((module, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {module.number}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 md:mb-0">{module.title}</h3>
                    <span className="inline-flex items-center text-sm text-blue-600 font-medium">
                      <Icon name="PlayCircle" className="mr-2" size={18} />
                      {module.lessons}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {module.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600">
                        <Icon name="Check" className="text-green-500 flex-shrink-0 mt-1" size={18} />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
