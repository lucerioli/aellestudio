import { ShieldCheck, Calculator, Building, Phone } from "lucide-react"

export default function Home() {
  return (
    <div>

      {/* HERO */}

      <section className="py-32 grid md:grid-cols-2 gap-20 items-center">

        <div className="space-y-10">

          <h1 className="text-6xl font-semibold tracking-tight leading-tight">
            Consulenza fiscale
            moderna e professionale
          </h1>

          <p className="text-xl text-gray-600 max-w-xl">
            Supportiamo imprese e professionisti nella gestione fiscale
            e contabile con un approccio chiaro, moderno ed efficiente.
          </p>

          <div className="flex gap-4">

            <a
              href="/prenotazioni"
              className="bg-black text-white px-7 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Prenota consulenza
            </a>

            <a
              href="/contatti"
              className="border border-gray-300 px-7 py-3 rounded-lg hover:bg-gray-50 transition"
            >
              Contattaci
            </a>

          </div>

        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-200 rounded-2xl h-[420px] flex items-center justify-center text-gray-400">
          Grafica studio
        </div>

      </section>


      {/* SERVIZI */}

      <section className="py-24 bg-gray-50 -mx-6 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-3xl font-semibold mb-4">
              I nostri servizi
            </h2>

            <p className="text-gray-600">
              Supporto completo per imprese e professionisti
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-12">

            <div className="bg-white border border-gray-200 rounded-xl p-8 space-y-4 hover:shadow-lg transition">

              <ShieldCheck size={32} />

              <h3 className="font-semibold text-lg">
                Consulenza fiscale
              </h3>

              <p className="text-gray-600">
                Pianificazione fiscale e assistenza
                negli adempimenti tributari.
              </p>

            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 space-y-4 hover:shadow-lg transition">

              <Calculator size={32} />

              <h3 className="font-semibold text-lg">
                Contabilità
              </h3>

              <p className="text-gray-600">
                Gestione completa della contabilità
                per imprese e professionisti.
              </p>

            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 space-y-4 hover:shadow-lg transition">

              <Building size={32} />

              <h3 className="font-semibold text-lg">
                Consulenza societaria
              </h3>

              <p className="text-gray-600">
                Costituzione e gestione di società
                e operazioni societarie.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* CTA CONTATTI */}

      <section className="py-28 bg-black text-white -mx-6 px-6">

        <div className="max-w-4xl mx-auto text-center space-y-8">

          <Phone size={40} className="mx-auto" />

          <h2 className="text-3xl font-semibold">
            Hai bisogno di assistenza fiscale?
          </h2>

          <p className="text-gray-300">
            Contattaci per ricevere informazioni
            o fissare un appuntamento.
          </p>

          <a
            href="/contatti"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Contattaci
          </a>

        </div>

      </section>

    </div>
  )
}