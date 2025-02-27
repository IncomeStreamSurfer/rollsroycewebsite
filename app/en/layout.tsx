import { Metadata } from 'next';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { getAlternateUrls } from '../../utils/i18n';

export const metadata: Metadata = {
  title: 'Rolls-Royce Luxury Car Rental | Ghost 6.6 with Driver',
  description: 'Luxury Rolls-Royce Ghost 6.6 rental with professional driver for weddings, birthdays, and private parties in Campania, Italy.',
  keywords: ['Rolls-Royce rental', 'luxury car with driver', 'Ghost 6.6', 'wedding car', 'birthday luxury car', 'private party transportation', 'Campania'],
  alternates: {
    canonical: '/en',
    languages: {
      'en': '/en',
      'it': '/it',
    },
  },
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header locale="en" />
      <main className="min-h-screen pt-16">
        {children}
      </main>
      <Footer locale="en" />
    </>
  );
}
