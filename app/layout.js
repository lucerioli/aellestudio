import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Studio Commercialista Rossi',
  description: 'Consulenza fiscale e contabile professionale',
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className="font-sans">
      <body className="bg-gray-50 text-gray-700">
        {/* Menu globale */}
        <nav className="fixed w-full bg-white bg-opacity-80 backdrop-blur-md py-4 px-8 flex justify-between items-center shadow-md z-50">
          <h1 className="text-2xl font-bold text-[#0F172A]">Studio Commercialista Rossi</h1>
          <ul className="flex gap-6 text-gray-800 font-medium">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/chi-siamo">Chi Siamo</Link></li>
            <li><Link href="/servizi">Servizi</Link></li>
            <li><Link href="/contatti">Contatti</Link></li>
            <li><Link href="/prenotazioni">Prenota</Link></li>
          </ul>
        </nav>

        <main className="pt-24">{children}</main>

        {/* Footer globale */}
        <footer className="bg-[#0F172A] text-white py-6 text-center mt-16">
          &copy; {new Date().getFullYear()} Studio Commercialista Rossi — Tutti i diritti riservati
        </footer>
      </body>
    </html>
  );
}