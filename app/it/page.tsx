import { Metadata } from 'next';
import Hero from '../../components/sections/Hero';
import ServicesSection from '../../components/sections/ServicesSection';
import FeaturesSection from '../../components/sections/FeaturesSection';
import TestimonialsSection from '../../components/sections/TestimonialsSection';
import CTASection from '../../components/sections/CTASection';
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

export default function ItalianHomePage() {
  return (
    <>
      <Hero locale="it" />
      
      <div className="py-12 bg-white dark:bg-navy-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair text-navy-dark dark:text-white">
              Vivi un Lusso Senza Paragoni
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Eleva le tue occasioni speciali con il nostro servizio premium di noleggio Rolls-Royce Ghost 6.6. 
              I nostri autisti professionisti garantiscono un'esperienza impeccabile e sofisticata per matrimoni, 
              compleanni e feste private in tutta la regione Campania.
            </p>
          </div>
        </div>
      </div>
      
      <ServicesSection locale="it" />
      
      <FeaturesSection locale="it" />
      
      <TestimonialsSection locale="it" />
      
      <CTASection locale="it" />
    </>
  );
}
