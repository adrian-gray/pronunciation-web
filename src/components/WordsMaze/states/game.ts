import Tile from "../entities/Tile";

import { IGame } from "../../../../@types/PronounceWeb";

const Game = function Game() {};
const TILE_SIZE = 250;
const LEFT = 0;
const RIGHT = 1;
const UP = 2;
const DOWN = 3;

let NUM_ROWS = 12;
let NUM_COLS = 6;
let state;
let game: IGame;

Game.prototype = {
  create() {
    state = this;
    game = state.game;

    const $tiles = new Phaser.Signal();

    const board = state.add.group();
    let tiles = [];
    let index = 0;
    NUM_COLS = game.data.words[0].length;
    NUM_ROWS = game.data.words.length;
    let activePos = { row: 0, col: 0 };
    for (let row = 0; row < NUM_ROWS; row++) {
      for (let col = 0; col < NUM_COLS; col++) {
        const word = game.data.words[row][col];
        tiles.push(
          Tile({
            index,
            state,
            $tiles,
            parent: board,
            TILE_SIZE,
            row,
            col,
            word
          })
        );
        index++;
      }
    }

    $tiles.add(handleTileSignal, this);

    function handleTileSignal(e) {
      if (!game.isAuth) return;
      const { word, index, row, col } = e;
      if (game.data.correct.includes(word)) {
        handleTileCorrect(index, row, col);
      } else {
        handleTileIncorrect(index);
      }
    }

    function handleTileIncorrect(index) {
      tiles[index].incorrect();
    }

    function handleTileCorrect(index, row, col) {
      tiles[index].correct();

      if (col > activePos.col && col > 1 && col < NUM_COLS - 1) {
        moveBoard(RIGHT);
      } else if (
        col < activePos.col &&
        col > 0 &&
        activePos.col < NUM_COLS - 1
      ) {
        moveBoard(LEFT);
      }
      if (row > activePos.row && row > 1 && row < NUM_ROWS - 1) {
        moveBoard(DOWN);
      } else if (
        row < activePos.row &&
        row > 0 &&
        activePos.row < NUM_ROWS - 1
      ) {
        moveBoard(UP);
      }
      activePos = { row, col };
    }

    function moveBoard(direction) {
      switch (direction) {
        case LEFT:
          game.add
            .tween(board)
            .to(
              { x: board.x + TILE_SIZE },
              500,
              Phaser.Easing.Quadratic.InOut,
              true
            );
          break;
        case RIGHT:
          game.add
            .tween(board)
            .to(
              { x: board.x - TILE_SIZE },
              500,
              Phaser.Easing.Quadratic.InOut,
              true
            );
          break;
        case UP:
          game.add
            .tween(board)
            .to(
              { y: board.y + TILE_SIZE },
              500,
              Phaser.Easing.Quadratic.InOut,
              true
            );
          break;
        case DOWN:
          game.add
            .tween(board)
            .to(
              { y: board.y - TILE_SIZE },
              500,
              Phaser.Easing.Quadratic.InOut,
              true
            );
          break;
      }
    }
  }
};

export default Game;
