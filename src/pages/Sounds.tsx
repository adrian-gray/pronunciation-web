import React from "react";

import Container from "react-bootstrap/Container";

import data from "./../data/sounds.json";
import SEO from "../components/SEO";
import Phoneme from "../components/Phoneme";

export default props => {
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
    <Container>
      <SEO meta="sounds" />
      <h4>{"English Pronunciation Sounds"}</h4>
      {cards}
    </Container>
  );
};
