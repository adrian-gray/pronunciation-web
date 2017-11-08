const DISABLED_TINT = 0.5
// const DULL = '#DDDDDD'
// const BRIGHT = '#FFFFFF'
const STACK = "'Helvetica Neue', Helvetica, Arial, sans-serif"

export default function Tile (params) {
  console.log('add tile', params)
  const { state, parent, pos, word } = params
  const { x, y, width, height } = pos

  const group = state.add.group()
  parent.add(group)
  const back = makeBack()
  back.inputEnabled = true

  const text = addText({ str: word, size: 54 })

  group.addMultiple(back, text)

  function makeBack () {
    const g = state.add.graphics(x, y)

    // set a fill and line style
    g.beginFill(0xFF99FF)
    g.lineStyle(2, 0x000000, 1)

    g.drawRect(0, 0, width, height, 5)
    return g
  }

  function addText ({ str, size }) {
    const style = { font: `normal ${size}px ${STACK}` }
    const posX = x + (width / 2)
    const posY = y + (height / 2)
    const text = state.add.text(posX, posY, str, style)
    text.anchor.set(0.5)
    return text
  }

  function disable () {
    text.alpha = DISABLED_TINT
    back.inputEnabled = false
  }

  function hilite () {

  }

  const API = {
    disable,
    hilite
  }

  return API
}
