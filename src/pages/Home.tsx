import React from "react";

import Container from "react-bootstrap/Container";

import soundsData from "./../data/sounds.js";
import SEO from "../components/SEO";
import Phoneme from "../components/Phoneme";

export default () => {
  const phonemes = soundsData;
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
    <Container className="page">
      <SEO meta="sounds" />
      <h1>{"Phoenetic English Pronunciation"}</h1>
      {cards}
    </Container>
  );
};
