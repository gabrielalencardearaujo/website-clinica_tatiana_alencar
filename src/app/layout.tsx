import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/container';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Footer from '@/components/footer/Footer';

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
      <body className={`bg-white ${poppins.className} scrollbar-global`}>
        <Header />
        <main className="w-11/12 mx-auto flex flex-col gap-32">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
