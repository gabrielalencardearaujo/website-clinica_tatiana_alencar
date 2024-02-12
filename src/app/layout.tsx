import type { Metadata } from 'next';
import { Merriweather } from 'next/font/google';
import './globals.css';

const merriweather = Merriweather({
  weight: '400',
  style: 'normal',
  display: 'auto',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Clínica Tatiana Alencar',
  description: 'Tatiana Alencar Aesthetic Clinic',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-gray-500 ${merriweather.className}`}>{children}</body>
    </html>
  );
}
