import React from 'react'
import data from './../data'

import SoundTitle from './components/SoundTitle'
import Description from './components/Description'
import Words from './components/Words'

export default function Landing () {
  return (
    <div className='container'>

      <SoundTitle phoneme={data.phoneme} str={data.title} />

      <p>pronouncing /æ/ animation</p>

      <Description phoneme={data.phoneme} arr={data.pronounce.text} />

      <h3>How to pronounce /æ/</h3>
      <p>movie</p>

      <Words words={data.pronounce.words} />

      <table className='table table-sm'>
        <thead>
          <tr>
            <th colSpan='2'>Phrases</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>I’m not b<span className='em'>a</span>d.</td>
            <td>/b<span className='em'>æ</span>d/</td>
          </tr>
          <tr>
            <td>I didn’t c<span className='em'>a</span>tch that.</td>
            <td>/k<span className='em'>æ</span>tʃ/</td>
          </tr>
          <tr>
            <td>I’m good, th<span className='em'>a</span>nks.</td>
            <td>/θ<span className='em'>æ</span>ŋk/</td>
          </tr>
          <tr>
            <td>I’m h<span className='em'>a</span>nging in there.</td>
            <td>/h<span className='em'>æ</span>ŋɪŋ/</td>
          </tr>
        </tbody>
      </table>

      <h3>phrases with /æ/ video</h3>
      <p>video</p>

      <h3>Short Dialogues</h3>
      <p>‘Hi, I’m James. What’s your name?’<br />
        ‘Hi, James, I’m <span className='em'>A</span>nne.’<br />
        ‘Sorry, I didn’t c<span className='em'>a</span>tch that.’<br />
        ‘<span className='em'>A</span>nne.’<br />
        ‘Oh, <span className='em'>A</span>nne. Pleased to meet you. <span className='em'>A</span>nne.’<br />
        ‘Pleased to meet you too.’</p>

      <p>‘Hi. How are you?’<br />
        ‘Good, th<span className='em'>a</span>nks. And you?’<br />
        ‘Fine, th<span className='em'>a</span>nks.’</p>

      <p>‘Hi. How are you going?’<br />
        ‘Not b<span className='em'>a</span>d, th<span className='em'>a</span>nks. How about you?’<br />
        ‘I’m good.’</p>

      <p>Hi. How’s it going?’<br />
        ‘Great. And you?’<br />
        ‘I’m h<span className='em'>a</span>nging in there.’</p>

      <h3>dialogues with /æ/ video</h3>
      <p>video</p>

      <table className='table table-sm'>
        <thead>
          <tr>
            <th colSpan='2'>Common Words</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>c<span className='em'>a</span>sh</td>
            <td>tr<span className='em'>a</span>sh</td>
            <td>tr<span className='em'>a</span>nsfer</td>
          </tr>
          <tr>
            <td>st<span className='em'>a</span>nd</td>
            <td>ch<span className='em'>a</span>t</td>
            <td>tr<span className='em'>a</span>ffic</td>
          </tr>
          <tr>
            <td>b<span className='em'>a</span>nk</td>
            <td>st<span className='em'>a</span>mp</td>
            <td>m<span className='em'>a</span>tter</td>
          </tr>
          <tr>
            <td>cr<span className='em'>a</span>sh</td>
            <td>t<span className='em'>a</span>x</td>
            <td>t<span className='em'>a</span>blet</td>
          </tr>
          <tr>
            <td>c<span className='em'>a</span>b</td>
            <td>sn<span className='em'>a</span>p</td>
            <td>tr<span className='em'>a</span>nsport</td>
          </tr>
          <tr>
            <td>pr<span className='em'>a</span>ctice</td>
            <td>l<span className='em'>a</span>nguage</td>
            <td>S<span className='em'>a</span>turday</td>
          </tr>
          <tr>
            <td>ch<span className='em'>a</span>llenge</td>
            <td>c<span className='em'>a</span>mera</td>
            <td>m<span className='em'>a</span>nager</td>
          </tr>
          <tr>
            <td>s<span className='em'>a</span>lad</td>
            <td>p<span className='em'>a</span>ckage</td>
            <td>c<span className='em'>a</span>ncel</td>
          </tr>
        </tbody>
      </table>

      <hr />
      <h2>Member section</h2>

      <h3>Tongue twisters</h3>
      <ul>
        <li>The black bat had a bad back.</li>
        <li>I’m chatting with the man at Chatime, Chatswood.</li>
        <li>Canyoucanacanasa canner can can a can?</li>
      </ul>

      <h3>Find the words</h3>
      <h4>Click (✓) the words with the ‘short a’ <span className='em'>/æ/</span> sound</h4>
      <div className='container'>
        <div className='row'>
          <div className='col'>cap</div>
          <div className='col'>hat</div>
          <div className='col'>bug</div>
          <div className='col'>cup</div>
          <div className='col'>sad</div>
          <div className='col'>hut</div>
          <div className='col'>bag</div>
          <div className='col'>hate</div>
          <div className='col'>said</div>
          <div className='col'>hot</div>
        </div>
      </div>

      <h3>Hear the words</h3>
      <h4>Underline the ‘short a’ /æ/ sound you hear</h4>
      <div className='container'>
        <div className='row'>
          <div className='col'>matter</div>
          <div className='col'>mutter</div>
          <div className='col'>pain</div>
          <div className='col'>pan</div>
          <div className='col'>paint</div>
          <div className='col'>type</div>
          <div className='col'>tap</div>
          <div className='col'>top</div>
          <div className='col'>ankle</div>
          <div className='col'>uncle</div>
        </div>
      </div>

      <h3><em>Say</em> the sentences below</h3>
      <ol>
        <li>My uncle had a bad ankle.</li>
        <li>Whatever you mutter doesn’t matter.</li>
        <li>Just tap the top of the tape.</li>
      </ol>

      <h3>The odd one out</h3>
      <h4>Circle the words that don’t have the ‘short a’ /æ/ sound</h4>
      <div className='container'>
        <div className='row'>
          <div className='col'>ran</div>
          <div className='col'>answer</div>
          <div className='col'>band</div>
          <div className='col'>start</div>
          <div className='col'>att</div>
          <div className='col'>all</div>
          <div className='col'>thanks</div>
          <div className='col'>black</div>
          <div className='col'>had</div>
          <div className='col'>name</div>
        </div>
      </div>

      <h3>Identify the sounds</h3>
      <h4>Write the correct sound: /æ/ (the short ‘a’ sound) or /eɪ / (the long ‘a’ sound)</h4>
      <h5>snake eats tongs</h5>
      <p>A man <span className='em'>(........) </span>
      from Australia <span className='em'>(........) </span>
      has a snake <span className='em'>(........). </span>
      He feeds it a rat <span className='em'>(........) </span>
      . He holds the rat with tongs. The snake eats the tongs, too. This is dangerous <span className='em'>(........) </span>
      for the snake. Doctors operate on it. They take <span className='em'>(........) </span>
      out the tongs. The snake’s name <span className='em'>(........) </span>
      is Winston. After the operation <span className='em'>(........) </span>
      he gets better.</p>

      <h3>Words maze /æ/</h3>

      <div className='container'>
        <div className='row'>
          <div className='col'>happy</div>
          <div className='col'>weather</div>
          <div className='col'>doctor</div>
          <div className='col'>natural</div>
          <div className='col'>thank</div>
          <div className='col'>value</div>
        </div>
        <div className='row'>
          <div className='col'>family</div>
          <div className='col'>number</div>
          <div className='col'>jacket</div>
          <div className='col'>cancel</div>
          <div className='col'>nothing</div>
          <div className='col'>narrow</div>
        </div>
        <div className='row'>
          <div className='col'>carry</div>
          <div className='col'>scratch</div>
          <div className='col'>travel</div>
          <div className='col'>hundred</div>
          <div className='col'>seven</div>
          <div className='col'>sandwich</div>
        </div>
        <div className='row'>
          <div className='col'>ticket</div>
          <div className='col'>possible</div>
          <div className='col'>building</div>
          <div className='col'>gallery</div>
          <div className='col'>traffic</div>
          <div className='col'>happen</div>
        </div>
        <div className='row'>
          <div className='col'>empty</div>
          <div className='col'>couple</div>
          <div className='col'>wrapped</div>
          <div className='col'>fashion</div>
          <div className='col'>problem</div>
          <div className='col'>question</div>
        </div>
        <div className='row'>
          <div className='col'>bread</div>
          <div className='col'>customer</div>
          <div className='col'>matter</div>
          <div className='col'>dozen</div>
          <div className='col'>member</div>
          <div className='col'>often</div>
        </div>
        <div className='row'>
          <div className='col'>ankle</div>
          <div className='col'>transfer</div>
          <div className='col'>gather</div>
          <div className='col'>already</div>
          <div className='col'>healthy</div>
          <div className='col'>message</div>
        </div>
        <div className='row'>
          <div className='col'>swam</div>
          <div className='col'>heavy</div>
          <div className='col'>said</div>
          <div className='col'>candy</div>
          <div className='col'>snatch</div>
          <div className='col'>package</div>
        </div>
        <div className='row'>
          <div className='col'>add</div>
          <div className='col'>transport</div>
          <div className='col'>dinner</div>
          <div className='col'>salad</div>
          <div className='col'>pleasure</div>
          <div className='col'>apple</div>
        </div>
        <div className='row'>
          <div className='col'>brother</div>
          <div className='col'>rapid</div>
          <div className='col'>sorry</div>
          <div className='col'>expand</div>
          <div className='col'>finish</div>
          <div className='col'>salmon</div>
        </div>
        <div className='row'>
          <div className='col'>level</div>
          <div className='col'>national</div>
          <div className='col'>wrong</div>
          <div className='col'>catch</div>
          <div className='col'>mother</div>
          <div className='col'>ambulance</div>
        </div>
        <div className='row'>
          <div className='col'>model</div>
          <div className='col'>answer</div>
          <div className='col'>shallow</div>
          <div className='col'>salary</div>
          <div className='col'>become</div>
          <div className='col'>relax</div>
        </div>
      </div>
    </div>
  )
}
