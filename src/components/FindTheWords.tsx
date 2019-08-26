import React, { useState } from "react";
import { IFindTheWordsProps } from "./../../@types/PronounceWeb";

import Container from "react-bootstrap/Container";

import MemberGate from "./MemberGate";
import SplitHilite from "./SplitHilite";
import Tile from "./Tile";

export default (props: IFindTheWordsProps) => {
  const [isCorrect, setIsCorrect] = useState(
    Array(props.words.length).fill(undefined)
  );
  const [allCorrect, setAllCorrect] = useState(false);

  function checkAllCorrect(correct: boolean[]) {
    let numRemaining = props.correct.length;

    for (let i = 0; i < props.words.length; i++) {
      if (correct[i] === true) {
        numRemaining--;
      } else if (correct[i] === false) {
        return false;
      }
    }
    return numRemaining === 0;
  }

  const handleClick = (index: number) => {
    const isWordCorrect = props.correct.includes(props.words[index]);
    const newStateIsCorrect = isCorrect.slice();

    newStateIsCorrect[index] = isWordCorrect;
    setAllCorrect(checkAllCorrect(newStateIsCorrect));
    setIsCorrect(newStateIsCorrect);
  };

  const { ipa, isHearTheDifference, tag, words } = props;

  let description = "";
  let result;
  let resultBG = false;
  let title;

  if (allCorrect) {
    result = <h3 className="text-center">Yes ✓</h3>;
    resultBG = true;
  }

  const wordTiles = words.map((word: string, index: number) => (
    <Tile
      word={word}
      key={index}
      index={index}
      isCorrect={isCorrect[index]}
      handleClick={handleClick}
    />
  ));

  if (isHearTheDifference) {
    title = (
      <h3>
        {`Odd One Out - select words that DON'T have an `}
        <SplitHilite str={ipa} />
        {`sound`}
      </h3>
    );
    description = `Find the Odd One Out. Say the words and select those without the ${tag} vowel sound. Once you get a word, it is replaced with a more challenging word. Can you find all the odd words before your time runs out? You can click on words to hear the pronunciation. Odd One Out helps you recognise and pronounce the vowel sounds of common English words.`;
  } else {
    title = (
      <h3>
        {`Select the words with an `}
        <SplitHilite str={ipa} />
        {`sound`}
      </h3>
    );
    description = `Find the correct sound. Say the words and select those with the ${tag} vowel sound. Once you get a word, it is replaced with a more challenging word. Can you find all the words before your time runs out? You can click on words to hear the pronunciation. Find the words helps you recognise and pronounce the vowel sounds of common English words.`;
  }

  const display = (
    <Container className={resultBG ? "correct" : "incorrect"}>
      {wordTiles}
      <div className="clear-float" />
      {result}
    </Container>
  );

  return (
    <Container>
      {title}
      <p>{description}</p>
      <MemberGate content={display} isUserAuth={props.isUserAuth} />
    </Container>
  );
};
