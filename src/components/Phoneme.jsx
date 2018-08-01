import React from 'react'
import { Link } from 'react-router-dom'
import SplitHilite from './SplitHilite'
import data from './../data/data'

import {
  Paper,
  Typography,
  withStyles
} from '@material-ui/core'

const styles = (theme) => ({
  root: {
    margin: 20,
    padding: 20,
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    }
  },
  words: {
    fontSize: '1.1em',
    wordSpacing: '1.1em'
  },
  links: {
    textDecoration: 'none'
  }
})

const Phoneme = (props) => {
  const { phoneme, classes, title, tag, words } = props
  const wordList = words.map(word => <SplitHilite str={word} key={word} />)

  console.log('#### data.phomenes[phoneme]', data.phonemes[phoneme])
  return (
    <Paper className={classes.root}>
      <Link to={{pathname: `/sounds/${title}`, state: { phoneme, data: data.phonemes[phoneme] }}} className={classes.links}>
        <div>
          <Typography variant='headline' gutterBottom>
            {`Sound ${title} – ${tag}`}
          </Typography>
          <Typography className={classes.words} variant='body2' gutterBottom >
            {wordList}
          </Typography>
          <Typography variant='body1' gutterBottom>
            {`Click to learn more about the ${title} sound`}
          </Typography>
        </div>
      </Link>
    </Paper>
  )
}

export default withStyles(styles)(Phoneme)
