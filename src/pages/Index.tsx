import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatsCards from '@/components/StatsCards';
import Filters from '@/components/Filters';
import PlayerTable from '@/components/PlayerTable';
import ValueChart from '@/components/ValueChart';
import InsightsPanel from '@/components/InsightsPanel';
import { players } from '@/data/players';

const Index = () => {
  const [selectedLeague, setSelectedLeague] = useState('Все');
  const [selectedPosition, setSelectedPosition] = useState('Все');
  const [selectedAge, setSelectedAge] = useState('Все');

  const filteredPlayers = useMemo(() => {
    return players.filter((player) => {
      const leagueMatch = selectedLeague === 'Все' || player.league === selectedLeague;
      const positionMatch = selectedPosition === 'Все' || player.positionCategory === selectedPosition;
      
      let ageMatch = true;
      if (selectedAge !== 'Все') {
        const [min, max] = selectedAge.split('-').map(Number);
        if (selectedAge === '30+') {
          ageMatch = player.age >= 30;
        } else {
          ageMatch = player.age >= min && player.age <= max;
        }
      }
      
      return leagueMatch && positionMatch && ageMatch;
    });
  }, [selectedLeague, selectedPosition, selectedAge]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      <main className="container mx-auto px-4 pb-16 space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-6">Обзор рынка</h2>
          <StatsCards />
        </section>

        <section>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 space-y-6">
              <Filters
                selectedLeague={selectedLeague}
                selectedPosition={selectedPosition}
                selectedAge={selectedAge}
                onLeagueChange={setSelectedLeague}
                onPositionChange={setSelectedPosition}
                onAgeChange={setSelectedAge}
              />
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">Топ игроки</h2>
                  <span className="text-sm text-muted-foreground">
                    {filteredPlayers.length} игроков
                  </span>
                </div>
                <PlayerTable players={filteredPlayers} />
              </div>
            </div>
            
            <aside className="lg:w-[400px] space-y-6">
              <ValueChart players={players} />
              <InsightsPanel />
            </aside>
          </div>
        </section>
      </main>
      
      <footer className="border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>TransferScope © 2025 • Данные предоставлены для демонстрации</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
