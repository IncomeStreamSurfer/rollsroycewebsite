import { Locale } from '../../types';
import { getTranslations } from '../../data/translations';
import { services } from '../../utils/routes';
import ServiceCard from '../ui/ServiceCard';

interface ServicesSectionProps {
  locale: Locale;
  title?: string;
  description?: string;
}

export default function ServicesSection({
  locale,
  title,
  description,
}: ServicesSectionProps) {
  const translations = getTranslations(locale);
  
  // Use provided text or default to translations
  const sectionTitle = title || translations.home.services.title;
  const sectionDescription = description || translations.home.services.description;
  
  return (
    <section className="py-16 bg-gray-50 dark:bg-navy-dark/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair text-navy-dark dark:text-white">
            {sectionTitle}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {sectionDescription}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service}
              locale={locale}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
