'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Scale, ShieldCheck, Users, CheckCircle } from 'lucide-react'

export default function ChiSiamo() {
  const [activeProfile, setActiveProfile] = useState(null)

  return (
    <div className="space-y-24 pb-24">
      
      {/* --- HEADER PAGINA --- */}
      <section className="pt-32 pb-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
          Chi Siamo
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Un team affiatato che unisce esperienza e innovazione per tutelare il tuo lavoro.
        </p>
      </section>

      {/* --- IL CORE DELLO STUDIO --- */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
              AL - Studio Cerioli
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Lo studio nasce dall'unione di due professionalità complementari con un obiettivo comune: rendere la consulenza fiscale e contabile <strong>chiara, accessibile e strategica</strong>.
              </p>
              <p>
                Non siamo il classico studio "chiuso". Lavoriamo fianco a fianco con imprenditori e professionisti per trasformare gli adempimenti burocratici in opportunità di crescita.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                { icon: <Scale size={20} />, text: 'Competenza Tecnica' },
                { icon: <ShieldCheck size={20} />, text: 'Trasparenza Totale' },
                { icon: <Users size={20} />, text: 'Ascolto del Cliente' },
                { icon: <CheckCircle size={20} />, text: 'Digital First' }
              ].map((val, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-800 font-medium bg-slate-50 px-4 py-3 rounded-xl">
                  <span className="text-slate-900">{val.icon}</span>
                  {val.text}
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] bg-slate-100 rounded-3xl overflow-hidden flex items-center justify-center">
            <p className="text-slate-400 text-center px-4">Spazio per foto dello studio<br/>(opzionale)</p>
          </div>
        </div>
      </section>

      {/* --- I CONSULENTI (DESKTOP: Slide laterale / MOBILE: Accordion) --- */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            I Professionisti
          </h2>
          <p className="text-slate-600 text-lg">Le persone che lavorano per te.</p>
        </div>

        {/* Container principale */}
        <div className="relative w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
          
          {/* === FOTO ALESSIA (SINISTRA) === */}
          <div 
            className="relative w-full md:w-1/2 z-10 cursor-pointer"
            onMouseEnter={() => setActiveProfile('alessia')}
            onMouseLeave={() => setActiveProfile(null)}
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-md transition-all duration-500">
              <Image 
                src="/images/alessia.jpg" 
                alt="Dott.ssa Alessia Cerioli" 
                fill 
                className="object-cover object-top transition-transform duration-700 hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent hover:opacity-0 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-3xl font-bold mb-1" style={{ fontFamily: 'var(--font-serif)' }}>Dott.ssa Alessia Cerioli</h3>
                <p className="text-white/90 font-medium uppercase tracking-wide text-sm">Dottoressa Commercialista</p>
              </div>
            </div>

            {/* MOBILE: Accordion nativo (solo mobile) */}
            <details className="md:hidden mt-4 bg-white border border-slate-200 rounded-2xl overflow-hidden">
              <summary className="p-4 font-medium text-slate-700 cursor-pointer list-none flex justify-between items-center">
                <span style={{ fontFamily: 'var(--font-serif)' }}>Vedi biografia</span>
                <span className="text-slate-400">▼</span>
              </summary>
              <div className="p-6 pt-0 text-slate-600 leading-relaxed text-sm space-y-3">
                <p>Laureata in Economia e Commercio, iscritta all'Albo dei Dottori Commercialisti.</p>
                <p>Si occupa di <strong>contabilità aziendale, bilanci e revisione legale dei conti</strong>. Ha una spiccata competenza nella gestione finanziaria delle PMI e nell'assistenza a startup innovative.</p>
                <p>Appassionata di organizzazione aziendale, il suo obiettivo è ottimizzare i processi contabili dei clienti per liberare tempo e risorse.</p>
                <Link href="/prenotazioni" className="inline-flex items-center gap-2 text-slate-900 font-bold text-sm pt-2">
                  Prenota con Alessia <ArrowRight size={16} />
                </Link>
              </div>
            </details>
          </div>

          {/* === FOTO LUCA (DESTRA) === */}
          <div 
            className="relative w-full md:w-1/2 z-10 cursor-pointer"
            onMouseEnter={() => setActiveProfile('luca')}
            onMouseLeave={() => setActiveProfile(null)}
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-md transition-all duration-500">
              <Image 
                src="/images/luca.jpg" 
                alt="Rag. Luca Cerioli" 
                fill 
                className="object-cover object-top transition-transform duration-700 hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent hover:opacity-0 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-3xl font-bold mb-1" style={{ fontFamily: 'var(--font-serif)' }}>Rag. Luca Cerioli</h3>
                <p className="text-white/90 font-medium uppercase tracking-wide text-sm">Tributarista</p>
              </div>
            </div>

            {/* MOBILE: Accordion nativo (solo mobile) */}
            <details className="md:hidden mt-4 bg-white border border-slate-200 rounded-2xl overflow-hidden">
              <summary className="p-4 font-medium text-slate-700 cursor-pointer list-none flex justify-between items-center">
                <span style={{ fontFamily: 'var(--font-serif)' }}>Vedi biografia</span>
                <span className="text-slate-400">▼</span>
              </summary>
              <div className="p-6 pt-0 text-slate-600 leading-relaxed text-sm space-y-3">
                <p>Dottore in Economia Aziendale, iscritto all'Albo dei Dottori Commercialisti.</p>
                <p>Specializzato in <strong>diritto tributario e contenzioso</strong>. Affianca le imprese nella pianificazione fiscale strategica e nella gestione delle comunicazioni con l'Agenzia delle Entrate.</p>
                <p>Ha un approccio pragmatico orientato alla risoluzione dei problemi, garantendo ai clienti la massima serenità nella gestione dei propri obblighi fiscali.</p>
                <Link href="/prenotazioni" className="inline-flex items-center gap-2 text-slate-900 font-bold text-sm pt-2">
                  Prenota con Luca <ArrowRight size={16} />
                </Link>
              </div>
            </details>
          </div>

          {/* === DESKTOP OVERLAY: Bio di Alessia (scorre da DESTRA coprendo Luca) === */}
          <div className={`hidden md:flex absolute top-0 right-0 w-1/2 h-full bg-white rounded-3xl p-10 flex-col justify-center z-20 border border-slate-100 shadow-2xl transition-all duration-500 ease-out pointer-events-none ${activeProfile === 'alessia' ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Dott.ssa Alessia Cerioli</h3>
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">Dottoressa Commercialista</p>
            <div className="space-y-3 text-slate-600 leading-relaxed">
              <p>Laureata in Economia e Commercio, iscritta all'Albo dei Dottori Commercialisti.</p>
              <p>Si occupa di <strong>contabilità aziendale, bilanci e revisione legale dei conti</strong>. Ha una spiccata competenza nella gestione finanziaria delle PMI e nell'assistenza a startup innovative.</p>
              <p>Appassionata di organizzazione aziendale, il suo obiettivo è ottimizzare i processi contabili dei clienti per liberare tempo e risorse.</p>
            </div>
            <div className="pt-8">
              <Link href="/prenotazioni" className="inline-flex items-center gap-2 text-slate-900 font-bold hover:gap-3 transition-all">
                Prenota con Alessia <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* === DESKTOP OVERLAY: Bio di Luca (scorre da SINISTRA coprendo Alessia) === */}
          <div className={`hidden md:flex absolute top-0 left-0 w-1/2 h-full bg-white rounded-3xl p-10 flex-col justify-center z-20 border border-slate-100 shadow-2xl transition-all duration-500 ease-out pointer-events-none ${activeProfile === 'luca' ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Rag. Luca Cerioli</h3>
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">Tributarista</p>
            <div className="space-y-3 text-slate-600 leading-relaxed">
              <p>Dottore in Economia Aziendale, iscritto all'Albo dei Dottori Commercialisti.</p>
              <p>Specializzato in <strong>diritto tributario e contenzioso</strong>. Affianca le imprese nella pianificazione fiscale strategica e nella gestione delle comunicazioni con l'Agenzia delle Entrate.</p>
              <p>Ha un approccio pragmatico orientato alla risoluzione dei problemi, garantendo ai clienti la massima serenità nella gestione dei propri obblighi fiscali.</p>
            </div>
            <div className="pt-8">
              <Link href="/prenotazioni" className="inline-flex items-center gap-2 text-slate-900 font-bold hover:gap-3 transition-all">
                Prenota con Luca <ArrowRight size={18} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-16 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold" style={{ fontFamily: 'var(--font-serif)' }}>
            Vuoi conoscere meglio lo studio?
          </h2>
          <p className="text-slate-300 text-lg">
            Contattaci per una prima conoscenza senza impegno.
          </p>
          <Link href="/contatti" className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-3.5 rounded-full font-medium hover:bg-slate-100 transition-all">
            Scrivici una mail
          </Link>
        </div>
      </section>

    </div>
  )
}