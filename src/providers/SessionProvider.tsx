'use client';

import { ReactNode } from 'react';
import { SessionProvider as Provider } from 'next-auth/react';

interface SessionProviderProps {
  children: ReactNode;
}

export default function SessionProvider({ children }: SessionProviderProps) {
  return <Provider>{children}</Provider>;
}
