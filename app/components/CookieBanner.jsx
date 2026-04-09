'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Evita mismatch di idratazione e legge la preferenza salvata
  useEffect(() => {
    setMounted(true)
    const savedConsent = localStorage.getItem('cookie-consent')
    if (!savedConsent) {
      setVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', JSON.stringify('accepted'))
    setVisible(false)
    // Qui puoi attivare script di terze parti (GA4, Pixel, ecc.)
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ event: 'cookie_consent_accepted' })
    }
  }

  const handleReject = () => {
    localStorage.setItem('cookie-consent', JSON.stringify('rejected'))
    setVisible(false)
    // Qui puoi rimuovere o disabilitare script non necessari
  }

  // Non renderizza nulla finché il componente non è montato (evita errori SSR)
  if (!mounted || !visible) return null

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl"
      role="dialog"
      aria-label="Banner consenso cookie"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
        
        <div className="flex-1 text-sm md:text-base text-slate-700 leading-relaxed">
          <h3 className="text-slate-900 font-semibold mb-1" style={{ fontFamily: 'var(--font-serif)' }}>
            Utilizziamo i cookie
          </h3>
          <p>
            Questo sito utilizza cookie tecnici necessari al funzionamento e, previo tuo esplicito consenso, 
            cookie analitici per migliorare l'esperienza di navigazione. Puoi leggere i dettagli nella nostra{' '}
            <Link href="/privacy" className="font-medium text-slate-900 underline hover:text-slate-700 transition-colors">
              Cookie & Privacy Policy
            </Link>.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 w-full md:w-auto shrink-0">
          <button
            onClick={handleReject}
            className="flex-1 md:flex-none px-5 py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-full hover:bg-slate-50 transition-all focus:outline-none focus:ring-2 focus:ring-slate-900/20"
          >
            Solo necessari
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 md:flex-none px-5 py-2.5 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-900/30"
          >
            Accetta tutti
          </button>
        </div>

      </div>
    </div>
  )
}