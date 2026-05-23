import type { isPlayer } from './src/interfaces/isPlayer'
import { Player } from './src/classes/Player'

interface RectangleOptions {
  width: number
  height: number
}

function drawRectangle(options: RectangleOptions) {
  let width = options.width
  let height = options.height
}
let threeDoptions = { width: 100, height: 50, depth: 25 }
drawRectangle(threeDoptions)

const sakib = new Player('Sakib', 35, 'Bangladesh')
let mashrafi: isPlayer
mashrafi = new Player('Mashrafi', 38, 'Bangladesh')
const players: isPlayer[] = []
players.push(sakib)
players.push(mashrafi)
console.log(players);
