import React, { useState } from "react";

import MemberGate from "./../components/MemberGate";
import SplitHilite from "./../components/SplitHilite";
import Tile from "./../components/Tile";

interface IMissingSoundsProps {
  isUserAuth: boolean;
  tag: string;
  ipa: string;
  words: string[];
  answers: string[];
}

export default (props: IMissingSoundsProps) => {
  const [isCorrect, setIsCorrect] = useState(
    Array(props.words.length).fill(undefined)
  );

  const { ipa, tag, words, answers } = props;
  const title = (
    <SplitHilite
      str={`Select the words that are ~MISSING~ the ${tag} – ${ipa} sound.`}
    />
  );

  let hasIncorrect = false;

  function checkAllCorrect(correct: boolean[]) {
    let numRemaining = answers.length;

    for (let i = 0; i < words.length; i++) {
      if (correct[i] === true) {
        numRemaining--;
      } else if (correct[i] === false) {
        hasIncorrect = true;
        return false;
      }
    }
    return numRemaining === 0;
  }

  const handleClick = (index: number) => {
    if (!props.isUserAuth) {
      return;
    }
    const isAnswerCorrect = answers.includes(words[index]);
    const newStateIsCorrect = isCorrect.slice();

    if (isCorrect[index] !== undefined) {
      newStateIsCorrect[index] = undefined;
    } else {
      newStateIsCorrect[index] = isAnswerCorrect;
    }

    checkAllCorrect(newStateIsCorrect);
    setIsCorrect(newStateIsCorrect);
  };

  const wordTiles = words.map((word: string, index: number) => (
    <Tile
      word={word}
      key={index}
      index={index}
      isCorrect={isCorrect[index]}
      handleClick={handleClick}
    />
  ));

  let result;
  checkAllCorrect(isCorrect);
  const numCorrect = isCorrect.filter(el => el).length;
  const areAllCorrectSelected = numCorrect === answers.length;

  let classBG = null;
  if (areAllCorrectSelected) {
    if (hasIncorrect) {
      classBG = "incorrect-bg";
      result = <h3 className="text-center">Try again</h3>;
    } else {
      classBG = "correct-bg";
      result = <h3 className="text-center">Yes ✓</h3>;
    }
  }

  const display = (
    <div className={`sub-canvas padded ${classBG}`}>
      {wordTiles}
      <div className="clear-float" />
      {result}
    </div>
  );

  return (
    <div className="headspace">
      {title}
      <MemberGate content={display} isUserAuth={props.isUserAuth} />
    </div>
  );
};
