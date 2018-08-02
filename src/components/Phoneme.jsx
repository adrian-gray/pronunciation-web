import React from 'react'
import { Link } from 'react-router-dom'
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
  const { classes, phoneme, ipa, tag, title, words } = props
  const displayTitle = <span><SplitHilite str={ipa} /> – <SplitHilite str={title} /></span>
  const wordList = words.map(word => <SplitHilite str={word} key={word} />)

  return (
    <Paper className={classes.root}>
      <Link to={{pathname: `/sounds/${phoneme}`}} className={classes.links}>
        <div>
          <Typography variant='headline' gutterBottom>
            {displayTitle}
          </Typography>
          <Typography className={classes.words} variant='body2' gutterBottom >
            {wordList}
          </Typography>
          <Typography variant='body1' gutterBottom>
            {`Click to learn more about the ${tag} sound`}
          </Typography>
        </div>
      </Link>
    </Paper>
  )
}

export default withStyles(styles)(Phoneme)
