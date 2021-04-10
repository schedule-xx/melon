const melon = require('obliviate/lib/tasks/melon')

async function melonDaily() {
  await melon.perform({ id: '32185128', binId: '5ffdc4f368f9f835a3de4718' })
  await melon.perform({ id: '33382021', binId: '60714a9fceba857326722071' })
}

melonDaily()
