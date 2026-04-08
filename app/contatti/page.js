import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react'

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

      {/* --- GRIGLIA MAPPA E RECAPITI --- */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-8">
          
          {/* COLONNA 1: MAPPA E INDIRIZZO (Occupata 7 colonne su 12) */}
          <div className="md:col-span-7 bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-sm group">
            {/* Mappa */}
            <div className="h-64 md:h-96 w-full bg-slate-200 overflow-hidden">
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
            
            {/* Info Indirizzo */}
            <div className="p-8 md:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-white border-t border-slate-100">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1" style={{ fontFamily: 'var(--font-serif)' }}>AL - Studio Cerioli</h3>
                <p className="text-slate-600">Via 1 Maggio, 17 - 54028 Villafranca in Lunigiana (MS)</p>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500 bg-slate-50 px-4 py-2 rounded-lg">
                <Clock size={16} />
                Lun - Ven: 09:00 - 18:00
              </div>
            </div>
          </div>

          {/* COLONNA 2: RECAPITI CONSULENTI (Occupata 5 colonne su 12) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            
            {/* CARD ALESSIA */}
            <div className="flex-1 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-1" style={{ fontFamily: 'var(--font-serif)' }}>Dott.ssa Alessia Cerioli</h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Dottoressa Commercialista</p>
              </div>
              
              <div className="space-y-4">
                <a href="tel:+390000000000" className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 group-hover/item:bg-slate-900 group-hover/item:text-white transition-colors">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Telefono</p>
                    <p className="text-slate-800 font-semibold">+39 000 000 0000</p> {/* Sostituisci col numero reale */}
                  </div>
                </a>
                
                <a href="mailto:alessia@alstudio.it" className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 group-hover/item:bg-slate-900 group-hover/item:text-white transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Email</p>
                    <p className="text-slate-800 font-semibold">alessia@alstudio.it</p> {/* Sostituisci con la mail reale */}
                  </div>
                </a>
              </div>

              <Link href="/prenotazioni" className="mt-6 inline-flex items-center justify-center gap-2 w-full border border-slate-200 py-3 rounded-xl text-sm font-semibold text-slate-900 hover:bg-slate-50 transition-all">
                Prenota un incontro <ArrowRight size={16} />
              </Link>
            </div>

            {/* CARD LUCA */}
            <div className="flex-1 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-1" style={{ fontFamily: 'var(--font-serif)' }}>Rag. Luca Cerioli</h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Tributarista</p>
              </div>
              
              <div className="space-y-4">
                <a href="tel:+390000000000" className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 group-hover/item:bg-slate-900 group-hover/item:text-white transition-colors">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Telefono</p>
                    <p className="text-slate-800 font-semibold">+39 000 000 0000</p> {/* Sostituisci col numero reale */}
                  </div>
                </a>
                
                <a href="mailto:luca@alstudio.it" className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 group-hover/item:bg-slate-900 group-hover/item:text-white transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Email</p>
                    <p className="text-slate-800 font-semibold">luca@alstudio.it</p> {/* Sostituisci con la mail reale */}
                  </div>
                </a>
              </div>

              <Link href="/prenotazioni" className="mt-6 inline-flex items-center justify-center gap-2 w-full border border-slate-200 py-3 rounded-xl text-sm font-semibold text-slate-900 hover:bg-slate-50 transition-all">
                Prenota un incontro <ArrowRight size={16} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* --- SEZIONE SCRIVICI (Opzionale ma consigliata) --- */}
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