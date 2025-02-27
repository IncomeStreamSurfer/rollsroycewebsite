import Image from 'next/image';
import Link from 'next/link';
import { Locale, Service } from '../../types';
import { getServiceSlug } from '../../utils/i18n';
import { getTranslations } from '../../data/translations';

interface ServiceCardProps {
  locale: Locale;
  service: Service;
  imageUrl?: string;
}

export default function ServiceCard({ locale, service, imageUrl }: ServiceCardProps) {
  const translations = getTranslations(locale);
  const serviceTranslation = translations.services[service as keyof typeof translations.services];
  const serviceSlug = getServiceSlug(service, locale);
  
  // Default images for each service if not provided
  const defaultImages: Record<Service, string> = {
    'birthdays': '/images/rolls_royce_logo_initials.png',
    'weddings': '/images/wedding_photo_in_abdondoned_car_park.jpg',
    'private-parties': '/images/Rolls_royce_motorcars_logo.svg.png',
  };
  
  const image = imageUrl || defaultImages[service];

  return (
    <div className="bg-white dark:bg-navy-dark rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="relative h-64">
        <Image
          src={image}
          alt={serviceTranslation.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 font-playfair text-navy-dark dark:text-white">
          {serviceTranslation.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {serviceTranslation.description}
        </p>
        <Link
          href={`/${locale}/${serviceSlug}`}
          className="btn btn-outline inline-block"
        >
          {translations.common.learnMore}
        </Link>
      </div>
    </div>
  );
}
