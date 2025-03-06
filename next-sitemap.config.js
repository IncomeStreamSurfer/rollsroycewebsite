/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://rollsroyceluxuryrentals.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  exclude: ['/404', '/500'],
  alternateRefs: [
    {
      href: 'https://rollsroyceluxuryrentals.com/en',
      hreflang: 'en',
    },
    {
      href: 'https://rollsroyceluxuryrentals.com/it',
      hreflang: 'it',
    },
  ],
};
