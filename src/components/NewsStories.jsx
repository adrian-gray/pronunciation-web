import React, { useState, useEffect } from "react";

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

  const handleClick = index => {
    if (!props.userAuth) return;
    const newSelectedOptions = selectedOptions.slice();
    const newSelectedBgColours = selectedBgColours.slice();
    newSelectedOptions[index] =
      (selectedOptions[index] + 1) % props.options.length;
    if (newSelectedOptions.every(val => val > 0)) {
      checkForCorrect(newSelectedOptions).forEach((value, index) => {
        switch (value) {
          case true:
            newSelectedBgColours[index] = classes.green;
            break;
          case false:
            newSelectedBgColours[index] = classes.red;
            break;
          default:
            newSelectedBgColours[index] = undefined;
        }
      });
    }

    setSelectedOptions(newSelectedOptions);
    setSelectedBgColours(newSelectedBgColours);
  };

  function parseSentences() {
    let id = 0;
    let selectorId = 0;

    const parsedSentences = props.sentences.map((displaySentence, index) => {
      const fragments = [];
      let key = 0;
      do {
        const idx = displaySentence.indexOf("OPTION");
        if (idx === -1) {
          fragments.push(displaySentence);
          break;
        } else if (idx === 0) {
          fragments.push(
            <Picker
              options={props.options}
              selected={selectedOptions[selectorId]}
              colour={selectedBgColours[selectorId]}
              handleClick={handleClick}
              key={key}
              index={id}
            />
          );
          id++;
          selectorId++;
          displaySentence = displaySentence.substr(6, displaySentence.length);
        } else {
          const substr = displaySentence.slice(0, idx);
          fragments.push(<SplitHilite str={substr} key={key} />);
          displaySentence = displaySentence.slice(substr.length);
        }
        key++;
      } while (displaySentence.length);

      return (
        <Typography key={index} className={classes.sentence}>
          {fragments}
        </Typography>
      );
    });

    return parsedSentences;
  }

  function checkForCorrect(values) {
    return values.map((value, index) => {
      return props.options[value] === props.answers[index];
    });
  }

  const numSelectors = countSelectors(props.sentences);
  const [selectedOptions, setSelectedOptions] = useState(
    Array(numSelectors).fill(0)
  );
  const [selectedBgColours, setSelectedBgColours] = useState(
    Array(numSelectors).fill(undefined)
  );
  const [sentences, setSentences] = useState(parseSentences());

  useEffect(() => setSentences(parseSentences()));

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
