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
import IdentifyTheSounds from './../components/IdentifyTheSounds'
import Movie from './../components/Movie'
import Phrases from './../components/Phrases'
import SayTheSentences from './../components/SayTheSentences'
import SoundTitle from './../components/SoundTitle'
import TongueTwisters from './../components/TongueTwisters'
import Words from './../components/Words'
import WordsMaze from './../components/WordsMaze'
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
    'common words': (
      <CommonWords
        tag={data.tag}
        words={data['common words']}
      />
    ),
    'tongue twisters': (
      <TongueTwisters
        tag={data.tag}
        tongueTwisters={data['tongue twisters']}
      />
    ),
    'find the words': (
      <FindTheWords
        tag={data.tag}
        titleState='Select the words with a'
        titleEnd='sound'
        words={data['find the words'].words}
        correct={data['find the words'].correct}
      />
    ),
    'say the sentences': (
      <SayTheSentences
        tag={data.tag}
        sentences={data['say the sentences']}
      />
    ),
    'odd one out': (
      <FindTheWords
        tag={data.tag}
        titleStart="Select the words that don't have the"
        titleEnd='sound'
        words={data['odd one out'].words}
        correct={data['odd one out'].correct}
      />
    ),
    'identify the sounds': (
      <IdentifyTheSounds
        title={data['identify the sounds'].title}
        headline={data['identify the sounds'].headline}
        options={data['identify the sounds'].options}
        sentences={data['identify the sounds'].sentences}
        answers={data['identify the sounds'].answers}
      />
    ),
    'words maze': (
      <WordsMaze
        tag={data.tag}
        words={data['words maze'].words}
        correct={data['words maze'].correct}
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

export default withStyles(styles)(Sound)
