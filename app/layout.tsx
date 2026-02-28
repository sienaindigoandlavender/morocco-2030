import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Morocco 2030 — A Cultural Guide to the Host Cities',
  description: 'Six host cities. The first World Cup on African soil. Everything beyond the stadiums. A Dancing with Lions guide.',
  openGraph: {
    title: 'Morocco 2030 — A Cultural Guide to the Host Cities',
    description: 'Six host cities. The first World Cup on African soil. Everything beyond the stadiums.',
    siteName: 'Slow Morocco',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
