'use client';

import { memo, useMemo } from 'react';

interface TokenIconProps {
  symbol: string;
}

// Pre-defined crypto-style gradients
const GRADIENTS = [
  'from-blue-500 to-cyan-400',
  'from-purple-500 to-pink-400',
  'from-orange-500 to-yellow-400',
  'from-green-500 to-emerald-400',
  'from-indigo-500 to-purple-400',
  'from-red-500 to-orange-400',
];

export const TokenIcon = memo(({ symbol }: TokenIconProps) => {
  // Deterministically assign a color based on the symbol string
  const gradientClass = useMemo(() => {
    let hash = 0;
    for (let i = 0; i < symbol.length; i++) {
      hash = symbol.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % GRADIENTS.length;
    return GRADIENTS[index];
  }, [symbol]);

  return (
    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${gradientClass} flex items-center justify-center shadow-lg border border-white/10`}>
      <span className="text-[10px] font-bold text-white tracking-tighter shadow-sm">
        {symbol.substring(0, 1)}
      </span>
    </div>
  );
});

TokenIcon.displayName = 'TokenIcon';
