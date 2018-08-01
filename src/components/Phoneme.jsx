import React from 'react'
import SplitHilite from './SplitHilite'

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
  const { classes, title, tag, words, link } = props
  const wordList = words.map(word => <SplitHilite str={word} key={word} />)

  return (
    <Paper className={classes.root}>
      <a href={link} className={classes.links}>
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
      </a>
    </Paper>
  )
}

export default withStyles(styles)(Phoneme)
