import Link from 'next/link'
import { ShieldCheck, Calculator, Building, Phone, ArrowRight, CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-700">
              <CheckCircle size={16} className="text-slate-900" />
              Consulenza fiscale digitale e trasparente
            </div>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.15]" style={{ fontFamily: 'var(--font-serif)' }}>
              La fiscalità non deve essere un peso. <span className="text-slate-500">Deve essere una leva.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
              Supportiamo imprese e professionisti con un approccio moderno, chiaro e sempre al tuo fianco. Dimentica la burocrazia, concentrati sul tuo business.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/prenotazioni" className="group inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-full font-medium hover:bg-slate-800 transition-all hover:shadow-lg">
                Prenota una consulenza
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contatti" className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 px-8 py-3.5 rounded-full font-medium hover:bg-slate-50 hover:border-slate-400 transition-all">
                Contattaci
              </Link>
            </div>
          </div>
          
          <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl h-[450px] flex items-center justify-center overflow-hidden shadow-sm border border-slate-100">
            <div className="text-center space-y-4">
              <div className="w-28 h-28 bg-white rounded-2xl flex items-center justify-center shadow-md mx-auto">
                <span className="text-3xl text-slate-900" style={{ fontFamily: 'var(--font-serif)' }}>AL</span>
              </div>
              <p className="text-slate-500 text-sm font-medium">Inserisci qui il tuo logo o immagine studio</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICHE */}
      <section className="py-16 border-y border-slate-100 bg-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: '+15', label: 'Anni di esperienza' },
            { num: '+500', label: 'Clienti seguiti' },
            { num: '100%', label: 'Approccio digitale' },
            { num: '24h', label: 'Tempo di risposta' }
          ].map((stat, i) => (
            <div key={i} className="space-y-1">
              <div className="text-3xl md:text-4xl font-semibold text-slate-900" style={{ fontFamily: 'var(--font-serif)' }}>{stat.num}</div>
              <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVIZI */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              I nostri servizi
            </h2>
            <p className="text-slate-600 text-lg">Soluzioni integrate per semplificare la gestione della tua attività.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <ShieldCheck size={28} />, title: 'Consulenza fiscale', desc: 'Pianificazione strategica, adempimenti tributari e ottimizzazione del carico fiscale.' },
              { icon: <Calculator size={28} />, title: 'Contabilità', desc: 'Gestione completa, bilanci, dichiarazioni e reportistica mensile chiara.' },
              { icon: <Building size={28} />, title: 'Consulenza societaria', desc: 'Costituzione, trasformazione, patti parasociali e governance aziendale.' }
            ].map((service, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERCHÉ SCEGLIERCI */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 bg-slate-50 rounded-3xl p-10 md:p-12 border border-slate-100">
            <ul className="space-y-6">
              {[
                'Nessun linguaggio incomprensibile: ti spieghiamo tutto in modo chiaro.',
                'Piattaforma digitale per documenti, scadenze e comunicazioni.',
                'Un referente dedicato per ogni pratica.',
                'Trasparenza sui costi e sulle tempistiche.'
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <CheckCircle size={20} className="text-slate-900 mt-1 shrink-0" />
                  <span className="text-slate-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
              Un commercialista che lavora <span className="text-slate-500">al tuo ritmo</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Crediamo che la consulenza fiscale debba essere un alleato, non un ostacolo. Per questo abbiamo eliminato la burocrazia inutile e digitalizzato i processi.
            </p>
            <Link href="/chi-siamo" className="inline-flex items-center gap-2 text-slate-900 font-medium hover:gap-3 transition-all">
              Scopri chi siamo <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold" style={{ fontFamily: 'var(--font-serif)' }}>
            Pronto a semplificare la gestione fiscale?
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Parla direttamente con un nostro professionista. Ti guideremo passo dopo passo verso la soluzione più adatta.
          </p>
          <Link href="/contatti" className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-3.5 rounded-full font-medium hover:bg-slate-100 transition-all hover:shadow-lg">
            Fissa un appuntamento
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}