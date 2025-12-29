// src/components/organisms/TokenErrorBoundary.tsx
'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';

export class TokenErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() { return { hasError: true }; }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Token Table Error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 border border-red-500/50 bg-red-500/10 rounded-md">
          <p className="text-xs text-red-400 font-mono">Failed to load live data stream.</p>
        </div>
      );
    }
    return this.props.children;
  }
}
