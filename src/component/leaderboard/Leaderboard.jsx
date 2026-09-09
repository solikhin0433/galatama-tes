export default function Leaderboard({ entries }) {
  return (
    <div className="rounded-xl bg-lake-900/80 border border-lake-700 p-5 backdrop-blur">
      <h2 className="text-lg font-display font-bold text-foam-100 mb-4">
        🏆 Leaderboard
      </h2>

      <div className="space-y-2">
        {entries.map((entry, index) => (
          <div
            key={entry.botId}
            className={`flex items-center justify-between rounded-lg px-4 py-3 transition-all duration-300 ${
              index === 0 && entry.totalBerat > 0
                ? 'bg-catch-gold/20 border border-catch-gold/40'
                : 'bg-lake-700/40'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${
                index === 0 && entry.totalBerat > 0
                  ? 'bg-catch-gold text-lake-950'
                  : 'bg-lake-700 text-foam-200'
              }`}>
                {index + 1}
              </span>

              <span className="text-foam-100 font-medium">
                {entry.botName}
              </span>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <span className="text-foam-200/70">
                {entry.jumlahTangkapan} 🐟
              </span>
              <span className="text-foam-100 font-bold font-display min-w-[60px] text-right">
                {entry.totalBerat} kg
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}