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
  },

  create: function bootCreate () {
    game.state.start('game')
  }
}

export default Boot
