'use client';

import { memo, useEffect, useRef, useState } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { TokenIcon } from '../atoms/TokenIcon'; // Import your new Atom

interface TokenRowProps {
  token: any;
  onTrade: (id: string) => void;
}

export const TokenRow = memo(({ token, onTrade }: TokenRowProps) => {
  const [flash, setFlash] = useState<'up' | 'down' | null>(null);
  const prevPrice = useRef(token.price);

  useEffect(() => {
    if (token.price > prevPrice.current) setFlash('up');
    else if (token.price < prevPrice.current) setFlash('down');
    prevPrice.current = token.price;
    const t = setTimeout(() => setFlash(null), 800);
    return () => clearTimeout(t);
  }, [token.price]);

  return (
    <Tooltip.Provider>
      <tr className="group h-[52px] border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors cursor-pointer">
        <td className="pl-4">
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <div className="flex items-center gap-3 cursor-pointer">

                {/* --- UPDATED: Uses the Atomic Icon Component --- */}
                <TokenIcon symbol={token.symbol} />
                {/* ----------------------------------------------- */}

                <div className="flex flex-col min-w-0">
                  <span className="text-[13px] font-bold text-white leading-none truncate">{token.symbol}</span>
                  <span className="text-[10px] text-neutral-500 uppercase truncate font-medium mt-1">Token Name</span>
                </div>
              </div>
            </Tooltip.Trigger>

            <Tooltip.Portal>
              <Tooltip.Content
                className="bg-[#1A1D21] text-white text-[10px] font-medium px-3 py-1.5 rounded border border-white/10 shadow-xl z-50 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
                sideOffset={5}
              >
                Contract: 0x...{token.id.substring(0, 4)}
                <Tooltip.Arrow className="fill-[#1A1D21]" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </td>

        <td className={`px-3 text-right font-mono text-[13px] tabular-nums transition-colors duration-500 ${
          flash === 'up' ? 'text-green-400' : flash === 'down' ? 'text-red-400' : 'text-white'
        }`}>
          ${token.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 })}
        </td>

        <td className="pr-4 text-right">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onTrade(token.id);
            }}
            className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black text-[10px] font-bold px-3 py-1 rounded-[2px] uppercase hover:bg-gray-200"
          >
            Trade
          </button>
        </td>
      </tr>
    </Tooltip.Provider>
  );
});

TokenRow.displayName = 'TokenRow';
