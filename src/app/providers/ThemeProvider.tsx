'use client';

import * as React from 'react';
import dynamic from 'next/dynamic';
import { ThemeProviderProps } from 'next-themes';

const Provider = dynamic(
  () => import('next-themes').then((e) => e.ThemeProvider),
  {
    ssr: false,
  },
);

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return <Provider {...props}>{children}</Provider>;
}
