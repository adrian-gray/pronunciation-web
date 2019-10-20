import long_a from "./long_a.js";
import long_e from "./long_e.js";
import long_u from "./long_u.js";
import short_a from "./short_a.js";
import short_i from "./short_i.js";
import short_u from "./short_u.js";

const URL = "https://pronounceweb.com";

// title 65-75
//  title: `##########**********##########**********##########**********@@@@@----------
// description 150 - 170
//  description: `##########**********##########**********##########++++`
const base = {
  default: {
    title: `PronounceWeb - English pronunciation`,
    description: `Pronunciation lessons and practice`,
    imageFB: `${URL}/assets/images/pronunciation-fb.jpg`,
    imageTW: `${URL}/assets/images/pronunciation-twitter.jpg`
  },
  landing: {
    title: `English Pronunciation Practice to Improve Your Spoken English`,
    description: `English pronunciation practice and lessons with Nicky Brookes, English language consultant. Videos helping you improve your spoken English, English pronunciation exercises, and English pronunciation activities.`,
    canonical: URL
  },
  home: {
    title:
      "English pronunciation activites home, select your sounds to practice",
    canonical: `${URL}/home`
  },
  "404": {
    title: "Oops, page not found - 404 error"
  },
  sounds: {
    title: `English sounds pronunciation practice. Phoenetic list of practice sounds.`,
    canonical: `${URL}/sounds`
  }
};

export default Object.assign(
  {},
  base,
  long_a,
  long_e,
  long_u,
  short_a,
  short_i,
  short_u
);
