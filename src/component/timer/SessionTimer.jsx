import { STATE } from "../../lib/stateSession"

export default function SessionTimer({ waktuSisa, sessionState }) {
  const menit = Math.floor(waktuSisa / 60)
  const detik = String(waktuSisa % 60).padStart(2, '0')
  const display = `${menit}:${detik}`

  const statusLabel = {
    [STATE.WAITING]: 'Menunggu...',
    [STATE.RUNNING]: 'Sesi Berjalan',
    [STATE.ENDED]:   'Sesi Berakhir',
  }[sessionState]

  const isUrgent = waktuSisa <= 10 && sessionState === STATE.RUNNING

  return (
    <div className="rounded-xl bg-card border border-border p-5 text-center backdrop-blur">
      <p className={`text-sm font-medium tracking-wide uppercase mb-2 ${
        sessionState === STATE.ENDED ? 'text-destructive' : 'text-muted-foreground'
      }`}>
        {statusLabel}
      </p>

      <p className={`font-display text-5xl font-bold tabular-nums ${
        isUrgent ? 'text-destructive animate-pulse' : 'text-foreground'
      }`}>
        {display}
      </p>

      <p className="text-xs text-muted-foreground mt-2">
        {sessionState === STATE.ENDED ? 'Waktu habis!' : 'Sisa waktu'}
      </p>
    </div>
  )
}
