import './globals.css'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'AL - Studio Cerioli | Consulenza Fiscale e Contabile',
  description: 'Consulenza fiscale, contabilità e servizi per imprese e professionisti.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className="antialiased">
        
        {/* HEADER */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Image 
                src="/images/logo.png" 
                alt="Logo AL - Studio Cerioli" 
                width={280} 
                height={124} 
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>
            
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Home</Link>
              <Link href="/servizi" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Servizi</Link>
              <Link href="/chi-siamo" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Chi siamo</Link>
              <Link href="/contatti" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Contatti</Link>
            </nav>

            <Link 
              href="/prenotazioni" 
              className="bg-slate-900 text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-slate-800 transition-all hover:shadow-lg"
            >
              Prenota consulenza
            </Link>
          </div>
        </header>

        {/* MAIN */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="bg-slate-50 border-t border-slate-200 py-16 mt-24">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image 
                  src="/images/logo.png" 
                  alt="Logo AL - Studio Cerioli" 
                  width={210} 
                  height={93} 
                  className="h-9 w-auto object-contain"
                />
              </div>
              <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                Consulenza fiscale e contabile moderna per imprese e professionisti. Chiarezza, competenza e digitalizzazione.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Navigazione</h4>
              <div className="space-y-3 text-sm text-slate-600">
                <Link href="/servizi" className="block hover:text-slate-900 transition-colors">Servizi</Link>
                <Link href="/chi-siamo" className="block hover:text-slate-900 transition-colors">Chi siamo</Link>
                <Link href="/contatti" className="block hover:text-slate-900 transition-colors">Contatti</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Legale</h4>
              <div className="space-y-3 text-sm text-slate-600">
                <Link href="/privacy" className="block hover:text-slate-900 transition-colors">Privacy Policy</Link>
                <Link href="/cookie" className="block hover:text-slate-900 transition-colors">Cookie Policy</Link>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-200 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} AL - Studio Cerioli. Tutti i diritti riservati.
          </div>
        </footer>

      </body>
    </html>
  )
} 