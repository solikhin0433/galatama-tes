export default function GameLayout({ children }) {
  return (
    <div className="min-h-screen bg-lake-950 text-foam-100 font-body">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foam-100">
            🎣 Galatama Fishing
          </h1>
          <p className="text-foam-200/60 mt-1 text-sm">
            Mini Leaderboard Simulator
          </p>
        </header>

        {children}
      </div>
    </div>
  )
}
