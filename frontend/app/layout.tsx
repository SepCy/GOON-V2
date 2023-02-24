import '@/styles/globals.css';
import Header from '@/ui/Header';
import HeroSection from '@/ui/HeroSection';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>GOON</title>
      </head>
      <body className="overflow-y-scroll lg:relative ">{children}</body>
    </html>
  );
}
