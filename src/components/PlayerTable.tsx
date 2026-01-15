import { ArrowUpRight, ArrowDownRight, Minus, ExternalLink } from 'lucide-react';
import { Player } from '@/data/players';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

interface PlayerTableProps {
  players: Player[];
}

const PlayerTable = ({ players }: PlayerTableProps) => {
  const getValueDifference = (player: Player) => {
    if (!player.actualFee) return null;
    const diff = ((player.transfermarktValue - player.actualFee) / player.actualFee) * 100;
    return diff;
  };

  const getTrendIcon = (trend: Player['trend']) => {
    switch (trend) {
      case 'up':
        return <ArrowUpRight className="w-4 h-4 text-primary" />;
      case 'down':
        return <ArrowDownRight className="w-4 h-4 text-destructive" />;
      default:
        return <Minus className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getInterestBadge = (interest: Player['marketInterest']) => {
    switch (interest) {
      case 'high':
        return <Badge variant="default" className="bg-primary/20 text-primary border-primary/30">Высокий</Badge>;
      case 'medium':
        return <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">Средний</Badge>;
      default:
        return <Badge variant="outline" className="text-muted-foreground">Низкий</Badge>;
    }
  };

  const getPositionColor = (pos: Player['positionCategory']) => {
    switch (pos) {
      case 'GK':
        return 'bg-warning/20 text-warning';
      case 'DEF':
        return 'bg-accent/20 text-accent';
      case 'MID':
        return 'bg-primary/20 text-primary';
      case 'FWD':
        return 'bg-destructive/20 text-destructive';
    }
  };

  return (
    <div className="glass-card overflow-hidden">
      <div className="overflow-x-auto scrollbar-thin">
        <Table>
          <TableHeader>
            <TableRow className="border-border/50 hover:bg-transparent">
              <TableHead className="text-muted-foreground font-semibold">Игрок</TableHead>
              <TableHead className="text-muted-foreground font-semibold">Возраст</TableHead>
              <TableHead className="text-muted-foreground font-semibold">Позиция</TableHead>
              <TableHead className="text-muted-foreground font-semibold">Клуб</TableHead>
              <TableHead className="text-muted-foreground font-semibold text-right">Оценка TM</TableHead>
              <TableHead className="text-muted-foreground font-semibold text-right">Факт. цена</TableHead>
              <TableHead className="text-muted-foreground font-semibold text-right">Расхождение</TableHead>
              <TableHead className="text-muted-foreground font-semibold">Статистика</TableHead>
              <TableHead className="text-muted-foreground font-semibold">Интерес</TableHead>
              <TableHead className="text-muted-foreground font-semibold">Тренд</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {players.map((player, index) => {
              const diff = getValueDifference(player);
              return (
                <TableRow 
                  key={player.id} 
                  className="border-border/30 hover:bg-secondary/30 transition-colors cursor-pointer group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{player.nationality}</span>
                      <div>
                        <p className="font-semibold group-hover:text-primary transition-colors flex items-center gap-1">
                          {player.name}
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <span>
                            {player.league === 'Premier League' ? '🏴󠁧󠁢󠁥󠁮󠁧󠁿' :
                             player.league === 'La Liga' ? '🇪🇸' :
                             player.league === 'Bundesliga' ? '🇩🇪' :
                             player.league === 'Serie A' ? '🇮🇹' :
                             player.league === 'Ligue 1' ? '🇫🇷' : '🌍'}
                          </span>
                          {player.league}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="font-mono">{player.age}</span>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getPositionColor(player.positionCategory)}>
                      {player.position}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{player.club}</TableCell>
                  <TableCell className="text-right font-mono font-semibold">
                    €{player.transfermarktValue}M
                  </TableCell>
                  <TableCell className="text-right font-mono">
                    {player.actualFee ? `€${player.actualFee}M` : '—'}
                  </TableCell>
                  <TableCell className="text-right">
                    {diff !== null ? (
                      <span className={`font-mono font-semibold ${diff > 0 ? 'stat-positive' : 'stat-negative'}`}>
                        {diff > 0 ? '+' : ''}{diff.toFixed(0)}%
                      </span>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-sm font-mono">
                      <span className="text-primary">{player.goals}G</span>
                      <span className="text-muted-foreground">/</span>
                      <span className="text-accent">{player.assists}A</span>
                    </div>
                  </TableCell>
                  <TableCell>{getInterestBadge(player.marketInterest)}</TableCell>
                  <TableCell>{getTrendIcon(player.trend)}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PlayerTable;
