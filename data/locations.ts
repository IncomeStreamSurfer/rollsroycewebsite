import { Locale, Location } from '../types';

// Define the locations from the task
export const locations: Location[] = [
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

// Location name translations
export const locationNameTranslations: Record<string, Record<Locale, string>> = {
  'campania': {
    en: 'Campania',
    it: 'Campania',
  },
  'avellino': {
    en: 'Avellino',
    it: 'Avellino',
  },
  'ariano-irpino': {
    en: 'Ariano Irpino',
    it: 'Ariano Irpino',
  },
  'montoro': {
    en: 'Montoro',
    it: 'Montoro',
  },
  'benevento': {
    en: 'Benevento',
    it: 'Benevento',
  },
  'montesarchio': {
    en: 'Montesarchio',
    it: 'Montesarchio',
  },
  'san-giorgio-del-sannio': {
    en: 'San Giorgio del Sannio',
    it: 'San Giorgio del Sannio',
  },
  'caserta': {
    en: 'Caserta',
    it: 'Caserta',
  },
  'aversa': {
    en: 'Aversa',
    it: 'Aversa',
  },
  'marcianise': {
    en: 'Marcianise',
    it: 'Marcianise',
  },
  'salerno': {
    en: 'Salerno',
    it: 'Salerno',
  },
  'cava-de-tirreni': {
    en: 'Cava de\' Tirreni',
    it: 'Cava de\' Tirreni',
  },
  'battipaglia': {
    en: 'Battipaglia',
    it: 'Battipaglia',
  },
  'naples': {
    en: 'Naples',
    it: 'Napoli',
  },
  'giugliano-in-campania': {
    en: 'Giugliano in Campania',
    it: 'Giugliano in Campania',
  },
  'torre-del-greco': {
    en: 'Torre del Greco',
    it: 'Torre del Greco',
  },
};

// Province name translations
export const provinceNameTranslations: Record<string, Record<Locale, string>> = {
  'Region of Campania': {
    en: 'Region of Campania',
    it: 'Regione Campania',
  },
  'Province of Avellino': {
    en: 'Province of Avellino',
    it: 'Provincia di Avellino',
  },
  'Province of Benevento': {
    en: 'Province of Benevento',
    it: 'Provincia di Benevento',
  },
  'Province of Caserta': {
    en: 'Province of Caserta',
    it: 'Provincia di Caserta',
  },
  'Province of Salerno': {
    en: 'Province of Salerno',
    it: 'Provincia di Salerno',
  },
  'Metropolitan City of Naples': {
    en: 'Metropolitan City of Naples',
    it: 'Città Metropolitana di Napoli',
  },
};

// Location slug translations
export const locationSlugTranslations: Record<Locale, Record<string, string>> = {
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

// Function to get location name by locale
export function getLocationName(slug: string, locale: Locale): string {
  return locationNameTranslations[slug]?.[locale] || slug;
}

// Function to get province name by locale
export function getProvinceName(province: string, locale: Locale): string {
  return provinceNameTranslations[province]?.[locale] || province;
}

// Function to get location slug by locale
export function getLocationSlug(slug: string, locale: Locale): string {
  return locationSlugTranslations[locale][slug] || slug;
}

// Get location by slug
export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find(location => location.slug === slug);
}

// Get all locations by province
export function getLocationsByProvince(province: string): Location[] {
  return locations.filter(location => location.province === province);
}

// Get all unique provinces
export function getUniqueProvinces(): string[] {
  const provinces = new Set<string>();
  
  for (const location of locations) {
    provinces.add(location.province);
  }
  
  return Array.from(provinces);
}

export default locations;
