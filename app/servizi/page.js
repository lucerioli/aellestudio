'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FileText, BarChart3, TrendingUp, Users, Building2, ShieldCheck, Target, Rocket, LifeBuoy } from 'lucide-react'

// Ordine esatto richiesto + 2 nuovi servizi
const SERVICES = [
  // RIGA 1
  { id: 'contabilita', title: 'Tenuta impianto contabile', icon: <FileText size={24} />, desc: 'Gestione completa della contabilità ordinaria e semplificata. Registrazione documenti, tenuta partitari, liquidazioni IVA e report periodici per mantenere i tuoi dati sempre ordinati e a norma.' },
  { id: 'lavoro', title: 'Consulenza del lavoro', icon: <Users size={24} />, desc: 'Gestione buste paga, adempimenti previdenziali e contrattualistica. Assistenza su welfare aziendale, licenziamenti, assensioni agevolate e relazioni sindacali.' },
  { id: 'fiscale', title: 'Consulenza fiscale', icon: <ShieldCheck size={24} />, desc: 'Pianificazione tributaria strategica e ottimizzazione del carico fiscale. Assistenza in sede di contenzioso, interpelli e gestione dei rapporti con l\'Agenzia delle Entrate.' },
  
  // RIGA 2
  { id: 'analisi-contabile', title: 'Analisi contabile', icon: <BarChart3 size={24} />, desc: 'Revisione critica e interpretazione dei dati contabili. Trasformiamo i numeri in informazioni chiare per monitorare performance, margini e punti di forza della tua attività.' },
  { id: 'analisi-finanziaria', title: 'Analisi finanziaria', icon: <TrendingUp size={24} />, desc: 'Studio dei flussi di cassa, calcolo degli indici di bilancio e proiezioni economiche. Supporto decisionale per investimenti, richieste di finanziamento e gestione della liquidità.' },
  { id: 'societaria', title: 'Consulenza societaria', icon: <Building2 size={24} />, desc: 'Supporto nella costituzione, trasformazione, fusioni e scissioni. Assistenza nella redazione di statuti, patti parasociali e nella gestione degli organi societari.' },
  
  // RIGA 3
  { id: 'strategia', title: 'Strategia di impresa', icon: <Target size={24} />, desc: 'Business planning, analisi di mercato e ricerca di agevolazioni. Ti affianchiamo nei percorsi di crescita, internazionalizzazione e innovazione per concretizzare i tuoi obiettivi.' },
  { id: 'startup', title: 'Avvio startup', icon: <Rocket size={24} />, desc: 'Dall\'idea al mercato: business plan, scelta della forma giuridica, accesso a bandi e finanziamenti per far decollare il tuo progetto imprenditoriale con solide basi.' },
  { id: 'crisi', title: 'Crisi d\'impresa', icon: <LifeBuoy size={24} />, desc: 'Supporto tempestivo nella gestione delle crisi aziendali: piani di risanamento, accordi con i creditori e continuità operativa per superare le difficoltà finanziarie.' }
]

export default function Servizi() {
  const [activeCard, setActiveCard] = useState(null)

  return (
    <div className="space-y-24 pb-24">
      {/* HEADER */}
      <section className="pt-32 pb-12 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
          I Nostri Servizi
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Offriamo un ecosistema completo di soluzioni per accompagnare imprese e professionisti in ogni fase della loro crescita. 
          Dalla gestione quotidiana alla pianificazione strategica, il nostro obiettivo è semplificare la complessità.
        </p>
      </section>

      {/* GRIGLIA SERVIZI */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const isActive = activeCard === service.id
            return (
              <div 
                key={service.id} 
                className={`relative h-72 bg-white border border-slate-200 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${isActive ? 'shadow-xl border-slate-300' : 'hover:shadow-xl hover:border-slate-300'}`}
                // Desktop: hover
                onMouseEnter={() => setActiveCard(service.id)}
                onMouseLeave={() => setActiveCard(null)}
                // Mobile: tap
                onClick={() => setActiveCard(isActive ? null : service.id)}
              >
                {/* LAYER BASE: Titolo e Icona */}
                <div className={`absolute inset-0 flex flex-col items-center justify-center p-8 text-center transition-all duration-500 ease-out ${isActive ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                  <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700 mb-5 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
                    {service.title}
                  </h3>
                  <span className="text-xs text-slate-400 mt-4 uppercase tracking-widest opacity-60 md:hidden">
                    Tocca per i dettagli
                  </span>
                </div>

                {/* LAYER DETTAGLIO: Overlay descrizione */}
                <div className={`absolute inset-0 bg-slate-900 p-8 flex flex-col justify-center items-center text-center transition-all duration-500 ease-out ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                  <p className="text-slate-200 leading-relaxed text-sm md:text-base">
                    {service.desc}
                  </p>
                  <div className="w-10 h-0.5 bg-slate-600 mt-6 rounded-full"></div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold text-slate-900" style={{ fontFamily: 'var(--font-serif)' }}>
            Non trovi il servizio che cerchi?
          </h2>
          <p className="text-slate-600 text-lg">
            Ogni attività ha esigenze specifiche. Contattaci per una consulenza personalizzata sulle tue necessità.
          </p>
          <Link href="/contatti" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-full font-medium hover:bg-slate-800 transition-all hover:shadow-lg">
            Parlane con noi
          </Link>
        </div>
      </section>
    </div>
  )
}