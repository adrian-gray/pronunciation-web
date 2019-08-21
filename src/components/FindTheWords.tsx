import React, { useState } from "react";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { withTheme } from "@material-ui/styles";

import MemberGate from "./MemberGate";
import SplitHilite from "./SplitHilite";
import Tile from "./Tile";

const useStyles = makeStyles(theme => ({
  headspace: theme.headspace,
  clearFloat: theme.clearFloat,
  center: theme.center,
  correctBG: theme.correctBG,
  incorrectBG: theme.incorrectBG
}));

const FindTheWords = props => {
  const classes = useStyles(props);
  const [isCorrect, setIsCorrect] = useState(
    Array(props.words.length).fill(undefined)
  );
  const [allCorrect, setAllCorrect] = useState(false);

  function checkAllCorrect(correct) {
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

  const handleClick = index => {
    const isWordCorrect = props.correct.includes(props.words[index]);
    const newStateIsCorrect = isCorrect.slice();

    newStateIsCorrect[index] = isWordCorrect;
    setAllCorrect(checkAllCorrect(newStateIsCorrect));
    setIsCorrect(newStateIsCorrect);
  };

  const { ipa, isHearTheDifference, tag, words } = props;

  let description = "";
  let result = "";
  let resultBG = "";
  let title = "";

  if (allCorrect) {
    result = (
      <Typography className={classes.center} variant="display3" gutterBottom>
        {"Yes ✓"}
      </Typography>
    );
    resultBG = classes.correctBG;
  }

  const wordTiles = words.map((word, index) => (
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
      <Typography variant="h5" gutterBottom>
        {`Odd One Out - select words that DON'T have an `}
        <SplitHilite str={ipa} />
        {`sound`}
      </Typography>
    );
    description = `Find the Odd One Out. Say the words and select those without the ${tag} vowel sound. Once you get a word, it is replaced with a more challenging word. Can you find all the odd words before your time runs out? You can click on words to hear the pronunciation. Odd One Out helps you recognise and pronounce the vowel sounds of common English words.`;
  } else {
    title = (
      <Typography variant="h5" gutterBottom>
        {`Select the words with an `}
        <SplitHilite str={ipa} />
        {`sound`}
      </Typography>
    );
    description = `Find the correct sound. Say the words and select those with the ${tag} vowel sound. Once you get a word, it is replaced with a more challenging word. Can you find all the words before your time runs out? You can click on words to hear the pronunciation. Find the words helps you recognise and pronounce the vowel sounds of common English words.`;
  }

  const display = (
    <Paper className={resultBG}>
      {wordTiles}
      <div className={classes.clearFloat} />
      {result}
    </Paper>
  );

  return (
    <div className={classes.headspace}>
      {title}
      <Typography gutterBottom>{description}</Typography>
      <MemberGate content={display} userAuth={props.userAuth} />
    </div>
  );
};

export default withTheme(FindTheWords);
