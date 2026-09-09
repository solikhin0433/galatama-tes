import { useState, useCallback, useEffect, useRef } from "react"
import { SESI_DURASI } from "../constants/gameConfig"
import { STATE, ACTION, transisi } from "../lib/stateSession"
import { generateTangkapan, generateIntervalBerikutnya } from "../lib/catchGenerator"
import { calculateLeaderboard, cariTangkapanTerberat } from "../lib/leaderboardCalculator"

export function useGameSession(onCatch) {
  const [sessionState, setSessionState] = useState(STATE.WAITING)
  const [waktuSisa, setWaktuSisa] = useState(SESI_DURASI)
  const [tangkapanList, setTangkapanList] = useState([])

  const onCatchRef = useRef(onCatch);
  useEffect(() => {
    onCatchRef.current = onCatch;
  }, [onCatch]);

// untuk menyimpan id dari set interval
  const timerRef = useRef(null)
  const catchTimeoutRef = useRef(null)
  const isRunningRef = useRef(false) 

  // untuk hitung ulang setiap render
  const leaderboard = calculateLeaderboard(tangkapanList)
  const tangkapanTerberat = cariTangkapanTerberat(tangkapanList)

  // Jadwal tangkapan (3-6 dtk)
  const jadwalkanTangkapan = useCallback(() => {
    const interval = generateIntervalBerikutnya()

    catchTimeoutRef.current = setTimeout(() => {
      // Cek apakah sesi masih berjalan
      if (!isRunningRef.current) return;

      const tangkapanBaru = generateTangkapan()
      setTangkapanList((prev) => [...prev, tangkapanBaru])

      // Panggil callback untuk toast
      if (onCatchRef.current) onCatchRef.current(tangkapanBaru)

      // Jadwalkan lagi
      jadwalkanTangkapan()
    }, interval)
  }, [])

  // Mulai sesi
  const mulaiSesi = useCallback(() => {
    setSessionState((prev) => transisi(prev, ACTION.START))
  }, [])

  // Reset sesi
  const resetSesi = useCallback(() => {
    isRunningRef.current = false;
    clearInterval(timerRef.current)
    clearTimeout(catchTimeoutRef.current)
    setSessionState(STATE.WAITING)
    setWaktuSisa(SESI_DURASI)
    setTangkapanList([])
  }, [])

  // countdown timer & simulasi tangkapan
  useEffect(() => {
    if (sessionState !== STATE.RUNNING) return

    isRunningRef.current = true;
    jadwalkanTangkapan();

    timerRef.current = setInterval(() => {
      setWaktuSisa((prev) => {
        if (prev <= 1) {
          isRunningRef.current = false;
          clearInterval(timerRef.current)
          clearTimeout(catchTimeoutRef.current)
          setSessionState(STATE.ENDED)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      isRunningRef.current = false;
      clearInterval(timerRef.current)
      clearTimeout(catchTimeoutRef.current)
    }
  }, [sessionState, jadwalkanTangkapan])

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
