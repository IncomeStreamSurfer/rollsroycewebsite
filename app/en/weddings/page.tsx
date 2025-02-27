import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '../../../components/sections/Hero';
import FeaturesSection from '../../../components/sections/FeaturesSection';
import TestimonialsSection from '../../../components/sections/TestimonialsSection';
import CTASection from '../../../components/sections/CTASection';
import LocationsSection from '../../../components/sections/LocationsSection';
import { getServiceInfo } from '../../../data/services';
import { generateServiceMetadata } from '../../../utils/metadata';
import { FeatureIcons } from '../../../components/ui/FeatureCard';

export const metadata: Metadata = generateServiceMetadata('weddings', 'en', '/weddings');

export default function EnglishWeddingsPage() {
  const serviceInfo = getServiceInfo('weddings', 'en');
  
  return (
    <>
      <Hero 
        locale="en"
        title={serviceInfo.title}
        subtitle={serviceInfo.description}
        ctaText="Book for Your Wedding"
      />
      
      <section className="py-16 bg-white dark:bg-navy-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-playfair text-navy-dark dark:text-white text-center">
              Make Your Wedding Day Unforgettable
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Your wedding day is one of the most important days of your life. Arrive in style and elegance with our luxurious Rolls-Royce Ghost 6.6 rental service with a professional chauffeur.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  We understand the importance of every detail on your special day. Our immaculate Rolls-Royce and professional chauffeur service will ensure your transportation is as perfect as the rest of your celebration.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  From the moment you step into our Rolls-Royce, you'll experience the luxury and comfort that makes this iconic vehicle so special. Create unforgettable memories and stunning photo opportunities with our elegant car.
                </p>
              </div>
              <div className="relative h-80 md:h-96">
                <Image
                  src="/images/wedding_photo_in_abdondoned_car_park.jpg"
                  alt="Rolls-Royce for Weddings"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            
            <div className="bg-cream/10 dark:bg-navy-light/10 p-8 rounded-lg border border-gold/30 mb-12">
              <h3 className="text-2xl font-bold mb-4 font-playfair text-navy-dark dark:text-white">
                Our Wedding Package Includes:
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
              </ul>
            </div>
            
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4 font-playfair text-navy-dark dark:text-white">
                Why Choose Our Rolls-Royce for Your Wedding?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {serviceInfo.benefits.map((benefit, index) => (
                  <div key={index} className="bg-white dark:bg-navy-dark shadow-lg p-6 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-navy-dark text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 font-playfair">
                Frequently Asked Questions
              </h3>
              <div className="space-y-6">
                {serviceInfo.faqs.map((faq, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-bold mb-2 text-gold">{faq.question}</h4>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturesSection 
        locale="en"
        title="Our Wedding Service Features"
        variant="alt"
      />
      
      <LocationsSection 
        locale="en"
        service="weddings"
        title="Available in All of Campania"
        description="Our luxury Rolls-Royce wedding car service is available throughout the Campania region. Select your location to learn more about our wedding services in your area."
        limit={4}
      />
      
      <TestimonialsSection 
        locale="en"
        title="What Our Wedding Clients Say"
      />
      
      <CTASection 
        locale="en"
        title="Ready to Book Your Wedding Car?"
        description="Contact us today to secure your Rolls-Royce Ghost 6.6 with professional driver for your special day."
        buttonText="Book Now"
      />
    </>
  );
}
