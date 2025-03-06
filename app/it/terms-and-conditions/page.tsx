import { Metadata } from 'next';
import Link from 'next/link';
import { getAlternateUrls } from '../../../utils/i18n';

export const metadata: Metadata = {
  title: 'Termini e Condizioni | Noleggio di Lusso Rolls-Royce',
  description: 'I nostri termini e condizioni per i servizi di noleggio Rolls-Royce. Si prega di leggere attentamente questi termini prima di prenotare i nostri servizi.',
  alternates: {
    canonical: '/it/terms-and-conditions',
    languages: {
      'en': '/en/terms-and-conditions',
      'it': '/it/terms-and-conditions',
    },
  },
};

export default function ItalianTermsAndConditionsPage() {
  return (
    <>
      <div className="pt-24 pb-8 bg-navy-dark text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-center">
            Termini e Condizioni
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Si prega di leggere attentamente questi termini prima di utilizzare i nostri servizi
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
                Questi termini e condizioni regolano l'utilizzo dei nostri servizi di noleggio Rolls-Royce. Prenotando i nostri servizi, 
                accetti integralmente questi termini e condizioni. Se non sei d'accordo con questi termini e condizioni o con qualsiasi parte di essi, 
                non devi utilizzare i nostri servizi.
              </p>
              
              <h2>2. Prenotazione e Riserva</h2>
              <p>
                Tutte le prenotazioni sono soggette a disponibilità e conferma. Una prenotazione non è confermata fino a quando non ricevi una conferma 
                scritta da parte nostra e il deposito richiesto è stato pagato. Ci riserviamo il diritto di rifiutare qualsiasi prenotazione senza fornire motivazioni.
              </p>
              <p>
                Per garantire una prenotazione, è richiesto un acconto non rimborsabile del 30% del costo totale del noleggio. Il saldo rimanente deve essere pagato 
                integralmente almeno 14 giorni prima della data del noleggio per i matrimoni e 7 giorni prima per altri eventi.
              </p>
              
              <h2>3. Politica di Cancellazione</h2>
              <p>
                Le cancellazioni devono essere effettuate per iscritto. La nostra politica di cancellazione è la seguente:
              </p>
              <ul>
                <li>Cancellazioni effettuate più di 30 giorni prima della data del noleggio: L'acconto non è rimborsabile, ma può essere trasferito a un'altra data entro 6 mesi.</li>
                <li>Cancellazioni effettuate tra 14-30 giorni prima della data del noleggio: È dovuto il 50% del costo totale del noleggio.</li>
                <li>Cancellazioni effettuate meno di 14 giorni prima della data del noleggio: È dovuto il 100% del costo totale del noleggio.</li>
              </ul>
              
              <h2>4. Utilizzo del Veicolo e Restrizioni</h2>
              <p>
                I nostri veicoli Rolls-Royce sono forniti con un autista professionale. Le opzioni di guida autonoma non sono disponibili. L'autista ha 
                completa discrezione sull'operazione e l'uso del veicolo. L'autista può rifiutarsi di trasportare qualsiasi persona che si ritiene sia 
                sotto l'influenza di alcol o droghe, o il cui comportamento è considerato pericoloso o inaccettabile.
              </p>
              <p>
                Le seguenti restrizioni si applicano a tutti i noleggi:
              </p>
              <ul>
                <li>Non è consentito fumare nel veicolo in nessun momento.</li>
                <li>Non è possibile consumare cibo o bevande nel veicolo senza previa autorizzazione.</li>
                <li>Il numero massimo di passeggeri non deve superare la capacità legale del veicolo.</li>
                <li>Qualsiasi danno causato al veicolo dal cliente o dai suoi ospiti sarà addebitato di conseguenza.</li>
              </ul>
              
              <h2>5. Ritardi e Tempistiche</h2>
              <p>
                Sebbene facciamo ogni sforzo per arrivare all'orario concordato, non possiamo essere ritenuti responsabili per ritardi dovuti a circostanze 
                al di fuori del nostro controllo, come condizioni del traffico, chiusure stradali, condizioni meteorologiche o guasti meccanici. In tali casi, 
                faremo sforzi ragionevoli per fornire un veicolo o un servizio alternativo.
              </p>
              <p>
                Per le prenotazioni di matrimonio, consigliamo di prevedere del tempo extra nel tuo programma per tenere conto di potenziali ritardi.
              </p>
              
              <h2>6. Fotografia e Marketing</h2>
              <p>
                Ci riserviamo il diritto di scattare fotografie dei nostri veicoli al tuo evento per scopi di marketing, a meno che tu non richieda 
                specificamente diversamente per iscritto prima dell'evento.
              </p>
              
              <h2>7. Responsabilità</h2>
              <p>
                La nostra responsabilità per qualsiasi perdita o danno subito da te a seguito della nostra negligenza o violazione del contratto è limitata all'importo 
                totale pagato da te per il noleggio. Non siamo responsabili per eventuali perdite indirette o consequenziali, come perdita di godimento o delusione.
              </p>
              <p>
                Manteniamo un'assicurazione completa per i nostri veicoli e passeggeri come richiesto dalla legge. Tuttavia, gli oggetti personali lasciati nel 
                veicolo non sono coperti dalla nostra assicurazione, e non possiamo accettare responsabilità per eventuali perdite o danni a tali oggetti.
              </p>
              
              <h2>8. Forza Maggiore</h2>
              <p>
                Non saremo responsabili per eventuali mancanze o ritardi nell'esecuzione dei nostri obblighi laddove tale mancanza o ritardo derivi da qualsiasi causa 
                che è al di fuori del nostro ragionevole controllo. Tali cause includono, ma non sono limitate a: interruzione di corrente, guasto del provider di servizi 
                internet, scioperi, serrate o altre azioni industriali, disordini civili, incendi, esplosioni, inondazioni, tempeste, terremoti, subsidenza, atti di 
                terrorismo, atti di guerra, azione governativa, epidemia o pandemia, o qualsiasi altro evento naturale o causato dall'uomo al di fuori del nostro controllo.
              </p>
              
              <h2>9. Legge Applicabile</h2>
              <p>
                Questi termini e condizioni sono regolati e interpretati in conformità con le leggi dell'Italia. Qualsiasi controversia relativa a questi 
                termini e condizioni sarà soggetta alla giurisdizione esclusiva dei tribunali italiani.
              </p>
              
              <h2>10. Contattaci</h2>
              <p>
                Se hai domande su questi termini e condizioni, contattaci a:
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
