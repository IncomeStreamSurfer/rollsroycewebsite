import { Locale, Service } from '../types';
import { getServiceSlug } from './i18n';

// Define the locations from the task
export const locations = [
  { region: 'Region of Campania', province: 'Region of Campania', city: 'Campania', slug: 'campania' },
  { region: 'Province of Avellino', province: 'Province of Avellino', city: 'Avellino', slug: 'avellino' },
  { region: 'Province of Avellino', province: 'Province of Avellino', city: 'Ariano Irpino', slug: 'ariano-irpino' },
  { region: 'Province of Avellino', province: 'Province of Avellino', city: 'Montoro', slug: 'montoro' },
  { region: 'Province of Benevento', province: 'Province of Benevento', city: 'Benevento', slug: 'benevento' },
  { region: 'Province of Benevento', province: 'Province of Benevento', city: 'Montesarchio', slug: 'montesarchio' },
  { region: 'Province of Benevento', province: 'Province of Benevento', city: 'San Giorgio del Sannio', slug: 'san-giorgio-del-sannio' },
  { region: 'Province of Caserta', province: 'Province of Caserta', city: 'Caserta', slug: 'caserta' },
  { region: 'Province of Caserta', province: 'Province of Caserta', city: 'Aversa', slug: 'aversa' },
  { region: 'Province of Caserta', province: 'Province of Caserta', city: 'Marcianise', slug: 'marcianise' },
  { region: 'Province of Salerno', province: 'Province of Salerno', city: 'Salerno', slug: 'salerno' },
  { region: 'Province of Salerno', province: 'Province of Salerno', city: 'Cava de\' Tirreni', slug: 'cava-de-tirreni' },
  { region: 'Province of Salerno', province: 'Province of Salerno', city: 'Battipaglia', slug: 'battipaglia' },
  { region: 'Metropolitan City of Naples', province: 'Metropolitan City of Naples', city: 'Naples', slug: 'naples' },
  { region: 'Metropolitan City of Naples', province: 'Metropolitan City of Naples', city: 'Giugliano in Campania', slug: 'giugliano-in-campania' },
  { region: 'Metropolitan City of Naples', province: 'Metropolitan City of Naples', city: 'Torre del Greco', slug: 'torre-del-greco' },
];

// Define the services
export const services: Service[] = ['birthdays', 'weddings', 'private-parties'];

// Location slug translations
export const locationSlugTranslations = {
  en: {
    'campania': 'campania',
    'avellino': 'avellino',
    'ariano-irpino': 'ariano-irpino',
    'montoro': 'montoro',
    'benevento': 'benevento',
    'montesarchio': 'montesarchio',
    'san-giorgio-del-sannio': 'san-giorgio-del-sannio',
    'caserta': 'caserta',
    'aversa': 'aversa',
    'marcianise': 'marcianise',
    'salerno': 'salerno',
    'cava-de-tirreni': 'cava-de-tirreni',
    'battipaglia': 'battipaglia',
    'naples': 'naples',
    'giugliano-in-campania': 'giugliano-in-campania',
    'torre-del-greco': 'torre-del-greco',
  },
  it: {
    'campania': 'campania',
    'avellino': 'avellino',
    'ariano-irpino': 'ariano-irpino',
    'montoro': 'montoro',
    'benevento': 'benevento',
    'montesarchio': 'montesarchio',
    'san-giorgio-del-sannio': 'san-giorgio-del-sannio',
    'caserta': 'caserta',
    'aversa': 'aversa',
    'marcianise': 'marcianise',
    'salerno': 'salerno',
    'cava-de-tirreni': 'cava-de-tirreni',
    'battipaglia': 'battipaglia',
    'naples': 'napoli',
    'giugliano-in-campania': 'giugliano-in-campania',
    'torre-del-greco': 'torre-del-greco',
  },
};

// Function to get location slug by locale
export function getLocationSlug(location: string, locale: Locale): string {
  return locationSlugTranslations[locale][location as keyof typeof locationSlugTranslations['en']] || location;
}

// Generate all possible service+location combinations for static paths
export function generateServiceLocationPaths() {
  const paths: { service: string; location: string; }[] = [];
  
  for (const service of services) {
    for (const location of locations) {
      paths.push({
        service,
        location: location.slug,
      });
    }
  }
  
  return paths;
}

// Generate all possible service+location combinations for static params
export function generateStaticParams(locale: Locale) {
  const params: { service: string; location: string; }[] = [];
  
  for (const service of services) {
    const serviceSlug = getServiceSlug(service, locale);
    
    for (const location of locations) {
      const locationSlug = getLocationSlug(location.slug, locale);
      
      params.push({
        service: serviceSlug,
        location: locationSlug,
      });
    }
  }
  
  return params;
}

// Get location by slug
export function getLocationBySlug(slug: string) {
  return locations.find(location => location.slug === slug);
}

// Get all locations by province
export function getLocationsByProvince(province: string) {
  return locations.filter(location => location.province === province);
}

// Get all unique provinces
export function getUniqueProvinces() {
  const provinces = new Set<string>();
  
  for (const location of locations) {
    provinces.add(location.province);
  }
  
  return Array.from(provinces);
}
