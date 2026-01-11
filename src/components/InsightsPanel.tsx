import { Lightbulb, TrendingUp, AlertTriangle, Star } from 'lucide-react';

const insights = [
  {
    icon: Star,
    title: 'Недооценённый талант',
    description: 'Уильям Салиба куплен за €30M при оценке €90M — потенциал роста 200%',
    type: 'opportunity',
  },
  {
    icon: TrendingUp,
    title: 'Растущий рынок',
    description: 'Молодые полузащитники (U23) показывают рост стоимости +45% за сезон',
    type: 'trend',
  },
  {
    icon: AlertTriangle,
    title: 'Риск переоценки',
    description: 'Игроки 30+ в среднем продаются на 35% ниже оценки Transfermarkt',
    type: 'warning',
  },
  {
    icon: Lightbulb,
    title: 'Рыночная возможность',
    description: 'Бундеслига предлагает лучшее соотношение цена/качество для защитников',
    type: 'insight',
  },
];

const InsightsPanel = () => {
  const getIconColor = (type: string) => {
    switch (type) {
      case 'opportunity':
        return 'text-primary bg-primary/10';
      case 'trend':
        return 'text-accent bg-accent/10';
      case 'warning':
        return 'text-warning bg-warning/10';
      default:
        return 'text-muted-foreground bg-muted';
    }
  };

  return (
    <div className="glass-card p-6">
      <h3 className="text-lg font-semibold mb-1">Аналитические инсайты</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Ключевые наблюдения и рекомендации
      </p>
      
      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer group"
          >
            <div className={`p-2 rounded-lg ${getIconColor(insight.type)}`}>
              <insight.icon className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-medium mb-1 group-hover:text-primary transition-colors">
                {insight.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {insight.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightsPanel;
