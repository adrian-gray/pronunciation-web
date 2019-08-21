import React from "react";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { withTheme } from "@material-ui/styles";

import data from "./../data/sounds";
import SEO from "./../components/SEO";
import Phoneme from "./../components/Phoneme";

const useStyles = makeStyles(theme => ({
  page: theme.page
}));

const Sounds = props => {
  const classes = useStyles(props);

  const phonemes = data.phonemes;
  const list = Object.keys(phonemes);
  const cards = list.map(phoneme => {
    const ipa = phonemes[phoneme]["ipa"];
    const title = phonemes[phoneme]["title"];
    const tag = phonemes[phoneme]["tag"];
    const words = phonemes[phoneme]["activities"]["common words"].words;
    return (
      <Phoneme
        key={phoneme}
        phoneme={phoneme}
        ipa={ipa}
        title={title}
        tag={tag}
        words={words}
      />
    );
  });

  return (
    <Paper className={classes.page}>
      <SEO meta="sounds" />
      <Typography variant="h4" gutterBottom>
        {"Phoenetic English Pronunciation"}
      </Typography>
      {cards}
    </Paper>
  );
};

export default withTheme(Sounds);
