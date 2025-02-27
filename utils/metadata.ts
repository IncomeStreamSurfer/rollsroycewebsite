import { Metadata } from 'next';
import { Locale, MetadataProps } from '../types';
import { getAlternateUrls } from './i18n';

// Base metadata for the website
const baseMetadata = {
  title: {
    en: 'Rolls-Royce Luxury Car Rental | Ghost 6.6 with Driver',
    it: 'Noleggio Auto di Lusso Rolls-Royce | Ghost 6.6 con Autista',
  },
  description: {
    en: 'Luxury Rolls-Royce Ghost 6.6 rental with professional driver for weddings, birthdays, and private parties in Campania, Italy.',
    it: 'Noleggio di lusso Rolls-Royce Ghost 6.6 con autista professionale per matrimoni, compleanni e feste private in Campania, Italia.',
  },
  keywords: {
    en: ['Rolls-Royce rental', 'luxury car with driver', 'Ghost 6.6', 'wedding car', 'birthday luxury car', 'private party transportation', 'Campania'],
    it: ['Noleggio Rolls-Royce', 'auto di lusso con autista', 'Ghost 6.6', 'auto per matrimonio', 'auto di lusso per compleanno', 'trasporto per feste private', 'Campania'],
  },
};

// Generate metadata for a page
export function generateMetadata({
  title,
  description,
  keywords,
  alternateUrls,
}: MetadataProps, locale: Locale): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: alternateUrls[locale],
      languages: alternateUrls,
    },
    openGraph: {
      title,
      description,
      locale,
      alternateLocale: Object.keys(alternateUrls).filter(l => l !== locale) as Locale[],
      url: alternateUrls[locale],
      siteName: locale === 'en' ? 'Rolls-Royce Luxury Rentals' : 'Noleggio di Lusso Rolls-Royce',
      images: [
        {
          url: '/images/rolls_royce_logo_initials.png',
          width: 800,
          height: 600,
          alt: locale === 'en' ? 'Rolls-Royce Luxury Car' : 'Auto di Lusso Rolls-Royce',
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/rolls_royce_logo_initials.png'],
    },
  };
}

// Generate service page metadata
export function generateServiceMetadata(service: string, locale: Locale, path: string): Metadata {
  const serviceMetadata = {
    birthdays: {
      title: {
        en: 'Rolls-Royce for Birthdays | Luxury Car Rental with Driver',
        it: 'Rolls-Royce per Compleanni | Noleggio Auto di Lusso con Autista',
      },
      description: {
        en: 'Make your birthday special with our Rolls-Royce Ghost 6.6 luxury car rental with professional driver. Available in Campania, Italy.',
        it: 'Rendi il tuo compleanno speciale con il nostro noleggio di auto di lusso Rolls-Royce Ghost 6.6 con autista professionale. Disponibile in Campania, Italia.',
      },
      keywords: {
        en: ['birthday Rolls-Royce', 'luxury birthday car', 'Ghost 6.6 birthday', 'special birthday transportation', 'Campania birthday service'],
        it: ['Rolls-Royce per compleanno', 'auto di lusso per compleanno', 'Ghost 6.6 compleanno', 'trasporto speciale per compleanno', 'servizio compleanno Campania'],
      },
    },
    weddings: {
      title: {
        en: 'Rolls-Royce for Weddings | Luxury Wedding Car with Driver',
        it: 'Rolls-Royce per Matrimoni | Auto di Lusso per Matrimonio con Autista',
      },
      description: {
        en: 'Arrive in style on your wedding day with our Rolls-Royce Ghost 6.6 luxury car rental with professional driver. Available throughout Campania, Italy.',
        it: 'Arriva con stile nel giorno del tuo matrimonio con il nostro noleggio di auto di lusso Rolls-Royce Ghost 6.6 con autista professionale. Disponibile in tutta la Campania, Italia.',
      },
      keywords: {
        en: ['wedding Rolls-Royce', 'luxury wedding car', 'Ghost 6.6 wedding', 'wedding transportation', 'Campania wedding service'],
        it: ['Rolls-Royce per matrimonio', 'auto di lusso per matrimonio', 'Ghost 6.6 matrimonio', 'trasporto matrimonio', 'servizio matrimonio Campania'],
      },
    },
    'private-parties': {
      title: {
        en: 'Rolls-Royce for Private Parties | Luxury Car Rental with Driver',
        it: 'Rolls-Royce per Feste Private | Noleggio Auto di Lusso con Autista',
      },
      description: {
        en: 'Elevate your private party with our Rolls-Royce Ghost 6.6 luxury car rental with professional driver. Available throughout Campania, Italy.',
        it: 'Eleva la tua festa privata con il nostro noleggio di auto di lusso Rolls-Royce Ghost 6.6 con autista professionale. Disponibile in tutta la Campania, Italia.',
      },
      keywords: {
        en: ['private party Rolls-Royce', 'luxury party car', 'Ghost 6.6 private event', 'party transportation', 'Campania party service'],
        it: ['Rolls-Royce per festa privata', 'auto di lusso per festa', 'Ghost 6.6 evento privato', 'trasporto per festa', 'servizio festa Campania'],
      },
    },
  };

  const alternateUrls = getAlternateUrls(path);

  return generateMetadata({
    title: serviceMetadata[service as keyof typeof serviceMetadata]?.title[locale] || baseMetadata.title[locale],
    description: serviceMetadata[service as keyof typeof serviceMetadata]?.description[locale] || baseMetadata.description[locale],
    keywords: [
      ...baseMetadata.keywords[locale],
      ...(serviceMetadata[service as keyof typeof serviceMetadata]?.keywords[locale] || []),
    ],
    alternateUrls,
  }, locale);
}

// Generate location page metadata
export function generateLocationMetadata(service: string, location: string, locale: Locale, path: string): Metadata {
  const serviceMetadata = {
    birthdays: {
      title: {
        en: `Rolls-Royce for Birthdays in ${location} | Luxury Car Rental with Driver`,
        it: `Rolls-Royce per Compleanni a ${location} | Noleggio Auto di Lusso con Autista`,
      },
      description: {
        en: `Make your birthday special in ${location} with our Rolls-Royce Ghost 6.6 luxury car rental with professional driver. Premium service in Campania, Italy.`,
        it: `Rendi il tuo compleanno speciale a ${location} con il nostro noleggio di auto di lusso Rolls-Royce Ghost 6.6 con autista professionale. Servizio premium in Campania, Italia.`,
      },
      keywords: {
        en: [`${location} birthday Rolls-Royce`, `luxury birthday car ${location}`, `Ghost 6.6 birthday ${location}`, `${location} special birthday transportation`, `Campania ${location} birthday service`],
        it: [`Rolls-Royce per compleanno ${location}`, `auto di lusso per compleanno ${location}`, `Ghost 6.6 compleanno ${location}`, `trasporto speciale per compleanno ${location}`, `servizio compleanno ${location} Campania`],
      },
    },
    weddings: {
      title: {
        en: `Rolls-Royce for Weddings in ${location} | Luxury Wedding Car with Driver`,
        it: `Rolls-Royce per Matrimoni a ${location} | Auto di Lusso per Matrimonio con Autista`,
      },
      description: {
        en: `Arrive in style on your wedding day in ${location} with our Rolls-Royce Ghost 6.6 luxury car rental with professional driver. Premium service in Campania, Italy.`,
        it: `Arriva con stile nel giorno del tuo matrimonio a ${location} con il nostro noleggio di auto di lusso Rolls-Royce Ghost 6.6 con autista professionale. Servizio premium in Campania, Italia.`,
      },
      keywords: {
        en: [`${location} wedding Rolls-Royce`, `luxury wedding car ${location}`, `Ghost 6.6 wedding ${location}`, `${location} wedding transportation`, `Campania ${location} wedding service`],
        it: [`Rolls-Royce per matrimonio ${location}`, `auto di lusso per matrimonio ${location}`, `Ghost 6.6 matrimonio ${location}`, `trasporto matrimonio ${location}`, `servizio matrimonio ${location} Campania`],
      },
    },
    'private-parties': {
      title: {
        en: `Rolls-Royce for Private Parties in ${location} | Luxury Car Rental with Driver`,
        it: `Rolls-Royce per Feste Private a ${location} | Noleggio Auto di Lusso con Autista`,
      },
      description: {
        en: `Elevate your private party in ${location} with our Rolls-Royce Ghost 6.6 luxury car rental with professional driver. Premium service in Campania, Italy.`,
        it: `Eleva la tua festa privata a ${location} con il nostro noleggio di auto di lusso Rolls-Royce Ghost 6.6 con autista professionale. Servizio premium in Campania, Italia.`,
      },
      keywords: {
        en: [`${location} private party Rolls-Royce`, `luxury party car ${location}`, `Ghost 6.6 private event ${location}`, `${location} party transportation`, `Campania ${location} party service`],
        it: [`Rolls-Royce per festa privata ${location}`, `auto di lusso per festa ${location}`, `Ghost 6.6 evento privato ${location}`, `trasporto per festa ${location}`, `servizio festa ${location} Campania`],
      },
    },
  };

  const alternateUrls = getAlternateUrls(path);

  return generateMetadata({
    title: serviceMetadata[service as keyof typeof serviceMetadata]?.title[locale] || `Rolls-Royce in ${location}`,
    description: serviceMetadata[service as keyof typeof serviceMetadata]?.description[locale] || `Luxury Rolls-Royce service in ${location}`,
    keywords: [
      ...baseMetadata.keywords[locale],
      ...(serviceMetadata[service as keyof typeof serviceMetadata]?.keywords[locale] || []),
    ],
    alternateUrls,
  }, locale);
}
