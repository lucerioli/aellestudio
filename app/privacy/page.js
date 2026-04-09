import Link from 'next/link'

export default function Privacy() {
  const today = new Date().toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <div className="max-w-4xl mx-auto px-6 py-24 space-y-12 text-slate-700 leading-relaxed">
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-semibold text-slate-900" style={{ fontFamily: 'var(--font-serif)' }}>
          Privacy & Cookie Policy
        </h1>
        <p className="text-sm text-slate-500">Ultimo aggiornamento: {today}</p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900" style={{ fontFamily: 'var(--font-serif)' }}>1. Titolare del Trattamento</h2>
        <p>
          Il Titolare del trattamento dei dati personali è <strong>AL - Studio Cerioli</strong>, con sede in Via 1 Maggio, 17 – 54028 Villafranca in Lunigiana (MS), 
          P.IVA/C.F. [INSERISCI P.IVA], PEC: [INSERISCI PEC], Email: [INSERISCI EMAIL].
        </p>
        <p>
          Per qualsiasi richiesta relativa alla privacy, è possibile contattare il Titolare scrivendo a: <a href="mailto:privacy@alstudio.it" className="text-slate-900 underline hover:text-slate-700">privacy@alstudio.it</a>
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900" style={{ fontFamily: 'var(--font-serif)' }}>2. Tipologie di Dati Raccolti</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Dati di navigazione:</strong> indirizzi IP, URI, ora della richiesta, metodo utilizzato, dimensione del file, codice risposta, parametri relativi al sistema operativo e all'ambiente informatico dell'utente.</li>
          <li><strong>Dati forniti volontariamente:</strong> nome, cognome, email, telefono, messaggio e ogni altra informazione inviata tramite form di contatto o prenotazione.</li>
          <li><strong>Cookies e tecnologie di tracciamento:</strong> vedi sezione dedicata più in basso.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900" style={{ fontFamily: 'var(--font-serif)' }}>3. Finalità e Base Giuridica del Trattamento</h2>
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-50 text-left">
              <th className="border border-slate-200 px-4 py-3 font-medium">Finalità</th>
              <th className="border border-slate-200 px-4 py-3 font-medium">Base Giuridica</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="border border-slate-200 px-4 py-3">Erogazione servizi professionali, gestione pratiche fiscali/contabili</td>
              <td className="border border-slate-200 px-4 py-3">Esecuzione di un contratto / Adempimento legale</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3">Adempimenti contabili, fiscali e di legge (es. conservazione documenti per 10 anni)</td>
              <td className="border border-slate-200 px-4 py-3">Obbligo legale (D.P.R. 600/1973, D.Lgs. 196/2003)</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3">Invio newsletter, comunicazioni commerciali, sondaggi</td>
              <td className="border border-slate-200 px-4 py-3">Consenso esplicito dell'interessato</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3">Statistiche anonime di accesso al sito, miglioramento UX</td>
              <td className="border border-slate-200 px-4 py-3">Legittimo interesse del Titolare / Consenso (per cookie analitici)</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900" style={{ fontFamily: 'var(--font-serif)' }}>4. Modalità di Trattamento e Conservazione</h2>
        <p>
          I dati sono trattati con strumenti automatizzati e/o manuali, garantendo sicurezza e riservatezza. I dati saranno conservati per il tempo strettamente necessario al perseguimento delle finalità indicate:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Dati fiscali/contabili:</strong> 10 anni dalla fine del rapporto professionale (obbligo di legge).</li>
          <li><strong>Dati di contatto/marketing:</strong> fino a revoca del consenso o massimo 24 mesi dall'ultima interazione.</li>
          <li><strong>Dati di navigazione/cookie:</strong> massimo 12 mesi (o secondo quanto previsto dalle normative tecniche).</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900" style={{ fontFamily: 'var(--font-serif)' }}>5. Condivisione e Trasferimento Dati</h2>
        <p>
          I dati non saranno diffusi a soggetti indeterminati. Potranno essere comunicati a:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Consulenti esterni, commercialisti collaboratori, professionisti legali (se necessario per il mandato).</li>
          <li>Fornitori di servizi tecnici (hosting, manutenzione sito, servizi di prenotazione).</li>
          <li>Autorità pubbliche, Agenzia delle Entrate, Enti previdenziali, nei casi previsti dalla legge.</li>
        </ul>
        <p>
          Eventuali trasferimenti di dati fuori dallo Spazio Economico Europeo avverranno solo previa verifica di adeguatezza GDPR o mediante Clausole Contrattuali Standard approvate dalla Commissione Europea.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900" style={{ fontFamily: 'var(--font-serif)' }}>6. Diritti dell'Interessato</h2>
        <p>
          Ai sensi degli artt. 15-22 del GDPR, l'utente ha il diritto di:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Conferma dell'esistenza dei propri dati e accesso agli stessi.</li>
          <li>Richiedere rettifica, integrazione o cancellazione (diritto all'oblio).</li>
          <li>Limitare il trattamento o opporsi allo stesso per motivi legittimi.</li>
          <li>Ricevere i dati in formato strutturato e interoperabile (portabilità).</li>
          <li>Revocare il consenso in qualsiasi momento (senza pregiudicare la liceità del trattamento precedente).</li>
          <li>Proporre reclamo al <strong>Garante per la Protezione dei Dati Personali</strong> (www.garanteprivacy.it).</li>
        </ul>
        <p>
          Per esercitare i diritti, inviare richiesta a: <a href="mailto:privacy@alstudio.it" className="text-slate-900 underline">privacy@alstudio.it</a>
        </p>
      </section>

      <section className="space-y-6 bg-slate-50 p-8 rounded-2xl border border-slate-200">
        <h2 className="text-2xl font-semibold text-slate-900" style={{ fontFamily: 'var(--font-serif)' }}>7. Cookie Policy</h2>
        <p>
          Questo sito utilizza cookie per garantire il corretto funzionamento, analizzare il traffico in forma anonima e, solo previo esplicito consenso, per finalità statistiche avanzate o di marketing.
        </p>
        
        <h3 className="text-lg font-semibold text-slate-900 mt-4">Tipologie di Cookie utilizzati:</h3>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Cookie Tecnici (Necessari):</strong> indispensabili per la navigazione, il salvataggio delle preferenze di consenso e il funzionamento dei form. Non richiedono consenso.</li>
          <li><strong>Cookie Analitici (Statistici):</strong> raccolgono informazioni aggregate e anonime sul numero di visitatori e sulle pagine visitate. Vengono attivati solo dopo il consenso espresso tramite banner.</li>
          <li><strong>Cookie di Profilazione/Marketing:</strong> il sito <strong>NON</strong> utilizza cookie di profilazione di terze parti per finalità pubblicitarie. Eventuali integrazioni future saranno sempre subordinate a preventivo consenso esplicito.</li>
        </ul>

        <h3 className="text-lg font-semibold text-slate-900 mt-4">Come gestire o revocare il consenso:</h3>
        <p>
          È possibile modificare le proprie preferenze in qualsiasi momento cliccando su <Link href="/cookie-policy" className="text-slate-900 underline font-medium">Gestione Cookie</Link> nel footer, 
          oppure cancellando i cookie dalle impostazioni del browser (Chrome, Safari, Firefox, Edge).
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900" style={{ fontFamily: 'var(--font-serif)' }}>8. Modifiche alla Policy</h2>
        <p>
          Il Titolare si riserva il diritto di apportare modifiche alla presente policy in qualsiasi momento, dandone pubblicità agli utenti su questa pagina e, ove possibile, tramite notifica o comunicazione diretta.
        </p>
      </section>

      <div className="pt-8 border-t border-slate-200">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-900 font-medium hover:gap-3 transition-all">
          ← Torna alla Homepage
        </Link>
      </div>
    </div>
  )
}