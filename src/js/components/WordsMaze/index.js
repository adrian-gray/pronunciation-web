/* global Phaser */

import Boot from './states/boot'
// import Preload from './states/preload'
import Game from './states/game'

let game

const WordsMaze = {
  init (params) {
    game = new Phaser.Game(750, 750, Phaser.AUTO, 'words-maze')
    game.data = params
    game.state.add('boot', Boot)
    game.state.add('game', Game)
    game.state.start('boot')
    return game
  },

  destroy () {
    if (game) {
      game.destroy()
    }
    game = null
  }
}

export default WordsMaze
