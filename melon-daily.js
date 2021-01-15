const melon = require('obliviate/lib/tasks/melon')

async function melonDaily() {
  await melon.perform({ id: '32185128', binId: '5ffdc4f368f9f835a3de4718' })
}

melonDaily()
