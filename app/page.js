"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <section className="text-center py-32 md:py-40 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1597439909965-631e9b15e6c1?auto=format&fit=crop&w=1470&q=80')" }}>
      <div className="absolute inset-0 bg-[#1F2937] bg-opacity-60"></div>
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-4xl md:text-5xl font-bold text-white mb-4">
          Benvenuti allo Studio Commercialista Rossi
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="text-lg md:text-xl text-yellow-300 mb-8">
          Consulenza fiscale e contabile per aziende e professionisti.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
          <Link href="/prenotazioni" className="inline-block bg-yellow-500 text-[#1F2937] font-semibold px-8 py-3 rounded-lg hover:bg-yellow-400 transition">
            Prenota una consulenza
          </Link>
        </motion.div>
      </div>
    </section>
  );
}