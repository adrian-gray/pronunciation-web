import React from 'react'

import SplitHilite from './SplitHilite'

import {
  Paper,
  Typography,
  withStyles
} from '@material-ui/core'

const styles = (theme) => ({
  headspace: theme.headspace,
  largeText: theme.largeText,
  spacing: {
    padding: '1rem',
    margin: '1rem'
  }
})

const TongueTwisters = (props) => {
  const { classes, ipa, sentences } = props

  const lines = sentences.map((line, index) => (
    <Paper className={classes.spacing} key={index}>
      <Typography>
        {line}
      </Typography>
    </Paper>
  ))

  let display
  if (props.userAuth) {
    display = lines
  } else {
    display = (
      <Typography variant='subheading' className={classes.headspace} gutterBottom>
        {'Sorry, activity for members only.'}
      </Typography>
    )
  }

  return (
    <div className={classes.headspace}>
      <Typography variant='title' gutterBottom>
        {'Say the '}<SplitHilite str={ipa} />{' sentences'}
      </Typography>
      {display}
    </div>
  )
}

export default withStyles(styles)(TongueTwisters)
