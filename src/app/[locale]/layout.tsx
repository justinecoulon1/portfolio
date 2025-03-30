import type { Metadata } from 'next';
import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/global/header/header';
import { Athiti } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

const athiti = Athiti({
  variable: '--font-athiti',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: "Justine Coulon's Portfolio",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  return (
    <html lang="en" suppressHydrationWarning>
      <NextIntlClientProvider messages={messages}>
        <body className={athiti.variable}>
          <ThemeProvider attribute={'data-theme'} defaultTheme={'light'}>
            <Header />
            <main>
              <Toaster />
              {children}
            </main>
          </ThemeProvider>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
