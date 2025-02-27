import { Metadata } from 'next';
import Hero from '../../components/sections/Hero';
import ServicesSection from '../../components/sections/ServicesSection';
import FeaturesSection from '../../components/sections/FeaturesSection';
import TestimonialsSection from '../../components/sections/TestimonialsSection';
import CTASection from '../../components/sections/CTASection';
import { getAlternateUrls } from '../../utils/i18n';

export const metadata: Metadata = {
  title: 'Rolls-Royce Luxury Car Rental | Ghost 6.6 with Driver',
  description: 'Luxury Rolls-Royce Ghost 6.6 rental with professional driver for weddings, birthdays, and private parties in Campania, Italy.',
  keywords: ['Rolls-Royce rental', 'luxury car with driver', 'Ghost 6.6', 'wedding car', 'birthday luxury car', 'private party transportation', 'Campania'],
  alternates: {
    canonical: '/en',
    languages: {
      'en': '/en',
      'it': '/it',
    },
  },
};

export default function EnglishHomePage() {
  return (
    <>
      <Hero locale="en" />
      
      <div className="py-12 bg-white dark:bg-navy-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair text-navy-dark dark:text-white">
              Experience Unparalleled Luxury
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Elevate your special occasions with our premium Rolls-Royce Ghost 6.6 rental service. 
              Our professional drivers ensure a seamless and sophisticated experience for weddings, 
              birthdays, and private parties throughout the Campania region.
            </p>
          </div>
        </div>
      </div>
      
      <ServicesSection locale="en" />
      
      <FeaturesSection locale="en" />
      
      <TestimonialsSection locale="en" />
      
      <CTASection locale="en" />
    </>
  );
}
