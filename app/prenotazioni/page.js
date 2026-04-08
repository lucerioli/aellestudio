'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Calendar, Clock, User, ChevronLeft, ChevronRight, CheckCircle, AlertCircle, MapPin, Phone } from 'lucide-react'

// --- DATI CONSULENTI ---
const CONSULTANTS = [
  { 
    id: 'alessia', 
    name: 'Dott.ssa Alessia Cerioli', 
    role: 'Commercialista',
    avatar: 'AC',
    description: 'Consulenza del lavoro, modelli dichiarativi, consulenza societaria'
  },
  { 
    id: 'luca', 
    name: 'Rag. Luca Cerioli', 
    role: 'Tributarista', 
    avatar: 'LC',
    description: 'Analisi contabile, pianificazione finanziaria, strategia di impresa'
  }
]

export default function Prenotazioni() {
  const [step, setStep] = useState(1)
  const [selectedConsultant, setSelectedConsultant] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  
  // Lista degli orari disponibili (inizialmente vuota)
  const [availableSlots, setAvailableSlots] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  // Dati del form
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', notes: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // --- 1. GENERA LE DATE PER I PROSSIMI 7 GIORNI ---
  const generateDates = () => {
    const dates = []
    for (let i = 0; i < 7; i++) {
      const d = new Date()
      d.setDate(d.getDate() + i)
      // Formato YYYY-MM-DD per facilitare i calcoli
      dates.push(d.toISOString().split('T')[0]) 
    }
    return dates
  }
  const dates = generateDates()

  // --- 2. CARICA GLI ORARI (SIMULAZIONE GOOGLE CALENDAR) ---
  useEffect(() => {
    if (!selectedDate) return
    
    setLoading(true)
    setError('')
    setAvailableSlots([]) // Pulisce i vecchi slot

    // SIMULAZIONE: Qui in futuro ci sarà la chiamata al server per verificare il Google Calendar
    setTimeout(() => {
      // Generiamo slot fittizi ma realistici (Mattina e Pomeriggio)
      // Questo ti permette di testare il flusso senza errori
      const slots = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00']
      
      setAvailableSlots(slots)
      setLoading(false)
    }, 600) // Ritardo simulato di caricamento
  }, [selectedDate, selectedConsultant])

  const handleDateSelect = (date) => {
    setSelectedDate(date)
    setSelectedTime(null) // Resetta l'orario se cambi data
    setError('')
  }

  const handleTimeSelect = (time) => {
    setSelectedTime(time)
  }

  // --- 3. GESTIONE STEP AVANTI/INDIETRO ---
  const handleNext = () => {
    setError('')

    if (step === 1) {
      if (!selectedConsultant) return setError('Seleziona un professionista per continuare.')
    }
    
    if (step === 2) {
      if (!selectedDate) return setError('Seleziona una data.')
      if (!selectedTime) return setError('Seleziona un orario disponibile.')
    }

    if (step === 3) {
      if (!formData.name || !formData.email) return setError('Inserisci almeno Nome ed Email.')
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return setError('Formato email non valido.')
    }

    setStep(prev => prev + 1)
  }

  const handleBack = () => {
    setError('')
    setStep(prev => prev - 1)
  }

  // --- 4. INVIO PRENOTAZIONE (SIMULAZIONE) ---
  const handleSubmit = async () => {
    setIsSubmitting(true)
    setError('')

    try {
      // Qui andrà la chiamata API per creare l'evento su Google Calendar
      await new Promise(resolve => setTimeout(resolve, 1500))
      setIsSuccess(true)
    } catch {
      setError('Errore durante la prenotazione. Riprova.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // --- SCHERMATA DI SUCCESSO ---
  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center space-y-8 animate-fade-in">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle size={40} className="text-emerald-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900" style={{ fontFamily: 'var(--font-serif)' }}>
          Prenotazione Confermata!
        </h1>
        <p className="text-lg text-slate-600 max-w-md mx-auto leading-relaxed">
          Grazie <strong>{formData.name}</strong>.<br/>
          La consulenza con <strong>{CONSULTANTS.find(c => c.id === selectedConsultant)?.name}</strong> è fissata per il <strong>{selectedDate}</strong> alle <strong>{selectedTime}</strong>.
        </p>
        <p className="text-sm text-slate-500">
          Riceverai una email di conferma a {formData.email} a breve.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Link href="/" className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-full font-medium hover:bg-slate-800 transition-all">
            Torna alla Home
          </Link>
          <Link href="/contatti" className="inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-700 px-8 py-3.5 rounded-full font-medium hover:bg-slate-50 transition-all">
            Contattaci
          </Link>
        </div>
      </div>
    )
  }

  // --- LAYOUT PRINCIPALE ---
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 space-y-12">
      
      {/* TITOLO */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900" style={{ fontFamily: 'var(--font-serif)' }}>
          Prenota una consulenza
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Scegli il professionista, la data e l'orario che preferisci.
        </p>
      </div>

      {/* STEPPER INDICATOR */}
      <div className="flex items-center justify-center gap-2 md:gap-6 overflow-x-auto pb-2">
        {[
          { num: 1, label: 'Consulente' },
          { num: 2, label: 'Data e Ora' },
          { num: 3, label: 'I tuoi dati' },
          { num: 4, label: 'Conferma' }
        ].map((s, i) => (
          <div key={s.num} className="flex items-center min-w-max">
            <div className={`
              w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300
              ${step >= s.num ? 'bg-slate-900 text-white shadow-lg scale-105' : 'bg-slate-100 text-slate-400'}
            `}>
              {step > s.num ? <CheckCircle size={18} /> : s.num}
            </div>
            <span className={`ml-2 text-sm font-medium hidden sm:block ${step >= s.num ? 'text-slate-900' : 'text-slate-400'}`}>
              {s.label}
            </span>
            {i < 3 && <div className={`w-8 md:w-16 h-0.5 mx-2 md:mx-4 ${step > s.num ? 'bg-slate-900' : 'bg-slate-200'}`} />}
          </div>
        ))}
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-center gap-3 text-sm max-w-2xl mx-auto animate-pulse">
          <AlertCircle size={18} /> {error}
        </div>
      )}

      {/* --- STEP 1: SCELTA CONSULENTE --- */}
      {step === 1 && (
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {CONSULTANTS.map((c) => (
            <button
              key={c.id}
              onClick={() => { setSelectedConsultant(c.id); setError(''); }}
              className={`
                relative p-8 rounded-2xl border text-left transition-all duration-300 hover:shadow-xl group
                ${selectedConsultant === c.id 
                  ? 'border-slate-900 bg-slate-50 ring-1 ring-slate-900' 
                  : 'border-slate-200 bg-white hover:border-slate-300'}
              `}
            >
              <div className="flex items-center gap-5 mb-4">
                <div className={`
                  w-16 h-16 rounded-full flex items-center justify-center text-2xl font-semibold transition-colors
                  ${selectedConsultant === c.id ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700'}
                `}>
                  {c.avatar}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-1" style={{ fontFamily: 'var(--font-serif)' }}>
                    {c.name}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">{c.role}</p>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed pl-[5.25rem]">
                {c.description}
              </p>
              {/* Icona check se selezionato */}
              {selectedConsultant === c.id && (
                <div className="absolute top-6 right-6 bg-slate-900 text-white rounded-full p-1">
                  <CheckCircle size={16} />
                </div>
              )}
            </button>
          ))}
        </div>
      )}

      {/* --- STEP 2: DATA E ORA --- */}
      {step === 2 && (
        <div className="max-w-3xl mx-auto space-y-10">
          
          {/* Selezione Data */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2" style={{ fontFamily: 'var(--font-serif)' }}>
              <Calendar size={20} /> 1. Scegli una data
            </h3>
            <div className="grid grid-cols-4 md:grid-cols-7 gap-3">
              {dates.map((d) => {
                const dateObj = new Date(d)
                // Formatta data (es. "Lun 12")
                const dayLabel = dateObj.toLocaleDateString('it-IT', { weekday: 'short' })
                const dayNum = dateObj.getDate()
                const isSelected = selectedDate === d
                
                return (
                  <button
                    key={d}
                    onClick={() => handleDateSelect(d)}
                    className={`
                      flex flex-col items-center justify-center py-3 rounded-xl border transition-all duration-200
                      ${isSelected 
                        ? 'border-slate-900 bg-slate-900 text-white shadow-md transform scale-105' 
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50'}
                    `}
                  >
                    <span className="text-xs font-medium uppercase opacity-70 mb-1">{dayLabel}</span>
                    <span className="text-xl font-bold">{dayNum}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Selezione Orario */}
          {selectedDate && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2" style={{ fontFamily: 'var(--font-serif)' }}>
                <Clock size={20} /> 2. Scegli un orario
              </h3>
              
              {loading ? (
                <div className="flex items-center gap-2 text-slate-500 py-4">
                  <div className="w-4 h-4 border-2 border-slate-300 border-t-slate-900 rounded-full animate-spin"></div>
                  Verifico disponibilità con {CONSULTANTS.find(c => c.id === selectedConsultant)?.name}...
                </div>
              ) : availableSlots.length > 0 ? (
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {availableSlots.map((t) => (
                    <button
                      key={t}
                      onClick={() => handleTimeSelect(t)}
                      className={`
                        py-3 px-2 rounded-lg border text-sm font-semibold transition-all
                        ${selectedTime === t 
                          ? 'border-slate-900 bg-slate-900 text-white shadow-md' 
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-900 hover:text-slate-900'}
                      `}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-slate-500 bg-slate-50 p-6 rounded-xl text-center border border-dashed border-slate-300">
                  Nessun orario disponibile per questa data.
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* --- STEP 3: DATI CLIENTE --- */}
      {step === 3 && (
        <div className="max-w-xl mx-auto bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Nome e Cognome <span className="text-red-500">*</span></label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900 outline-none transition-all"
                placeholder="Mario Rossi"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900 outline-none transition-all"
                placeholder="mario@email.it"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Telefono</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900 outline-none transition-all"
              placeholder="+39 333 1234567"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Note aggiuntive</label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 h-24 resize-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900 outline-none transition-all"
              placeholder="Breve descrizione della tua richiesta..."
            />
          </div>
        </div>
      )}

      {/* --- STEP 4: RIEPILOGO --- */}
      {step === 4 && (
        <div className="max-w-xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-8 space-y-6">
          <h3 className="text-xl font-semibold border-b border-slate-200 pb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Riepilogo Prenotazione
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <User size={18} className="text-slate-500 mt-1" />
              <div>
                <p className="text-xs text-slate-500 uppercase font-semibold">Professionista</p>
                <p className="text-slate-900 font-medium">{CONSULTANTS.find(c => c.id === selectedConsultant)?.name}</p>
                <p className="text-sm text-slate-500">{CONSULTANTS.find(c => c.id === selectedConsultant)?.role}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Calendar size={18} className="text-slate-500 mt-1" />
              <div>
                <p className="text-xs text-slate-500 uppercase font-semibold">Data e Ora</p>
                <p className="text-slate-900 font-medium">
                  {new Date(selectedDate).toLocaleDateString('it-IT', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <p className="text-lg font-bold text-slate-900">{selectedTime}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-slate-500 mt-1" />
              <div>
                <p className="text-xs text-slate-500 uppercase font-semibold">Luogo</p>
                <p className="text-slate-900 font-medium">Online / Studio</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-slate-100 text-sm space-y-1">
             <p><span className="text-slate-500">Cliente:</span> {formData.name}</p>
             <p><span className="text-slate-500">Email:</span> {formData.email}</p>
             {formData.phone && <p><span className="text-slate-500">Tel:</span> {formData.phone}</p>}
          </div>
        </div>
      )}

      {/* --- PULSANTI NAVIGAZIONE --- */}
      <div className="flex justify-between items-center max-w-3xl mx-auto pt-8 border-t border-slate-100">
        {step > 1 ? (
          <button 
            onClick={handleBack} 
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors px-4 py-2"
          >
            <ChevronLeft size={20} /> Indietro
          </button>
        ) : <div />}
        
        {step < 4 ? (
          <button
            onClick={handleNext}
            className="flex items-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-full font-medium hover:bg-slate-800 transition-all hover:shadow-lg active:scale-95"
          >
            Continua <ChevronRight size={20} />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="flex items-center gap-2 bg-emerald-600 text-white px-8 py-3.5 rounded-full font-medium hover:bg-emerald-700 transition-all hover:shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Prenotazione in corso...' : 'Conferma Appuntamento'}
          </button>
        )}
      </div>

    </div>
  )
}