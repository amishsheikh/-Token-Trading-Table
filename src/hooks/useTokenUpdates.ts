// src/hooks/useTokenUpdates.ts
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { socket, TokenUpdate } from '@/lib/mockSocket';
import { updateTokens } from '@/store/slices/tokenSlice';

export const useTokenUpdates = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = socket.subscribe((data: TokenUpdate[]) => {
      dispatch(updateTokens(data));
    });
    return () => unsubscribe();
  }, [dispatch]);
};
