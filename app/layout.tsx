import type { Metadata } from 'next';
import './globals.css';
import { Inter, Orbitron } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' });

export const metadata: Metadata = {
  title: 'BMW ECU Programming & Tuning Services',
  description: 'Professional BMW ECU programming: MS41, MS42, MS43, ME7.2 ? Tuning, Immo Off, Pops & Bangs, Hard Cut, EWS Delete, Diagnostics.',
  metadataBase: new URL('https://agentic-59b729fa.vercel.app')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body>{children}</body>
    </html>
  );
}
