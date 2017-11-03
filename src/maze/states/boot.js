/* global Phaser, document */

const Boot = function boot () {}

let state
let game

Boot.prototype = {
  init: function bootInit () {
    state = this
    game = state.game

    game.input.maxPointers = 1
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL

    game.scale.pageAlignHorizontally = true
    game.scale.updateLayout(true)

    game.time.desiredFps = 60
    game.forceSingleUpdate = true
    game.stage.disableVisibilityChange = true

    game.drLingua = {
      focusKana: game.data.focusKana || 'hiragana',
      gridKana: game.data.gridKana || 'romaji',
      kanaStack: "'Hiragino Kaku Gothic Pro', 'Meiryo', 'sans-serif'",
      romajiStack: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      kanaFontSize: 58,
      romajiFontSize: 48
    }
  },

  preload: function bootPreload () {
    state.load.image('title', '/assets/games/bento/images/kana-bento-title.jpg')
    state.load.image('load-bar', '/assets/games/common/images/load-bar.png')
  },

  create: function bootCreate () {
    game.state.start('preload')
  }
}

export default Boot
