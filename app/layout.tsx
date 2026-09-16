import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dokter Jaga',
  description: 'Clinical learning platform untuk dokter muda dan calon peserta PPDS.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="id"><body>{children}</body></html>;
}
