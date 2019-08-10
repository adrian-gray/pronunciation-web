const Preload = function preload() {};

let state;
let game;

Preload.prototype = {
  init: function preloaderInit() {
    state = this;
    game = state.game;

    state.add.sprite(0, 0, "title");
    state.loadBar = state.add.sprite(95, 920, "load-bar");
    state.loadBar.anchor.setTo(0, 1);
    state.loadBar.scale.set(0, 1);
  },

  preload: function() {
    state.load.audio("button", "/assets/games/bento/audio/button.mp3");
    state.load.audio("complete", "/assets/games/bento/audio/complete.mp3");
    state.load.audio("correct", "/assets/games/bento/audio/correct.mp3");
    state.load.audio("incorrect", "/assets/games/bento/audio/incorrect.mp3");

    state.load.image("game-back", "/assets/games/bento/images/game-back.jpg");
    state.load.image("options-back", "/assets/games/bento/images/options-back.jpg");

    const tag = "sprites";
    const imgUrl = "/assets/games/bento/images/kana-bento.png";
    const jsonUrl = "/assets/games/bento/images/kana-bento.json";
    state.load.atlasJSONHash(tag, imgUrl, jsonUrl);

    state.load.onFileComplete.add(state.fileLoaded, state);
  },

  fileLoaded: function(progress) {
    state.loadBar.scale.x = progress / 100;
  },

  create: function() {
    if (game.data.focusKana) {
      game.state.start("game");
    } else {
      game.state.start("settings");
    }
  }
};

export default Preload;
