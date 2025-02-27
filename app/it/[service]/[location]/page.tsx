import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Hero from '../../../../components/sections/Hero';
import FeaturesSection from '../../../../components/sections/FeaturesSection';
import TestimonialsSection from '../../../../components/sections/TestimonialsSection';
import CTASection from '../../../../components/sections/CTASection';
import { getServiceInfo } from '../../../../data/services';
import { getLocationName, getLocationBySlug } from '../../../../data/locations';
import { generateLocationMetadata } from '../../../../utils/metadata';
import { services, locations } from '../../../../utils/routes';
import { getServiceSlug } from '../../../../utils/i18n';

type Props = {
  params: {
    service: string;
    location: string;
  };
};

export async function generateStaticParams() {
  const params: { service: string; location: string }[] = [];
  
  for (const service of services) {
    const serviceSlug = getServiceSlug(service, 'it');
    
    for (const location of locations) {
      params.push({
        service: serviceSlug,
        location: location.slug,
      });
    }
  }
  
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Find the service and location
  const service = services.find(s => getServiceSlug(s, 'it') === params.service);
  const location = locations.find(l => l.slug === params.location);
  
  if (!service || !location) {
    return {};
  }
  
  return generateLocationMetadata(service, params.location, 'it', `/${params.service}/${params.location}`);
}

export default function ServiceLocationPage({ params }: Props) {
  // Find the service by matching the Italian slug
  const service = services.find(s => getServiceSlug(s, 'it') === params.service);
  
  // Find the location
  const location = getLocationBySlug(params.location);
  
  // If service or location not found, return 404
  if (!service || !location) {
    notFound();
  }
  
  const serviceInfo = getServiceInfo(service, 'it');
  const locationName = getLocationName(params.location, 'it');
  
  return (
    <>
      <Hero 
        locale="it"
        title={`Elegante Rolls-Royce per ${serviceInfo.title} a ${locationName}`}
        subtitle={`Rendi il tuo ${service.toLowerCase()} a ${locationName} ancora più speciale con la nostra lussuosa Rolls-Royce Ghost 6.6. Il nostro servizio di autista professionale garantisce che tu arrivi con stile ed eleganza nel tuo giorno speciale.`}
        ctaText={`Prenota per il Tuo ${serviceInfo.title} a ${locationName}`}
      />
      
      <section className="py-16 bg-white dark:bg-navy-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-playfair text-navy-dark dark:text-white text-center">
              Servizio Auto di Lusso per {serviceInfo.title} a {locationName}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  {locationName}, {location.province === 'Metropolitan City of Naples' ? 'la vibrante capitale della regione Campania' : `una bellissima città nella ${location.province}`}, offre uno sfondo mozzafiato per il tuo {service.toLowerCase()}. Il nostro servizio di noleggio Rolls-Royce Ghost 6.6 aggiunge il tocco perfetto di lusso per completare la bellezza e l'eleganza di questa {location.province === 'Metropolitan City of Naples' ? 'città storica' : 'affascinante località'}.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Che il tuo {service.toLowerCase()} si svolga in una delle {location.province === 'Metropolitan City of Naples' ? 'location storiche, eleganti palazzi o pittoresche location costiere' : 'bellissime location'} di {locationName}, il nostro servizio di autista professionale garantirà che tu arrivi con stile e comfort.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  La nostra conoscenza approfondita delle strade e delle location di {locationName} assicura un trasporto senza intoppi nel tuo giorno speciale, permettendoti di rilassarti e goderti ogni momento senza preoccuparti della logistica.
                </p>
              </div>
              <div className="relative h-80 md:h-96">
                <Image
                  src="/images/wedding_photo_in_abdondoned_car_park.jpg"
                  alt={`Rolls-Royce per ${serviceInfo.title} a ${locationName}`}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            
            <div className="bg-cream/10 dark:bg-navy-light/10 p-8 rounded-lg border border-gold/30 mb-12">
              <h3 className="text-2xl font-bold mb-4 font-playfair text-navy-dark dark:text-white">
                Il Nostro Pacchetto {serviceInfo.title} a {locationName} Include:
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
                Location Popolari per {serviceInfo.title} a {locationName}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-navy-dark shadow-lg p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-2 font-playfair text-navy-dark dark:text-white">Hotel di Lusso</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Forniamo regolarmente servizio per {service.toLowerCase()} nei migliori hotel e location di {locationName}, garantendo un'esperienza premium.
                  </p>
                </div>
                <div className="bg-white dark:bg-navy-dark shadow-lg p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-2 font-playfair text-navy-dark dark:text-white">Location Storiche</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Il nostro servizio Rolls-Royce completa la grandiosità dei {service.toLowerCase()} nelle location e nei luoghi storici di {locationName}.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-navy-dark text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 font-playfair">
                Perché Scegliere il Nostro Servizio Rolls-Royce per {serviceInfo.title} a {locationName}
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
                  <span className="text-gray-300">Esperienza con le migliori location per {service.toLowerCase()} di {locationName} e i loro requisiti specifici</span>
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
      
      <FeaturesSection 
        locale="it"
        title={`Caratteristiche del Nostro Servizio ${serviceInfo.title} a ${locationName}`}
        variant="alt"
      />
      
      <TestimonialsSection 
        locale="it"
        title={`Cosa Dicono i Nostri Clienti di ${serviceInfo.title} a ${locationName}`}
      />
      
      <CTASection 
        locale="it"
        title={`Pronto a Prenotare la Tua Auto per ${serviceInfo.title} a ${locationName}?`}
        description={`Contattaci oggi per assicurarti la tua Rolls-Royce Ghost 6.6 con autista professionale per il tuo giorno speciale a ${locationName}.`}
        buttonText="Prenota Ora"
      />
    </>
  );
}
