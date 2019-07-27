import React, { Component } from "react";
import Script from "react-load-script";

import MemberGate from "./MemberGate";
import SplitHilite from "./SplitHilite";
import WordsMaze from "./WordsMaze/index";

import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/styles/withStyles";

const styles = theme => ({
  headspace: theme.headspace
});

const NATIVE_WIDTH = 750;
const NATIVE_HEIGHT = 750;

class Maze extends Component {
  constructor(props) {
    super(props);

    const other = { ...props };

    this.state = {
      other,
      words: props.words,
      correct: props.correct
    };

    this.handleScriptError = this.handleScriptError.bind(this);
    this.handleScriptLoad = this.handleScriptLoad.bind(this);
    this._handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    this.windowListener = window.addEventListener("resize", this._handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._handleResize);

    if (this && this.state && this.state.game) {
      this.state.game.destroy();
    } else {
      console.log("Unsuccessfully tried to destroy Words Maze", this.state);
    }
  }

  handleScriptError() {
    this.forceUpdate();
  }

  handleScriptLoad() {
    const wordsMaze = Object.create(WordsMaze);
    this.setState({
      game: wordsMaze
    });

    if (this && this.state) {
      wordsMaze.init({
        words: this.state.words,
        correct: this.state.correct,
        auth: this.props.userAuth
      });
    } else {
      console.log("Words Maze state no longer exists, move on without creating game");
    }
  }

  handleResize() {
    const padding = "30px";
    const w = window.innerWidth - padding;
    const scale = w / NATIVE_WIDTH;
    const width = Math.round(scale * NATIVE_WIDTH);
    const height = Math.round(scale * NATIVE_HEIGHT);
    this.setState({ width, height });
  }

  render() {
    const width = `${this.state.width}px`;
    const height = `${this.state.height}px`;
    const style = { width, height };
    const title = `Words Maze ${this.props.tag} sound – ${this.props.ipa}`;
    const description = `Discover your way through the maze. Find the words that share the ${
      this.props.tag
    } sound and travel along the path of the maze from one word to the next until you discover the way out. Master each level and advance to the next – more complex words, more twists and turns. Maze is an interactive pronunciation game that helps you become familiar with common English words so you can speak with confidence.`;
    const instructions = `From the yellow square pick an adjacent square with a ${
      this.props.ipa
    } sound. Keep going until you reach the blue square.`;
    const display = (
      <div>
        <Script
          onLoad={this.handleScriptLoad}
          onError={this.handleScriptError}
          url="https://cdnjs.cloudflare.com/ajax/libs/phaser/2.6.2/phaser.min.js"
        />
        <div id="words-maze" style={style} />
      </div>
    );

    return (
      <div className={this.props.classes.headspace}>
        <Typography variant="title" gutterBottom>
          <SplitHilite str={title} />
        </Typography>
        <Typography variant="body2" gutterBottom>
          {description}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {instructions}
        </Typography>
        <MemberGate content={display} userAuth={this.props.userAuth} {...this.other} />
      </div>
    );
  }
}

export default withStyles(styles)(Maze);
