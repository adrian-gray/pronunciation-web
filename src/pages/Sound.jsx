import React from 'react'

import {
  Divider,
  Paper,
  Typography,
  withStyles
} from '@material-ui/core'

import jsonData from './../data/data'
import ActivityButton from './../components/ActivityButton'
import CommonWords from './../components/CommonWords'
import HowToPronounce from './../components/HowToPronounce'
import Dialogues from './../components/Dialogues'
import FindTheWords from './../components/FindTheWords'
// import HearTheWords from './../components/HearTheWords'
// import IdentifySounds from './../components/IdentifySounds'
import Movie from './../components/Movie'
// import OddOneOut from './../components/OddOneOut'
import Phrases from './../components/Phrases'
// import SaySentences from './../components/SaySentences'
// import SplitHilite from './../components/SplitHilite'
import SoundTitle from './../components/SoundTitle'
import TongueTwisters from './../components/TongueTwisters'
import Words from './../components/Words'
// import WordsMaze from './../components/WordsMaze'
const styles = (theme) => ({
  page: theme.page
})

const Sound = (props) => {
  const { classes } = props
  const phoneme = props.match.params.phoneme
  const activity = props.match.params.activity &&
                   props.match.params.activity.replace(/_/g, ' ')
  const data = jsonData['phonemes'][phoneme]

  const activities = {
    'how to pronounce': (
      <HowToPronounce
        phoneme={phoneme}
        arr={data['how to pronounce'].text}
        url={data['how to pronounce'].url}
      />
    ),
    'movie': <Movie tag={data.tag} url={data.movie.url} />,
    'words': <Words words={data.words} tag={data.tag} />,
    'phrases': <Phrases phrases={data.phrases} tag={data.tag} />,
    'dialogues': <Dialogues tag={data.tag} dialogues={data.dialogues} />,
    'common words': <CommonWords tag={data.tag} words={data['common words']} />,
    'tongue twisters': (
      <TongueTwisters
        tag={data.tag}
        tongueTwisters={data['tongue twisters']}
      />
    ),
    'find the words': (
      <FindTheWords
        tag={data.tag}
        words={data['find the words'].words}
        correct={data['find the words'].correct}
      />
    )
  }

  const activityNames = Object.keys(activities)
  const activityButtons = activityNames.map(activity => (
    <ActivityButton phoneme={phoneme} activity={activity} key={activity} />
  ))

  return (
    <Paper className={classes.page}>
      <SoundTitle phoneme={phoneme} str={data.title} />
      <Divider />

      <Typography variant='headline' gutterBottom>
        {`Pronunciation activities for ${phoneme}`}
      </Typography>

      <div>
        {activityButtons}
      </div>
      <Divider />

      {activities[activity]}
    </Paper>
  )
}

//      <h3>Hear the words</h3>
//      <h4>Underline the ‘short a’ /æ/ sound you hear</h4>
//      <HearTheWords words={data.hearTheWords} />
//
//      <hr />
//
//      <h3><em>Say</em> the sentences below</h3>
//      <SaySentences sentences={data.saySentences} />
//
//      <hr />
//
//      <h3>The odd one out</h3>
//      <h4>Circle the words that don’t have the ‘short a’ /æ/ sound</h4>
//      <OddOneOut words={data.oddOneOut} />
//
//      <hr />
//
//      <h3>Identify the sounds</h3>
//      <h5><SplitHilite str='Select the correct sound: ~/æ/~ (the short ‘a’ sound) or ~/eɪ/~ (the long ‘a’ sound)' /></h5>
//      <h5>Snake Eats Tongs</h5>
//      <IdentifySounds sentences={data.identifySounds} />
//
//      <hr />
//
//      <h3>Words Maze</h3>
//      <p><SplitHilite str='From the yellow square pick an adjacent square with a short ~/æ/~ sound. Keep going until you reach the blue square.' /></p>
//      <WordsMaze words={data.wordsMaze.words} correct={data.wordsMaze.correct} />
//
//      <hr />
//    </Paper>
//  )

export default withStyles(styles)(Sound)
