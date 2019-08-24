import React, { useState } from "react";
import Script from "react-load-script";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { withTheme } from "@material-ui/styles";

import MemberGate from "./MemberGate";
import SplitHilite from "./SplitHilite";
import WordsMaze from "./WordsMaze/index";

const useStyles = makeStyles(theme => ({
  headspace: theme.headspace
}));

const NATIVE_WIDTH = 750;
const NATIVE_HEIGHT = 750;

function Maze(props) {
  const classes = useStyles(props);

  let screenWidth = NATIVE_WIDTH;
  let screenHeight = NATIVE_HEIGHT;

  const handleScriptLoad = () => {
    const wordsMaze = Object.create(WordsMaze);
    wordsMaze.init({
      words: props.words,
      correct: props.correct,
      auth: props.userAuth
    });
  };

  const _handleResize = () => {
    const padding = 30;
    const w = window.innerWidth - padding;
    const scale = w / NATIVE_WIDTH;
    screenWidth = Math.round(scale * NATIVE_WIDTH);
    screenHeight = Math.round(scale * NATIVE_HEIGHT);
  };
  window.addEventListener("resize", _handleResize);

  const width = `${screenWidth}px`;
  const height = `${screenHeight}px`;
  const style = { width, height };
  const title = `Words Maze ${props.tag} sound – ${props.ipa}`;
  const description = `Discover your way through the maze. Find the words that share the ${props.tag} sound and travel along the path of the maze from one word to the next until you discover the way out. Master each level and advance to the next – more complex words, more twists and turns. Maze is an interactive pronunciation game that helps you become familiar with common English words so you can speak with confidence.`;
  const instructions = `From the yellow square pick an adjacent square with a ${props.ipa} sound. Keep going until you reach the blue square.`;
  const display = (
    <div>
      <Script
        onLoad={handleScriptLoad}
        onError={() => console.error("scriprt error")}
        url="https://cdnjs.cloudflare.com/ajax/libs/phaser/2.6.2/phaser.min.js"
      />
      <div id="words-maze" style={style} />
    </div>
  );

  return (
    <div className={classes.headspace}>
      <Typography variant="h5" gutterBottom>
        <SplitHilite str={title} />
      </Typography>
      <Typography variant="body2" gutterBottom>
        {description}
      </Typography>
      <Typography variant="body2" gutterBottom>
        {instructions}
      </Typography>
      <MemberGate content={display} userAuth={props.userAuth} />
    </div>
  );
}

export default withTheme(Maze);
