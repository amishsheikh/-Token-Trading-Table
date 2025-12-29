'use client';

import { useTokenUpdates } from '@/hooks/useTokenUpdates';
import { useSelector } from 'react-redux';
import { selectAllTokens } from '@/store/selectors';
import { PulseGrid } from '@/components/organisms/PulseGrid';

export default function Home() {
  useTokenUpdates(); // Requirement: Hook for real-time updates
  const tokens = useSelector(selectAllTokens);

  // Requirement: Logical distribution into three columns
  const data = {
    newPairs: tokens.filter(t => t.status === 'new'),
    finalStretch: tokens.filter(t => t.status === 'final'),
    migrated: tokens.filter(t => t.status === 'migrated'),
  };

  return (
    <main className="min-h-screen bg-[#0B0E11] text-white">
      <div className="max-w-[1400px] mx-auto">
        <header className="p-6 border-b border-white/5">
          {/* Requirement: Pixel-perfect header  */}
          <h1 className="text-2xl font-bold tracking-tighter">PULSE</h1>
        </header>

        {/* Requirement: Atomic Architecture - Organism  */}
        <PulseGrid tokens={data} />
      </div>
    </main>
  );
}
