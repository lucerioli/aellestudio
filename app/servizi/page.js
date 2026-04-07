import { ShieldCheck, Calculator, Building, Briefcase } from "lucide-react"

export default function Servizi() {
  return (
    <div className="py-28 space-y-20">

      <div className="max-w-2xl">

        <h1 className="text-4xl font-semibold mb-4">
          Servizi
        </h1>

        <p className="text-gray-600">
          Offriamo un supporto completo nella gestione fiscale,
          contabile e societaria.
        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-16">

        <div className="flex gap-4">
          <ShieldCheck />
          <div>
            <h3 className="font-semibold mb-1">
              Consulenza fiscale
            </h3>
            <p className="text-gray-600">
              Pianificazione fiscale e assistenza tributaria.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Calculator />
          <div>
            <h3 className="font-semibold mb-1">
              Contabilità
            </h3>
            <p className="text-gray-600">
              Gestione completa della contabilità.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Building />
          <div>
            <h3 className="font-semibold mb-1">
              Consulenza societaria
            </h3>
            <p className="text-gray-600">
              Costituzione e gestione di società.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Briefcase />
          <div>
            <h3 className="font-semibold mb-1">
              Assistenza professionisti
            </h3>
            <p className="text-gray-600">
              Supporto fiscale per lavoratori autonomi.
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}