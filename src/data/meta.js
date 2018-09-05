const URL = 'https://pronounceweb.com'

// title 65-75
//  title: `##########**********##########**********##########**********@@@@@----------
// description 150 - 170
//  description: `##########**********##########**********##########++++`
const meta = {
  'default': {
    title: `PronounceWeb - English pronunciation`,
    description: `Pronunciation lessons and practice`,
    imageFB: `${URL}/assets/images/pronunciation-fb.jpg`,
    imageTW: `${URL}/assets/images/pronunciation-twitter.jpg`
  },
  'landing': {
    title: `English Pronunciation Practice to Improve Your Spoken English`,
    description: `English pronunciation practice and lessons with Nicky Brookes, English language consultant. Videos helping you improve your spoken English, English pronunciation exercises, and English pronunciation activities.`,
    canonical: URL
  },
  'home': {
    title: 'English pronunciation activites home, select your sounds to practice',
    canonical: `${URL}/home`
  },
  '404': {
    title: 'Oops, page not found - 404 error'
  },
  'sounds': {
    title: `English sounds pronunciation practice. Phoenetic list of practice sounds.`,
    canonical: `${URL}/sounds`
  },
  'sound short-a none': {
    title: 'How to pronounce short ‘a’ in English. Lessons and interactive activities.',
    canonical: `${URL}/sound/short-a`
  },
  'sound short-a how to pronounce': {
    title: 'How to pronounce æ, the short ‘a’ in English. Description and images.',
    canonical: `${URL}/sound/short-a/how-to-pronounce`
  },
  'sound short-a movie': {
    title: 'Movie demonstrating the correct pronunciation of short ‘a’ - the æ sound.',
    canonical: `${URL}/sound/short-a/movie`
  },
  'sound short-a words': {
    title: 'Common English words using æ, the short ‘a’ sound, with phoenetic spelling',
    canonical: `${URL}/sound/short-a/words`
  },
  'sound short-a phrases': {
    title: 'English language phrases using the short ‘a’, or phoenetic æ sound',
    canonical: `${URL}/sound/short-a/phrases`
  },
  'sound short-a dialogues': {
    title: 'Example English dialogues showing use of the short ‘a’, or æ, sound',
    canonical: `${URL}/sound/short-a/dialogues`
  },
  'sound short-a common words': {
    title: 'A list of common English words using the short ‘a’ sound, the IPA æ sound',
    canonical: `${URL}/sound/short-a/common-words`
  },
  'sound short-a tongue twisters': {
    title: 'English language tongue twisters featuring short ‘a’, or æ sounds',
    description: 'Enjoy the challenge of Tongue Twisters. Three tongue twisters to perfect the short ‘a’ sound. Try to say each one as many times as you can, no mistakes.',
    canonical: `${URL}/sound/short-a/tongue-twisters`
  },
  'sound short-a minimal pairs': {
    title: 'English language minimal pairs pronunciation practice with short ‘a’, or æ sounds',
    canonical: `${URL}/sound/short-a/minimal-pairs`
  },
  'sound short-a find the words': {
    title: 'English pronunciation activty for the short ‘a’ sound. Find The Words with æ',
    canonical: `${URL}/sound/short-a/find-the-words`
  },
  'sound short-a say the sentences': {
    title: 'Say The Sentences with short ‘a’ English pronunciation. Practice the æ sound.',
    canonical: `${URL}/sound/short-a/say-the-sentences`
  },
  'sound short-a odd one out': {
    title: "Odd One Out English pronunciation practice. Which words don't have a short ‘a’?",
    canonical: `${URL}/sound/short-a/odd-one-out`
  },
  'sound short-a beginner news stories': {
    title: 'Beginner Identify the News Story sounds,  practice long and short ‘a’ sounds',
    canonical: `${URL}/sound/short-a/beginner-news-stories`
  },
  'sound short-a intermediate news stories': {
    title: 'Intermediate Identify the News Story sounds,  practice long and short ‘a’ sounds',
    canonical: `${URL}/sound/short-a/intermediate-news-stories`
  },
  'sound short-a words maze': {
    title: 'Solve the Words Maze puzzle - short ‘a’. Short practice English pronunciation with short ‘a’',
    canonical: `${URL}/sound/short-a/words-maze`
  },

  'sound long-e none': {
    title: 'How to pronounce long ‘e’ in English. Lessons and interactive activities.',
    canonical: `${URL}/sound/long-e`
  },
  'sound long-e how to pronounce': {
    title: 'How to pronounce /i!/, the long ‘e’ in English. Description and images.',
    canonical: `${URL}/sound/long-e/how-to-pronounce`
  },
  'sound long-e movie': {
    title: 'Movie demonstrating the correct pronunciation of long ‘e’ - the /i!/ sound.',
    canonical: `${URL}/sound/long-e/movie`
  },
  'sound long-e words': {
    title: 'Common English words using /i!/, the long ‘e’ sound, with phoenetic spelling',
    canonical: `${URL}/sound/long-e/words`
  },
  'sound long-e phrases': {
    title: 'English language phrases using the long ‘e’, or phoenetic /i!/ sound',
    canonical: `${URL}/sound/long-e/phrases`
  },
  'sound long-e dialogues': {
    title: 'Example English dialogues showing use of the long ‘e’ - the IPA /i!/ sound',
    canonical: `${URL}/sound/long-e/dialogues`
  },
  'sound long-e common words': {
    title: 'A list of common English words using the long ‘e’ sound - IPA /i!/ sound',
    canonical: `${URL}/sound/long-e/common-words`
  },
  'sound long-e tongue twisters': {
    title: 'English language tongue twisters featuring long ‘e’, or /i!/ sound',
    canonical: `${URL}/sound/long-e/tongue-twisters`
  },
  'sound long-e minimal pairs': {
    title: 'English language minimal pairs pronunciation practice with long ‘e’, or /i!/ sound',
    canonical: `${URL}/sound/long-e/minimal-pairs`
  },
  'sound long-e four in a row': {
    title: 'Practice English pronuncition with long ‘e’ Four in a Row activity, or /i!/ sound',
    canonical: `${URL}/sound/long-e/four-in-a-row`
  },
  'sound long-e beginner news stories': {
    title: 'Beginner Identify the News Story sounds, practice long and short e sounds',
    canonical: `${URL}/sound/long-e/beginner-news-stories`
  },
  'sound long-e intermediate news stories': {
    title: 'Intermediate Identify the News Story sounds, practice long and short e sounds',
    canonical: `${URL}/sound/long-e/intermediate-news-stories`
  },
  'sound long-e words maze': {
    title: 'Solve the Words Maze puzzle - long ‘e’. English pronunciation practice with long ‘e’ sound',
    canonical: `${URL}/sound/long-e/words-maze`
  },

  'sound short-i none': {
    title: 'How to pronounce short ‘i’ in English. Lessons and interactive activities.',
    canonical: `${URL}/sound/short-i`
  },
  'sound short-i how to pronounce': {
    title: 'How to pronounce /i/, the short ‘i’ sound in English. Description and images.',
    canonical: `${URL}/sound/short-i/how-to-pronounce`
  },
  'sound short-i movie': {
    title: 'Movie demonstrating the correct pronunciation of short ‘i’  - the /i/ sound.',
    canonical: `${URL}/sound/short-i/movie`
  },
  'sound short-i words': {
    title: 'Common English words using /i/, the short ‘i’  sound, with phoenetic spelling',
    canonical: `${URL}/sound/short-i/words`
  },
  'sound short-i phrases': {
    title: 'English language phrases using the short ‘i’ , or phoenetic /i/ sound',
    canonical: `${URL}/sound/short-i/phrases`
  },
  'sound short-i dialogues': {
    title: 'Example English dialogues showing use of the short ‘i’ , or /i/, sound',
    canonical: `${URL}/sound/short-i/dialogues`
  },
  'sound short-i common words': {
    title: 'A list of common English words using the short ‘i’  sound, the IPA /i/ sound',
    canonical: `${URL}/sound/short-i/common-words`
  },
  'sound short-i tongue twisters': {
    title: 'English language tongue twisters featuring short ‘i’ , or /i/ sounds',
    canonical: `${URL}/sound/short-i/tongue-twisters`
  },
  'sound short-i minimal pairs': {
    title: 'English language minimal pairs pronunciation practice with short ‘i’ , or /i/ sounds',
    canonical: `${URL}/sound/short-i/minimal-pairs`
  },
  'sound short-i beginner news stories': {
    title: 'Beginner Identify the News Story sounds,  practice recognising the short ‘i’  sound.',
    canonical: `${URL}/sound/short-i/beginner-news-stories`
  },
  'sound short-i intermediate news stories': {
    title: 'Intermediate Identify the News Story sounds,  practice recognising the short ‘i’  sound.',
    canonical: `${URL}/sound/short-i/intermediate-news-stories`
  },
  'sound short-i words maze': {
    title: 'Solve the Words Maze puzzle - short ‘i’ . Practice short ‘i’  English pronunciation game.',
    canonical: `${URL}/sound/short-i/words-maze`
  }
}

export default meta
