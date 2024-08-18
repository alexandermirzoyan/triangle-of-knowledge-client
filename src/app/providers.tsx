'use client';

import { ThemeState } from '@/context/theme/state';
import { ReactNode } from 'react';

interface ProvidersProps {
    children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => (
  <ThemeState>
    {children}
  </ThemeState>
);
