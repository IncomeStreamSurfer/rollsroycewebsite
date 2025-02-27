import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '../../../../components/sections/Hero';
import FeaturesSection from '../../../../components/sections/FeaturesSection';
import TestimonialsSection from '../../../../components/sections/TestimonialsSection';
import CTASection from '../../../../components/sections/CTASection';
import { getServiceInfo } from '../../../../data/services';
import { getLocationName } from '../../../../data/locations';
import { generateLocationMetadata } from '../../../../utils/metadata';
import { FeatureIcons } from '../../../../components/ui/FeatureCard';

export const metadata: Metadata = generateLocationMetadata('weddings', 'naples', 'en', '/weddings/naples');

export default function EnglishWeddingsNaplesPage() {
  const serviceInfo = getServiceInfo('weddings', 'en');
  const locationName = getLocationName('naples', 'en');
  
  return (
    <>
      <Hero 
        locale="en"
        title={`Elegant Rolls-Royce for Weddings in ${locationName}`}
        subtitle={`Make your wedding day in ${locationName} even more special with our luxurious Rolls-Royce Ghost 6.6. Our professional chauffeur service ensures you arrive in style and elegance on your most important day.`}
        ctaText={`Book for Your ${locationName} Wedding`}
      />
      
      <section className="py-16 bg-white dark:bg-navy-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-playfair text-navy-dark dark:text-white text-center">
              Luxury Wedding Car Service in {locationName}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  {locationName}, the vibrant capital of the Campania region, provides a stunning backdrop for your wedding day. Our Rolls-Royce Ghost 6.6 rental service adds the perfect touch of luxury to complement the beauty and romance of this historic city.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Whether your wedding is taking place in one of {locationName}'s historic churches, elegant palaces, or picturesque coastal venues, our professional chauffeur service will ensure you arrive in style and comfort.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Our intimate knowledge of {locationName}'s streets and venues ensures smooth transportation on your special day, allowing you to relax and enjoy every moment without worrying about logistics.
                </p>
              </div>
              <div className="relative h-80 md:h-96">
                <Image
                  src="/images/wedding_photo_in_abdondoned_car_park.jpg"
                  alt={`Rolls-Royce for Weddings in ${locationName}`}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            
            <div className="bg-cream/10 dark:bg-navy-light/10 p-8 rounded-lg border border-gold/30 mb-12">
              <h3 className="text-2xl font-bold mb-4 font-playfair text-navy-dark dark:text-white">
                Our {locationName} Wedding Package Includes:
              </h3>
              <ul className="space-y-3">
                {serviceInfo.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Local {locationName} chauffeur with extensive knowledge of the city</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Scenic route options through {locationName}'s most beautiful areas</span>
                </li>
              </ul>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 font-playfair text-navy-dark dark:text-white text-center">
                Popular Wedding Venues in {locationName}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-navy-dark shadow-lg p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-2 font-playfair text-navy-dark dark:text-white">Historic Center Churches</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Our Rolls-Royce service is perfect for weddings at {locationName}'s beautiful historic churches, including the Cathedral of Naples and Santa Chiara Basilica.
                  </p>
                </div>
                <div className="bg-white dark:bg-navy-dark shadow-lg p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-2 font-playfair text-navy-dark dark:text-white">Luxury Hotels</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    We regularly provide service to weddings at {locationName}'s finest hotels, including Grand Hotel Vesuvio and Romeo Hotel.
                  </p>
                </div>
                <div className="bg-white dark:bg-navy-dark shadow-lg p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-2 font-playfair text-navy-dark dark:text-white">Coastal Venues</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    For weddings with sea views, our Rolls-Royce adds elegance to venues along the {locationName} coastline, including Posillipo and Mergellina.
                  </p>
                </div>
                <div className="bg-white dark:bg-navy-dark shadow-lg p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-2 font-playfair text-navy-dark dark:text-white">Historic Palaces</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Our service complements the grandeur of weddings at {locationName}'s historic palaces and villas, such as Villa Pignatelli and Royal Palace.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-navy-dark text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 font-playfair">
                Why Choose Our Rolls-Royce Wedding Service in {locationName}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Local {locationName} drivers who know the best routes and timing</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Experience with {locationName}'s top wedding venues and their specific requirements</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Knowledge of the most scenic photo locations around {locationName}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Familiarity with {locationName}'s traffic patterns to ensure punctual arrival</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-cream/10 dark:bg-navy-light/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-playfair text-navy-dark dark:text-white text-center">
              Wedding Photo Opportunities in {locationName}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
              Our Rolls-Royce Ghost 6.6 provides the perfect backdrop for your wedding photos at these iconic {locationName} locations:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-navy-dark shadow-lg rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-navy-dark/50 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white font-playfair">Lungomare</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 dark:text-gray-300">
                    The beautiful seafront promenade offers stunning views of the Bay of Naples and Mount Vesuvius, creating a dramatic backdrop for wedding photos with our Rolls-Royce.
                  </p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-navy-dark shadow-lg rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-navy-dark/50 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white font-playfair">Piazza del Plebiscito</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 dark:text-gray-300">
                    This grand historic square provides an elegant setting for wedding photos, with our Rolls-Royce adding to the sense of occasion and luxury.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <TestimonialsSection 
        locale="en"
        title={`What Our ${locationName} Wedding Clients Say`}
      />
      
      <CTASection 
        locale="en"
        title={`Ready to Book Your ${locationName} Wedding Car?`}
        description={`Contact us today to secure your Rolls-Royce Ghost 6.6 with professional driver for your special day in ${locationName}.`}
        buttonText="Book Now"
      />
    </>
  );
}
