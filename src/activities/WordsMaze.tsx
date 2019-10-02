import React, { useState } from "react";
import { IWordsMaze } from "./../../@types/PronounceWeb";
import Script from "react-load-script";

import MemberGate from "./../components/MemberGate";
import SplitHilite from "./../components/SplitHilite";

import WordsMaze from "./WordsMaze/index";

const NATIVE_WIDTH = 750;
const NATIVE_HEIGHT = 750;

export default (props: IWordsMaze) => {
  let screenWidth = NATIVE_WIDTH;
  let screenHeight = NATIVE_HEIGHT;

  const handleScriptLoad = () => {
    const wordsMaze = Object.create(WordsMaze);
    wordsMaze.init({
      words: props.words,
      correct: props.correct,
      auth: props.isUserAuth
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
    <div className="head-space">
      <h3>
        <SplitHilite str={title} />
      </h3>
      <p>{description}</p>
      <p>{instructions}</p>
      <MemberGate content={display} isUserAuth={props.isUserAuth} />
    </div>
  );
};
