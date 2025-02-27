import { Locale } from '../../types';
import { getTranslations } from '../../data/translations';
import FeatureCard, { FeatureIcons } from '../ui/FeatureCard';

interface FeaturesSectionProps {
  locale: Locale;
  title?: string;
  variant?: 'default' | 'alt';
}

export default function FeaturesSection({
  locale,
  title,
  variant = 'default',
}: FeaturesSectionProps) {
  const translations = getTranslations(locale);
  
  // Use provided title or default to translations
  const sectionTitle = title || translations.home.features.title;
  
  // Get feature translations
  const features = [
    {
      title: translations.home.features.professionalDrivers.title,
      description: translations.home.features.professionalDrivers.description,
      icon: FeatureIcons.Driver,
    },
    {
      title: translations.home.features.luxuryExperience.title,
      description: translations.home.features.luxuryExperience.description,
      icon: FeatureIcons.Car,
    },
    {
      title: translations.home.features.customizedService.title,
      description: translations.home.features.customizedService.description,
      icon: FeatureIcons.Customization,
    },
    {
      title: translations.home.features.reliability.title,
      description: translations.home.features.reliability.description,
      icon: FeatureIcons.Reliability,
    },
  ];
  
  const isDefault = variant === 'default';
  
  return (
    <section className={`py-16 ${
      isDefault 
        ? 'bg-white dark:bg-navy-dark' 
        : 'bg-cream/20 dark:bg-navy-light/10'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair text-navy-dark dark:text-white">
            {sectionTitle}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              variant={variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
