export default function Prenotazioni() {
  return (
    <div className="py-28 max-w-2xl space-y-8">

      <h1 className="text-4xl font-semibold">
        Prenota una consulenza
      </h1>

      <p className="text-gray-600">
        Contattaci per fissare un appuntamento
        con uno dei nostri professionisti.
      </p>

      <a
        href="/contatti"
        className="inline-block bg-black text-white px-6 py-3 rounded-lg"
      >
        Vai ai contatti
      </a>

    </div>
  )
}