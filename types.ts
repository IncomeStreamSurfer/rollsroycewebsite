// Define the available locales
export type Locale = 'en' | 'it';

// Define the available services
export type Service = 'birthdays' | 'weddings' | 'private-parties';

// Define the location structure
export type Location = {
  region: string;
  province: string;
  city: string;
  slug: string;
};

// Define the service information structure
export type ServiceInfo = {
  title: string;
  description: string;
  metaDescription: string;
  keywords: string[];
  features: string[];
  benefits: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

// Define the translations structure
export type Translations = {
  [key: string]: {
    [key: string]: string | Translations;
  };
};

// Define the metadata structure
export type MetadataProps = {
  title: string;
  description: string;
  keywords: string[];
  alternateUrls: {
    [key: string]: string;
  };
};
