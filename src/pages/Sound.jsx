import React from 'react'

import {
  Divider,
  Paper,
  Typography,
  withStyles
} from '@material-ui/core'

import jsonData from './../data/data'
import ActivityButton from './../components/ActivityButton'
// import CommonWords from './../components/CommonWords'
import Description from './../components/Description'
import Dialogues from './../components/Dialogues'
// import FindTheWords from './../components/FindTheWords'
// import HearTheWords from './../components/HearTheWords'
// import IdentifySounds from './../components/IdentifySounds'
import Movie from './../components/Movie'
// import OddOneOut from './../components/OddOneOut'
// import Phrases from './../components/Phrases'
// import SaySentences from './../components/SaySentences'
// import SplitHilite from './../components/SplitHilite'
import SoundTitle from './../components/SoundTitle'
// import TongueTwisters from './../components/TongueTwisters'
import Words from './../components/Words'
// import WordsMaze from './../components/WordsMaze'

const styles = (theme) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    flexGrow: 1
  },
  chipContainer: {
    display: 'flex',
    flexWrap: 'wrap'
  }
})

const Sound = (props) => {
  const { classes } = props
  const phoneme = props.match.params.phoneme
  const activity = props.match.params.activity
  const data = jsonData['phonemes'][phoneme]

  const activities = {
    'description': <Description phoneme={phoneme} arr={data.text} />,
    'movie': <Movie tag={data.tag} url={data.movie.url} />,
    'dialogues': <Dialogues tag={data.tag} dialogues={data.dialogues} />,
    'words': <Words words={data.words} tag={data.tag} />
  }

  //  const activities = ['animation', 'how to pronounce', 'words', 'common words',
  //    'dialogues', 'find the words', 'words maze']

  const activityNames = Object.keys(activities)
  const activityButtons = activityNames.map(activity => (
    <ActivityButton phoneme={phoneme} activity={activity} key={activity} />
  ))

  return (
    <Paper className={classes.root}>
      <SoundTitle phoneme={phoneme} str={data.title} />
      <Divider />

      <Typography variant='headline' gutterBottom>
        {`Pronunciation activities for ${phoneme}`}
      </Typography>

      <div className={classes.chipContainer}>
        {activityButtons}
      </div>
      <Divider />

      {activities[activity]}
    </Paper>
  )
}

//      <Grid container spacing={24}>
//        <Grid item xs={12} sm={6}>
//          <img src='/assets/images/animation.png' width='100%' />
//        </Grid>
//        <Grid item xs={12} sm={6}>
//          <Description phoneme={phoneme} arr={data.text} />
//        </Grid>
//      </Grid>
//      <hr />
//
//      <Grid container spacing={24}>
//        <Grid item xs={12}>
//          <img src='/assets/images/video1.png' width='100%' />
//        </Grid>
//      </Grid>
//
//      <div className='container'>
//        <div className='row'>
//          <div className='col-sm'>
//            <Words words={data.words} />
//          </div>
//          <div className='col-sm'>
//            <Phrases words={data.phrases} />
//          </div>
//        </div>
//      </div>
//      <hr />
//
//      <Dialogues dialogues={data.dialogues} />
//      <hr />
//
//      <div className='container img-container'>
//        <img className='responsive-img' src='/assets/images/dialogues.png' />
//      </div>
//      <hr />
//
//      <h3>{'Common Words'}</h3>
//
//      <CommonWords words={data.commonWords} />
//
//      <h3>Tongue twisters</h3>
//      <TongueTwisters />
//      <hr />
//
//      <h2>Members section interactives</h2>
//      <br />
//
//      <h3>Find the words</h3>
//      <h4>Click (✓) the words with the ‘short a’ <span className='em'>/æ/</span> sound</h4>
//      <FindTheWords words={data.findTheWords} />
//      <hr />
//
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
