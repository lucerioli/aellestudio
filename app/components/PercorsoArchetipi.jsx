'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Rocket, Building2, TrendingUp, LifeBuoy, ArrowRight, CheckCircle, Info } from 'lucide-react'

const CTA_PRENOTA = {
  label: 'Prenota una consulenza',
  href: '/prenotazioni',
  sub: "Sai già con chi vuoi parlare? Fissa l'appuntamento."
}

const CTA_SCRIVI = {
  label: 'Scrivici',
  href: '/contatti',
  sub: 'Non sei sicuro da dove iniziare? Ti ricontattiamo noi.'
}

const PERCORSI = [
  {
    id: 'inizio',
    icon: Rocket,
    label: 'Sto iniziando',
    desc: "Apro una partita IVA o una nuova attività.",
    kicker: 'Per chi sta iniziando',
    title: 'Partire con il piede giusto',
    text: 'Dalla scelta della forma giuridica e del regime fiscale al primo impianto contabile: ti accompagniamo nei primi passi, così parti in regola e con le idee chiare sui numeri.',
    services: [
      { name: 'Avvio startup', desc: 'Business plan, scelta della forma giuridica, accesso a bandi e finanziamenti.' },
      { name: 'Consulenza fiscale', desc: 'Il regime più adatto a te e gli adempimenti fin dal primo giorno.' },
      { name: 'Tenuta impianto contabile', desc: "Un impianto ordinato fin dall'inizio, senza pensieri." }
    ],
    primary: CTA_PRENOTA,
    secondary: CTA_SCRIVI
  },
  {
    id: 'consolidata',
    icon: Building2,
    label: "Ho un'attività avviata",
    desc: "Dall'artigiano alla società strutturata.",
    kicker: "Per chi ha già un'attività",
    title: 'Una gestione solida, a qualsiasi scala',
    text: 'Che tu gestisca da solo una realtà artigianale avviata o una struttura con più dipendenti e fatturati importanti, ti seguiamo con lo stesso livello di attenzione: contabilità e reportistica chiare per chi cresce, bilanci e analisi per chi è già strutturato.',
    services: [
      { name: 'Consulenza fiscale', desc: "Pianificazione e ottimizzazione del carico fiscale, rapporti con l'Agenzia delle Entrate." },
      { name: 'Tenuta impianto contabile', desc: 'Contabilità ordinaria e semplificata, liquidazioni IVA, report periodici.' },
      { name: 'Consulenza del lavoro', desc: 'Buste paga, adempimenti previdenziali e contrattualistica.' }
    ],
    primary: CTA_PRENOTA,
    secondary: CTA_SCRIVI
  },
  {
    id: 'crescere',
    icon: TrendingUp,
    label: 'Voglio crescere',
    desc: 'Investire, strutturarmi, cercare agevolazioni.',
    kicker: 'Per chi vuole crescere',
    title: 'Dare struttura alle tue ambizioni',
    text: 'Nuovi investimenti, soci, una forma giuridica più adatta: ti aiutiamo a trasformare i progetti in piani sostenibili, con numeri chiari e le agevolazioni giuste.',
    services: [
      { name: 'Strategia di impresa', desc: 'Business planning, analisi di mercato, ricerca di agevolazioni.' },
      { name: 'Consulenza societaria', desc: 'Costituzione, trasformazioni, fusioni e scissioni, statuti e patti parasociali.' },
      { name: 'Analisi finanziaria', tag: 'Anche per aziende strutturate', desc: 'Flussi di cassa, indici di bilancio e proiezioni per decidere su investimenti e finanziamenti.' }
    ],
    primary: CTA_PRENOTA,
    secondary: CTA_SCRIVI
  },
  {
    id: 'difficolta',
    icon: LifeBuoy,
    label: 'Momento difficile',
    desc: "Tensioni di cassa, debiti, crisi d'impresa.",
    kicker: 'Per chi attraversa un momento difficile',
    title: 'Con calma e riservatezza',
    text: "Prima si interviene, più strade restano aperte. Analizziamo insieme la situazione e costruiamo un percorso concreto: risanamento, accordi con i creditori, continuità dell'attività.",
    services: [
      { name: "Crisi d'impresa", desc: 'Piani di risanamento, accordi con i creditori, continuità operativa.' },
      { name: 'Analisi finanziaria', desc: 'Flussi di cassa e liquidità: capire dove sei davvero.' },
      { name: 'Analisi contabile', desc: 'Numeri chiari per decidere con lucidità.' }
    ],
    primary: {
      label: 'Parliamone in riservatezza',
      href: '/contatti',
      sub: 'Scrivici: ti ricontattiamo noi, senza impegno.'
    },
    secondary: {
      label: 'Prenota una consulenza',
      href: '/prenotazioni',
      sub: 'Preferisci parlare direttamente con un professionista?'
    }
  }
]

export default function PercorsoArchetipi() {
  const [selectedId, setSelectedId] = useState(PERCORSI[0].id)
  const current = PERCORSI.find((p) => p.id === selectedId) ?? PERCORSI[0]

  return (
    <section className="py-16 md:py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Intestazione */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14 space-y-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">Da dove parti?</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
            Qualunque sia il tuo punto di partenza, c&apos;è un percorso per te.
          </h2>
          <p className="text-slate-600 text-lg">
            Scegli la situazione che ti assomiglia di più: ti mostriamo subito come possiamo aiutarti.
          </p>
        </div>

        {/* Le 4 situazioni (2x2 su mobile, 4 colonne su desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {PERCORSI.map((percorso) => {
            const isSelected = percorso.id === selectedId
            const Icon = percorso.icon
            return (
              <button
                key={percorso.id}
                type="button"
                onClick={() => setSelectedId(percorso.id)}
                aria-pressed={isSelected}
                className={`min-w-0 text-left rounded-2xl border p-4 sm:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 ${
                  isSelected
                    ? 'bg-slate-900 border-slate-900 text-white'
                    : 'bg-white border-slate-200 text-slate-900'
                }`}
              >
                <span
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-6 transition-colors ${
                    isSelected ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  <Icon size={24} aria-hidden="true" />
                </span>
                <span className="block text-base sm:text-xl font-semibold leading-snug" style={{ fontFamily: 'var(--font-serif)' }}>
                  {percorso.label}
                </span>
                <span className={`hidden sm:block mt-3 leading-relaxed ${isSelected ? 'text-slate-300' : 'text-slate-600'}`}>
                  {percorso.desc}
                </span>
              </button>
            )
          })}
        </div>

        {/* Pannello del percorso selezionato */}
        <div
          key={current.id}
          aria-live="polite"
          className="mt-6 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 lg:p-12 grid lg:grid-cols-2 gap-8 lg:gap-12 animate-[fadeIn_0.4s_ease]"
        >
          <div className="space-y-5 lg:self-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">{current.kicker}</p>
            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
              {current.title}
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">{current.text}</p>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 pt-3">
              <div className="flex flex-col items-start gap-2.5 sm:max-w-[16rem]">
                <Link
                  href={current.primary.href}
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-full font-medium hover:bg-slate-800 transition-all hover:shadow-lg"
                >
                  {current.primary.label}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-sm leading-snug text-slate-500">{current.primary.sub}</span>
              </div>
              <div className="flex flex-col items-start gap-2.5 sm:max-w-[16rem]">
                <Link
                  href={current.secondary.href}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-700 px-8 py-3.5 rounded-full font-medium hover:bg-slate-50 hover:border-slate-400 transition-all"
                >
                  {current.secondary.label}
                </Link>
                <span className="text-sm leading-snug text-slate-500">{current.secondary.sub}</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-100">
            <ul className="space-y-7">
              {current.services.map((service) => (
                <li key={service.name} className="flex gap-4">
                  <CheckCircle size={20} className="text-slate-900 mt-1 shrink-0" aria-hidden="true" />
                  <div className="min-w-0 space-y-1.5">
                    <p className="text-lg font-semibold text-slate-900 leading-snug" style={{ fontFamily: 'var(--font-serif)' }}>
                      {service.name}
                    </p>
                    {service.tag && (
                      <span className="inline-block text-xs font-medium text-slate-700 bg-slate-200 rounded-full px-2.5 py-1">
                        {service.tag}
                      </span>
                    )}
                    <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gratuità del primo confronto */}
        <div className="mt-6 flex gap-4 items-start bg-slate-100 rounded-2xl px-5 py-5 sm:px-7 sm:py-6">
          <Info size={22} className="text-slate-700 mt-0.5 shrink-0" aria-hidden="true" />
          <p className="text-slate-700 leading-relaxed">
            <strong className="font-semibold text-slate-900">Il primo confronto è sempre gratuito.</strong> Serve a inquadrare dimensione e complessità della tua attività. Solo per consulenze tecniche specifiche (ad esempio pareri scritti o simulazioni dettagliate) potrebbe essere previsto un costo, che ti comunichiamo sempre in anticipo.
          </p>
        </div>

        <div className="text-center mt-8">
          <Link href="/servizi" className="inline-flex items-center gap-2 text-slate-900 font-medium hover:gap-3 transition-all">
            Vedi tutti i servizi <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
