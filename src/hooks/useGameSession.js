import { useState, useCallback, useEffect, useRef } from "react"
import { SESI_DURASI } from "../constants/gameConfig"
import { STATE, ACTION, transisi } from "../lib/stateSession"
import { generateTangkapan, generateIntervalBerikutnya } from "../lib/catchGenerator"
import { calculateLeaderboard, cariTangkapanTerberat } from "../lib/leaderboardCalculator"

export function useGameSession(onCatch) {
  const [sessionState, setSessionState] = useState(STATE.WAITING)
  const [waktuSisa, setWaktuSisa] = useState(SESI_DURASI)
  const [tangkapanList, setTangkapanList] = useState([])

// untuk menyimpan id dari set interval
  const timerRef = useRef(null)
  const catchTimeoutRef = useRef(null)

  // untuk hitung ulang setiap render
  const leaderboard = calculateLeaderboard(tangkapanList)
  const tangkapanTerberat = cariTangkapanTerberat(tangkapanList)

  // Jadwal tangkapan (3-6 dtk)
  const jadwalkanTangkapan = useCallback(() => {
    const interval = generateIntervalBerikutnya()

    catchTimeoutRef.current = setTimeout(() => {
      const tangkapanBaru = generateTangkapan()
      setTangkapanList((prev) => [...prev, tangkapanBaru])

      // Panggil callback untuk toast
      if (onCatch) onCatch(tangkapanBaru)

      // Jadwalkan lagi
      jadwalkanTangkapan()
    }, interval)
  }, [onCatch])

  // Mulai sesi
  const mulaiSesi = useCallback(() => {
    setSessionState((prev) => {
      const next = transisi(prev, ACTION.START)
      if (next === STATE.RUNNING) {
        jadwalkanTangkapan()
      }
      return next
    })
  }, [jadwalkanTangkapan])

  // Reset sesi
  const resetSesi = useCallback(() => {
    clearInterval(timerRef.current)
    clearTimeout(catchTimeoutRef.current)
    setSessionState(STATE.WAITING)
    setWaktuSisa(SESI_DURASI)
    setTangkapanList([])
  }, [])

  // Effect: countdown timer
  useEffect(() => {
    if (sessionState !== STATE.RUNNING) return

    timerRef.current = setInterval(() => {
      setWaktuSisa((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current)
          clearTimeout(catchTimeoutRef.current)
          setSessionState(STATE.ENDED)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      clearInterval(timerRef.current)
      clearTimeout(catchTimeoutRef.current)
    }
  }, [sessionState])

  return {
    sessionState,
    waktuSisa,
    tangkapanList,
    leaderboard,
    tangkapanTerberat,
    mulaiSesi,
    resetSesi,
  }
}
