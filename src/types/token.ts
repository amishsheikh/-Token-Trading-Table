// src/types/token.ts
export interface Token {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change5m: number;
  change1h: number;
  address: string;
  trend: 'up' | 'down' | 'neutral';
}

export interface TokenTableProps {
  title: string;
  tokens: Token[];
  isLoading?: boolean;
}
