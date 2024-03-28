import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SideMenu from '@/components/SideMenu';
import { defaultData } from '@/config/defaultData';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
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
  robots: 'index, follow',
  formatDetection: {
    telephone: false,
  },

  appleWebApp: {
    capable: true,
    title: 'RecodeLog',
    statusBarStyle: 'default',
    startupImage: '/apple-icon.png',
  },

  openGraph: {
    images: [
      {
        url: '/icon.png',
        alt: 'RecodeLog',
      },
    ],
  },
  twitter: {
    images: [
      {
        url: '/icon.png',
        alt: 'RecodeLog',
      },
    ],
  },
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
    <html lang="ko" className="scroll-pt-[6rem]" suppressHydrationWarning>
      <head>
        <meta
          name="naver-site-verification"
          content="e6a9b80e809cdb4abf3cd544886f44c7e4fc19da"
        />
      </head>
      <body className={cn('min-h-screen', inter.className)}>
        <ThemeProvider>
          <div className="min-h-dvh flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <SideMenu />
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
