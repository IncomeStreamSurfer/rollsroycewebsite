import Link from 'next/link';
import Image from 'next/image';
import { Locale } from '../../types';
import { getTranslations } from '../../data/translations';
import { services } from '../../utils/routes';
import { getServiceSlug } from '../../utils/i18n';

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const translations = getTranslations(locale);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <div className="flex items-center mb-4">
              <Image 
                src="/images/rolls_royce_logo_initials.png" 
                alt="Rolls-Royce Luxury Rentals" 
                width={50} 
                height={50} 
                className="mr-2"
              />
              <span className="font-playfair text-xl font-bold">
                {locale === 'en' ? 'Rolls-Royce Rentals' : 'Noleggio Rolls-Royce'}
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              {locale === 'en' 
                ? 'Luxury Rolls-Royce Ghost 6.6 rental with professional driver for weddings, birthdays, and private parties in Campania, Italy.'
                : 'Noleggio di lusso Rolls-Royce Ghost 6.6 con autista professionale per matrimoni, compleanni e feste private in Campania, Italia.'
              }
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gold transition-colors" aria-label="Facebook">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors" aria-label="Instagram">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-playfair">
              {locale === 'en' ? 'Quick Links' : 'Link Rapidi'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}`} className="text-gray-300 hover:text-gold transition-colors">
                  {translations.common.home}
                </Link>
              </li>
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    href={`/${locale}/${getServiceSlug(service, locale)}`}
                    className="text-gray-300 hover:text-gold transition-colors"
                  >
                    {translations.services[service as keyof typeof translations.services].title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={`/${locale}/contact`} className="text-gray-300 hover:text-gold transition-colors">
                  {translations.common.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-playfair">
              {translations.contact.info.title}
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{translations.contact.info.address}</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{translations.contact.info.email}</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{translations.contact.info.phone}</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{translations.contact.info.hours}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-playfair">
              {locale === 'en' ? 'Newsletter' : 'Newsletter'}
            </h3>
            <p className="text-gray-300 mb-4">
              {locale === 'en' 
                ? 'Subscribe to our newsletter for exclusive offers and updates.'
                : 'Iscriviti alla nostra newsletter per offerte esclusive e aggiornamenti.'
              }
            </p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder={locale === 'en' ? 'Your email address' : 'Il tuo indirizzo email'} 
                className="px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button 
                type="submit" 
                className="bg-gold hover:bg-gold/90 text-white px-4 py-2 rounded-md transition-colors"
              >
                {locale === 'en' ? 'Subscribe' : 'Iscriviti'}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            {translations.common.copyright.replace('2025', currentYear.toString())}
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-gold text-sm transition-colors">
              {translations.common.privacyPolicy}
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gold text-sm transition-colors">
              {translations.common.termsOfService}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
