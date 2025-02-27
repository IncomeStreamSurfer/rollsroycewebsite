import Image from 'next/image';
import Link from 'next/link';
import { Locale } from '../../types';
import { getTranslations } from '../../data/translations';

interface HeroProps {
  locale: Locale;
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function Hero({
  locale,
  backgroundImage = '/images/wedding_photo_in_abdondoned_car_park.jpg',
  title,
  subtitle,
  ctaText,
  ctaLink,
}: HeroProps) {
  const translations = getTranslations(locale);
  
  // Use provided text or default to translations
  const heroTitle = title || translations.home.hero.title;
  const heroSubtitle = subtitle || translations.home.hero.subtitle;
  const heroCta = ctaText || translations.home.hero.cta;
  const heroLink = ctaLink || `/${locale}/contact`;

  return (
    <div className="relative h-screen flex items-center justify-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Rolls-Royce Luxury Car"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy-dark/60 z-10"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-20 text-center px-4 md:px-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-playfair">
          {heroTitle}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-cormorant">
          {heroSubtitle}
        </p>
        <Link
          href={heroLink}
          className="btn btn-primary text-lg px-8 py-4 rounded-full"
        >
          {heroCta}
        </Link>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
}
