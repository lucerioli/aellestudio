import './globals.css'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Studio Commercialista',
  description: 'Consulenza fiscale e contabile professionale'
}

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={inter.className}>
      <body className="bg-white text-gray-800">

        <nav className="sticky top-0 bg-white/80 backdrop-blur border-b border-gray-200 z-50">

          <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">

            <Link href="/" className="font-semibold text-lg">
              Studio Commercialista
            </Link>

            <div className="hidden md:flex gap-8 text-sm text-gray-600 font-medium">

              <Link href="/" className="hover:text-black transition">
                Home
              </Link>

              <Link href="/servizi" className="hover:text-black transition">
                Servizi
              </Link>

              <Link href="/chi-siamo" className="hover:text-black transition">
                Chi siamo
              </Link>

              <Link href="/contatti" className="hover:text-black transition">
                Contatti
              </Link>

            </div>

            <Link
              href="/prenotazioni"
              className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Prenota
            </Link>

          </div>

        </nav>

        <main className="max-w-6xl mx-auto px-6">
          {children}
        </main>

        <footer className="border-t border-gray-200 mt-32 py-12 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Studio Commercialista
        </footer>

      </body>
    </html>
  )
}