import Link from 'next/link';
import { Locale } from '../../types';
import { getTranslations } from '../../data/translations';

interface CTASectionProps {
  locale: Locale;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: 'default' | 'alt';
}

export default function CTASection({
  locale,
  title,
  description,
  buttonText,
  buttonLink,
  variant = 'default',
}: CTASectionProps) {
  const translations = getTranslations(locale);
  
  // Use provided text or default to translations
  const ctaTitle = title || translations.home.cta.title;
  const ctaDescription = description || translations.home.cta.description;
  const ctaButtonText = buttonText || translations.home.cta.button;
  const ctaButtonLink = buttonLink || `/${locale}/contact`;
  
  const isDefault = variant === 'default';
  
  return (
    <section className={`py-16 ${
      isDefault 
        ? 'bg-navy-dark text-white' 
        : 'bg-cream dark:bg-navy-light text-navy-dark dark:text-white'
    }`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
          {ctaTitle}
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          {ctaDescription}
        </p>
        <Link
          href={ctaButtonLink}
          className={`btn ${
            isDefault 
              ? 'bg-gold hover:bg-gold/90 text-white' 
              : 'bg-burgundy hover:bg-burgundy/90 text-white'
          } px-8 py-3 rounded-full text-lg`}
        >
          {ctaButtonText}
        </Link>
      </div>
    </section>
  );
}
