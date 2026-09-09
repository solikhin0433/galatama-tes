import { useState, useCallback, useRef } from "react"
import { DURASI_TOAST } from "../constants/gameConfig"

export function useToast() {
  const [toasts, setToasts] = useState([])
  const timerRefs = useRef(new Map())

  const addToast = useCallback((message, isBigCatch = false) => {
    const id = Date.now() + Math.random()
    setToasts((prev) => [...prev, { id, message, isBigCatch }])


    const timerId = setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id))
      timerRefs.current.delete(id)
    }, DURASI_TOAST)

    timerRefs.current.set(id, timerId)
  }, [])

  return { toasts, addToast }
}
