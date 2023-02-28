import '@/styles/globals.css';
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
      <body className="overflow-y-scroll lg:relative ">
        <div>{children}</div>
      </body>
    </html>
  );
}
