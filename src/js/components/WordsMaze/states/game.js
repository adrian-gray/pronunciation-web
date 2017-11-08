import Tile from './../entities/tile'

const Game = function Game () {}
const TILE_SIZE = 250
let state
let game

Game.prototype = {
  create () {
    state = this
    game = state.game

    const board = state.add.group()
    let tiles = []
    let index = 0
    for (let row = 0; row < 12; row++) {
      for (let col = 0; col < 6; col++) {
        const x = col * TILE_SIZE
        const y = row * TILE_SIZE
        const width = TILE_SIZE
        const height = TILE_SIZE
        const pos = { x, y, width, height }
        const word = game.data.words[index]
        tiles.push(Tile({ state, parent: board, pos, word }))
        index++
      }
    }
  }
}

export default Game
