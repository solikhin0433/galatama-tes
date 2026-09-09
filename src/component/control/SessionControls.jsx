import { STATE } from "../../lib/stateSession"

export default function SessionControls({ sessionState, onStart, onReset }) {
  return (
    <div className="flex gap-3 justify-center">
      {sessionState === STATE.WAITING && (
        <button
          onClick={onStart}
          className="px-8 py-3 rounded-xl bg-catch-gold text-lake-950 font-display font-bold text-lg
                     hover:bg-catch-gold/90 active:scale-95
                     transition-all duration-200 cursor-pointer shadow-lg shadow-catch-gold/20"
        >
          🎣 Mulai Sesi
        </button>
      )}

      {sessionState === STATE.ENDED && (
        <button
          onClick={onReset}
          className="px-8 py-3 rounded-xl bg-lake-700 text-foam-100 font-display font-bold text-lg
                     hover:bg-lake-500 active:scale-95
                     transition-all duration-200 cursor-pointer border border-lake-500"
        >
          🔄 Main Lagi
        </button>
      )}
    </div>
  )
}
