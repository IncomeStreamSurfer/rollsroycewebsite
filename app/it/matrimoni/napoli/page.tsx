import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '../../../../components/sections/Hero';
import FeaturesSection from '../../../../components/sections/FeaturesSection';
import TestimonialsSection from '../../../../components/sections/TestimonialsSection';
import CTASection from '../../../../components/sections/CTASection';
import { getServiceInfo } from '../../../../data/services';
import { getLocationName } from '../../../../data/locations';
import { generateLocationMetadata } from '../../../../utils/metadata';
import { FeatureIcons } from '../../../../components/ui/FeatureCard';

export const metadata: Metadata = generateLocationMetadata('weddings', 'naples', 'it', '/matrimoni/napoli');

export default function ItalianWeddingsNaplesPage() {
  const serviceInfo = getServiceInfo('weddings', 'it');
  const locationName = getLocationName('naples', 'it');
  
  return (
    <>
      <Hero 
        locale="it"
        title={`Elegante Rolls-Royce per Matrimoni a ${locationName}`}
        subtitle={`Rendi il tuo giorno di nozze a ${locationName} ancora più speciale con la nostra lussuosa Rolls-Royce Ghost 6.6. Il nostro servizio di autista professionale garantisce che tu arrivi con stile ed eleganza nel tuo giorno più importante.`}
        ctaText={`Prenota per il Tuo Matrimonio a ${locationName}`}
      />
      
      <section className="py-16 bg-white dark:bg-navy-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-playfair text-navy-dark dark:text-white text-center">
              Servizio Auto di Lusso per Matrimoni a {locationName}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  {locationName}, la vibrante capitale della regione Campania, offre uno sfondo mozzafiato per il tuo giorno di nozze. Il nostro servizio di noleggio Rolls-Royce Ghost 6.6 aggiunge il tocco perfetto di lusso per completare la bellezza e il romanticismo di questa città storica.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Che il tuo matrimonio si svolga in una delle storiche chiese di {locationName}, in eleganti palazzi o in suggestive location costiere, il nostro servizio di autista professionale garantirà che tu arrivi con stile e comfort.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  La nostra conoscenza approfondita delle strade e delle location di {locationName} assicura un trasporto senza intoppi nel tuo giorno speciale, permettendoti di rilassarti e goderti ogni momento senza preoccuparti della logistica.
                </p>
              </div>
              <div className="relative h-80 md:h-96">
                <Image
                  src="/images/wedding_photo_in_abdondoned_car_park.jpg"
                  alt={`Rolls-Royce per Matrimoni a ${locationName}`}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            
            <div className="bg-cream/10 dark:bg-navy-light/10 p-8 rounded-lg border border-gold/30 mb-12">
              <h3 className="text-2xl font-bold mb-4 font-playfair text-navy-dark dark:text-white">
                Il Nostro Pacchetto Matrimonio a {locationName} Include:
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
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Autista locale di {locationName} con ampia conoscenza della città</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Opzioni di percorso panoramico attraverso le zone più belle di {locationName}</span>
                </li>
              </ul>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 font-playfair text-navy-dark dark:text-white text-center">
                Location per Matrimoni Popolari a {locationName}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-navy-dark shadow-lg p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-2 font-playfair text-navy-dark dark:text-white">Chiese del Centro Storico</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Il nostro servizio Rolls-Royce è perfetto per matrimoni nelle bellissime chiese storiche di {locationName}, tra cui il Duomo di Napoli e la Basilica di Santa Chiara.
                  </p>
                </div>
                <div className="bg-white dark:bg-navy-dark shadow-lg p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-2 font-playfair text-navy-dark dark:text-white">Hotel di Lusso</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Forniamo regolarmente servizio per matrimoni nei migliori hotel di {locationName}, tra cui Grand Hotel Vesuvio e Romeo Hotel.
                  </p>
                </div>
                <div className="bg-white dark:bg-navy-dark shadow-lg p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-2 font-playfair text-navy-dark dark:text-white">Location Costiere</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Per matrimoni con vista mare, la nostra Rolls-Royce aggiunge eleganza alle location lungo la costa di {locationName}, tra cui Posillipo e Mergellina.
                  </p>
                </div>
                <div className="bg-white dark:bg-navy-dark shadow-lg p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-2 font-playfair text-navy-dark dark:text-white">Palazzi Storici</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Il nostro servizio completa la grandiosità dei matrimoni nei palazzi e nelle ville storiche di {locationName}, come Villa Pignatelli e Palazzo Reale.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-navy-dark text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 font-playfair">
                Perché Scegliere il Nostro Servizio Matrimoniale Rolls-Royce a {locationName}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Autisti locali di {locationName} che conoscono i percorsi migliori e i tempi ottimali</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Esperienza con le migliori location per matrimoni di {locationName} e i loro requisiti specifici</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Conoscenza delle location fotografiche più scenografiche intorno a {locationName}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Familiarità con i modelli di traffico di {locationName} per garantire un arrivo puntuale</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-cream/10 dark:bg-navy-light/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-playfair text-navy-dark dark:text-white text-center">
              Opportunità Fotografiche per Matrimoni a {locationName}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
              La nostra Rolls-Royce Ghost 6.6 offre lo sfondo perfetto per le tue foto di matrimonio in queste iconiche location di {locationName}:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-navy-dark shadow-lg rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-navy-dark/50 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white font-playfair">Lungomare</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 dark:text-gray-300">
                    La bellissima passeggiata sul mare offre viste mozzafiato sul Golfo di Napoli e sul Vesuvio, creando uno sfondo drammatico per le foto di matrimonio con la nostra Rolls-Royce.
                  </p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-navy-dark shadow-lg rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-navy-dark/50 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white font-playfair">Piazza del Plebiscito</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 dark:text-gray-300">
                    Questa grandiosa piazza storica offre un'ambientazione elegante per le foto di matrimonio, con la nostra Rolls-Royce che aggiunge al senso di occasione e lusso.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <TestimonialsSection 
        locale="it"
        title={`Cosa Dicono i Nostri Clienti di Matrimoni a ${locationName}`}
      />
      
      <CTASection 
        locale="it"
        title={`Pronto a Prenotare la Tua Auto per il Matrimonio a ${locationName}?`}
        description={`Contattaci oggi per assicurarti la tua Rolls-Royce Ghost 6.6 con autista professionale per il tuo giorno speciale a ${locationName}.`}
        buttonText="Prenota Ora"
      />
    </>
  );
}
