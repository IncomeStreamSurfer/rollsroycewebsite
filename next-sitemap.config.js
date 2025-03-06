/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.rollsroycerent.it',
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
      href: 'https://www.rollsroycerent.it/en',
      hreflang: 'en',
    },
    {
      href: 'https://www.rollsroycerent.it/it',
      hreflang: 'it',
    },
  ],
};
