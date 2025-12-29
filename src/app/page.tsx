'use client';

import { useTokenUpdates } from '@/hooks/useTokenUpdates';
import { useSelector } from 'react-redux';
import { selectAllTokens } from '@/store/selectors';
import { PulseGrid } from '@/components/organisms/PulseGrid';
import { Heart } from 'lucide-react';

export default function Home() {
  useTokenUpdates();
  const tokens = useSelector(selectAllTokens);

  const data = {
    newPairs: tokens.filter(t => t.status === 'new'),
    finalStretch: tokens.filter(t => t.status === 'final'),
    migrated: tokens.filter(t => t.status === 'migrated'),
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#0B0E11] text-white">

      {/* CONTENT */}
      <div className="flex-1 max-w-[1400px] mx-auto w-full">
        <header className="p-6 border-b border-white/5">
          <h1 className="text-2xl font-bold tracking-tighter">PULSE</h1>
        </header>

        <PulseGrid tokens={data} />
      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-[#0B0E11]">
        <div className="h-16 flex items-center justify-center gap-2 text-sm text-slate-400">
          <span>Made with</span>
          <Heart
            size={16}
            className="text-pink-500 fill-pink-500/20 animate-pulse"
          />
          <span>
            by <span className="text-indigo-400 font-medium">Amish</span>
          </span>
        </div>
      </footer>
    </main>
  );
}
