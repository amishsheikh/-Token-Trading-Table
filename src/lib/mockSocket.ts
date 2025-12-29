// src/lib/mockSocket.ts

export type TokenStatus = 'new' | 'final' | 'migrated';

export type TokenUpdate = {
  id: string;
  symbol: string;
  name: string;
  price: number;
  progress: number;
  status: TokenStatus;
  logoUrl: string; // New field for the image
};

type Callback = (data: TokenUpdate[]) => void;

class MockSocket {
  private listeners: Callback[] = [];

  // Expanded token list
  private tokenData = [
    { id: '1', symbol: 'BTC', name: 'Bitcoin' },
    { id: '2', symbol: 'ETH', name: 'Ethereum' },
    { id: '3', symbol: 'SOL', name: 'Solana' },
    { id: '4', symbol: 'PEPE', name: 'Pepe' },
    { id: '5', symbol: 'WIF', name: 'Dogwifhat' },
    { id: '6', symbol: 'BONK', name: 'Bonk' },
    { id: '7', symbol: 'JUP', name: 'Jupiter' },
    { id: '8', symbol: 'PYTH', name: 'Pyth Network' },
    { id: '9', symbol: 'POPCAT', name: 'Popcat' },
    { id: '10', symbol: 'RENDER', name: 'Render' },
    { id: '11', symbol: 'TIA', name: 'Celestia' },
    { id: '12', symbol: 'SUI', name: 'Sui' },
    { id: '13', symbol: 'SEI', name: 'Sei' },
    { id: '14', symbol: 'AR', name: 'Arweave' },
    { id: '15', symbol: 'FET', name: 'Artificial Superintelligence' },
  ];

  constructor() {
    setInterval(() => this.broadcast(), 1000);
  }

  subscribe(cb: Callback) {
    this.listeners.push(cb);
    return () => { this.listeners = this.listeners.filter(l => l !== cb); };
  }

  private broadcast() {
    const mockData: TokenUpdate[] = this.tokenData.map((token, index) => {
      let status: TokenStatus ='migrated' ;
      if (index >= 10) status = 'new' ;
      else if (index >= 5) status = 'final';

      return {
        ...token,
        price: Math.random() * 60000,
        progress: Math.random() * 100,
        status,
        // Generates a unique "abstract" crypto-style icon based on the symbol
        logoUrl: `https://api.dicebear.com/9.x/glass/svg?seed=${token.symbol}&backgroundColor=b6e3f4,c0aede,d1d4f9`
      };
    });
    this.listeners.forEach(cb => cb(mockData));
  }
}

export const socket = new MockSocket();
