import { Locale, Service } from '../../types';
import { getTranslations } from '../../data/translations';
import { locations, getUniqueProvinces, getLocationsByProvince } from '../../data/locations';
import LocationCard from '../ui/LocationCard';

interface LocationsSectionProps {
  locale: Locale;
  service: Service;
  title?: string;
  description?: string;
  limit?: number;
}

export default function LocationsSection({
  locale,
  service,
  title,
  description,
  limit,
}: LocationsSectionProps) {
  const translations = getTranslations(locale);
  
  // Use provided text or default to translations
  const sectionTitle = title || translations.home.locations.title;
  const sectionDescription = description || translations.home.locations.description;
  
  // Get unique provinces
  const provinces = getUniqueProvinces();
  
  return (
    <section className="py-16 bg-white dark:bg-navy-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair text-navy-dark dark:text-white">
            {sectionTitle}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {sectionDescription}
          </p>
        </div>
        
        <div className="space-y-12">
          {provinces.map((province) => {
            const provinceLocations = getLocationsByProvince(province);
            // Apply limit if provided
            const displayLocations = limit ? provinceLocations.slice(0, limit) : provinceLocations;
            
            return (
              <div key={province} className="mb-8">
                <h3 className="text-2xl font-bold mb-6 font-playfair text-navy-dark dark:text-white border-b border-gold pb-2">
                  {province}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {displayLocations.map((location) => (
                    <LocationCard
                      key={location.slug}
                      locale={locale}
                      service={service}
                      locationSlug={location.slug}
                      city={location.city}
                      province={location.province}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
