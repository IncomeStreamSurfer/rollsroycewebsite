import { Metadata } from 'next';
import ContactForm from '../../../components/sections/ContactForm';
import CTASection from '../../../components/sections/CTASection';
import { getAlternateUrls } from '../../../utils/i18n';

export const metadata: Metadata = {
  title: 'Contattaci | Noleggio Auto di Lusso Rolls-Royce',
  description: 'Mettiti in contatto per prenotare la tua Rolls-Royce Ghost 6.6 di lusso con autista professionale per matrimoni, compleanni e feste private in Campania, Italia.',
  keywords: ['contatta noleggio Rolls-Royce', 'prenota auto di lusso', 'noleggia Rolls-Royce con autista', 'prenotazione auto di lusso Campania'],
  alternates: {
    canonical: '/it/contact',
    languages: {
      'en': '/en/contact',
      'it': '/it/contact',
    },
  },
};

export default function ItalianContactPage() {
  return (
    <>
      <div className="pt-24 pb-8 bg-navy-dark text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-center">
            Contattaci
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Mettiti in contatto per prenotare la tua esperienza di lusso Rolls-Royce
          </p>
        </div>
      </div>
      
      <ContactForm locale="it" />
      
      <CTASection 
        locale="it"
        title="Pronto a Vivere il Lusso?"
        description="Prenota oggi la tua Rolls-Royce Ghost 6.6 con autista professionale."
        buttonText="Prenota Ora"
        variant="alt"
      />
    </>
  );
}
