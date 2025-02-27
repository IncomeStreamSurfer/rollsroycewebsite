import { Locale } from '../types';

// Define the translations for the website
const translations = {
  en: {
    common: {
      home: 'Home',
      services: 'Services',
      locations: 'Locations',
      contact: 'Contact',
      about: 'About',
      callToAction: 'Book Now',
      learnMore: 'Learn More',
      viewDetails: 'View Details',
      contactUs: 'Contact Us',
      languageSwitcher: 'Switch to Italian',
      copyright: '© 2025 Rolls-Royce Luxury Rentals. All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
    },
    home: {
      hero: {
        title: 'Luxury Rolls-Royce Ghost 6.6 Rental',
        subtitle: 'With Professional Driver in Campania, Italy',
        cta: 'Book Your Experience',
      },
      intro: {
        title: 'Experience Unparalleled Luxury',
        description: 'Elevate your special occasions with our premium Rolls-Royce Ghost 6.6 rental service. Our professional drivers ensure a seamless and sophisticated experience for weddings, birthdays, and private parties throughout the Campania region.',
      },
      services: {
        title: 'Our Services',
        description: 'We offer luxury Rolls-Royce rental services for various occasions:',
      },
      locations: {
        title: 'Serving All of Campania',
        description: 'Our luxury car rental service is available throughout the Campania region, including:',
      },
      features: {
        title: 'Why Choose Us',
        professionalDrivers: {
          title: 'Professional Drivers',
          description: 'Our experienced chauffeurs provide exceptional service with attention to detail.',
        },
        luxuryExperience: {
          title: 'Luxury Experience',
          description: 'The Rolls-Royce Ghost 6.6 offers unmatched comfort and elegance.',
        },
        customizedService: {
          title: 'Customized Service',
          description: 'We tailor our services to meet your specific needs and preferences.',
        },
        reliability: {
          title: 'Reliability',
          description: 'Punctuality and professionalism are our top priorities.',
        },
      },
      testimonials: {
        title: 'What Our Clients Say',
        testimonial1: {
          quote: 'The Rolls-Royce rental for our wedding was absolutely perfect. The driver was professional and the car was immaculate.',
          author: 'Marco & Sofia, Naples',
        },
        testimonial2: {
          quote: 'My 50th birthday celebration was made even more special with the luxury car service. Highly recommended!',
          author: 'Alessandro, Salerno',
        },
        testimonial3: {
          quote: 'The attention to detail and the quality of service exceeded our expectations for our corporate event.',
          author: 'Elena, Caserta',
        },
      },
      cta: {
        title: 'Ready to Experience Luxury?',
        description: 'Contact us today to book your Rolls-Royce Ghost 6.6 with a professional driver for your special occasion.',
        button: 'Get in Touch',
      },
    },
    services: {
      birthdays: {
        title: 'Luxury Rolls-Royce for Birthdays',
        description: 'Make your birthday celebration truly special with our Rolls-Royce Ghost 6.6 rental service. Arrive in style and create unforgettable memories on your special day.',
        features: [
          'Professional chauffeur service',
          'Elegant arrival at your venue',
          'Red carpet service available',
          'Champagne service option',
          'Photography opportunities',
          'Flexible booking hours',
          'Customized decorations available',
        ],
        benefits: [
          'Create a memorable entrance',
          'Add a touch of luxury to your celebration',
          'Impress your guests',
          'Enjoy stress-free transportation',
          'Perfect photo opportunities',
        ],
        faqs: [
          {
            question: 'How far in advance should I book?',
            answer: 'We recommend booking at least 4-6 weeks in advance, especially during peak season.',
          },
          {
            question: 'Can the car be decorated?',
            answer: 'Yes, we offer customized decoration services to match your birthday theme.',
          },
          {
            question: 'Is there a minimum rental time?',
            answer: 'Our minimum rental period is 3 hours for birthday events.',
          },
        ],
      },
      weddings: {
        title: 'Elegant Rolls-Royce for Weddings',
        description: 'Make your wedding day even more special with our luxurious Rolls-Royce Ghost 6.6. Our professional chauffeur service ensures you arrive in style and elegance on your most important day.',
        features: [
          'Professional wedding-trained chauffeur',
          'Elegant white or black Rolls-Royce Ghost',
          'Red carpet service',
          'Complimentary champagne',
          'Wedding car decoration',
          'Punctual service',
          'Photography stops',
        ],
        benefits: [
          'Create a grand entrance and exit',
          'Luxurious and comfortable transportation',
          'Perfect backdrop for wedding photos',
          'Stress-free transportation for the wedding party',
          'Add a touch of elegance to your special day',
        ],
        faqs: [
          {
            question: 'How early should we book for a wedding?',
            answer: 'We recommend booking 6-12 months in advance to secure your preferred date, especially during wedding season.',
          },
          {
            question: 'Can the car be decorated with flowers?',
            answer: 'Yes, we offer traditional wedding car decorations including ribbons and flowers to match your wedding colors.',
          },
          {
            question: 'Do you provide service for the entire wedding party?',
            answer: 'We can arrange multiple luxury vehicles if needed for the wedding party, subject to availability.',
          },
        ],
      },
      'private-parties': {
        title: 'Rolls-Royce for Private Parties',
        description: 'Elevate your private event with our Rolls-Royce Ghost 6.6 rental service. Whether it\'s a corporate event, anniversary, or special celebration, our luxury car with chauffeur will make it an unforgettable experience.',
        features: [
          'Professional chauffeur service',
          'Luxury transportation to and from your event',
          'Red carpet service available',
          'VIP treatment',
          'Flexible booking hours',
          'Corporate branding options',
          'Multiple vehicle options for larger groups',
        ],
        benefits: [
          'Create a sophisticated atmosphere',
          'Impress clients and guests',
          'Ensure comfortable and stylish transportation',
          'Add prestige to corporate events',
          'Enjoy a stress-free luxury experience',
        ],
        faqs: [
          {
            question: 'Can I book for airport transfers for VIP guests?',
            answer: 'Yes, we offer airport transfer services for VIP guests attending your private event.',
          },
          {
            question: 'Is the service available for late-night events?',
            answer: 'Yes, we offer 24-hour service for private events with advance booking.',
          },
          {
            question: 'Can I book multiple cars for a corporate event?',
            answer: 'Yes, we can provide multiple luxury vehicles for corporate events, subject to availability.',
          },
        ],
      },
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Get in touch to book your luxury Rolls-Royce experience',
      form: {
        name: 'Your Name',
        email: 'Email Address',
        phone: 'Phone Number',
        service: 'Service Type',
        date: 'Event Date',
        location: 'Event Location',
        message: 'Your Message',
        submit: 'Send Inquiry',
        submitting: 'Submitting...',
        success: 'Thank you for your inquiry. We will contact you shortly.',
        error: 'There was an error submitting your form. Please try again.',
      },
      info: {
        title: 'Contact Information',
        address: 'Campania, Italy',
        email: 'info@rollsroyceluxuryrentals.com',
        phone: '+39 123 456 7890',
        hours: 'Available 7 days a week, 9:00 AM - 8:00 PM',
      },
      cta: {
        title: 'Ready to Experience Luxury?',
        description: 'Book your Rolls-Royce Ghost 6.6 with professional driver today.',
        button: 'Book Now',
      },
    },
  },
  it: {
    common: {
      home: 'Home',
      services: 'Servizi',
      locations: 'Località',
      contact: 'Contatti',
      about: 'Chi Siamo',
      callToAction: 'Prenota Ora',
      learnMore: 'Scopri di Più',
      viewDetails: 'Vedi Dettagli',
      contactUs: 'Contattaci',
      languageSwitcher: 'Passa all\'inglese',
      copyright: '© 2025 Noleggio di Lusso Rolls-Royce. Tutti i diritti riservati.',
      privacyPolicy: 'Informativa sulla Privacy',
      termsOfService: 'Termini di Servizio',
    },
    home: {
      hero: {
        title: 'Noleggio di Lusso Rolls-Royce Ghost 6.6',
        subtitle: 'Con Autista Professionale in Campania, Italia',
        cta: 'Prenota la Tua Esperienza',
      },
      intro: {
        title: 'Vivi un Lusso Senza Paragoni',
        description: 'Eleva le tue occasioni speciali con il nostro servizio premium di noleggio Rolls-Royce Ghost 6.6. I nostri autisti professionisti garantiscono un\'esperienza impeccabile e sofisticata per matrimoni, compleanni e feste private in tutta la regione Campania.',
      },
      services: {
        title: 'I Nostri Servizi',
        description: 'Offriamo servizi di noleggio Rolls-Royce di lusso per varie occasioni:',
      },
      locations: {
        title: 'Serviamo Tutta la Campania',
        description: 'Il nostro servizio di noleggio auto di lusso è disponibile in tutta la regione Campania, incluso:',
      },
      features: {
        title: 'Perché Sceglierci',
        professionalDrivers: {
          title: 'Autisti Professionisti',
          description: 'I nostri autisti esperti forniscono un servizio eccezionale con attenzione ai dettagli.',
        },
        luxuryExperience: {
          title: 'Esperienza di Lusso',
          description: 'La Rolls-Royce Ghost 6.6 offre comfort ed eleganza impareggiabili.',
        },
        customizedService: {
          title: 'Servizio Personalizzato',
          description: 'Adattiamo i nostri servizi per soddisfare le tue esigenze e preferenze specifiche.',
        },
        reliability: {
          title: 'Affidabilità',
          description: 'Puntualità e professionalità sono le nostre priorità principali.',
        },
      },
      testimonials: {
        title: 'Cosa Dicono i Nostri Clienti',
        testimonial1: {
          quote: 'Il noleggio della Rolls-Royce per il nostro matrimonio è stato assolutamente perfetto. L\'autista era professionale e l\'auto era impeccabile.',
          author: 'Marco e Sofia, Napoli',
        },
        testimonial2: {
          quote: 'La celebrazione del mio 50° compleanno è stata resa ancora più speciale con il servizio di auto di lusso. Altamente consigliato!',
          author: 'Alessandro, Salerno',
        },
        testimonial3: {
          quote: 'L\'attenzione ai dettagli e la qualità del servizio hanno superato le nostre aspettative per il nostro evento aziendale.',
          author: 'Elena, Caserta',
        },
      },
      cta: {
        title: 'Pronto a Vivere il Lusso?',
        description: 'Contattaci oggi per prenotare la tua Rolls-Royce Ghost 6.6 con autista professionale per la tua occasione speciale.',
        button: 'Mettiti in Contatto',
      },
    },
    services: {
      birthdays: {
        title: 'Rolls-Royce di Lusso per Compleanni',
        description: 'Rendi la tua festa di compleanno davvero speciale con il nostro servizio di noleggio Rolls-Royce Ghost 6.6. Arriva con stile e crea ricordi indimenticabili nel tuo giorno speciale.',
        features: [
          'Servizio di autista professionale',
          'Arrivo elegante alla tua location',
          'Servizio tappeto rosso disponibile',
          'Opzione servizio champagne',
          'Opportunità fotografiche',
          'Orari di prenotazione flessibili',
          'Decorazioni personalizzate disponibili',
        ],
        benefits: [
          'Crea un ingresso memorabile',
          'Aggiungi un tocco di lusso alla tua celebrazione',
          'Impressiona i tuoi ospiti',
          'Goditi un trasporto senza stress',
          'Perfette opportunità fotografiche',
        ],
        faqs: [
          {
            question: 'Con quanto anticipo dovrei prenotare?',
            answer: 'Consigliamo di prenotare almeno 4-6 settimane in anticipo, specialmente durante l\'alta stagione.',
          },
          {
            question: 'L\'auto può essere decorata?',
            answer: 'Sì, offriamo servizi di decorazione personalizzati per abbinarsi al tema del tuo compleanno.',
          },
          {
            question: 'C\'è un tempo minimo di noleggio?',
            answer: 'Il nostro periodo minimo di noleggio è di 3 ore per eventi di compleanno.',
          },
        ],
      },
      weddings: {
        title: 'Elegante Rolls-Royce per Matrimoni',
        description: 'Rendi il tuo giorno di nozze ancora più speciale con la nostra lussuosa Rolls-Royce Ghost 6.6. Il nostro servizio di autista professionale garantisce che tu arrivi con stile ed eleganza nel tuo giorno più importante.',
        features: [
          'Autista professionale specializzato in matrimoni',
          'Elegante Rolls-Royce Ghost bianca o nera',
          'Servizio tappeto rosso',
          'Champagne in omaggio',
          'Decorazione auto nuziale',
          'Servizio puntuale',
          'Soste per fotografie',
        ],
        benefits: [
          'Crea un ingresso e un\'uscita grandiosi',
          'Trasporto lussuoso e confortevole',
          'Sfondo perfetto per foto di matrimonio',
          'Trasporto senza stress per il corteo nuziale',
          'Aggiungi un tocco di eleganza al tuo giorno speciale',
        ],
        faqs: [
          {
            question: 'Con quanto anticipo dovremmo prenotare per un matrimonio?',
            answer: 'Consigliamo di prenotare 6-12 mesi in anticipo per assicurarti la data preferita, specialmente durante la stagione dei matrimoni.',
          },
          {
            question: 'L\'auto può essere decorata con fiori?',
            answer: 'Sì, offriamo decorazioni tradizionali per auto nuziali, inclusi nastri e fiori, per abbinarsi ai colori del tuo matrimonio.',
          },
          {
            question: 'Fornite servizio per l\'intero corteo nuziale?',
            answer: 'Possiamo organizzare più veicoli di lusso se necessario per il corteo nuziale, soggetto a disponibilità.',
          },
        ],
      },
      'private-parties': {
        title: 'Rolls-Royce per Feste Private',
        description: 'Eleva il tuo evento privato con il nostro servizio di noleggio Rolls-Royce Ghost 6.6. Che si tratti di un evento aziendale, un anniversario o una celebrazione speciale, la nostra auto di lusso con autista renderà l\'esperienza indimenticabile.',
        features: [
          'Servizio di autista professionale',
          'Trasporto di lusso da e per il tuo evento',
          'Servizio tappeto rosso disponibile',
          'Trattamento VIP',
          'Orari di prenotazione flessibili',
          'Opzioni di branding aziendale',
          'Opzioni di più veicoli per gruppi più numerosi',
        ],
        benefits: [
          'Crea un\'atmosfera sofisticata',
          'Impressiona clienti e ospiti',
          'Assicura un trasporto confortevole e elegante',
          'Aggiungi prestigio agli eventi aziendali',
          'Goditi un\'esperienza di lusso senza stress',
        ],
        faqs: [
          {
            question: 'Posso prenotare per trasferimenti aeroportuali per ospiti VIP?',
            answer: 'Sì, offriamo servizi di trasferimento aeroportuale per ospiti VIP che partecipano al tuo evento privato.',
          },
          {
            question: 'Il servizio è disponibile per eventi notturni?',
            answer: 'Sì, offriamo servizio 24 ore su 24 per eventi privati con prenotazione anticipata.',
          },
          {
            question: 'Posso prenotare più auto per un evento aziendale?',
            answer: 'Sì, possiamo fornire più veicoli di lusso per eventi aziendali, soggetto a disponibilità.',
          },
        ],
      },
    },
    contact: {
      title: 'Contattaci',
      subtitle: 'Mettiti in contatto per prenotare la tua esperienza di lusso Rolls-Royce',
      form: {
        name: 'Il Tuo Nome',
        email: 'Indirizzo Email',
        phone: 'Numero di Telefono',
        service: 'Tipo di Servizio',
        date: 'Data dell\'Evento',
        location: 'Luogo dell\'Evento',
        message: 'Il Tuo Messaggio',
        submit: 'Invia Richiesta',
        submitting: 'Invio in corso...',
        success: 'Grazie per la tua richiesta. Ti contatteremo a breve.',
        error: 'Si è verificato un errore nell\'invio del modulo. Per favore riprova.',
      },
      info: {
        title: 'Informazioni di Contatto',
        address: 'Campania, Italia',
        email: 'info@rollsroyceluxuryrentals.com',
        phone: '+39 123 456 7890',
        hours: 'Disponibile 7 giorni su 7, 9:00 - 20:00',
      },
      cta: {
        title: 'Pronto a Vivere il Lusso?',
        description: 'Prenota oggi la tua Rolls-Royce Ghost 6.6 con autista professionale.',
        button: 'Prenota Ora',
      },
    },
  },
};

// Function to get translations for a specific locale
export function getTranslations(locale: Locale) {
  return translations[locale];
}

export default translations;
