import Footer from '@/ui/Footer';
import Header from '@/ui/Header';
import React from 'react';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mb-32 h-screen">{children}</div>;
}
