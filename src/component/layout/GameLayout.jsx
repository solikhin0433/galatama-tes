import { Fish, Moon, Sun } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function GameLayout({ children }) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <div className="min-h-screen bg-background text-foreground font-body transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <header className="relative text-center mb-8">
          <button
            onClick={() => setIsDark(!isDark)}
            className="absolute right-0 top-0 p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            title="Toggle Theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground flex items-center justify-center gap-3">
            <Fish className="w-8 h-8 text-primary" /> Galatama Fishing
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Mini Leaderboard Simulator
          </p>
        </header>

        {children}
      </div>
    </div>
  )
}
