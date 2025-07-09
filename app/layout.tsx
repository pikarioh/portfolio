import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './index.css';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Thanathon Holm - Portfolio',
  description: "Thanathon Holm's Portfolio - Front-end Engineer & Graphic Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansJP.className} antialiased`}>{children}</body>
    </html>
  );
}
