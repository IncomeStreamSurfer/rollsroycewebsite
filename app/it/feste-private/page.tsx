import { Metadata } from 'next';
import Image from 'next/image';
import Hero from '../../../components/sections/Hero';
import FeaturesSection from '../../../components/sections/FeaturesSection';
import TestimonialsSection from '../../../components/sections/TestimonialsSection';
import CTASection from '../../../components/sections/CTASection';
import LocationsSection from '../../../components/sections/LocationsSection';
import { getServiceInfo } from '../../../data/services';
import { generateServiceMetadata } from '../../../utils/metadata';

export const metadata: Metadata = generateServiceMetadata('private-parties', 'it', '/feste-private');

export default function ItalianPrivatePartiesPage() {
  const serviceInfo = getServiceInfo('private-parties', 'it');
  
  return (
    <>
      <Hero 
        locale="it"
        title={serviceInfo.title}
        subtitle={serviceInfo.description}
        ctaText="Prenota per la Tua Festa Privata"
      />
      
      <section className="py-16 bg-white dark:bg-navy-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-playfair text-navy-dark dark:text-white text-center">
              Eleva il Tuo Evento Privato
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Fai una dichiarazione di stile al tuo prossimo evento privato con il nostro servizio di noleggio Rolls-Royce Ghost 6.6 con autista professionale.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Che si tratti di un incontro aziendale, una celebrazione di anniversario o qualsiasi occasione speciale, il nostro servizio Rolls-Royce aggiunge quel tocco perfetto di lusso ed eleganza al tuo evento.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Dal momento in cui sali sulla nostra Rolls-Royce, vivrai il lusso e il comfort che rendono questo veicolo iconico così speciale. Crea ricordi indimenticabili e splendide opportunità fotografiche con la nostra elegante auto.
                </p>
              </div>
              <div className="relative h-80 md:h-96">
                <Image
                  src="/images/wedding_photo_in_abdondoned_car_park.jpg"
                  alt="Rolls-Royce per Feste Private"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            
            <div className="bg-cream/10 dark:bg-navy-light/10 p-8 rounded-lg border border-gold/30 mb-12">
              <h3 className="text-2xl font-bold mb-4 font-playfair text-navy-dark dark:text-white">
                Il Nostro Pacchetto Feste Private Include:
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
                Perfetto Per Tutti i Tipi di Eventi Privati
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white dark:bg-navy-dark shadow-lg p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-2 font-playfair text-navy-dark dark:text-white">Eventi Aziendali</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Impressiona clienti e colleghi con un trasporto executive che riflette gli standard della tua azienda.
                  </p>
                </div>
                <div className="bg-white dark:bg-navy-dark shadow-lg p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-2 font-playfair text-navy-dark dark:text-white">Anniversari</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Celebra il tuo traguardo speciale con il lusso e l'eleganza che l'occasione merita.
                  </p>
                </div>
                <div className="bg-white dark:bg-navy-dark shadow-lg p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-2 font-playfair text-navy-dark dark:text-white">Occasioni Speciali</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Dalle lauree alle feste di pensionamento, aggiungi un tocco di lusso a qualsiasi celebrazione.
                  </p>
                </div>
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
        title="Caratteristiche del Nostro Servizio Feste Private"
        variant="alt"
      />
      
      <LocationsSection 
        locale="it"
        service="private-parties"
        title="Disponibile in Tutta la Campania"
        description="Il nostro servizio di auto di lusso Rolls-Royce per feste private è disponibile in tutta la regione Campania. Seleziona la tua località per saperne di più sui nostri servizi per feste private nella tua zona."
        limit={4}
      />
      
      <TestimonialsSection 
        locale="it"
        title="Cosa Dicono i Nostri Clienti per Feste Private"
      />
      
      <CTASection 
        locale="it"
        title="Pronto a Prenotare la Tua Auto per Feste Private?"
        description="Contattaci oggi per assicurarti la tua Rolls-Royce Ghost 6.6 con autista professionale per il tuo evento speciale."
        buttonText="Prenota Ora"
      />
    </>
  );
}
