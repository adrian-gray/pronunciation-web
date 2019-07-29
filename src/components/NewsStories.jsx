import React, { Component } from "react";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { withTheme } from "@material-ui/styles";

import SplitHilite from "./SplitHilite";
import MemberGate from "./MemberGate";
import Picker from "./Picker";

const useStyles = makeStyles(theme => ({
  headspace: theme.headspace,
  sentence: {
    padding: "0.5rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    fontSize: "1.2rem"
  },
  red: {
    color: "maroon"
  },
  green: {
    color: "green"
  }
}));

const countSelectors = arr => {
  let count = 0;
  arr.forEach(sentence => {
    const num = (sentence.match(/OPTION/g) || []).length;
    count += num;
  });
  return count;
};

function NewsStories(props) {
  const classes = useStyles(props);

  let sentences = [];
  const selectedOption = [];
  let selectedBgColour = [];

  addNewSentences(props.sentences);

  function parseSentences(sentences, selectedOption, selectedBgColour) {
    let id = 0;
    let selectorId = 0;

    const parsedSentences = sentences.map((sentence, index) => {
      const fragments = [];
      let key = 0;
      do {
        const idx = sentence.indexOf("OPTION");
        if (idx === -1) {
          fragments.push(sentence);
          break;
        } else if (idx === 0) {
          fragments.push(
            <Picker
              options={props.options}
              selected={selectedOption[selectorId]}
              colour={selectedBgColour[selectorId]}
              handleClick={handleClick}
              key={key}
              index={id}
            />
          );
          id++;
          selectorId++;
          sentence = sentence.substr(6, sentence.length);
        } else {
          const substr = sentence.slice(0, idx);
          fragments.push(<SplitHilite str={substr} key={key} />);
          sentence = sentence.slice(substr.length);
        }
        key++;
      } while (sentence.length);

      return (
        <Typography key={index} className={classes.sentence}>
          {fragments}
        </Typography>
      );
    });

    return parsedSentences;
  }

  function addNewSentences(newSentences) {
    const numSelectors = countSelectors(newSentences);
    const selectedOption = Array(numSelectors).fill(0);
    selectedBgColour = Array(numSelectors).fill(undefined);
    sentences = parseSentences(newSentences, selectedOption, selectedBgColour);
  }

  function updateSentences(params) {
    const newSentences = params.sentences;
    const selectedOption = params.selectedOption || selectedOption;
    selectedBgColour = params.selectedBgColour || selectedBgColour;

    sentences = parseSentences(newSentences, selectedOption, selectedBgColour);
  }

  function checkForCorrect(values) {
    return values.map((value, index) => {
      return props.options[value] === props.answers[index];
    });
  }

  function handleClick(index) {
    if (!props.userAuth) return;
    const newStateSelectedOption = selectedOption.slice();
    newStateSelectedOption[index] =
      (selectedOption[index] + 1) % props.options.length;
    if (newStateSelectedOption.every(val => val > 0)) {
      checkForCorrect(newStateSelectedOption).map((value, index) => {
        switch (value) {
          case true:
            selectedBgColour[index] = classes.green;
            break;
          case false:
            selectedBgColour[index] = classes.red;
            break;
          default:
            selectedBgColour[index] = undefined;
        }
      });
    }
    tsetState({
      selectedOption: newStateSelectedOption,
      selectedBgColour
    });
    updateSentences({
      sentences: props.sentences,
      selectedOption: newStateSelectedOption,
      selectedBgColour
    });
  }

  const { headline, title } = props;
  const content = <Paper>{sentences}</Paper>;
  const description = `Extra! Extra! Read all about it! News Stories is a collection of interesting and feel-good stories from around the world.  Each story is written in two levels – beginners and intermediate. All you need to do is identify the highlighted sounds and choose the correct phoneme that represents that sound. News Stories helps you to identify individual sounds in long and more difficult written text. This improves your pronunciation of the words you read and your reading fluency.`;

  return (
    <div className={classes.headspace}>
      <Typography variant="h5" gutterBottom>
        {"News Stories"}
      </Typography>
      <Typography variant="body2" gutterBottom>
        {description}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {headline}
      </Typography>
      <Typography variant="h6" gutterBottom>
        <SplitHilite str={title} />
      </Typography>
      <MemberGate content={content} userAuth={props.userAuth} />
    </div>
  );
}

export default withTheme(NewsStories);
