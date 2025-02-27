import { Locale } from '../types';

// Define available locales
export const locales: Locale[] = ['en', 'it'];
export const defaultLocale: Locale = 'en';

// Dictionary type for translations
export type Dictionary = {
  [key: string]: string | Dictionary;
};

// Function to get nested dictionary values
export function getDictionaryValue(
  dictionary: Dictionary,
  key: string,
  params?: Record<string, string>
): string {
  const keys = key.split('.');
  let value: any = dictionary;

  for (const k of keys) {
    if (value[k] === undefined) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    value = value[k];
  }

  if (typeof value !== 'string') {
    console.warn(`Translation value is not a string: ${key}`);
    return key;
  }

  // Replace parameters if provided
  if (params) {
    return Object.entries(params).reduce(
      (acc, [paramKey, paramValue]) => 
        acc.replace(new RegExp(`{${paramKey}}`, 'g'), paramValue),
      value
    );
  }

  return value;
}

// Function to get alternate URLs for hreflang tags
export function getAlternateUrls(path: string): { [key: string]: string } {
  const alternateUrls: { [key: string]: string } = {};
  
  for (const locale of locales) {
    alternateUrls[locale] = `/${locale}${path}`;
  }
  
  return alternateUrls;
}

// Service name translations
export const serviceTranslations = {
  en: {
    birthdays: 'Birthdays',
    weddings: 'Weddings',
    'private-parties': 'Private Parties',
  },
  it: {
    birthdays: 'Compleanni',
    weddings: 'Matrimoni',
    'private-parties': 'Feste Private',
  },
};

// Service slug translations
export const serviceSlugTranslations = {
  en: {
    birthdays: 'birthdays',
    weddings: 'weddings',
    'private-parties': 'private-parties',
  },
  it: {
    birthdays: 'compleanni',
    weddings: 'matrimoni',
    'private-parties': 'feste-private',
  },
};

// Function to get service slug by locale
export function getServiceSlug(service: string, locale: Locale): string {
  return serviceSlugTranslations[locale][service as keyof typeof serviceSlugTranslations['en']] || service;
}

// Function to get service name by locale
export function getServiceName(service: string, locale: Locale): string {
  return serviceTranslations[locale][service as keyof typeof serviceTranslations['en']] || service;
}
