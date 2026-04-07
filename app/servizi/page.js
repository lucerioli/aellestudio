"use client";

import { motion } from "framer-motion";

export default function Servizi() {
  const servizi = [
    { title: "Contabilità", desc: "Gestione completa della contabilità ordinaria e analitica per la tua azienda." },
    { title: "Dichiarazioni fiscali", desc: "Preparazione e invio delle dichiarazioni fiscali e IVA in totale sicurezza." },
    { title: "Consulenza aziendale", desc: "Supporto strategico e finanziario per far crescere la tua attività." },
    { title: "Pianificazione fiscale", desc: "Ottimizzazione e pianificazione fiscale personalizzata per ogni cliente." },
  ];

  const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <section className="py-24 px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#0F172A] mb-12 text-center">I nostri servizi</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {servizi.map((s) => (
          <motion.div key={s.title} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl flex flex-col items-center text-center transition">
            <h3 className="font-bold text-xl text-[#0F172A] mb-2">{s.title}</h3>
            <p className="text-gray-700">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}