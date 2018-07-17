import React from 'react'
import data from './data'

import { splitHilite } from './Utils'

import CommonWords from './components/CommonWords'
import Description from './components/Description'
import Dialogues from './components/Dialogues'
import FindTheWords from './components/FindTheWords'
import HearTheWords from './components/HearTheWords'
import IdentifySounds from './components/IdentifySounds'
import OddOneOut from './components/OddOneOut'
import Phrases from './components/Phrases'
import SaySentences from './components/SaySentences'
import SoundTitle from './components/SoundTitle'
import TongueTwisters from './components/TongueTwisters'
import Words from './components/Words'
import WordsMaze from './components/WordsMaze'

export default function Landing () {
  return (
    <div className='container'>
      <SoundTitle phoneme={data.phoneme} str={data.title} />
      <hr />

      <div className='container'>
        <div className='row'>
          <div className='col-sm'>
            <div className='container img-container'>
              <img className='responsive-img' src='/public/images/animation.png' />
            </div>
          </div>
          <div className='col-sm'>
            <Description phoneme={data.phoneme} arr={data.text} />
          </div>
        </div>
      </div>
      <hr />

      <div className='container img-container'>
        <img className='responsive-img' src='/public/images/video1.png' />
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-sm'>
            <Words words={data.words} />
          </div>
          <div className='col-sm'>
            <Phrases words={data.phrases} />
          </div>
        </div>
      </div>
      <hr />

      <Dialogues dialogues={data.dialogues} />
      <hr />

      <div className='container img-container'>
        <img className='responsive-img' src='/public/images/dialogues.png' />
      </div>
      <hr />

      <h3>{'Common Words'}</h3>

      <CommonWords words={data.commonWords} />

      <h3>Tongue twisters</h3>
      <TongueTwisters />
      <hr />

      <h2>Members section interactives</h2>
      <br />

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

      <hr />

      <h3>Words Maze</h3>
      <p>{splitHilite('From the yellow square pick an adjacent square with a short ~/æ/~ sound. Keep going until you reach the blue square.')}</p>
      <WordsMaze words={data.wordsMaze.words} correct={data.wordsMaze.correct} />

      <hr />
    </div>
  )
}
