export default function CatchFeed({ catches }) {
  const reversed = catches.slice().reverse()

  return (
    <div className="rounded-xl bg-lake-900/80 border border-lake-700 p-5 backdrop-blur">
      <h2 className="text-lg font-display font-bold text-foam-100 mb-4">
        📋 Log Tangkapan
      </h2>

      <div className="space-y-2 max-h-64 overflow-y-auto custom-scrollbar pr-1">
        {reversed.length === 0 ? (
          <p className="text-foam-200/50 text-sm text-center py-4">
            Belum ada tangkapan...
          </p>
        ) : (
          reversed.map((item) => (
            <div
              key={item.id}
              className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-all ${
                item.isBigCatch
                  ? 'bg-alert-coral/10 border border-alert-coral/30'
                  : 'bg-lake-700/30'
              }`}
            >
              <span className="text-foam-200">
                {item.isBigCatch ? '🔥' : '🐟'}{' '}
                <span className="font-medium text-foam-100">{item.botName}</span>
              </span>

              <span className={`font-bold font-display ${
                item.isBigCatch ? 'text-alert-coral' : 'text-catch-gold'
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
