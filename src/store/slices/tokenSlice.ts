// src/store/slices/tokenSlice.ts
import { createSlice, createEntityAdapter, PayloadAction } from '@reduxjs/toolkit';
import { TokenUpdate } from '@/lib/mockSocket';

const tokensAdapter = createEntityAdapter<TokenUpdate>();

const tokenSlice = createSlice({
  name: 'tokens',
  initialState: tokensAdapter.getInitialState(),
  reducers: {
    updateTokens: tokensAdapter.upsertMany,
  },
});

export const { updateTokens } = tokenSlice.actions;
export default tokenSlice.reducer;
