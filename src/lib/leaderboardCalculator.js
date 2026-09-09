import { BOT_PEMAIN } from "../constants/gameConfig"

// Hitung leaderboard dari semua tangkapan
export function calculateLeaderboard(tangkapan) {
  const botMap = new Map()

  BOT_PEMAIN.forEach((bot) => {
    botMap.set(bot.id, {
      botId: bot.id,
      botName: bot.name,
      totalBerat: 0,
      jumlahTangkapan: 0,
    })
  })
// hitung total berat dan jumlah tangkapan per bot
  tangkapan.forEach((item) => {
    const bot = botMap.get(item.botId)
    bot.totalBerat = parseFloat((bot.totalBerat + item.berat).toFixed(1))
    bot.jumlahTangkapan += 1
  })
// conver map ke array  urutkan desc
  return Array.from(botMap.values()).sort(
    (a, b) => b.totalBerat - a.totalBerat
  )
}

// Cari tangkapan tunggal terberat 
export function cariTangkapanTerberat(tangkapan) {
  if (tangkapan.length === 0) return null

  return tangkapan.reduce((terberat, current) =>
    current.berat > terberat.berat ? current : terberat
  )
}
