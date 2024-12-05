'use client';

import { ReactNode } from 'react';
import {
  QueryClient,
  QueryClientProvider as Provider,
} from '@tanstack/react-query';

interface ReactQueryProviderProps {
  children: ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      staleTime: 1000 * 60 * 5,
    },
  },
});

export default function ReactQueryProvider({
  children,
}: ReactQueryProviderProps) {
  return <Provider client={queryClient}>{children}</Provider>;
}
