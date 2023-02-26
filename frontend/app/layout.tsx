import '@/styles/globals.css';
import Head from 'next/head';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Head>
        <title>GOON</title>
      </Head>
      <body className="overflow-y-scroll lg:relative ">
        <div>{children}</div>
      </body>
    </html>
  );
}
