/* globals Phaser */
import Checkbox from './../entities/checkbox'
import Kana from './../entities/kana'
import Owl from './../entities/owl'
import Tile from './../entities/tile'
import Timer from './../entities/timer'

const Game = function Game () {}

const GRID = {
  x: 5,
  y: 154,
  height: 72,
  width: 72,
  buffer_x: 4,
  buffer_y: 4,
  hexBack: 0x111111,
  hexLine: 0xAA0000
}
const BOARD = { x: 60, y: 560, width: 650, height: 390 }

let $toggle
let $drag
let $drop
let checkboxes
let state
let game
let isTimerRunning
let isPlaying
let kana
let owl
let tiles
let timer
let numToComplete
let numCompleted

let ROMAJI
let HIRAGANA
let KATAKANA

Game.prototype = {
  create () {
    state = this
    game = state.game

    state.add.sprite(0, 0, 'game-back')

    ROMAJI = game.data.grid['romaji']
    HIRAGANA = game.data.grid['hiragana']
    KATAKANA = game.data.grid['katakana']

    GRID.contents = ROMAJI
    $toggle = new Phaser.Signal()
    $drag = new Phaser.Signal()
    $drop = new Phaser.Signal()

    isTimerRunning = false
    isPlaying = false

    const checkboxGroup = state.add.group()
    checkboxes = addCheckboxes({ parent: checkboxGroup, y: 86 })

    const tilesGroup = state.add.group()
    tiles = addTiles(tilesGroup)

    const kanaGroup = state.add.group()
    kana = addKana({
      parent: kanaGroup,
      draggables: game.data.grid[game.drLingua.focusKana]
    })
    shuffle({ kana, board: BOARD })

    timer = Timer({
      state,
      pos: { x: 110, y: 969 },
      stack: game.drLingua.romajiStack
    })

    owl = Owl({
      state,
      pos: { x: 125, y: 190 }
    })

    addSettingsButton()
    addResetButton()

    $toggle.add(handleToggle)
    $drag.add(handleDrag)
    $drop.add(handleDrop)
  },

  update () {
    if (isTimerRunning) {
      timer.update()
    }
  }
}

function addCheckboxes ({ parent, y }) {
  const offsetX = GRID.width + GRID.buffer_x
  const checkboxes = []
  for (let column = 0; column < ROMAJI[ 0 ].length; column += 1) {
    const x = GRID.x + (column * offsetX)
    const checkbox = Checkbox({
      state,
      parent,
      pos: {
        x,
        y,
        width: GRID.width,
        height: 50
      },
      $toggle
    })
    checkboxes.push(checkbox)
  }
  return checkboxes
}

function handleToggle () {
  const columns = ROMAJI[ 0 ].length
  const rows = ROMAJI.length

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      const num = (row * columns) + column
      if (tiles[ num ]) {
        if (checkboxes[column].getIsChecked()) {
          tiles[ num ].enable()
        } else {
          tiles[ num ].disable()
        }
      }
    }
  }
}

function handleDrag (e) {
  if (isPlaying) return
  startGame()
}

function startGame () {
  isPlaying = true
  checkboxes.forEach(checkbox => checkbox.disable())
  timer.start()
  isTimerRunning = true
  numToComplete = countTargets()
  numCompleted = 0
}

function countTargets () {
  let count = tiles.reduce((sum, value) => {
    const val = (value && value.isEnabled()) ? 1 : 0
    return sum + val
  }, 0)
  return count
}

function handleDrop ({ sprite, pointer }) {
  let isValidDrop = false
  let wasDroppedOverTile = false
  tiles.forEach(tile => {
    if (tile) {
      if (tile.back.input.checkPointerOver(pointer, true)) {
        wasDroppedOverTile = true
        if (sprite.romaji === tile.romaji) {
          owl.correct()
          state.sound.play('correct', 0.4)
          isValidDrop = true
          sprite.hide()
          tile.showTarget()
          numCompleted++
          if (numCompleted === numToComplete) {
            handleGameComplete()
          }
        }
      }
    }
  })
  if (!isValidDrop) {
    if (wasDroppedOverTile) {
      owl.wrong()
      state.sound.play('incorrect', 0.3)
    }
    sprite.resetPos()
  }
}

function addTiles (parent) {
  const offsetX = GRID.width + GRID.buffer_x
  const offsetY = GRID.height + GRID.buffer_y
  const tiles = []
  for (let row = 0; row < GRID.contents.length; row += 1) {
    for (let column = 0; column < GRID.contents[ row ].length; column += 1) {
      const x = GRID.x + (column * offsetX)
      const y = GRID.y + (row * offsetY)
      const romajiKana = ROMAJI[ row ][ column ]
      const hiragnaKana = HIRAGANA[ row ][ column ]
      const katakanaKana = KATAKANA[ row ][ column ]
      let tile
      if (romajiKana) {
        tile = Tile({
          state,
          parent,
          romaji: romajiKana,
          hiragana: hiragnaKana,
          katakana: katakanaKana,
          pos: {
            x,
            y,
            width: GRID.width,
            height: GRID.height
          },
          fill: GRID.hexBack,
          line: GRID.hexLine
        })
      }
      tiles.push(tile)
    }
  }
  return tiles
}

function addKana ({ parent, draggables }) {
  // flatten draggables array
  const draggableKana = [].concat.apply([], draggables)
  const flatRomaji = [].concat.apply([], ROMAJI)

  const kana = []
  let i = 0
  for (const k of draggableKana) {
    if (k) {
      kana.push(Kana({
        state,
        parent,
        kana: k,
        romaji: flatRomaji[i],
        kFontStack: game.drLingua.kanaStack,
        fill: '#FFFFFF',
        stroke: '#00FF00',
        $drag,
        $drop
      }))
    }
    i++
  }
  return kana
}

function shuffle ({ kana, board }) {
  const shuffleArray = (arr) => arr.sort(() => (Math.random() - 0.5))
  const rows = game.data.grid['romaji'].length
  const columns = game.data.grid['romaji'][0].length
  const grid = []
  for (let column = 0; column < columns; column++) {
    for (let row = 0; row < rows; row++) {
      grid.push({row, column})
    }
  }
  shuffleArray(grid)
  const xOffset = BOARD.width / columns
  const yOffset = BOARD.height / rows
  const offset = game.drLingua.kanaFontSize / 2
  const rand = 10
  for (const [i, k] of kana.entries()) {
    const baseX = board.x + grid[i].column * xOffset + offset
    const baseY = board.y + grid[i].row * yOffset + offset
    const x = -rand + baseX + Math.random() * rand * 2
    const y = -rand + baseY + Math.random() * rand * 2
    k.setPos({ x, y })
  }
}

function addSettingsButton () {
  const btn = state.add.sprite(359, 963, 'sprites', 'game_settings')
  btn.hitArea = new Phaser.Rectangle(-5, -5, 65, 65)
  btn.inputEnabled = true
  btn.input.useHandCursor = true
  btn.events.onInputDown.add(openSettings)
}

function openSettings () {
  state.sound.play('button', 0.3)
  game.state.start('settings')
}

function addResetButton () {
  const btn = state.add.sprite(494, 965, 'sprites', 'game_reset')
  btn.inputEnabled = true
  btn.input.useHandCursor = true
  btn.events.onInputDown.add(resetGame)
}

function resetGame () {
  state.sound.play('button', 0.3)
  tiles.forEach(tile => {
    if (tile) tile.reset()
  })
  kana.forEach(k => k.reset())
  shuffle({ kana, board: BOARD })
  isPlaying = false
  checkboxes.forEach(checkbox => checkbox.reset())
  handleToggle()
  isTimerRunning = false
  timer.reset()
}

function handleGameComplete () {
  isTimerRunning = false
  state.sound.play('complete', 0.5)
}

export default Game
