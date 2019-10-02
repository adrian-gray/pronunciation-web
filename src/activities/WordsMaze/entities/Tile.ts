const DISABLED_TINT = 0.5;

const DEFAULT = 0xdddddd;
const STROKE = 0x000000;
const INCORRECT = 0xffcccc;
const CORRECT = 0xccffcc;
const YELLOW = 0xffffcc;
const BLUE = 0xccccff;
const STACK = "'Helvetica Neue', Helvetica, Arial, sans-serif";

interface TileParams {
  index: number;
  state: Phaser.State;
  $tiles: Phaser.Signal;
  parent: Phaser.Group;
  TILE_SIZE: number;
  row: number;
  col: number;
  word: string;
}

export default function Tile(params: TileParams) {
  const { index, state, $tiles, parent, TILE_SIZE, row, col, word } = params;

  const group = state.add.group();
  parent.add(group);
  const back = makeBack();
  back.events.onInputUp.add(handleUp);
  back.inputEnabled = true;

  const text = addText({ str: word, size: 48 });

  group.add(back);
  group.add(text);

  function makeBack() {
    const g = state.add.graphics(col * TILE_SIZE, row * TILE_SIZE);
    let color = DEFAULT;
    if (index === 0) color = YELLOW;
    if (index === 71) color = BLUE;

    // set a fill and line style
    g.beginFill(color);
    g.lineStyle(2, STROKE, 1);

    g.drawRect(0, 0, TILE_SIZE, TILE_SIZE);
    return g;
  }

  function addText({ str, size }: { str: string; size: number }) {
    const style = { font: `normal ${size}px ${STACK}` };
    const posX = col * TILE_SIZE + TILE_SIZE / 2;
    const posY = row * TILE_SIZE + TILE_SIZE / 2;
    const text = state.add.text(posX, posY, str, style);
    text.anchor.set(0.5);
    return text;
  }

  function handleUp() {
    $tiles.dispatch({ word, index, row, col });
  }

  function correct() {
    back.tint = CORRECT;
    disable();
  }

  function incorrect() {
    back.tint = INCORRECT;
    disable();
  }

  function disable() {
    text.alpha = DISABLED_TINT;
    back.inputEnabled = false;
  }

  const API = {
    correct,
    incorrect
  };

  return API;
}
