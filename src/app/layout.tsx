import type { Metadata } from 'next';
import localFont from 'next/font/local';
import AppProvider from '@/libs/AppProvider';

const spoqaBold = localFont({
  src: './fonts/SpoqaHanSansNeo-Bold.woff',
  variable: '--font-spoqa-bold',
  weight: '100 900',
});
const spoqaMedium = localFont({
  src: './fonts/SpoqaHanSansNeo-Medium.woff',
  variable: '--font-spoqa-medium',
  weight: '100 900',
});
const spoqaRegular = localFont({
  src: './fonts/SpoqaHanSansNeo-Regular.woff',
  variable: '--font-spoqa-regular',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${spoqaBold.variable} ${spoqaMedium.variable} ${spoqaRegular.variable}`}>
        <AppProvider>
          <main>{children}</main>
        </AppProvider>
      </body>
    </html>
  );
}
