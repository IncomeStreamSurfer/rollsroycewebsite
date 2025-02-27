import { Locale, Service, ServiceInfo } from '../types';

// Define the service information for each service in both languages
const serviceInfo: Record<Service, Record<Locale, ServiceInfo>> = {
  birthdays: {
    en: {
      title: 'Luxury Rolls-Royce for Birthdays',
      description: 'Make your birthday celebration truly special with our Rolls-Royce Ghost 6.6 rental service. Arrive in style and create unforgettable memories on your special day.',
      metaDescription: 'Make your birthday special with our Rolls-Royce Ghost 6.6 luxury car rental with professional driver. Available in Campania, Italy.',
      keywords: ['birthday Rolls-Royce', 'luxury birthday car', 'Ghost 6.6 birthday', 'special birthday transportation', 'Campania birthday service'],
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
    it: {
      title: 'Rolls-Royce di Lusso per Compleanni',
      description: 'Rendi la tua festa di compleanno davvero speciale con il nostro servizio di noleggio Rolls-Royce Ghost 6.6. Arriva con stile e crea ricordi indimenticabili nel tuo giorno speciale.',
      metaDescription: 'Rendi il tuo compleanno speciale con il nostro noleggio di auto di lusso Rolls-Royce Ghost 6.6 con autista professionale. Disponibile in Campania, Italia.',
      keywords: ['Rolls-Royce per compleanno', 'auto di lusso per compleanno', 'Ghost 6.6 compleanno', 'trasporto speciale per compleanno', 'servizio compleanno Campania'],
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
  },
  weddings: {
    en: {
      title: 'Elegant Rolls-Royce for Weddings',
      description: 'Make your wedding day even more special with our luxurious Rolls-Royce Ghost 6.6. Our professional chauffeur service ensures you arrive in style and elegance on your most important day.',
      metaDescription: 'Arrive in style on your wedding day with our Rolls-Royce Ghost 6.6 luxury car rental with professional driver. Available throughout Campania, Italy.',
      keywords: ['wedding Rolls-Royce', 'luxury wedding car', 'Ghost 6.6 wedding', 'wedding transportation', 'Campania wedding service'],
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
    it: {
      title: 'Elegante Rolls-Royce per Matrimoni',
      description: 'Rendi il tuo giorno di nozze ancora più speciale con la nostra lussuosa Rolls-Royce Ghost 6.6. Il nostro servizio di autista professionale garantisce che tu arrivi con stile ed eleganza nel tuo giorno più importante.',
      metaDescription: 'Arriva con stile nel giorno del tuo matrimonio con il nostro noleggio di auto di lusso Rolls-Royce Ghost 6.6 con autista professionale. Disponibile in tutta la Campania, Italia.',
      keywords: ['Rolls-Royce per matrimonio', 'auto di lusso per matrimonio', 'Ghost 6.6 matrimonio', 'trasporto matrimonio', 'servizio matrimonio Campania'],
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
  },
  'private-parties': {
    en: {
      title: 'Rolls-Royce for Private Parties',
      description: 'Elevate your private event with our Rolls-Royce Ghost 6.6 rental service. Whether it\'s a corporate event, anniversary, or special celebration, our luxury car with chauffeur will make it an unforgettable experience.',
      metaDescription: 'Elevate your private party with our Rolls-Royce Ghost 6.6 luxury car rental with professional driver. Available throughout Campania, Italy.',
      keywords: ['private party Rolls-Royce', 'luxury party car', 'Ghost 6.6 private event', 'party transportation', 'Campania party service'],
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
    it: {
      title: 'Rolls-Royce per Feste Private',
      description: 'Eleva il tuo evento privato con il nostro servizio di noleggio Rolls-Royce Ghost 6.6. Che si tratti di un evento aziendale, un anniversario o una celebrazione speciale, la nostra auto di lusso con autista renderà l\'esperienza indimenticabile.',
      metaDescription: 'Eleva la tua festa privata con il nostro noleggio di auto di lusso Rolls-Royce Ghost 6.6 con autista professionale. Disponibile in tutta la Campania, Italia.',
      keywords: ['Rolls-Royce per festa privata', 'auto di lusso per festa', 'Ghost 6.6 evento privato', 'trasporto per festa', 'servizio festa Campania'],
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
};

// Function to get service information for a specific service and locale
export function getServiceInfo(service: Service, locale: Locale): ServiceInfo {
  return serviceInfo[service][locale];
}

export default serviceInfo;
