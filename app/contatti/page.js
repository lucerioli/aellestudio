"use client";

import { useState } from "react";

export default function Contatti() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    e.target.reset();
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <section className="py-24 px-8 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#0F172A] mb-10 text-center">Contattaci</h2>
      {success && <div className="mb-4 p-4 bg-green-100 text-green-800 rounded text-center">Messaggio inviato con successo!</div>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-8 rounded-xl shadow-md">
        <input type="text" name="name" placeholder="Nome" required className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500" />
        <input type="email" name="email" placeholder="Email" required className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500" />
        <textarea name="message" placeholder="Messaggio" required rows={5} className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500" />
        <button type="submit" className="bg-yellow-500 text-[#1F2937] p-3 rounded font-semibold hover:bg-yellow-400 transition">Invia Messaggio</button>
      </form>
    </section>
  );
}