'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

export default function AnalyticsScripts() {
  const [consent, setConsent] = useState(null)

  useEffect(() => {
    // Legge il consenso salvato dal banner
    const saved = localStorage.getItem('cookie-consent')
    if (saved) setConsent(JSON.parse(saved))
  }, [])

  // Se il consenso non è "accepted", non carica nulla
  if (consent !== 'accepted') return null

  return (
    <>
      {/* GOOGLE ANALYTICS 4 (Sostituisci G-XXXXXXXXXX con il tuo ID) */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'anonymize_ip': true,
            'cookie_flags': 'SameSite=None;Secure'
          });
        `}
      </Script>

      {/* META PIXEL (Facebook) - Esempio */}
      {/*
      <Script id="fb-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
          document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'TUO_PIXEL_ID');
          fbq('track', 'PageView');
        `}
      </Script>
      */}
    </>
  )
}