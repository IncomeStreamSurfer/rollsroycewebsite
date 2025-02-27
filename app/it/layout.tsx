import { Metadata } from 'next';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { getAlternateUrls } from '../../utils/i18n';

export const metadata: Metadata = {
  title: 'Noleggio Auto di Lusso Rolls-Royce | Ghost 6.6 con Autista',
  description: 'Noleggio di lusso Rolls-Royce Ghost 6.6 con autista professionale per matrimoni, compleanni e feste private in Campania, Italia.',
  keywords: ['Noleggio Rolls-Royce', 'auto di lusso con autista', 'Ghost 6.6', 'auto per matrimonio', 'auto di lusso per compleanno', 'trasporto per feste private', 'Campania'],
  alternates: {
    canonical: '/it',
    languages: {
      'en': '/en',
      'it': '/it',
    },
  },
};

export default function ItalianLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header locale="it" />
      <main className="min-h-screen pt-16">
        {children}
      </main>
      <Footer locale="it" />
    </>
  );
}
