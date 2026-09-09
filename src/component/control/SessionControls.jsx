import { STATE } from "../../lib/stateSession"
import { Play, RotateCcw } from "lucide-react"

export default function SessionControls({ sessionState, onStart, onReset }) {
  return (
    <div className="flex gap-3 justify-center">
      {sessionState === STATE.WAITING && (
        <button
          onClick={onStart}
          className="flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-display font-bold text-lg
                     hover:bg-primary/90 active:scale-95
                     transition-all duration-200 cursor-pointer shadow-lg shadow-primary/20"
        >
          <Play className="w-5 h-5" /> Mulai Sesi
        </button>
      )}

      {sessionState === STATE.ENDED && (
        <button
          onClick={onReset}
          className="flex items-center gap-2 px-8 py-3 rounded-xl bg-secondary text-secondary-foreground font-display font-bold text-lg
                     hover:bg-secondary/80 active:scale-95
                     transition-all duration-200 cursor-pointer border border-border"
        >
          <RotateCcw className="w-5 h-5" /> Main Lagi
        </button>
      )}
    </div>
  )
}
