import Link from 'next/link'
import { Phone, Mail, Clock, ArrowRight } from 'lucide-react'

export default function Contatti() {
  return (
    <div className="space-y-24 pb-24">
      
      {/* --- HEADER --- */}
      <section className="pt-32 pb-12 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
          Contatti
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Siamo a disposizione per risolvere i tuoi dubbi fiscali o per pianificare un incontro in studio.
        </p>
      </section>

      {/* --- GRIGLIA MAPPA E RECAPITI (Allineamento Perfetto) --- */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 h-auto md:h-[600px]">
          
          {/* COLONNA SINISTRA: MAPPA + INDIRIZZO */}
          <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-sm flex flex-col group">
            {/* Mappa (occupa tutto lo spazio disponibile meno la barra in basso) */}
            <div className="flex-1 min-h-0 bg-slate-200">
               <iframe 
                 src="https://maps.google.com/maps?q=Via+1+Maggio+17,+Villafranca+in+Lunigiana&t=&z=15&ie=UTF8&iwloc=&output=embed"
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen="" 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 className="w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
               ></iframe>
            </div>
            
            {/* Barra Indirizzo (compatto, sempre in basso) */}
            <div className="bg-white px-6 py-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-bold text-slate-900" style={{ fontFamily: 'var(--font-serif)' }}>AL - Studio Cerioli</h3>
                <p className="text-slate-600 text-sm">Via 1 Maggio, 17 - 54028 Villafranca in Lunigiana (MS)</p>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg whitespace-nowrap">
                <Clock size={14} />
                Lun - Ven: 09:00 - 18:00
              </div>
            </div>
          </div>

          {/* COLONNA DESTRA: RECAPITI CONSULENTI (Divisi esattamente a metà) */}
          <div className="grid grid-rows-2 gap-6 h-full">
            
            {/* CARD ALESSIA */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-center">
              <div className="mb-3">
                <h3 className="text-xl font-semibold" style={{ fontFamily: 'var(--font-serif)' }}>Dott.ssa Alessia Cerioli</h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-0.5">Dottoressa Commercialista</p>
              </div>
              
              <div className="space-y-3">
                <a href="tel:+390000000000" className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors group/item">
                  <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 group-hover/item:bg-slate-900 group-hover/item:text-white transition-colors">
                    <Phone size={15} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Telefono</p>
                    <p className="text-slate-800 font-semibold text-sm">+39 000 000 0000</p>
                  </div>
                </a>
                
                <a href="mailto:alessia@alstudio.it" className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors group/item">
                  <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 group-hover/item:bg-slate-900 group-hover/item:text-white transition-colors">
                    <Mail size={15} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Email</p>
                    <p className="text-slate-800 font-semibold text-sm">alessia@alstudio.it</p>
                  </div>
                </a>
              </div>

              <Link href="/prenotazioni" className="mt-4 inline-flex items-center justify-center gap-2 w-full border border-slate-200 py-2 rounded-xl text-xs font-semibold text-slate-900 hover:bg-slate-50 transition-all">
                Prenota un incontro <ArrowRight size={14} />
              </Link>
            </div>

            {/* CARD LUCA */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-center">
              <div className="mb-3">
                <h3 className="text-xl font-semibold" style={{ fontFamily: 'var(--font-serif)' }}>Rag. Luca Cerioli</h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-0.5">Tributarista</p>
              </div>
              
              <div className="space-y-3">
                <a href="tel:+390000000000" className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors group/item">
                  <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 group-hover/item:bg-slate-900 group-hover/item:text-white transition-colors">
                    <Phone size={15} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Telefono</p>
                    <p className="text-slate-800 font-semibold text-sm">+39 000 000 0000</p>
                  </div>
                </a>
                
                <a href="mailto:luca@alstudio.it" className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors group/item">
                  <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 group-hover/item:bg-slate-900 group-hover/item:text-white transition-colors">
                    <Mail size={15} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Email</p>
                    <p className="text-slate-800 font-semibold text-sm">luca@alstudio.it</p>
                  </div>
                </a>
              </div>

              <Link href="/prenotazioni" className="mt-4 inline-flex items-center justify-center gap-2 w-full border border-slate-200 py-2 rounded-xl text-xs font-semibold text-slate-900 hover:bg-slate-50 transition-all">
                Prenota un incontro <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* --- SEZIONE SCRIVICI --- */}
      <section className="max-w-3xl mx-auto px-6">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl">
          <h2 className="text-3xl font-semibold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Hai bisogno di informazioni?
          </h2>
          <p className="text-slate-300 mb-8 max-w-md mx-auto">
            Compila il modulo o contattaci direttamente. Ti risponderemo entro 24 ore.
          </p>
          
          <form className="max-w-md mx-auto space-y-4 text-left">
            <input 
              type="text" 
              placeholder="Nome e Cognome" 
              className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3.5 text-white placeholder:text-slate-400 focus:outline-none focus:bg-white/20 transition-all"
            />
            <input 
              type="email" 
              placeholder="Indirizzo Email" 
              className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3.5 text-white placeholder:text-slate-400 focus:outline-none focus:bg-white/20 transition-all"
            />
            <textarea 
              placeholder="Il tuo messaggio..." 
              rows="3"
              className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3.5 text-white placeholder:text-slate-400 focus:outline-none focus:bg-white/20 transition-all resize-none"
            ></textarea>
            <button className="w-full bg-white text-slate-900 font-bold py-4 rounded-xl hover:bg-slate-100 transition-colors mt-4">
              Invia Messaggio
            </button>
          </form>
        </div>
      </section>

    </div>
  )
}