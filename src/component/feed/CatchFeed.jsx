import { ClipboardList, Flame, Fish } from 'lucide-react'

export default function CatchFeed({ catches }) {
  const reversed = catches.slice().reverse()

  return (
    <div className="rounded-xl bg-card border border-border p-5 backdrop-blur">
      <h2 className="text-lg font-display font-bold text-card-foreground mb-4 flex items-center gap-2">
        <ClipboardList className="w-5 h-5 text-muted-foreground" /> Riwayat Tangkapan
      </h2>

      <div className="space-y-2 max-h-64 overflow-y-auto custom-scrollbar pr-1">
        {reversed.length === 0 ? (
          <p className="text-muted-foreground text-sm text-center py-4">
            Belum ada tangkapan...
          </p>
        ) : (
          reversed.map((item) => (
            <div
              key={item.id}
              className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-all ${
                item.isBigCatch
                  ? 'bg-destructive/10 border border-destructive/30'
                  : 'bg-muted/30'
              }`}
            >
              <span className="flex items-center text-muted-foreground">
                {item.isBigCatch ? (
                  <Flame className="w-4 h-4 text-destructive mr-1.5" />
                ) : (
                  <Fish className="w-4 h-4 text-muted-foreground mr-1.5" />
                )}
                <span className="font-medium text-foreground">{item.botName}</span>
              </span>

              <span className={`font-bold font-display ${
                item.isBigCatch ? 'text-destructive' : 'text-primary'
              }`}>
                {item.berat} kg
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
