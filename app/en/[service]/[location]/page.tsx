import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Hero from '../../../../components/sections/Hero';
import FeaturesSection from '../../../../components/sections/FeaturesSection';
import TestimonialsSection from '../../../../components/sections/TestimonialsSection';
import CTASection from '../../../../components/sections/CTASection';
import { getServiceInfo } from '../../../../data/services';
import { getLocationName, getLocationBySlug } from '../../../../data/locations';
import { generateLocationMetadata } from '../../../../utils/metadata';
import { services, locations } from '../../../../utils/routes';
import { getServiceSlug } from '../../../../utils/i18n';

type Props = {
  params: {
    service: string;
    location: string;
  };
};

export async function generateStaticParams() {
  const params: { service: string; location: string }[] = [];
  
  for (const service of services) {
    const serviceSlug = getServiceSlug(service, 'en');
    
    for (const location of locations) {
      params.push({
        service: serviceSlug,
        location: location.slug,
      });
    }
  }
  
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Find the service and location
  const service = services.find(s => getServiceSlug(s, 'en') === params.service);
  const location = locations.find(l => l.slug === params.location);
  
  if (!service || !location) {
    return {};
  }
  
  return generateLocationMetadata(service, params.location, 'en', `/${params.service}/${params.location}`);
}

export default function ServiceLocationPage({ params }: Props) {
  // Find the service
  const service = services.find(s => getServiceSlug(s, 'en') === params.service);
  
  // Find the location
  const location = getLocationBySlug(params.location);
  
  // If service or location not found, return 404
  if (!service || !location) {
    notFound();
  }
  
  const serviceInfo = getServiceInfo(service, 'en');
  const locationName = getLocationName(params.location, 'en');
  
  return (
    <>
      <Hero 
        locale="en"
        title={`Elegant Rolls-Royce for ${serviceInfo.title} in ${locationName}`}
        subtitle={`Make your ${service.toLowerCase()} in ${locationName} even more special with our luxurious Rolls-Royce Ghost 6.6. Our professional chauffeur service ensures you arrive in style and elegance on your special day.`}
        ctaText={`Book for Your ${locationName} ${serviceInfo.title}`}
      />
      
      <section className="py-16 bg-white dark:bg-navy-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-playfair text-navy-dark dark:text-white text-center">
              Luxury {serviceInfo.title} Car Service in {locationName}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  {locationName}, {location.province === 'Metropolitan City of Naples' ? 'the vibrant capital of the Campania region' : `a beautiful city in the ${location.province}`}, provides a stunning backdrop for your {service.toLowerCase()}. Our Rolls-Royce Ghost 6.6 rental service adds the perfect touch of luxury to complement the beauty and elegance of this {location.province === 'Metropolitan City of Naples' ? 'historic city' : 'charming location'}.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Whether your {service.toLowerCase()} is taking place in one of {locationName}'s {location.province === 'Metropolitan City of Naples' ? 'historic venues, elegant palaces, or picturesque coastal locations' : 'beautiful venues'}, our professional chauffeur service will ensure you arrive in style and comfort.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Our intimate knowledge of {locationName}'s streets and venues ensures smooth transportation on your special day, allowing you to relax and enjoy every moment without worrying about logistics.
                </p>
              </div>
              <div className="relative h-80 md:h-96">
                <Image
                  src="/images/wedding_photo_in_abdondoned_car_park.jpg"
                  alt={`Rolls-Royce for ${serviceInfo.title} in ${locationName}`}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            
            <div className="bg-cream/10 dark:bg-navy-light/10 p-8 rounded-lg border border-gold/30 mb-12">
              <h3 className="text-2xl font-bold mb-4 font-playfair text-navy-dark dark:text-white">
                Our {locationName} {serviceInfo.title} Package Includes:
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
                Popular {serviceInfo.title} Venues in {locationName}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-navy-dark shadow-lg p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-2 font-playfair text-navy-dark dark:text-white">Luxury Hotels</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    We regularly provide service to {service.toLowerCase()} at {locationName}'s finest hotels and venues, ensuring a premium experience.
                  </p>
                </div>
                <div className="bg-white dark:bg-navy-dark shadow-lg p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-2 font-playfair text-navy-dark dark:text-white">Historic Locations</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Our Rolls-Royce service complements the grandeur of {service.toLowerCase()} at {locationName}'s historic locations and venues.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-navy-dark text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 font-playfair">
                Why Choose Our Rolls-Royce {serviceInfo.title} Service in {locationName}
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
                  <span className="text-gray-300">Experience with {locationName}'s top venues and their specific requirements</span>
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
      
      <FeaturesSection 
        locale="en"
        title={`Our ${serviceInfo.title} Service Features in ${locationName}`}
        variant="alt"
      />
      
      <TestimonialsSection 
        locale="en"
        title={`What Our ${locationName} ${serviceInfo.title} Clients Say`}
      />
      
      <CTASection 
        locale="en"
        title={`Ready to Book Your ${locationName} ${serviceInfo.title} Car?`}
        description={`Contact us today to secure your Rolls-Royce Ghost 6.6 with professional driver for your special day in ${locationName}.`}
        buttonText="Book Now"
      />
    </>
  );
}
