import {
  MIN_TANGKAPAN_INTERVAL,
  MAX_TANGKAPAN_INTERVAL,
  MIN_BERAT_IKAN,
  MAX_BERAT_IKAN,
  BATAS_IKAN_BESAR,
  BOT_PEMAIN,
} from "../constants/gameConfig"

// helper angka acak
function randomInRange(min, max) {
  return Math.random() * (max - min) + min
}
// helper pilih index acak dari array
function randomIndex(length) {
    return Math.floor(Math.random() * length)
}

// Generate satu tangkapan acak
export function generateTangkapan() {
  const bot = BOT_PEMAIN[randomIndex(BOT_PEMAIN.length)]
  const berat = parseFloat(randomInRange(MIN_BERAT_IKAN, MAX_BERAT_IKAN).toFixed(1))

  const isBigCatch = berat >= BATAS_IKAN_BESAR

  return {
    id: Date.now() + Math.random(), 
    botId: bot.id,                
    botName: bot.name,              
    berat,                           
    isBigCatch,                      
    timestamp: Date.now(),            
  }
}

// Generate interval acak 
export function generateIntervalBerikutnya() {
  return Math.floor(randomInRange(MIN_TANGKAPAN_INTERVAL, MAX_TANGKAPAN_INTERVAL))
}