/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n config is not compatible with app directory
  // we'll handle internationalization with route groups
  images: {
    domains: ['nextjs.org'],
  },
  // Using ISR (Incremental Static Regeneration) for better performance
  // while still allowing dynamic routes
  experimental: {
    serverActions: true,
  },
  // Enable standalone output for Docker
  output: 'standalone',
};

export default nextConfig;
