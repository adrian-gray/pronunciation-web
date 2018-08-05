import React from 'react'

import {
  Paper,
  Typography,
  withStyles
} from '@material-ui/core'

const styles = (theme) => ({
  headspace: theme.headspace,
  largeText: theme.largeText,
  subCanvas: theme.subCanvas,
  left: {
    float: 'left',
    margin: '1rem',
    paddingTop: '1rem',
    paddingRight: '2rem'
  },
  clearFloat: {
    clear: 'both'
  }
})

const FindTheWords = (props) => {
  const { classes, tag, words } = props

  const wordList = words.map((word, index) => {
    return <div className={classes.left} key={index}>
      <Typography className={classes.largeText} gutterBottom>
        {word}
      </Typography>
    </div>
  })

  return (
    <div className={classes.headspace}>
      <Typography variant='title' gutterBottom>
        {`Find the words with a ${tag}`}
      </Typography>
      <Paper className={classes.subCanvas}>
        <div className='row'>
          {wordList}
        </div>
        <div className={classes.clearFloat} />
      </Paper>
    </div>
  )
}

export default withStyles(styles)(FindTheWords)
