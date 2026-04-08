'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Servizi', href: '/servizi' },
    { label: 'Chi siamo', href: '/chi-siamo' },
    { label: 'Contatti', href: '/contatti' }
  ]

  return (
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
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              href={link.href} 
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" 
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link 
          href="/prenotazioni" 
          className="hidden md:inline-flex bg-slate-900 text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-slate-800 transition-all hover:shadow-lg"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Prenota consulenza
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute left-0 right-0 shadow-lg">
          <nav className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href} 
                className="text-lg font-medium text-slate-800 py-2 border-b border-slate-100 last:border-0"
                style={{ fontFamily: 'var(--font-serif)' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/prenotazioni" 
              className="mt-2 bg-slate-900 text-white text-center py-3 rounded-xl font-medium"
              style={{ fontFamily: 'var(--font-serif)' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Prenota consulenza
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}