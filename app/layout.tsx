import { defaultData } from '@/config/defaultData';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'StoryLog',
  description: '나만의 개발 블로그, 기록 또 기록',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? defaultData.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
