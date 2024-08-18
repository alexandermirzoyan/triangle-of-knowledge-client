import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { montserrat, raleway } from '@/constants/fonts';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Triangle of Knowledge',
  description: 'Created by enthusiasts',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (

  <html lang='en'>
    <body className={`${raleway.variable} ${montserrat.variable}`}>
      <Providers>
        {children}
      </Providers>
    </body>
  </html>

);

export default RootLayout;
