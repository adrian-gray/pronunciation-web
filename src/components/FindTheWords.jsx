import React from 'react'

import {
  Paper,
  Typography,
  withStyles
} from '@material-ui/core'

const styles = (theme) => ({
  headspace: theme.headspace,
  largeText: theme.largeText,
  left: {
    ...theme.subCanvas,
    float: 'left',
    margin: '2rem',
    padding: '1rem'
  },
  clearFloat: {
    clear: 'both'
  }
})

const FindTheWords = (props) => {
  const { classes, tag, words } = props

  const wordList = words.map((word, index) => {
    return (
      <div key={index}>
        <Paper className={classes.left}>
          <Typography className={classes.largeText} gutterBottom>
            {word}
          </Typography>
        </Paper>
      </div>
    )
  })

  return (
    <div className={classes.headspace}>
      <Typography variant='title' gutterBottom>
        {`Find the words with a ${tag}`}
      </Typography>
      {wordList}
      <div className={classes.clearFloat} />
    </div>
  )
}

export default withStyles(styles)(FindTheWords)
