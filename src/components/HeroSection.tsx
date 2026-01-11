import { ArrowRight, BarChart3, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-30" />
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6 animate-fade-in">
            <Zap className="w-4 h-4" />
            <span>Сезон 2024/25 • Данные обновлены</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight animate-fade-in">
            Аналитика{' '}
            <span className="text-gradient">трансферного</span>
            <br />
            рынка футбола
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in">
            Выявляйте недооценённых игроков, анализируйте рыночные тренды и принимайте 
            взвешенные решения на основе сравнения оценок Transfermarkt с реальными трансферами
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in">
            <Button size="lg" className="gap-2 glow-primary">
              Начать анализ
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <BarChart3 className="w-4 h-4" />
              Смотреть отчёты
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in">
            {[
              { icon: Target, label: 'Точность данных', value: '94%' },
              { icon: BarChart3, label: 'Проанализировано игроков', value: '15,000+' },
              { icon: Zap, label: 'Обновление данных', value: 'Real-time' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card p-6 text-center hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-2xl font-bold font-mono mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
