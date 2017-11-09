const DISABLED_TINT = 0.5

const DEFAULT = 0xDDDDDD
const STROKE = 0x000000
const INCORRECT = 0xFFCCCC
const CORRECT = 0xCCFFCC
const STACK = "'Helvetica Neue', Helvetica, Arial, sans-serif"

export default function Tile (params) {
  const {
    index,
    state,
    $tiles,
    parent,
    TILE_SIZE,
    row,
    col,
    word } = params

  const group = state.add.group()
  parent.add(group)
  const back = makeBack()
  back.events.onInputUp.add(handleUp)
  back.inputEnabled = true

  const text = addText({ str: word, size: 54 })

  group.add(back)
  group.add(text)

  function makeBack () {
    const g = state.add.graphics(col * TILE_SIZE, row * TILE_SIZE)

    // set a fill and line style
    g.beginFill(DEFAULT)
    g.lineStyle(2, STROKE, 1)

    g.drawRect(0, 0, TILE_SIZE, TILE_SIZE, 5)
    return g
  }

  function addText ({ str, size }) {
    const style = { font: `normal ${size}px ${STACK}` }
    const posX = col * TILE_SIZE + (TILE_SIZE / 2)
    const posY = row * TILE_SIZE + (TILE_SIZE / 2)
    const text = state.add.text(posX, posY, str, style)
    text.anchor.set(0.5)
    return text
  }

  function handleUp () {
    $tiles.dispatch({ word, index, row, col })
  }

  function correct () {
    back.tint = CORRECT
    disable()
  }

  function incorrect () {
    back.tint = INCORRECT
    disable()
  }

  function disable () {
    text.alpha = DISABLED_TINT
    back.inputEnabled = false
  }

  const API = {
    correct,
    incorrect
  }

  return API
}
