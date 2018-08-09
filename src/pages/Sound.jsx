import React from 'react'

import {
  Divider,
  Paper,
  Typography,
  withStyles
} from '@material-ui/core'

import jsonData from './../data/sounds'
import ActivityButton from './../components/ActivityButton'
import CommonWords from './../components/CommonWords'
import Dialogues from './../components/Dialogues'
import FindTheWords from './../components/FindTheWords'
import HowToPronounce from './../components/HowToPronounce'
import IdentifyTheSounds from './../components/IdentifyTheSounds'
import Movie from './../components/Movie'
import Phrases from './../components/Phrases'
import SayTheSentences from './../components/SayTheSentences'
import SEO from './../components/SEO'
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
                   props.match.params.activity.replace(/-/g, ' ')
  const data = jsonData['phonemes'][phoneme]

  const activities = {
    'how to pronounce': (
      <HowToPronounce
        ipa={data.ipa}
        arr={data['how to pronounce'].text}
        url={data['how to pronounce'].url}
      />
    ),
    'movie': <Movie ipa={data.ipa} url={data.movie.url} />,
    'words': <Words ipa={data.ipa} words={data.words} />,
    'phrases': <Phrases phrases={data.phrases} ipa={data.ipa} />,
    'dialogues': <Dialogues ipa={data.ipa} dialogues={data.dialogues} />,
    'common words': (
      <CommonWords
        ipa={data.ipa}
        words={data['common words']}
      />
    ),
    'tongue twisters': (
      <TongueTwisters
        ipa={data.ipa}
        tongueTwisters={data['tongue twisters']}
      />
    ),
    'find the words': (
      <FindTheWords
        ipa={data.ipa}
        titleStart='Select the words with an '
        titleEnd='sound'
        words={data['find the words'].words}
        correct={data['find the words'].correct}
      />
    ),
    'say the sentences': (
      <SayTheSentences
        ipa={data.ipa}
        sentences={data['say the sentences']}
      />
    ),
    'odd one out': (
      <FindTheWords
        ipa={data.ipa}
        titleStart="Select the words that don't have the "
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
      <SEO meta={`sound ${data.ipa} ${activity || 'none'}`} />
      <SoundTitle phoneme={data.ipa} str={data.title} />
      <Divider />

      <Typography variant='headline' gutterBottom>
        {`Pronunciation activities for ${data.tag}`}
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
