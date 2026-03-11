import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import { LanguageProvider } from '../contexts/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfólio Profissional',
  description: 'Showcase de projetos e arquiteturas de software',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-slate-50 text-slate-900 min-h-screen flex flex-col`}>
        <LanguageProvider>
          <Navbar />
          <div className="flex-grow">
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}