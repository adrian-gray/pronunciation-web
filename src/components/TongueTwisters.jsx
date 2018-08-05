import React from 'react'

import SplitHilite from './SplitHilite'
import { capitalise } from './../utils'

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
  const { classes, tongueTwisters, tag } = props

  const twisters = tongueTwisters.map((line, index) => (
    <Paper className={classes.spacing} key={index}>
      <Typography>
        {line}
      </Typography>
    </Paper>
  ))

  return (
    <div className={classes.headspace}>
      <Typography variant='title' gutterBottom>
        <SplitHilite str={capitalise(tag)} />{' tongue twisters'}
      </Typography>

      {twisters}
    </div>
  )
}

export default withStyles(styles)(TongueTwisters)
