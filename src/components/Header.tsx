import { TrendingUp, Activity, Globe } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b border-border/50 bg-card/50 backdrop-blur-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-primary">
                <TrendingUp className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">TransferScope</h1>
              <p className="text-xs text-muted-foreground">Аналитика трансферного рынка</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
              <Activity className="w-4 h-4 text-primary animate-pulse" />
              <span>Данные обновлены</span>
            </div>
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 text-sm">
              <Globe className="w-4 h-4" />
              <span>5 лиг</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
