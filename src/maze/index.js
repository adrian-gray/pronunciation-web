/* global Phaser */

import Boot from './states/boot'
import Preload from './states/preload'
import Settings from './states/settings'
import Game from './states/game'

let game

const KanaDrop = {
  init (params) {
    game = new Phaser.Game(768, 1024, Phaser.AUTO, 'game')
    game.data = params
    game.state.add('boot', Boot)
    game.state.add('preload', Preload)
    game.state.add('settings', Settings)
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

export default KanaDrop
