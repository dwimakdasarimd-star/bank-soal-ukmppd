import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dokter Jaga — Clinical Learning Platform',
  description: 'Platform belajar klinis, bank soal, CBT, tools, dan PPDS untuk dokter Indonesia.'
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="id"><body>{children}</body></html>;
}
