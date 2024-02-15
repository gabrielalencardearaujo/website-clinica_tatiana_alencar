import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const merriweather = Poppins({
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
      <body
        style={{ backgroundColor: '#FEF6F6' }}
        className={`bg-gray-500 ${merriweather.className}`}
      >
        {children}
      </body>
    </html>
  );
}
