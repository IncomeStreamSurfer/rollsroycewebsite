import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '../../../components/sections/Hero';
import FeaturesSection from '../../../components/sections/FeaturesSection';
import TestimonialsSection from '../../../components/sections/TestimonialsSection';
import CTASection from '../../../components/sections/CTASection';
import LocationsSection from '../../../components/sections/LocationsSection';
import { getServiceInfo } from '../../../data/services';
import { generateServiceMetadata } from '../../../utils/metadata';
import { FeatureIcons } from '../../../components/ui/FeatureCard';

export const metadata: Metadata = generateServiceMetadata('weddings', 'it', '/matrimoni');

export default function ItalianWeddingsPage() {
  const serviceInfo = getServiceInfo('weddings', 'it');
  
  return (
    <>
      <Hero 
        locale="it"
        title={serviceInfo.title}
        subtitle={serviceInfo.description}
        ctaText="Prenota per il Tuo Matrimonio"
      />
      
      <section className="py-16 bg-white dark:bg-navy-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-playfair text-navy-dark dark:text-white text-center">
              Rendi Indimenticabile il Tuo Giorno di Nozze
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Il giorno del tuo matrimonio è uno dei giorni più importanti della tua vita. Arriva con stile ed eleganza con il nostro servizio di noleggio Rolls-Royce Ghost 6.6 con autista professionale.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Comprendiamo l'importanza di ogni dettaglio nel tuo giorno speciale. La nostra impeccabile Rolls-Royce e il servizio di autista professionale garantiranno che il tuo trasporto sia perfetto come il resto della tua celebrazione.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Dal momento in cui sali sulla nostra Rolls-Royce, vivrai il lusso e il comfort che rendono questo veicolo iconico così speciale. Crea ricordi indimenticabili e splendide opportunità fotografiche con la nostra elegante auto.
                </p>
              </div>
              <div className="relative h-80 md:h-96">
                <Image
                  src="/images/wedding_photo_in_abdondoned_car_park.jpg"
                  alt="Rolls-Royce per Matrimoni"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            
            <div className="bg-cream/10 dark:bg-navy-light/10 p-8 rounded-lg border border-gold/30 mb-12">
              <h3 className="text-2xl font-bold mb-4 font-playfair text-navy-dark dark:text-white">
                Il Nostro Pacchetto Matrimonio Include:
              </h3>
              <ul className="space-y-3">
                {serviceInfo.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4 font-playfair text-navy-dark dark:text-white">
                Perché Scegliere la Nostra Rolls-Royce per il Tuo Matrimonio?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {serviceInfo.benefits.map((benefit, index) => (
                  <div key={index} className="bg-white dark:bg-navy-dark shadow-lg p-6 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-navy-dark text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 font-playfair">
                Domande Frequenti
              </h3>
              <div className="space-y-6">
                {serviceInfo.faqs.map((faq, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-bold mb-2 text-gold">{faq.question}</h4>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturesSection 
        locale="it"
        title="Caratteristiche del Nostro Servizio Matrimonio"
        variant="alt"
      />
      
      <LocationsSection 
        locale="it"
        service="weddings"
        title="Disponibile in Tutta la Campania"
        description="Il nostro servizio di auto di lusso Rolls-Royce per matrimoni è disponibile in tutta la regione Campania. Seleziona la tua località per saperne di più sui nostri servizi per matrimoni nella tua zona."
        limit={4}
      />
      
      <TestimonialsSection 
        locale="it"
        title="Cosa Dicono i Nostri Clienti per Matrimoni"
      />
      
      <CTASection 
        locale="it"
        title="Pronto a Prenotare la Tua Auto per il Matrimonio?"
        description="Contattaci oggi per assicurarti la tua Rolls-Royce Ghost 6.6 con autista professionale per il tuo giorno speciale."
        buttonText="Prenota Ora"
      />
    </>
  );
}
