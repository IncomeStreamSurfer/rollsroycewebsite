'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Locale } from '../../types';
import { getTranslations } from '../../data/translations';
import { services } from '../../utils/routes';
import { getServiceSlug } from '../../utils/i18n';

interface HeaderProps {
  locale: Locale;
}

export default function Header({ locale }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const translations = getTranslations(locale);
  const alternateLocale: Locale = locale === 'en' ? 'it' : 'en';
  
  // Get the current path without the locale prefix
  const pathWithoutLocale = pathname.replace(`/${locale}`, '');
  
  // Handle dynamic routes for service+location pages
  let alternateUrl = `/${alternateLocale}${pathWithoutLocale}`;
  
  // Check if this is a service page (without location)
  const serviceMatch = pathname.match(new RegExp(`/${locale}/([^/]+)$`));
  if (serviceMatch) {
    const [, serviceSlug] = serviceMatch;
    
    // Find the original service from the slug
    const service = services.find(s => getServiceSlug(s, locale) === serviceSlug);
    
    if (service) {
      // Get the translated service slug for the alternate locale
      const translatedServiceSlug = getServiceSlug(service, alternateLocale);
      
      // Create the alternate URL with the translated service slug
      alternateUrl = `/${alternateLocale}/${translatedServiceSlug}`;
    }
  }
  
  // Check if this is a service+location page
  const serviceLocationMatch = pathname.match(new RegExp(`/${locale}/([^/]+)/([^/]+)$`));
  if (serviceLocationMatch) {
    const [, serviceSlug, locationSlug] = serviceLocationMatch;
    
    // Find the original service from the slug
    const service = services.find(s => getServiceSlug(s, locale) === serviceSlug);
    
    if (service) {
      // Get the translated service slug for the alternate locale
      const translatedServiceSlug = getServiceSlug(service, alternateLocale);
      
      // Create the alternate URL with the translated service slug
      alternateUrl = `/${alternateLocale}/${translatedServiceSlug}/${locationSlug}`;
    }
  }

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-gray-900/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center">
          <Image 
            src="/images/rolls_royce_logo_initials.png" 
            alt="Rolls-Royce Luxury Rentals" 
            width={50} 
            height={50} 
            className="mr-2"
          />
          <span className={`font-playfair text-xl font-bold ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}>
            {locale === 'en' ? 'Rolls-Royce Rentals' : 'Noleggio Rolls-Royce'}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href={`/${locale}`} 
            className={`${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'} hover:text-gold transition-colors`}
          >
            {translations.common.home}
          </Link>
          
          <div className="relative group">
            <button 
              className={`${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'} hover:text-gold transition-colors flex items-center`}
            >
              {translations.common.services}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-900 shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-200 origin-top-left z-50">
              {services.map((service) => (
                <Link 
                  key={service}
                  href={`/${locale}/${getServiceSlug(service, locale)}`}
                  className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {translations.services[service as keyof typeof translations.services].title}
                </Link>
              ))}
            </div>
          </div>
          
          <Link 
            href={`/${locale}/contact`} 
            className={`${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'} hover:text-gold transition-colors`}
          >
            {translations.common.contact}
          </Link>
          
          <Link 
            href={alternateUrl}
            className={`${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'} hover:text-gold transition-colors`}
          >
            {translations.common.languageSwitcher}
          </Link>
          
          <Link 
            href={`/${locale}/contact`} 
            className="bg-gold hover:bg-gold/90 text-white px-6 py-2 rounded-full transition-colors"
          >
            {translations.common.callToAction}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-6 w-6 ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-navy-dark text-white overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen py-4' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <Link 
            href={`/${locale}`} 
            className="py-2 hover:text-gold transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {translations.common.home}
          </Link>
          
          {services.map((service) => (
            <Link 
              key={service}
              href={`/${locale}/${getServiceSlug(service, locale)}`}
              className="py-2 pl-4 hover:text-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {translations.services[service as keyof typeof translations.services].title}
            </Link>
          ))}
          
          <Link 
            href={`/${locale}/contact`} 
            className="py-2 hover:text-gold transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {translations.common.contact}
          </Link>
          
          <Link 
            href={alternateUrl}
            className="py-2 hover:text-gold transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {translations.common.languageSwitcher}
          </Link>
          
          <Link 
            href={`/${locale}/contact`} 
            className="bg-gold hover:bg-gold/90 text-white px-6 py-2 rounded-full transition-colors text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            {translations.common.callToAction}
          </Link>
        </div>
      </div>
    </header>
  );
}
