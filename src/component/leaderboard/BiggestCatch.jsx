import { Target, Flame } from 'lucide-react'

export default function BiggestCatch({ catchData }) {
  if (!catchData) {
    return (
      <div className="rounded-xl bg-card border border-border p-5 backdrop-blur text-center">
        <h2 className="text-lg font-display font-bold text-card-foreground mb-2 flex items-center justify-center gap-2">
          <Target className="w-5 h-5 text-destructive" /> Tangkapan Terberat
        </h2>
        <p className="text-muted-foreground text-sm">Belum ada tangkapan</p>
      </div>
    )
  }

  return (
    <div className={`rounded-xl border p-5 backdrop-blur text-center transition-all duration-500 ${
      catchData.isBigCatch
        ? 'bg-destructive/10 border-destructive/50 animate-flash-big-catch'
        : 'bg-card border-border'
    }`}>
      <h2 className="text-lg font-display font-bold text-card-foreground mb-3 flex items-center justify-center gap-2">
        <Target className="w-5 h-5 text-destructive" /> Tangkapan Terberat
      </h2>

      <p className={`text-4xl font-display font-bold mb-1 ${
        catchData.isBigCatch ? 'text-destructive' : 'text-primary'
      }`}>
        {catchData.berat} kg
      </p>

      <p className="text-muted-foreground text-sm">
        oleh <span className="font-semibold text-foreground">{catchData.botName}</span>
      </p>

      {catchData.isBigCatch && (
        <span className="inline-flex items-center gap-1 mt-2 px-3 py-1 bg-destructive/20 text-destructive text-xs font-bold rounded-full uppercase tracking-wider">
          <Flame className="w-3.5 h-3.5" /> Monster Catch!
        </span>
      )}
    </div>
  )
}
