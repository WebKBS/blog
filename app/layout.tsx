import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SideMenu from '@/components/SideMenu';
import { defaultData } from '@/config/defaultData';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/providers/ThemeProvider';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'RecodeLog',
    template: '%s - RecodeLog',
  },
  description: '나만의 개발 블로그, 기록 또 기록',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? defaultData.url),
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    {
      media: '(prefers-color-scheme: dark)',
      color: '#000000',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-pt-[3.5rem]" suppressHydrationWarning>
      <body className={cn('min-h-screen', inter.className)}>
        <ThemeProvider>
          <div className="min-h-dvh flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <SideMenu />
        </ThemeProvider>
      </body>
    </html>
  );
}
