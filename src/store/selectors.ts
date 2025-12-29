import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './index';

// Add explicit types to the parameters to solve the 'any' error
export const selectAllTokens = createSelector(
  [(state: RootState) => state.tokens.ids, (state: RootState) => state.tokens.entities],
  (ids, entities) => {
    return (ids as string[]).map(id => entities[id]).filter(Boolean);
  }
);
