import { Locale, Service } from '../types';
import { getServiceSlug } from './i18n';

// Import locations from data/locations.ts instead of duplicating them
import locationsData from '../data/locations';

// Re-export the locations
export const locations = locationsData;

// Define the services
export const services: Service[] = ['birthdays', 'weddings', 'private-parties'];

// Import location slug translations from data/locations.ts
import { locationSlugTranslations, getLocationSlug as getLocationSlugFromData } from '../data/locations';

// Re-export the function
export const getLocationSlug = getLocationSlugFromData;

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
