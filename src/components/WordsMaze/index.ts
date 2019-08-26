/// <reference path="./../../../@types/phaser/phaser.d.ts" />
import Boot from "./states/boot";
import Game from "./states/game";

import { IGame } from "./../../../@types/PronounceWeb";

let game: IGame;

interface IWordsMaze {
  words: string[];
  correct: string[];
  auth: number;
}

const WordsMaze = {
  init(params: IWordsMaze) {
    game = new Phaser.Game(750, 750, Phaser.AUTO, "words-maze");
    game.data = params;
    game.isAuth = !!params.auth;
    game.state.add("boot", Boot);
    game.state.add("game", Game);
    game.state.start("boot");
    return game;
  },

  destroy() {
    if (game) {
      game.destroy();
    }
    game = null;
  }
};

export default WordsMaze;
