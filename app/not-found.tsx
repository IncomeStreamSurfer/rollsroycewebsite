import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-dark text-white">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold font-playfair mb-4">404</h1>
        <div className="w-16 h-1 bg-gold mx-auto mb-8"></div>
        <h2 className="text-3xl font-bold mb-6">This page could not be found.</h2>
        <p className="text-xl text-gray-300 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-gold hover:bg-gold/90 text-white px-8 py-3 rounded-full text-lg transition-colors"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
