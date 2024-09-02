import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SideMenu from '@/components/SideMenu';
import { defaultData } from '@/config/defaultData';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  //
  title: {
    default: 'RecodeLog',
    template: '%s - RecodeLog',
  },
  description: '나만의 개발 블로그, 기록 또 기록',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ??
      defaultData.url ??
      `http:localhost:${process.env.PORT || 3000}`
  ),
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
    title: 'RecodeLog',
    description: '나만의 개발 블로그, 기록 또 기록',
    type: 'website',
    url: defaultData.url,
    siteName: 'RecodeLog',

    images: [
      {
        url: '/icon.png',
        alt: 'RecodeLog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@recodelog',
    creator: '@recodelog',
    title: 'RecodeLog',
    description: '나만의 개발 블로그, 기록 또 기록',

    images: [
      {
        url: '/icon.png',
        alt: 'RecodeLog',
      },
    ],
  },

  generator: 'Next.js', // 웹사이트를 생성한 소프트웨어의 이름을 나타냅니다.
  applicationName: 'Next.js', // 웹사이트를 실행하는 소프트웨어의 이름을 나타냅니다.

  authors: [
    { name: 'recodelog' },
    { name: 'recodelog', url: 'https://recodelog.com' },
  ], // 웹사이트의 저자를 나타냅니다.
  creator: 'WebKBS', // 웹사이트의 제작자를 나타냅니다.
  publisher: 'WebKBS', // 웹사이트의 발행자를 나타냅니다.
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
    <html lang="ko" className="scroll-pt-[8rem]" suppressHydrationWarning>
      <head>
        <GoogleTagManager gtmId="GTM-5DZ7XFWX" />
        <meta
          name="naver-site-verification"
          content="e6a9b80e809cdb4abf3cd544886f44c7e4fc19da"
        />
        <meta name="google-adsense-account" content="ca-pub-6828580975511725" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6828580975511725"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={cn('min-h-screen select-none', inter.className)}>
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
        <GoogleAnalytics gaId="G-0DT0FKKXTM" />
      </body>
    </html>
  );
}
