import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/container';

const poppins = Poppins({
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
      <body className={`bg-white ${poppins.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
