import { Filter } from 'lucide-react';
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

const Filters = ({
  selectedLeague,
  selectedPosition,
  selectedAge,
  onLeagueChange,
  onPositionChange,
  onAgeChange,
}: FiltersProps) => {
  return (
    <div className="glass-card p-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <Filter className="w-4 h-4" />
          <span>Фильтры</span>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <Select value={selectedLeague} onValueChange={onLeagueChange}>
            <SelectTrigger className="w-[160px] bg-secondary/50 border-border/50">
              <SelectValue placeholder="Лига" />
            </SelectTrigger>
            <SelectContent>
              {leagues.map((league) => (
                <SelectItem key={league} value={league}>
                  {league}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedPosition} onValueChange={onPositionChange}>
            <SelectTrigger className="w-[140px] bg-secondary/50 border-border/50">
              <SelectValue placeholder="Позиция" />
            </SelectTrigger>
            <SelectContent>
              {positions.map((pos) => (
                <SelectItem key={pos} value={pos}>
                  {pos === 'Все' ? 'Все позиции' : 
                   pos === 'GK' ? 'Вратарь' :
                   pos === 'DEF' ? 'Защитник' :
                   pos === 'MID' ? 'Полузащитник' : 'Нападающий'}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedAge} onValueChange={onAgeChange}>
            <SelectTrigger className="w-[140px] bg-secondary/50 border-border/50">
              <SelectValue placeholder="Возраст" />
            </SelectTrigger>
            <SelectContent>
              {ageGroups.map((age) => (
                <SelectItem key={age} value={age}>
                  {age === 'Все' ? 'Все возрасты' : `${age} лет`}
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
