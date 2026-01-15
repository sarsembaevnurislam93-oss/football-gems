import { Filter, Shield, Goal, Users, Clock } from 'lucide-react';
import { leagues, positions, ageGroups } from '@/data/players';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface FiltersProps {
  selectedLeague: string;
  selectedPosition: string;
  selectedAge: string;
  onLeagueChange: (value: string) => void;
  onPositionChange: (value: string) => void;
  onAgeChange: (value: string) => void;
}

const leagueIcons: Record<string, string> = {
  'Все': '🌍',
  'Premier League': '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
  'La Liga': '🇪🇸',
  'Bundesliga': '🇩🇪',
  'Serie A': '🇮🇹',
  'Ligue 1': '🇫🇷',
};

const Filters = ({
  selectedLeague,
  selectedPosition,
  selectedAge,
  onLeagueChange,
  onPositionChange,
  onAgeChange,
}: FiltersProps) => {
  const getPositionIcon = (pos: string) => {
    switch (pos) {
      case 'GK': return <Shield className="w-4 h-4 text-warning" />;
      case 'DEF': return <Shield className="w-4 h-4 text-accent" />;
      case 'MID': return <Users className="w-4 h-4 text-primary" />;
      case 'FWD': return <Goal className="w-4 h-4 text-destructive" />;
      default: return null;
    }
  };

  return (
    <div className="glass-card p-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <Filter className="w-4 h-4" />
          <span>Фильтры</span>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <Select value={selectedLeague} onValueChange={onLeagueChange}>
            <SelectTrigger className="w-[180px] bg-secondary/50 border-border/50">
              <SelectValue placeholder="Лига" />
            </SelectTrigger>
            <SelectContent>
              {leagues.map((league) => (
                <SelectItem key={league} value={league}>
                  <span className="flex items-center gap-2">
                    <span>{leagueIcons[league] || '🌍'}</span>
                    <span>{league}</span>
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedPosition} onValueChange={onPositionChange}>
            <SelectTrigger className="w-[160px] bg-secondary/50 border-border/50">
              <SelectValue placeholder="Позиция" />
            </SelectTrigger>
            <SelectContent>
              {positions.map((pos) => (
                <SelectItem key={pos} value={pos}>
                  <span className="flex items-center gap-2">
                    {getPositionIcon(pos)}
                    <span>
                      {pos === 'Все' ? 'Все позиции' : 
                       pos === 'GK' ? 'Вратарь' :
                       pos === 'DEF' ? 'Защитник' :
                       pos === 'MID' ? 'Полузащитник' : 'Нападающий'}
                    </span>
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedAge} onValueChange={onAgeChange}>
            <SelectTrigger className="w-[160px] bg-secondary/50 border-border/50">
              <SelectValue placeholder="Возраст" />
            </SelectTrigger>
            <SelectContent>
              {ageGroups.map((age) => (
                <SelectItem key={age} value={age}>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>{age === 'Все' ? 'Все возрасты' : `${age} лет`}</span>
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
