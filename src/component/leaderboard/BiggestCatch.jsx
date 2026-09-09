import { Target, Flame } from 'lucide-react'

export default function BiggestCatch({ catchData }) {
  if (!catchData) {
    return (
      <div className="rounded-xl bg-lake-900/80 border border-lake-700 p-5 backdrop-blur text-center">
        <h2 className="text-lg font-display font-bold text-foam-100 mb-2 flex items-center justify-center gap-2">
          <Target className="w-5 h-5 text-alert-coral" /> Tangkapan Terberat
        </h2>
        <p className="text-foam-200/50 text-sm">Belum ada tangkapan</p>
      </div>
    )
  }

  return (
    <div className={`rounded-xl border p-5 backdrop-blur text-center transition-all duration-500 ${
      catchData.isBigCatch
        ? 'bg-alert-coral/10 border-alert-coral/50 animate-flash-big-catch'
        : 'bg-lake-900/80 border-lake-700'
    }`}>
      <h2 className="text-lg font-display font-bold text-foam-100 mb-3 flex items-center justify-center gap-2">
        <Target className="w-5 h-5 text-alert-coral" /> Tangkapan Terberat
      </h2>

      <p className={`text-4xl font-display font-bold mb-1 ${
        catchData.isBigCatch ? 'text-alert-coral' : 'text-catch-gold'
      }`}>
        {catchData.berat} kg
      </p>

      <p className="text-foam-200 text-sm">
        oleh <span className="font-semibold text-foam-100">{catchData.botName}</span>
      </p>

      {catchData.isBigCatch && (
        <span className="inline-flex items-center gap-1 mt-2 px-3 py-1 bg-alert-coral/20 text-alert-coral text-xs font-bold rounded-full uppercase tracking-wider">
          <Flame className="w-3.5 h-3.5" /> Monster Catch!
        </span>
      )}
    </div>
  )
}
