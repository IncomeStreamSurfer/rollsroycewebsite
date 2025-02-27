import Link from 'next/link';
import { Locale, Service } from '../../types';
import { getServiceSlug } from '../../utils/i18n';
import { getTranslations } from '../../data/translations';
import { getLocationName, getProvinceName } from '../../data/locations';

interface LocationCardProps {
  locale: Locale;
  service: Service;
  locationSlug: string;
  city: string;
  province: string;
}

export default function LocationCard({ locale, service, locationSlug, city, province }: LocationCardProps) {
  const translations = getTranslations(locale);
  const serviceSlug = getServiceSlug(service, locale);
  const cityName = getLocationName(locationSlug, locale);
  const provinceName = getProvinceName(province, locale);
  
  return (
    <div className="bg-white dark:bg-navy-dark rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 border border-gray-200 dark:border-gray-800">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 font-playfair text-navy-dark dark:text-white">
          {cityName}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
          {provinceName}
        </p>
        <Link
          href={`/${locale}/${serviceSlug}/${locationSlug}`}
          className="text-gold hover:text-gold/80 font-medium flex items-center transition-colors"
        >
          {translations.common.viewDetails}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
