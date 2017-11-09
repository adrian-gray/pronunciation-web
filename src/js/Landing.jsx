import React from 'react'
import data from './../data'

// import { splitHilite } from './Utils'

// import CommonWords from './components/CommonWords'
// import Description from './components/Description'
// import Dialogues from './components/Dialogues'
// import FindTheWords from './components/FindTheWords'
// import HearTheWords from './components/HearTheWords'
// import IdentifySounds from './components/IdentifySounds'
// import OddOneOut from './components/OddOneOut'
// import Phrases from './components/Phrases'
// import SaySentences from './components/SaySentences'
// import SoundTitle from './components/SoundTitle'
// import TongueTwisters from './components/TongueTwisters'
// import Words from './components/Words'
import WordsMaze from './components/WordsMaze'

export default function Landing () {
  return (
    <div className='container'>
      {/*

      <SoundTitle phoneme={data.phoneme} str={data.title} />
      <hr />

      <img src='/images/animation.png' />

      <Description phoneme={data.phoneme} arr={data.text} />
      <hr />

      <img src='/images/video1.png' />

      <Words words={data.words} />
      <hr />

      <Phrases words={data.phrases} />

      <hr />

      <Dialogues dialogues={data.dialogues} />

      <img src='/images/dialogues.png' />
      <hr />

      <h3>{'Common Words'}</h3>

      <CommonWords words={data.commonWords} />

      <hr />
      <h2>Member section</h2>
      <br />

      <h3>Tongue twisters</h3>
      <TongueTwisters />
      <hr />

      <h3>Find the words</h3>
      <h4>Click (✓) the words with the ‘short a’ <span className='em'>/æ/</span> sound</h4>
      <FindTheWords words={data.findTheWords} />
      <hr />

      <h3>Hear the words</h3>
      <h4>Underline the ‘short a’ /æ/ sound you hear</h4>
      <HearTheWords words={data.hearTheWords} />

      <hr />

      <h3><em>Say</em> the sentences below</h3>
      <SaySentences sentences={data.saySentences} />

      <hr />

      <h3>The odd one out</h3>
      <h4>Circle the words that don’t have the ‘short a’ /æ/ sound</h4>
      <OddOneOut words={data.oddOneOut} />

      <hr />

      <h3>Identify the sounds</h3>
      <h5>{splitHilite('Select the correct sound: ~/æ/~ (the short ‘a’ sound) or ~/eɪ/~ (the long ‘a’ sound)')}</h5>
      <h5>Snake Eats Tongs</h5>
      <IdentifySounds sentences={data.identifySounds} />

      <hr /> */}

      <h3>Words Maze</h3>
      <WordsMaze words={data.wordsMaze.words} correct={data.wordsMaze.correct} />
    </div>
  )
}
