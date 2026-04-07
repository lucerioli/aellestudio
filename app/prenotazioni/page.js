export default function Prenotazioni() {
  return (
    <section className="py-24 px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#0F172A] mb-10 text-center">Prenota una consulenza online</h2>
      <p className="mb-6 text-center text-lg">
        Scegli la data e l’orario che preferisci tramite il nostro calendario online.
      </p>
      {/* Esempio Calendly embed */}
      <iframe src="https://calendly.com/tuoaccount/30min" width="100%" height="700" frameBorder="0"></iframe>
    </section>
  );
}