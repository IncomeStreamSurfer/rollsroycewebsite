import { Locale, Location } from '../types';

// Define the locations from the task
export const locations: Location[] = [
  { region: 'Region of Campania', province: 'Region of Campania', city: 'Campania', slug: 'campania' },
  
  // Province of Avellino
  { region: 'Province of Avellino', province: 'Province of Avellino', city: 'Avellino', slug: 'avellino' },
  { region: 'Province of Avellino', province: 'Province of Avellino', city: 'Ariano Irpino', slug: 'ariano-irpino' },
  { region: 'Province of Avellino', province: 'Province of Avellino', city: 'Montoro', slug: 'montoro' },
  { region: 'Province of Avellino', province: 'Province of Avellino', city: 'Solofra', slug: 'solofra' },
  { region: 'Province of Avellino', province: 'Province of Avellino', city: 'Cervinara', slug: 'cervinara' },
  { region: 'Province of Avellino', province: 'Province of Avellino', city: 'Mercogliano', slug: 'mercogliano' },
  { region: 'Province of Avellino', province: 'Province of Avellino', city: 'Atripalda', slug: 'atripalda' },
  { region: 'Province of Avellino', province: 'Province of Avellino', city: 'Monteforte Irpino', slug: 'monteforte-irpino' },
  { region: 'Province of Avellino', province: 'Province of Avellino', city: 'Grottaminarda', slug: 'grottaminarda' },
  { region: 'Province of Avellino', province: 'Province of Avellino', city: 'Mirabella Eclano', slug: 'mirabella-eclano' },
  { region: 'Province of Avellino', province: 'Province of Avellino', city: 'Calitri', slug: 'calitri' },
  { region: 'Province of Avellino', province: 'Province of Avellino', city: 'Lioni', slug: 'lioni' },
  { region: 'Province of Avellino', province: 'Province of Avellino', city: 'Sant\'Angelo dei Lombardi', slug: 'santangelo-dei-lombardi' },
  { region: 'Province of Avellino', province: 'Province of Avellino', city: 'Bisaccia', slug: 'bisaccia' },
  { region: 'Province of Avellino', province: 'Province of Avellino', city: 'Montella', slug: 'montella' },
  { region: 'Province of Avellino', province: 'Province of Avellino', city: 'Nusco', slug: 'nusco' },
  { region: 'Province of Avellino', province: 'Province of Avellino', city: 'Lauro', slug: 'lauro' },
  { region: 'Province of Avellino', province: 'Province of Avellino', city: 'Mugnano del Cardinale', slug: 'mugnano-del-cardinale' },
  { region: 'Province of Avellino', province: 'Province of Avellino', city: 'Baiano', slug: 'baiano' },
  { region: 'Province of Avellino', province: 'Province of Avellino', city: 'Avella', slug: 'avella' },
  
  // Province of Benevento
  { region: 'Province of Benevento', province: 'Province of Benevento', city: 'Benevento', slug: 'benevento' },
  { region: 'Province of Benevento', province: 'Province of Benevento', city: 'Montesarchio', slug: 'montesarchio' },
  { region: 'Province of Benevento', province: 'Province of Benevento', city: 'San Giorgio del Sannio', slug: 'san-giorgio-del-sannio' },
  { region: 'Province of Benevento', province: 'Province of Benevento', city: 'Telese Terme', slug: 'telese-terme' },
  { region: 'Province of Benevento', province: 'Province of Benevento', city: 'Airola', slug: 'airola' },
  { region: 'Province of Benevento', province: 'Province of Benevento', city: 'Sant\'Agata de\' Goti', slug: 'santagata-de-goti' },
  { region: 'Province of Benevento', province: 'Province of Benevento', city: 'Guardia Sanframondi', slug: 'guardia-sanframondi' },
  { region: 'Province of Benevento', province: 'Province of Benevento', city: 'San Bartolomeo in Galdo', slug: 'san-bartolomeo-in-galdo' },
  { region: 'Province of Benevento', province: 'Province of Benevento', city: 'Morcone', slug: 'morcone' },
  { region: 'Province of Benevento', province: 'Province of Benevento', city: 'Pietrelcina', slug: 'pietrelcina' },
  { region: 'Province of Benevento', province: 'Province of Benevento', city: 'Colle Sannita', slug: 'colle-sannita' },
  { region: 'Province of Benevento', province: 'Province of Benevento', city: 'Cerreto Sannita', slug: 'cerreto-sannita' },
  { region: 'Province of Benevento', province: 'Province of Benevento', city: 'San Marco dei Cavoti', slug: 'san-marco-dei-cavoti' },
  { region: 'Province of Benevento', province: 'Province of Benevento', city: 'Solopaca', slug: 'solopaca' },
  { region: 'Province of Benevento', province: 'Province of Benevento', city: 'Foglianise', slug: 'foglianise' },
  { region: 'Province of Benevento', province: 'Province of Benevento', city: 'Apice', slug: 'apice' },
  { region: 'Province of Benevento', province: 'Province of Benevento', city: 'Paduli', slug: 'paduli' },
  { region: 'Province of Benevento', province: 'Province of Benevento', city: 'Torrecuso', slug: 'torrecuso' },
  { region: 'Province of Benevento', province: 'Province of Benevento', city: 'Dugenta', slug: 'dugenta' },
  
  // Province of Caserta - Major cities
  { region: 'Province of Caserta', province: 'Province of Caserta', city: 'Caserta', slug: 'caserta' },
  { region: 'Province of Caserta', province: 'Province of Caserta', city: 'Aversa', slug: 'aversa' },
  { region: 'Province of Caserta', province: 'Province of Caserta', city: 'Marcianise', slug: 'marcianise' },
  { region: 'Province of Caserta', province: 'Province of Caserta', city: 'Maddaloni', slug: 'maddaloni' },
  { region: 'Province of Caserta', province: 'Province of Caserta', city: 'Santa Maria Capua Vetere', slug: 'santa-maria-capua-vetere' },
  { region: 'Province of Caserta', province: 'Province of Caserta', city: 'Mondragone', slug: 'mondragone' },
  { region: 'Province of Caserta', province: 'Province of Caserta', city: 'Capua', slug: 'capua' },
  { region: 'Province of Caserta', province: 'Province of Caserta', city: 'Orta di Atella', slug: 'orta-di-atella' },
  { region: 'Province of Caserta', province: 'Province of Caserta', city: 'Trentola Ducenta', slug: 'trentola-ducenta' },
  { region: 'Province of Caserta', province: 'Province of Caserta', city: 'San Nicola la Strada', slug: 'san-nicola-la-strada' },
  { region: 'Province of Caserta', province: 'Province of Caserta', city: 'Lusciano', slug: 'lusciano' },
  { region: 'Province of Caserta', province: 'Province of Caserta', city: 'Casal di Principe', slug: 'casal-di-principe' },
  { region: 'Province of Caserta', province: 'Province of Caserta', city: 'Teano', slug: 'teano' },
  { region: 'Province of Caserta', province: 'Province of Caserta', city: 'Sessa Aurunca', slug: 'sessa-aurunca' },
  { region: 'Province of Caserta', province: 'Province of Caserta', city: 'Piedimonte Matese', slug: 'piedimonte-matese' },
  
  // Province of Salerno - Major cities
  { region: 'Province of Salerno', province: 'Province of Salerno', city: 'Salerno', slug: 'salerno' },
  { region: 'Province of Salerno', province: 'Province of Salerno', city: 'Cava de\' Tirreni', slug: 'cava-de-tirreni' },
  { region: 'Province of Salerno', province: 'Province of Salerno', city: 'Battipaglia', slug: 'battipaglia' },
  { region: 'Province of Salerno', province: 'Province of Salerno', city: 'Scafati', slug: 'scafati' },
  { region: 'Province of Salerno', province: 'Province of Salerno', city: 'Nocera Inferiore', slug: 'nocera-inferiore' },
  { region: 'Province of Salerno', province: 'Province of Salerno', city: 'Sarno', slug: 'sarno' },
  { region: 'Province of Salerno', province: 'Province of Salerno', city: 'Eboli', slug: 'eboli' },
  { region: 'Province of Salerno', province: 'Province of Salerno', city: 'Pagani', slug: 'pagani' },
  { region: 'Province of Salerno', province: 'Province of Salerno', city: 'Angri', slug: 'angri' },
  { region: 'Province of Salerno', province: 'Province of Salerno', city: 'Pontecagnano Faiano', slug: 'pontecagnano-faiano' },
  { region: 'Province of Salerno', province: 'Province of Salerno', city: 'Nocera Superiore', slug: 'nocera-superiore' },
  { region: 'Province of Salerno', province: 'Province of Salerno', city: 'Agropoli', slug: 'agropoli' },
  { region: 'Province of Salerno', province: 'Province of Salerno', city: 'Capaccio Paestum', slug: 'capaccio-paestum' },
  { region: 'Province of Salerno', province: 'Province of Salerno', city: 'Baronissi', slug: 'baronissi' },
  { region: 'Province of Salerno', province: 'Province of Salerno', city: 'Mercato San Severino', slug: 'mercato-san-severino' },
  { region: 'Province of Salerno', province: 'Province of Salerno', city: 'Vallo della Lucania', slug: 'vallo-della-lucania' },
  { region: 'Province of Salerno', province: 'Province of Salerno', city: 'Amalfi', slug: 'amalfi' },
  { region: 'Province of Salerno', province: 'Province of Salerno', city: 'Positano', slug: 'positano' },
  { region: 'Province of Salerno', province: 'Province of Salerno', city: 'Maiori', slug: 'maiori' },
  { region: 'Province of Salerno', province: 'Province of Salerno', city: 'Vietri sul Mare', slug: 'vietri-sul-mare' },
  
  // Metropolitan City of Naples - Major cities
  { region: 'Metropolitan City of Naples', province: 'Metropolitan City of Naples', city: 'Naples', slug: 'naples' },
  { region: 'Metropolitan City of Naples', province: 'Metropolitan City of Naples', city: 'Giugliano in Campania', slug: 'giugliano-in-campania' },
  { region: 'Metropolitan City of Naples', province: 'Metropolitan City of Naples', city: 'Torre del Greco', slug: 'torre-del-greco' },
  { region: 'Metropolitan City of Naples', province: 'Metropolitan City of Naples', city: 'Pozzuoli', slug: 'pozzuoli' },
  { region: 'Metropolitan City of Naples', province: 'Metropolitan City of Naples', city: 'Casoria', slug: 'casoria' },
  { region: 'Metropolitan City of Naples', province: 'Metropolitan City of Naples', city: 'Castellammare di Stabia', slug: 'castellammare-di-stabia' },
  { region: 'Metropolitan City of Naples', province: 'Metropolitan City of Naples', city: 'Afragola', slug: 'afragola' },
  { region: 'Metropolitan City of Naples', province: 'Metropolitan City of Naples', city: 'Marano di Napoli', slug: 'marano-di-napoli' },
  { region: 'Metropolitan City of Naples', province: 'Metropolitan City of Naples', city: 'Portici', slug: 'portici' },
  { region: 'Metropolitan City of Naples', province: 'Metropolitan City of Naples', city: 'Ercolano', slug: 'ercolano' },
  { region: 'Metropolitan City of Naples', province: 'Metropolitan City of Naples', city: 'Casalnuovo di Napoli', slug: 'casalnuovo-di-napoli' },
  { region: 'Metropolitan City of Naples', province: 'Metropolitan City of Naples', city: 'Torre Annunziata', slug: 'torre-annunziata' },
  { region: 'Metropolitan City of Naples', province: 'Metropolitan City of Naples', city: 'Acerra', slug: 'acerra' },
  { region: 'Metropolitan City of Naples', province: 'Metropolitan City of Naples', city: 'San Giorgio a Cremano', slug: 'san-giorgio-a-cremano' },
  { region: 'Metropolitan City of Naples', province: 'Metropolitan City of Naples', city: 'Nola', slug: 'nola' },
  { region: 'Metropolitan City of Naples', province: 'Metropolitan City of Naples', city: 'Pomigliano d\'Arco', slug: 'pomigliano-darco' },
  { region: 'Metropolitan City of Naples', province: 'Metropolitan City of Naples', city: 'Somma Vesuviana', slug: 'somma-vesuviana' },
  { region: 'Metropolitan City of Naples', province: 'Metropolitan City of Naples', city: 'Villaricca', slug: 'villaricca' },
  { region: 'Metropolitan City of Naples', province: 'Metropolitan City of Naples', city: 'Arzano', slug: 'arzano' },
  { region: 'Metropolitan City of Naples', province: 'Metropolitan City of Naples', city: 'Volla', slug: 'volla' },
  { region: 'Metropolitan City of Naples', province: 'Metropolitan City of Naples', city: 'Melito di Napoli', slug: 'melito-di-napoli' },
  { region: 'Metropolitan City of Naples', province: 'Metropolitan City of Naples', city: 'Cercola', slug: 'cercola' },
  { region: 'Metropolitan City of Naples', province: 'Metropolitan City of Naples', city: 'Sant\'Antimo', slug: 'santantimo' },
  { region: 'Metropolitan City of Naples', province: 'Metropolitan City of Naples', city: 'Pompei', slug: 'pompei' },
  { region: 'Metropolitan City of Naples', province: 'Metropolitan City of Naples', city: 'Sorrento', slug: 'sorrento' },
  { region: 'Metropolitan City of Naples', province: 'Metropolitan City of Naples', city: 'Ischia', slug: 'ischia' },
  { region: 'Metropolitan City of Naples', province: 'Metropolitan City of Naples', city: 'Capri', slug: 'capri' },
  { region: 'Metropolitan City of Naples', province: 'Metropolitan City of Naples', city: 'Procida', slug: 'procida' },
];

// Location name translations
export const locationNameTranslations: Record<string, Record<Locale, string>> = {
  'campania': {
    en: 'Campania',
    it: 'Campania',
  },
  'avellino': {
    en: 'Avellino',
    it: 'Avellino',
  },
  'ariano-irpino': {
    en: 'Ariano Irpino',
    it: 'Ariano Irpino',
  },
  'montoro': {
    en: 'Montoro',
    it: 'Montoro',
  },
  'benevento': {
    en: 'Benevento',
    it: 'Benevento',
  },
  'montesarchio': {
    en: 'Montesarchio',
    it: 'Montesarchio',
  },
  'san-giorgio-del-sannio': {
    en: 'San Giorgio del Sannio',
    it: 'San Giorgio del Sannio',
  },
  'caserta': {
    en: 'Caserta',
    it: 'Caserta',
  },
  'aversa': {
    en: 'Aversa',
    it: 'Aversa',
  },
  'marcianise': {
    en: 'Marcianise',
    it: 'Marcianise',
  },
  'salerno': {
    en: 'Salerno',
    it: 'Salerno',
  },
  'cava-de-tirreni': {
    en: 'Cava de\' Tirreni',
    it: 'Cava de\' Tirreni',
  },
  'battipaglia': {
    en: 'Battipaglia',
    it: 'Battipaglia',
  },
  'naples': {
    en: 'Naples',
    it: 'Napoli',
  },
  'giugliano-in-campania': {
    en: 'Giugliano in Campania',
    it: 'Giugliano in Campania',
  },
  'torre-del-greco': {
    en: 'Torre del Greco',
    it: 'Torre del Greco',
  },
  'solofra': {
    en: 'Solofra',
    it: 'Solofra',
  },
  'cervinara': {
    en: 'Cervinara',
    it: 'Cervinara',
  },
  'mercogliano': {
    en: 'Mercogliano',
    it: 'Mercogliano',
  },
  'atripalda': {
    en: 'Atripalda',
    it: 'Atripalda',
  },
  'monteforte-irpino': {
    en: 'Monteforte Irpino',
    it: 'Monteforte Irpino',
  },
  'grottaminarda': {
    en: 'Grottaminarda',
    it: 'Grottaminarda',
  },
  'mirabella-eclano': {
    en: 'Mirabella Eclano',
    it: 'Mirabella Eclano',
  },
  'calitri': {
    en: 'Calitri',
    it: 'Calitri',
  },
  'lioni': {
    en: 'Lioni',
    it: 'Lioni',
  },
  'santangelo-dei-lombardi': {
    en: 'Sant\'Angelo dei Lombardi',
    it: 'Sant\'Angelo dei Lombardi',
  },
  'bisaccia': {
    en: 'Bisaccia',
    it: 'Bisaccia',
  },
  'montella': {
    en: 'Montella',
    it: 'Montella',
  },
  'nusco': {
    en: 'Nusco',
    it: 'Nusco',
  },
  'lauro': {
    en: 'Lauro',
    it: 'Lauro',
  },
  'mugnano-del-cardinale': {
    en: 'Mugnano del Cardinale',
    it: 'Mugnano del Cardinale',
  },
  'baiano': {
    en: 'Baiano',
    it: 'Baiano',
  },
  'avella': {
    en: 'Avella',
    it: 'Avella',
  },
  'telese-terme': {
    en: 'Telese Terme',
    it: 'Telese Terme',
  },
  'airola': {
    en: 'Airola',
    it: 'Airola',
  },
  'santagata-de-goti': {
    en: 'Sant\'Agata de\' Goti',
    it: 'Sant\'Agata de\' Goti',
  },
  'guardia-sanframondi': {
    en: 'Guardia Sanframondi',
    it: 'Guardia Sanframondi',
  },
  'san-bartolomeo-in-galdo': {
    en: 'San Bartolomeo in Galdo',
    it: 'San Bartolomeo in Galdo',
  },
  'morcone': {
    en: 'Morcone',
    it: 'Morcone',
  },
  'pietrelcina': {
    en: 'Pietrelcina',
    it: 'Pietrelcina',
  },
  'colle-sannita': {
    en: 'Colle Sannita',
    it: 'Colle Sannita',
  },
  'cerreto-sannita': {
    en: 'Cerreto Sannita',
    it: 'Cerreto Sannita',
  },
  'san-marco-dei-cavoti': {
    en: 'San Marco dei Cavoti',
    it: 'San Marco dei Cavoti',
  },
  'solopaca': {
    en: 'Solopaca',
    it: 'Solopaca',
  },
  'foglianise': {
    en: 'Foglianise',
    it: 'Foglianise',
  },
  'apice': {
    en: 'Apice',
    it: 'Apice',
  },
  'paduli': {
    en: 'Paduli',
    it: 'Paduli',
  },
  'torrecuso': {
    en: 'Torrecuso',
    it: 'Torrecuso',
  },
  'dugenta': {
    en: 'Dugenta',
    it: 'Dugenta',
  },
  'maddaloni': {
    en: 'Maddaloni',
    it: 'Maddaloni',
  },
  'santa-maria-capua-vetere': {
    en: 'Santa Maria Capua Vetere',
    it: 'Santa Maria Capua Vetere',
  },
  'mondragone': {
    en: 'Mondragone',
    it: 'Mondragone',
  },
  'capua': {
    en: 'Capua',
    it: 'Capua',
  },
  'orta-di-atella': {
    en: 'Orta di Atella',
    it: 'Orta di Atella',
  },
  'trentola-ducenta': {
    en: 'Trentola Ducenta',
    it: 'Trentola Ducenta',
  },
  'san-nicola-la-strada': {
    en: 'San Nicola la Strada',
    it: 'San Nicola la Strada',
  },
  'lusciano': {
    en: 'Lusciano',
    it: 'Lusciano',
  },
  'casal-di-principe': {
    en: 'Casal di Principe',
    it: 'Casal di Principe',
  },
  'teano': {
    en: 'Teano',
    it: 'Teano',
  },
  'sessa-aurunca': {
    en: 'Sessa Aurunca',
    it: 'Sessa Aurunca',
  },
  'piedimonte-matese': {
    en: 'Piedimonte Matese',
    it: 'Piedimonte Matese',
  },
  'scafati': {
    en: 'Scafati',
    it: 'Scafati',
  },
  'nocera-inferiore': {
    en: 'Nocera Inferiore',
    it: 'Nocera Inferiore',
  },
  'sarno': {
    en: 'Sarno',
    it: 'Sarno',
  },
  'eboli': {
    en: 'Eboli',
    it: 'Eboli',
  },
  'pagani': {
    en: 'Pagani',
    it: 'Pagani',
  },
  'angri': {
    en: 'Angri',
    it: 'Angri',
  },
  'pontecagnano-faiano': {
    en: 'Pontecagnano Faiano',
    it: 'Pontecagnano Faiano',
  },
  'nocera-superiore': {
    en: 'Nocera Superiore',
    it: 'Nocera Superiore',
  },
  'agropoli': {
    en: 'Agropoli',
    it: 'Agropoli',
  },
  'capaccio-paestum': {
    en: 'Capaccio Paestum',
    it: 'Capaccio Paestum',
  },
  'baronissi': {
    en: 'Baronissi',
    it: 'Baronissi',
  },
  'mercato-san-severino': {
    en: 'Mercato San Severino',
    it: 'Mercato San Severino',
  },
  'vallo-della-lucania': {
    en: 'Vallo della Lucania',
    it: 'Vallo della Lucania',
  },
  'amalfi': {
    en: 'Amalfi',
    it: 'Amalfi',
  },
  'positano': {
    en: 'Positano',
    it: 'Positano',
  },
  'maiori': {
    en: 'Maiori',
    it: 'Maiori',
  },
  'vietri-sul-mare': {
    en: 'Vietri sul Mare',
    it: 'Vietri sul Mare',
  },
  'pozzuoli': {
    en: 'Pozzuoli',
    it: 'Pozzuoli',
  },
  'casoria': {
    en: 'Casoria',
    it: 'Casoria',
  },
  'castellammare-di-stabia': {
    en: 'Castellammare di Stabia',
    it: 'Castellammare di Stabia',
  },
  'afragola': {
    en: 'Afragola',
    it: 'Afragola',
  },
  'marano-di-napoli': {
    en: 'Marano di Napoli',
    it: 'Marano di Napoli',
  },
  'portici': {
    en: 'Portici',
    it: 'Portici',
  },
  'ercolano': {
    en: 'Ercolano',
    it: 'Ercolano',
  },
  'casalnuovo-di-napoli': {
    en: 'Casalnuovo di Napoli',
    it: 'Casalnuovo di Napoli',
  },
  'torre-annunziata': {
    en: 'Torre Annunziata',
    it: 'Torre Annunziata',
  },
  'acerra': {
    en: 'Acerra',
    it: 'Acerra',
  },
  'san-giorgio-a-cremano': {
    en: 'San Giorgio a Cremano',
    it: 'San Giorgio a Cremano',
  },
  'nola': {
    en: 'Nola',
    it: 'Nola',
  },
  'pomigliano-darco': {
    en: 'Pomigliano d\'Arco',
    it: 'Pomigliano d\'Arco',
  },
  'somma-vesuviana': {
    en: 'Somma Vesuviana',
    it: 'Somma Vesuviana',
  },
  'villaricca': {
    en: 'Villaricca',
    it: 'Villaricca',
  },
  'arzano': {
    en: 'Arzano',
    it: 'Arzano',
  },
  'volla': {
    en: 'Volla',
    it: 'Volla',
  },
  'melito-di-napoli': {
    en: 'Melito di Napoli',
    it: 'Melito di Napoli',
  },
  'cercola': {
    en: 'Cercola',
    it: 'Cercola',
  },
  'santantimo': {
    en: 'Sant\'Antimo',
    it: 'Sant\'Antimo',
  },
  'pompei': {
    en: 'Pompei',
    it: 'Pompei',
  },
  'sorrento': {
    en: 'Sorrento',
    it: 'Sorrento',
  },
  'ischia': {
    en: 'Ischia',
    it: 'Ischia',
  },
  'capri': {
    en: 'Capri',
    it: 'Capri',
  },
  'procida': {
    en: 'Procida',
    it: 'Procida',
  },
};

// Province name translations
export const provinceNameTranslations: Record<string, Record<Locale, string>> = {
  'Region of Campania': {
    en: 'Region of Campania',
    it: 'Regione Campania',
  },
  'Province of Avellino': {
    en: 'Province of Avellino',
    it: 'Provincia di Avellino',
  },
  'Province of Benevento': {
    en: 'Province of Benevento',
    it: 'Provincia di Benevento',
  },
  'Province of Caserta': {
    en: 'Province of Caserta',
    it: 'Provincia di Caserta',
  },
  'Province of Salerno': {
    en: 'Province of Salerno',
    it: 'Provincia di Salerno',
  },
  'Metropolitan City of Naples': {
    en: 'Metropolitan City of Naples',
    it: 'Città Metropolitana di Napoli',
  },
};

// Location slug translations
export const locationSlugTranslations: Record<Locale, Record<string, string>> = {
  en: {
    'campania': 'campania',
    'avellino': 'avellino',
    'ariano-irpino': 'ariano-irpino',
    'montoro': 'montoro',
    'benevento': 'benevento',
    'montesarchio': 'montesarchio',
    'san-giorgio-del-sannio': 'san-giorgio-del-sannio',
    'caserta': 'caserta',
    'aversa': 'aversa',
    'marcianise': 'marcianise',
    'salerno': 'salerno',
    'cava-de-tirreni': 'cava-de-tirreni',
    'battipaglia': 'battipaglia',
    'naples': 'naples',
    'giugliano-in-campania': 'giugliano-in-campania',
    'torre-del-greco': 'torre-del-greco',
    'solofra': 'solofra',
    'cervinara': 'cervinara',
    'mercogliano': 'mercogliano',
    'atripalda': 'atripalda',
    'monteforte-irpino': 'monteforte-irpino',
    'grottaminarda': 'grottaminarda',
    'mirabella-eclano': 'mirabella-eclano',
    'calitri': 'calitri',
    'lioni': 'lioni',
    'santangelo-dei-lombardi': 'santangelo-dei-lombardi',
    'bisaccia': 'bisaccia',
    'montella': 'montella',
    'nusco': 'nusco',
    'lauro': 'lauro',
    'mugnano-del-cardinale': 'mugnano-del-cardinale',
    'baiano': 'baiano',
    'avella': 'avella',
    'telese-terme': 'telese-terme',
    'airola': 'airola',
    'santagata-de-goti': 'santagata-de-goti',
    'guardia-sanframondi': 'guardia-sanframondi',
    'san-bartolomeo-in-galdo': 'san-bartolomeo-in-galdo',
    'morcone': 'morcone',
    'pietrelcina': 'pietrelcina',
    'colle-sannita': 'colle-sannita',
    'cerreto-sannita': 'cerreto-sannita',
    'san-marco-dei-cavoti': 'san-marco-dei-cavoti',
    'solopaca': 'solopaca',
    'foglianise': 'foglianise',
    'apice': 'apice',
    'paduli': 'paduli',
    'torrecuso': 'torrecuso',
    'dugenta': 'dugenta',
    'maddaloni': 'maddaloni',
    'santa-maria-capua-vetere': 'santa-maria-capua-vetere',
    'mondragone': 'mondragone',
    'capua': 'capua',
    'orta-di-atella': 'orta-di-atella',
    'trentola-ducenta': 'trentola-ducenta',
    'san-nicola-la-strada': 'san-nicola-la-strada',
    'lusciano': 'lusciano',
    'casal-di-principe': 'casal-di-principe',
    'teano': 'teano',
    'sessa-aurunca': 'sessa-aurunca',
    'piedimonte-matese': 'piedimonte-matese',
    'scafati': 'scafati',
    'nocera-inferiore': 'nocera-inferiore',
    'sarno': 'sarno',
    'eboli': 'eboli',
    'pagani': 'pagani',
    'angri': 'angri',
    'pontecagnano-faiano': 'pontecagnano-faiano',
    'nocera-superiore': 'nocera-superiore',
    'agropoli': 'agropoli',
    'capaccio-paestum': 'capaccio-paestum',
    'baronissi': 'baronissi',
    'mercato-san-severino': 'mercato-san-severino',
    'vallo-della-lucania': 'vallo-della-lucania',
    'amalfi': 'amalfi',
    'positano': 'positano',
    'maiori': 'maiori',
    'vietri-sul-mare': 'vietri-sul-mare',
    'pozzuoli': 'pozzuoli',
    'casoria': 'casoria',
    'castellammare-di-stabia': 'castellammare-di-stabia',
    'afragola': 'afragola',
    'marano-di-napoli': 'marano-di-napoli',
    'portici': 'portici',
    'ercolano': 'ercolano',
    'casalnuovo-di-napoli': 'casalnuovo-di-napoli',
    'torre-annunziata': 'torre-annunziata',
    'acerra': 'acerra',
    'san-giorgio-a-cremano': 'san-giorgio-a-cremano',
    'nola': 'nola',
    'pomigliano-darco': 'pomigliano-darco',
    'somma-vesuviana': 'somma-vesuviana',
    'villaricca': 'villaricca',
    'arzano': 'arzano',
    'volla': 'volla',
    'melito-di-napoli': 'melito-di-napoli',
    'cercola': 'cercola',
    'santantimo': 'santantimo',
    'pompei': 'pompei',
    'sorrento': 'sorrento',
    'ischia': 'ischia',
    'capri': 'capri',
    'procida': 'procida',
  },
  it: {
    'campania': 'campania',
    'avellino': 'avellino',
    'ariano-irpino': 'ariano-irpino',
    'montoro': 'montoro',
    'benevento': 'benevento',
    'montesarchio': 'montesarchio',
    'san-giorgio-del-sannio': 'san-giorgio-del-sannio',
    'caserta': 'caserta',
    'aversa': 'aversa',
    'marcianise': 'marcianise',
    'salerno': 'salerno',
    'cava-de-tirreni': 'cava-de-tirreni',
    'battipaglia': 'battipaglia',
    'naples': 'napoli',
    'giugliano-in-campania': 'giugliano-in-campania',
    'torre-del-greco': 'torre-del-greco',
    'solofra': 'solofra',
    'cervinara': 'cervinara',
    'mercogliano': 'mercogliano',
    'atripalda': 'atripalda',
    'monteforte-irpino': 'monteforte-irpino',
    'grottaminarda': 'grottaminarda',
    'mirabella-eclano': 'mirabella-eclano',
    'calitri': 'calitri',
    'lioni': 'lioni',
    'santangelo-dei-lombardi': 'santangelo-dei-lombardi',
    'bisaccia': 'bisaccia',
    'montella': 'montella',
    'nusco': 'nusco',
    'lauro': 'lauro',
    'mugnano-del-cardinale': 'mugnano-del-cardinale',
    'baiano': 'baiano',
    'avella': 'avella',
    'telese-terme': 'telese-terme',
    'airola': 'airola',
    'santagata-de-goti': 'santagata-de-goti',
    'guardia-sanframondi': 'guardia-sanframondi',
    'san-bartolomeo-in-galdo': 'san-bartolomeo-in-galdo',
    'morcone': 'morcone',
    'pietrelcina': 'pietrelcina',
    'colle-sannita': 'colle-sannita',
    'cerreto-sannita': 'cerreto-sannita',
    'san-marco-dei-cavoti': 'san-marco-dei-cavoti',
    'solopaca': 'solopaca',
    'foglianise': 'foglianise',
    'apice': 'apice',
    'paduli': 'paduli',
    'torrecuso': 'torrecuso',
    'dugenta': 'dugenta',
    'maddaloni': 'maddaloni',
    'santa-maria-capua-vetere': 'santa-maria-capua-vetere',
    'mondragone': 'mondragone',
    'capua': 'capua',
    'orta-di-atella': 'orta-di-atella',
    'trentola-ducenta': 'trentola-ducenta',
    'san-nicola-la-strada': 'san-nicola-la-strada',
    'lusciano': 'lusciano',
    'casal-di-principe': 'casal-di-principe',
    'teano': 'teano',
    'sessa-aurunca': 'sessa-aurunca',
    'piedimonte-matese': 'piedimonte-matese',
    'scafati': 'scafati',
    'nocera-inferiore': 'nocera-inferiore',
    'sarno': 'sarno',
    'eboli': 'eboli',
    'pagani': 'pagani',
    'angri': 'angri',
    'pontecagnano-faiano': 'pontecagnano-faiano',
    'nocera-superiore': 'nocera-superiore',
    'agropoli': 'agropoli',
    'capaccio-paestum': 'capaccio-paestum',
    'baronissi': 'baronissi',
    'mercato-san-severino': 'mercato-san-severino',
    'vallo-della-lucania': 'vallo-della-lucania',
    'amalfi': 'amalfi',
    'positano': 'positano',
    'maiori': 'maiori',
    'vietri-sul-mare': 'vietri-sul-mare',
    'pozzuoli': 'pozzuoli',
    'casoria': 'casoria',
    'castellammare-di-stabia': 'castellammare-di-stabia',
    'afragola': 'afragola',
    'marano-di-napoli': 'marano-di-napoli',
    'portici': 'portici',
    'ercolano': 'ercolano',
    'casalnuovo-di-napoli': 'casalnuovo-di-napoli',
    'torre-annunziata': 'torre-annunziata',
    'acerra': 'acerra',
    'san-giorgio-a-cremano': 'san-giorgio-a-cremano',
    'nola': 'nola',
    'pomigliano-darco': 'pomigliano-darco',
    'somma-vesuviana': 'somma-vesuviana',
    'villaricca': 'villaricca',
    'arzano': 'arzano',
    'volla': 'volla',
    'melito-di-napoli': 'melito-di-napoli',
    'cercola': 'cercola',
    'santantimo': 'santantimo',
    'pompei': 'pompei',
    'sorrento': 'sorrento',
    'ischia': 'ischia',
    'capri': 'capri',
    'procida': 'procida',
  },
};

// Function to get location name by locale
export function getLocationName(slug: string, locale: Locale): string {
  return locationNameTranslations[slug]?.[locale] || slug;
}

// Function to get province name by locale
export function getProvinceName(province: string, locale: Locale): string {
  return provinceNameTranslations[province]?.[locale] || province;
}

// Function to get location slug by locale
export function getLocationSlug(slug: string, locale: Locale): string {
  return locationSlugTranslations[locale][slug] || slug;
}

// Get location by slug
export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find(location => location.slug === slug);
}

// Get all locations by province
export function getLocationsByProvince(province: string): Location[] {
  return locations.filter(location => location.province === province);
}

// Get all unique provinces
export function getUniqueProvinces(): string[] {
  const provinces = new Set<string>();
  
  for (const location of locations) {
    provinces.add(location.province);
  }
  
  return Array.from(provinces);
}

export default locations;
