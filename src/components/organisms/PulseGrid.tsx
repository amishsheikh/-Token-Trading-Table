'use client';

import React from 'react';
import { TokenRow } from '../molecules/TokenRow';

// Define the interface to match your data structure in page.tsx
interface PulseGridProps {
  tokens: {
    newPairs: any[];
    finalStretch: any[];
    migrated: any[];
  };
}

const Column = ({ title, data }: { title: string; data: any[] }) => (
  <div className="flex flex-col flex-1 border-r border-white/5 last:border-r-0 bg-transparent min-w-[320px]">
    <div className="px-4 py-3 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
      <h3 className="text-[11px] font-bold uppercase tracking-widest text-neutral-500">
        {title}
      </h3>
      <span className="text-[10px] text-neutral-600 font-mono">{data?.length || 0} items</span>
    </div>
    <table className="w-full text-left border-collapse table-fixed">
      <tbody>
        {data?.map((token) => (
          <TokenRow key={token.id} token={token} onTrade={(id) => console.log(id)} />
        ))}
      </tbody>
    </table>
  </div>
);

export const PulseGrid = ({ tokens }: PulseGridProps) => {
  return (
    <section className="flex flex-col md:flex-row w-full overflow-x-auto">
      <Column title="New pairs" data={tokens.newPairs} />
      <Column title="Final Stretch" data={tokens.finalStretch} />
      <Column title="Migrated" data={tokens.migrated} />
    </section>
  );
};
