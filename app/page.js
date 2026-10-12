import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle } from "lucide-react"
import PercorsoArchetipi from './components/PercorsoArchetipi'

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          {/* LOGO PRIMA su mobile, DOPO su desktop */}
          <div className="order-1 md:order-2 relative flex items-center justify-center h-[400px] md:h-[450px] px-2">
            <Image 
              src="/images/logo-hero.png" 
              alt="Logo AL - Studio Cerioli" 
              width={600} 
              height={265} 
              className="w-full h-auto max-w-[520px] md:max-w-[580px] object-contain"
              priority
            />
          </div>
          
          {/* TESTO DOPO su mobile, PRIMA su desktop */}
          <div className="order-2 md:order-1 space-y-8 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.15]" style={{ fontFamily: 'var(--font-serif)' }}>
              La fiscalità non deve essere un peso. <span className="text-slate-500">Deve essere una leva.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mx-auto md:mx-0">
              Supportiamo imprese e professionisti con un approccio moderno, chiaro e sempre al tuo fianco. Dimentica la burocrazia, concentrati sul tuo business.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
              <Link href="/prenotazioni" className="group inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-full font-medium hover:bg-slate-800 transition-all hover:shadow-lg">
                Prenota una consulenza
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contatti" className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 px-8 py-3.5 rounded-full font-medium hover:bg-slate-50 hover:border-slate-400 transition-all">
                Contattaci
              </Link>
            </div>
          </div>
          
        </div>
      </section>

      {/* PERCORSO A 4 ARCHETIPI (sostituisce l'anteprima a 3 servizi) */}
      <PercorsoArchetipi />

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