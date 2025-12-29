// src/components/atoms/PriceCell.tsx
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

export const PriceCell = ({ value, trend }: { value: string, trend: 'up' | 'down' | 'neutral' }) => {
  const cellRef = useRef<HTMLTableCellElement>(null);

  useEffect(() => {
    if (trend === 'neutral') return;
    const colorClass = trend === 'up' ? 'text-green-400' : 'text-red-400';
    const bgClass = trend === 'up' ? 'bg-green-500/10' : 'bg-red-500/10';

    cellRef.current?.classList.add(colorClass, bgClass);
    const timeout = setTimeout(() => {
      cellRef.current?.classList.remove(colorClass, bgClass);
    }, 600);

    return () => clearTimeout(timeout);
  }, [value, trend]);

  return (
    <td ref={cellRef} className="px-3 py-2 font-mono text-sm transition-all duration-500 ease-out border-b border-white/5">
      {value}
    </td>
  );
};

export const TokenBadge = ({ symbol }: { symbol: string }) => (
  <span className="px-1.5 py-0.5 rounded bg-white/5 text-[10px] font-bold text-slate-400 uppercase tracking-tight">
    {symbol}
  </span>
);

export const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <button className="p-1.5 rounded-md hover:bg-white/10 transition-colors text-slate-400 hover:text-white">
    {children}
  </button>
);
