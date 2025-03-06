import { Metadata } from 'next';
import Link from 'next/link';
import { getAlternateUrls } from '../../../utils/i18n';

export const metadata: Metadata = {
  title: 'Informativa sulla Privacy | Noleggio di Lusso Rolls-Royce',
  description: 'La nostra informativa sulla privacy spiega come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali quando utilizzi i nostri servizi di noleggio Rolls-Royce.',
  alternates: {
    canonical: '/it/privacy-policy',
    languages: {
      'en': '/en/privacy-policy',
      'it': '/it/privacy-policy',
    },
  },
};

export default function ItalianPrivacyPolicyPage() {
  return (
    <>
      <div className="pt-24 pb-8 bg-navy-dark text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-center">
            Informativa sulla Privacy
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Come raccogliamo, utilizziamo e proteggiamo le tue informazioni
          </p>
        </div>
      </div>
      
      <div className="py-16 bg-white dark:bg-navy-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>Ultimo Aggiornamento: 6 Marzo 2025</p>
              
              <h2>1. Introduzione</h2>
              <p>
                Benvenuto a Rolls-Royce Luxury Rentals. Rispettiamo la tua privacy e ci impegniamo a proteggere i tuoi dati personali. 
                Questa informativa sulla privacy ti informerà su come ci prendiamo cura dei tuoi dati personali quando visiti il nostro sito web 
                e ti informerà sui tuoi diritti alla privacy e su come la legge ti protegge.
              </p>
              
              <h2>2. I Dati che Raccogliamo su di Te</h2>
              <p>
                I dati personali, o informazioni personali, indicano qualsiasi informazione su un individuo da cui quella persona può essere identificata. 
                Possiamo raccogliere, utilizzare, archiviare e trasferire diversi tipi di dati personali su di te che abbiamo raggruppato come segue:
              </p>
              <ul>
                <li><strong>Dati di Identità</strong> includono nome, cognome, nome utente o identificatore simile.</li>
                <li><strong>Dati di Contatto</strong> includono indirizzo email, numeri di telefono e indirizzo.</li>
                <li><strong>Dati Tecnici</strong> includono indirizzo di protocollo internet (IP), tipo e versione del browser, impostazione del fuso orario e posizione, tipi e versioni di plug-in del browser, sistema operativo e piattaforma, e altre tecnologie sui dispositivi che utilizzi per accedere a questo sito web.</li>
                <li><strong>Dati di Utilizzo</strong> includono informazioni su come utilizzi il nostro sito web e i nostri servizi.</li>
                <li><strong>Dati di Marketing e Comunicazione</strong> includono le tue preferenze nel ricevere marketing da noi e dai nostri terzi e le tue preferenze di comunicazione.</li>
              </ul>
              
              <h2>3. Come Utilizziamo i Tuoi Dati Personali</h2>
              <p>
                Utilizzeremo i tuoi dati personali solo quando la legge ce lo consente. Più comunemente, utilizzeremo i tuoi dati personali nelle seguenti circostanze:
              </p>
              <ul>
                <li>Quando dobbiamo eseguire il contratto che stiamo per stipulare o abbiamo stipulato con te.</li>
                <li>Quando è necessario per i nostri interessi legittimi (o quelli di terzi) e i tuoi interessi e diritti fondamentali non prevalgono su tali interessi.</li>
                <li>Quando dobbiamo rispettare un obbligo legale.</li>
              </ul>
              <p>
                Generalmente, non ci basiamo sul consenso come base legale per il trattamento dei tuoi dati personali, sebbene otterremo il tuo consenso prima di inviarti comunicazioni di marketing diretto di terze parti tramite email o messaggio di testo. Hai il diritto di ritirare il consenso al marketing in qualsiasi momento contattandoci.
              </p>
              
              <h2>4. Sicurezza dei Dati</h2>
              <p>
                Abbiamo messo in atto misure di sicurezza appropriate per impedire che i tuoi dati personali vengano accidentalmente persi, utilizzati o accessibili in modo non autorizzato, alterati o divulgati. Inoltre, limitiamo l'accesso ai tuoi dati personali a quei dipendenti, agenti, appaltatori e altre terze parti che hanno una necessità aziendale di conoscerli. Elaboreranno i tuoi dati personali solo su nostre istruzioni e sono soggetti a un dovere di riservatezza.
              </p>
              
              <h2>5. Conservazione dei Dati</h2>
              <p>
                Conserveremo i tuoi dati personali solo per il tempo ragionevolmente necessario per soddisfare gli scopi per cui li abbiamo raccolti, anche ai fini di soddisfare eventuali requisiti legali, normativi, fiscali, contabili o di rendicontazione. Possiamo conservare i tuoi dati personali per un periodo più lungo in caso di reclamo o se riteniamo ragionevolmente che vi sia la prospettiva di un contenzioso in relazione al nostro rapporto con te.
              </p>
              
              <h2>6. I Tuoi Diritti Legali</h2>
              <p>
                In determinate circostanze, hai diritti ai sensi delle leggi sulla protezione dei dati in relazione ai tuoi dati personali. Questi includono il diritto di:
              </p>
              <ul>
                <li>Richiedere l'accesso ai tuoi dati personali.</li>
                <li>Richiedere la correzione dei tuoi dati personali.</li>
                <li>Richiedere la cancellazione dei tuoi dati personali.</li>
                <li>Opporti al trattamento dei tuoi dati personali.</li>
                <li>Richiedere la limitazione del trattamento dei tuoi dati personali.</li>
                <li>Richiedere il trasferimento dei tuoi dati personali.</li>
                <li>Diritto di ritirare il consenso.</li>
              </ul>
              
              <h2>7. Contattaci</h2>
              <p>
                Se hai domande su questa informativa sulla privacy o sulle nostre pratiche sulla privacy, contattaci a:
              </p>
              <p>
                Email: <a href="mailto:info@rollsroycerent.it" className="text-gold hover:underline">info@rollsroycerent.it</a><br />
                Telefono: +39 3791398291<br />
                Indirizzo: Campania, Italia
              </p>
              
              <div className="mt-12 text-center">
                <Link href="/it" className="btn btn-primary">
                  Torna alla Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
