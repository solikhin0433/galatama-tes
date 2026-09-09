import { useGameSession } from './hooks/useGameSession'
import { useToast } from './hooks/useToast'
import GameLayout from './component/layout/GameLayout'
import SessionTimer from './component/timer/SessionTimer'
import SessionControls from './component/control/SessionControls'
import Leaderboard from './component/leaderboard/Leaderboard'
import BiggestCatch from './component/leaderboard/BiggestCatch'
import CatchFeed from './component/feed/CatchFeed'
import ToastContainer from './component/toast/ToastContainer'

function App() {
  const { toasts, addToast } = useToast()

  const {
    sessionState,
    waktuSisa,
    tangkapanList,
    leaderboard,
    tangkapanTerberat,
    mulaiSesi,
    resetSesi,
  } = useGameSession((tangkapanBaru) => {
    const message = `${tangkapanBaru.botName} dapat ikan ${tangkapanBaru.berat} kg!`
    addToast(message, tangkapanBaru.isBigCatch)
  })

  return (
    <GameLayout>
      <ToastContainer toasts={toasts} />

      <div className="mb-6 space-y-4">
        <SessionTimer waktuSisa={waktuSisa} sessionState={sessionState} />
        <SessionControls
          sessionState={sessionState}
          onStart={mulaiSesi}
          onReset={resetSesi}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          <Leaderboard entries={leaderboard} />
          <BiggestCatch catchData={tangkapanTerberat} />
        </div>

        <div>
          <CatchFeed catches={tangkapanList} />
        </div>
      </div>
    </GameLayout>
  )
}

export default App
