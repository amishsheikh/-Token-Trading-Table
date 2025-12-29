'use client'; // Ensure this is at the very top

import React, { useCallback } from 'react'; // Add this line
import { TokenRow } from '../molecules/TokenRow';
import { SkeletonRow } from '../atoms/SkeletonRow';
import { TokenErrorBoundary } from './TokenErrorBoundary';
import { TokenTableProps } from '@/types/token';

export const PulseColumn = ({ title, tokens, isLoading }: TokenTableProps) => {
  const handleTrade = useCallback((id: string) => {
    console.log(`Executing trade for: ${id}`);
  }, []);

  return (
    <TokenErrorBoundary>
      <div className="flex-1 flex flex-col border-r border-white/5">
        <h3 className="p-3 text-[11px] font-bold text-slate-500 uppercase">{title}</h3>
        <table className="w-full">
          <tbody>
            {isLoading
              ? [...Array(10)].map((_, i) => <SkeletonRow key={i} />)
              : tokens.map(token => (
                  <TokenRow key={token.id} token={token} onTrade={handleTrade} />
                ))
            }
          </tbody>
        </table>
      </div>
    </TokenErrorBoundary>
  );
};
