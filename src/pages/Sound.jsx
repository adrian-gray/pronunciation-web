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
import NewsStories from './../components/NewsStories'
import MinimalPairs from './../components/MinimalPairs'
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

  if (!data) {
    return (
      <Paper className={classes.page}>
        <Typography variant='headline' gutterBottom>
          {'Oops, not a valid sound'}
        </Typography>
      </Paper>
    )
  }

  const activities = {
    'how to pronounce': (
      <HowToPronounce
        ipa={data.ipa}
        arr={data['how to pronounce'].text}
        image={data['how to pronounce'].image}
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
    'minimal pairs': (
      <MinimalPairs
        ipa={data.ipa}
        tag={data.tag}
        pairs={data['minimal pairs']}
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
    'news stories': (
      <NewsStories
        title={data['news stories'].title}
        headline={data['news stories'].headline}
        options={data['news stories'].options}
        sentences={data['news stories'].sentences}
        answers={data['news stories'].answers}
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

  const SEOlocation = `sound ${phoneme} ${activity || 'none'}`

  return (
    <Paper className={classes.page}>
      <SEO meta={SEOlocation} />
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
