import { TrendingUp, TrendingDown, DollarSign, Users, Target, Zap } from 'lucide-react';
import { marketStats } from '@/data/players';

const StatsCards = () => {
  const stats = [
    {
      label: 'Общая стоимость рынка',
      value: `€${marketStats.totalMarketValue}B`,
      change: '+8.2%',
      isPositive: true,
      icon: DollarSign,
    },
    {
      label: 'Средняя цена трансфера',
      value: `€${marketStats.avgTransferFee}M`,
      change: '+12.5%',
      isPositive: true,
      icon: Target,
    },
    {
      label: 'Недооценённые игроки',
      value: `${marketStats.undervaluedPercentage}%`,
      change: 'возможности',
      isPositive: true,
      icon: TrendingUp,
    },
    {
      label: 'Переоценённые игроки',
      value: `${marketStats.overvaluedPercentage}%`,
      change: 'риски',
      isPositive: false,
      icon: TrendingDown,
    },
    {
      label: 'Топ лига',
      value: marketStats.topLeague,
      change: '€4.2B объём',
      isPositive: true,
      icon: Zap,
    },
    {
      label: 'Востребованная позиция',
      value: marketStats.hottestPosition,
      change: '+45% спрос',
      isPositive: true,
      icon: Users,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="glass-card p-4 hover-lift"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-start justify-between mb-3">
            <div className={`p-2 rounded-lg ${stat.isPositive ? 'bg-primary/10' : 'bg-destructive/10'}`}>
              <stat.icon className={`w-4 h-4 ${stat.isPositive ? 'text-primary' : 'text-destructive'}`} />
            </div>
          </div>
          <p className="text-2xl font-bold font-mono mb-1">{stat.value}</p>
          <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
          <p className={`text-xs font-medium ${stat.isPositive ? 'stat-positive' : 'stat-negative'}`}>
            {stat.change}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
