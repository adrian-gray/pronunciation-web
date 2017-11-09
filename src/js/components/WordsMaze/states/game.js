/* globals Phaser */

import Tile from './../entities/tile'

const Game = function Game () {}
const TILE_SIZE = 250
const NUM_ROWS = 12
const NUM_COLS = 6
const LEFT = 0
const RIGHT = 1
const UP = 2
const DOWN = 3
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
    let activePos = { row: 0, col: 0 }
    for (let row = 0; row < NUM_ROWS; row++) {
      for (let col = 0; col < NUM_COLS; col++) {
        const word = game.data.words[index]
        tiles.push(Tile({
          index,
          state,
          $tiles,
          parent: board,
          TILE_SIZE,
          row,
          col,
          word
        }))
        index++
      }
    }

    $tiles.add(handleTileSignal, this)

    function handleTileSignal (e) {
      const { word, index, row, col } = e
      if (game.data.correct.includes(word)) {
        handleTileCorrect(index, row, col)
      } else {
        handleTileIncorrect(index)
      }
    }

    function handleTileIncorrect (index) {
      tiles[index].incorrect()
    }

    function handleTileCorrect (index, row, col) {
      console.log(`(${col}, ${row}) - `, activePos)
      tiles[index].correct()
      if (col > 1 && col < NUM_COLS - 2) {
        if (col > activePos.col) {
          moveBoard(RIGHT)
        } else if (col < activePos.col) {
          moveBoard(LEFT)
        }
      }
      if (row > 1 && row < NUM_ROWS - 2) {
        if (row > activePos.row) {
          moveBoard(DOWN)
        } else if (row < activePos.row) {
          moveBoard(UP)
        }
      }
      activePos = {row, col}
    }

    function moveBoard (direction) {
      console.log(direction)
      switch (direction) {
        case LEFT:
          game.add.tween(board).to(
            { x: board.x + TILE_SIZE },
            500,
            Phaser.Easing.Quadratic.InOut, true
          )
          break
        case RIGHT:
          game.add.tween(board).to(
            { x: board.x - TILE_SIZE },
            500,
            Phaser.Easing.Quadratic.InOut, true
          )
          break
        case UP:
          game.add.tween(board).to(
            { y: board.y + TILE_SIZE },
            500,
            Phaser.Easing.Quadratic.InOut, true
          )
          break
        case DOWN:
          game.add.tween(board).to(
            { y: board.y - TILE_SIZE },
            500,
            Phaser.Easing.Quadratic.InOut, true
          )
          break
      }
    }
  }
}

export default Game
