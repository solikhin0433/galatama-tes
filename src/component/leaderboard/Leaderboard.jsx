import { Trophy, Fish } from 'lucide-react'

export default function Leaderboard({ entries }) {
  return (
    <div className="rounded-xl bg-card border border-border p-5 backdrop-blur">
      <h2 className="text-lg font-display font-bold text-card-foreground mb-4 flex items-center gap-2">
        <Trophy className="w-5 h-5 text-primary" /> Leaderboard
      </h2>

      <div className="space-y-2">
        {entries.map((entry, index) => (
          <div
            key={entry.botId}
            className={`flex items-center justify-between rounded-lg px-4 py-3 transition-all duration-300 ${
              index === 0 && entry.totalBerat > 0
                ? 'bg-primary/20 border border-primary/40'
                : 'bg-muted/40'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${
                index === 0 && entry.totalBerat > 0
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
              }`}>
                {index + 1}
              </span>

              <span className="text-foreground font-medium">
                {entry.botName}
              </span>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1 text-muted-foreground">
                {entry.jumlahTangkapan} <Fish className="w-4 h-4" />
              </span>
              <span className="text-foreground font-bold font-display min-w-[60px] text-right">
                {entry.totalBerat} kg
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}