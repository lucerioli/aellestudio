export default function Contatti() {
  return (
    <div className="py-28 max-w-3xl space-y-10">

      <h1 className="text-4xl font-semibold">
        Contatti
      </h1>

      <form className="space-y-6">

        <input
          type="text"
          placeholder="Nome"
          className="w-full border border-gray-300 rounded-lg px-4 py-3"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-lg px-4 py-3"
        />

        <textarea
          placeholder="Messaggio"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 h-32"
        />

        <button
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Invia messaggio
        </button>

      </form>

    </div>
  )
}