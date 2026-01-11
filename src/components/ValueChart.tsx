import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Player } from '@/data/players';

interface ValueChartProps {
  players: Player[];
}

const ValueChart = ({ players }: ValueChartProps) => {
  const chartData = players
    .filter((p) => p.actualFee !== null)
    .map((player) => ({
      name: player.name.split(' ').pop(),
      оценка: player.transfermarktValue,
      факт: player.actualFee,
      diff: player.transfermarktValue - (player.actualFee || 0),
    }))
    .slice(0, 6);

  return (
    <div className="glass-card p-6">
      <h3 className="text-lg font-semibold mb-1">Сравнение оценок</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Оценка Transfermarkt vs. Фактическая цена трансфера
      </p>
      
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} layout="vertical" margin={{ left: 20, right: 20 }}>
            <XAxis 
              type="number" 
              tickFormatter={(value) => `€${value}M`}
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            />
            <YAxis 
              type="category" 
              dataKey="name" 
              width={100}
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
              }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
              formatter={(value: number) => [`€${value}M`, '']}
            />
            <Bar dataKey="оценка" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
            <Bar dataKey="факт" fill="hsl(var(--accent))" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-primary" />
          <span className="text-sm text-muted-foreground">Оценка TM</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-accent" />
          <span className="text-sm text-muted-foreground">Факт. цена</span>
        </div>
      </div>
    </div>
  );
};

export default ValueChart;
