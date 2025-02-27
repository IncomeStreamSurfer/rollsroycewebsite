interface TestimonialCardProps {
  quote: string;
  author: string;
  variant?: 'default' | 'alt';
}

export default function TestimonialCard({
  quote,
  author,
  variant = 'default',
}: TestimonialCardProps) {
  const isDefault = variant === 'default';
  
  return (
    <div className={`p-6 rounded-lg transition-transform duration-300 hover:scale-105 ${
      isDefault 
        ? 'bg-white dark:bg-navy-dark shadow-lg' 
        : 'bg-cream/10 dark:bg-navy-light/20 border border-gold/30'
    }`}>
      <div className="mb-4 text-gold">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-4 italic font-cormorant text-lg">
        "{quote}"
      </p>
      <p className={`font-bold ${
        isDefault ? 'text-navy-dark dark:text-white' : 'text-burgundy dark:text-gold'
      }`}>
        {author}
      </p>
    </div>
  );
}
