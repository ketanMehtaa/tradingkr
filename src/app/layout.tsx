import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from './header';
import { Footer } from './footer';
import { CSPostHogProvider } from './providers';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from "@vercel/analytics/react"
const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'TradingKR - Your Ultimate Trading Hub',
  description:
    'TradingKR.com: Your single place for everything related to IPOs, trading, including options, futures, equity options, charts, straddle charts, strangle charts, IPO details, top gainers, top losers, top news, and more.',
  keywords: [
    'gmp',
    'ipo gmp',
    // 'trading',
    // 'options',
    // 'futures',
    // 'equity options',
    // 'charts',
    // 'straddle charts',
    // 'strangle charts',
    'IPO details',
    'IPO subscription',
    // 'top gainers',
    // 'top losers',
    'share news',
    'top news',
    // 'trading platform',
    'tradingKR',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tradingkr.com/',
    siteName: 'TradingKR',
    title: 'TradingKR - Your Ultimate Trading Hub',
    description:
      'TradingKR.com is your one-stop destination for all things trading. From options and futures to IPO details, top gainers, and top losers, we have it all.',
    images: [
      {
        url: 'https://tradingkr.com/images/og-image.jpg', // Ensure this URL is correct
        width: 1200,
        height: 630,
        alt: 'TradingKR - Your Ultimate Trading Hub',
      },
    ],
  },
  twitter: {
    creator: '@tradingkr',
    site: '@tradingkr',
  },
  metadataBase: new URL('https://tradingkr.com'),
    alternates: {
        canonical: '/',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    // verification: {
    //     google: 'your-google-verification-code',
    //     yandex: 'your-yandex-verification-code',
    // }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode /*  */;
}>) {
  return (
    <html lang="en">
      <Analytics/>
      <CSPostHogProvider>
        {/* // removed bg-background from below which can affect theme light dark //todokk */}
        <body className={cn('min-h-screen  font-sans antialiased bg-[#EBEFF5]', fontSans.variable)}>
          {/*  changed defauiltTheme from system to light todokm */}
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <Header />
            <main className="flex-grow">{children}</main>
            <Toaster />
            <Footer />
          </ThemeProvider>
        </body>
      </CSPostHogProvider>
    </html>
  );
}
