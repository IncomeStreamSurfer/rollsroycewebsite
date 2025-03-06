import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-navy-dark text-navy-dark dark:text-white px-4">
      <div className="text-center max-w-xl">
        <div className="mb-8 relative w-24 h-24 mx-auto">
          <Image
            src="/favicon.svg"
            alt="Rolls-Royce Logo"
            fill
            className="object-contain"
          />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-4 font-playfair">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 font-playfair">Page Not Found</h2>
        
        <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
          We're sorry, but the page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link 
            href="/en" 
            className="bg-gold hover:bg-gold/90 text-white px-6 py-3 rounded-full transition-colors"
          >
            English Home
          </Link>
          <Link 
            href="/it" 
            className="bg-navy-dark hover:bg-navy-dark/90 text-white px-6 py-3 rounded-full transition-colors"
          >
            Italian Home
          </Link>
        </div>
        
        <div className="mt-12 text-sm text-gray-500 dark:text-gray-400">
          <p>
            If you believe this is an error, please contact us at{' '}
            <a href="mailto:info@rollsroycerent.it" className="text-gold hover:underline">
              info@rollsroycerent.it
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
