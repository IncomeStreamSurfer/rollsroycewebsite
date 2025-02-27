import { Locale } from '../../types';
import { getTranslations } from '../../data/translations';
import TestimonialCard from '../ui/TestimonialCard';

interface TestimonialsSectionProps {
  locale: Locale;
  title?: string;
  variant?: 'default' | 'alt';
}

export default function TestimonialsSection({
  locale,
  title,
  variant = 'default',
}: TestimonialsSectionProps) {
  const translations = getTranslations(locale);
  
  // Use provided title or default to translations
  const sectionTitle = title || translations.home.testimonials.title;
  
  // Get testimonial translations
  const testimonials = [
    {
      quote: translations.home.testimonials.testimonial1.quote,
      author: translations.home.testimonials.testimonial1.author,
    },
    {
      quote: translations.home.testimonials.testimonial2.quote,
      author: translations.home.testimonials.testimonial2.author,
    },
    {
      quote: translations.home.testimonials.testimonial3.quote,
      author: translations.home.testimonials.testimonial3.author,
    },
  ];
  
  const isDefault = variant === 'default';
  
  return (
    <section className={`py-16 ${
      isDefault 
        ? 'bg-gray-50 dark:bg-navy-dark/30' 
        : 'bg-white dark:bg-navy-dark'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair text-navy-dark dark:text-white">
            {sectionTitle}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              variant={variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
