import { Metadata } from 'next';

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
      
      <section className="py-16 bg-white dark:bg-navy-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-cream/10 dark:bg-navy-light/10 p-8 rounded-lg border border-gold/30">
              <h2 className="text-3xl font-bold mb-8 font-playfair text-navy-dark dark:text-white text-center">
                Book Your Luxury Experience
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gold rounded-full mb-4">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-playfair text-navy-dark dark:text-white">Email</h3>
                  <a href="mailto:info@rollsroycerent.it" className="text-gold hover:text-gold/80 text-lg font-medium transition-colors">
                    info@rollsroycerent.it
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gold rounded-full mb-4">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-playfair text-navy-dark dark:text-white">Phone</h3>
                  <a href="tel:+393791398291" className="text-gold hover:text-gold/80 text-lg font-medium transition-colors">
                    +39 379 139 8291
                  </a>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Available 7 days a week</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  9:00 AM - 8:00 PM
                </p>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Serving all of Campania, Italy</strong>
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Naples • Salerno • Caserta • Avellino • Benevento • And all surrounding areas
                </p>
              </div>
            </div>
            
            <div className="mt-12 bg-navy-dark text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 font-playfair text-center">
                Why Choose Our Luxury Service?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Professional chauffeur service</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Luxurious Rolls-Royce Ghost 6.6</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Available for all special occasions</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Punctual and reliable service</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Customized decorations available</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Competitive luxury pricing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
