// app/layout.js
import './globals.css'; // your global styles
import React from 'react';

export const metadata = {
  title: 'Search App',
  description: 'SearchBar project',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen flex flex-col items-center justify-start p-4">
        {children}
      </body>
    </html>
  );
}
