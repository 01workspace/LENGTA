import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'LENGTA — Own the Beauty',
  description: 'Provocative luxury intimate fashion. Own your beauty. Own your choice.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}