import { Metadata } from 'next';
import ContactForm from '../../../components/sections/ContactForm';
import CTASection from '../../../components/sections/CTASection';
import { getAlternateUrls } from '../../../utils/i18n';

export const metadata: Metadata = {
  title: 'Contact Us | Rolls-Royce Luxury Car Rental',
  description: 'Get in touch to book your luxury Rolls-Royce Ghost 6.6 with professional driver for weddings, birthdays, and private parties in Campania, Italy.',
  keywords: ['contact Rolls-Royce rental', 'book luxury car', 'hire Rolls-Royce with driver', 'Campania luxury car booking'],
  alternates: {
    canonical: '/en/contact',
    languages: {
      'en': '/en/contact',
      'it': '/it/contact',
    },
  },
};

export default function EnglishContactPage() {
  return (
    <>
      <div className="pt-24 pb-8 bg-navy-dark text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-center">
            Contact Us
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Get in touch to book your luxury Rolls-Royce experience
          </p>
        </div>
      </div>
      
      <ContactForm locale="en" />
      
      <CTASection 
        locale="en"
        title="Ready to Experience Luxury?"
        description="Book your Rolls-Royce Ghost 6.6 with professional driver today."
        buttonText="Book Now"
        variant="alt"
      />
    </>
  );
}
