/* globals Phaser */

import Tile from './../entities/tile'

const Game = function Game () {}
const TILE_SIZE = 250
let state
let game

Game.prototype = {
  create () {
    state = this
    game = state.game

    const $tiles = new Phaser.Signal()

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
        tiles.push(Tile({ index, state, $tiles, parent: board, pos, word }))
        index++
      }
    }

    $tiles.add(handleTileSignal, this)

    function handleTileSignal (e) {
      const { word, index } = e
      if (game.data.correct.includes(word)) {
        handleTileCorrect(index)
      } else {
        handleTileIncorrect(index)
      }
    }

    function handleTileCorrect (index) {
      tiles[index].correct()
    }

    function handleTileIncorrect (index) {
      tiles[index].incorrect()
    }
  }
}

export default Game
