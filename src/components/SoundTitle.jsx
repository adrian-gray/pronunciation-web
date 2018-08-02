import React from 'react'

import {
  Typography,
  withStyles
} from '@material-ui/core'

import SplitHilite from './SplitHilite'

const styles = (theme) => ({
  root: {
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2
  }
})

const SoundTitle = (props) => {
  const { classes, phoneme, str } = props

  return (
    <div className={classes.root}>
      <Typography variant='display2'>
        <SplitHilite str={phoneme} /> - <SplitHilite str={str} />
      </Typography>
    </div>
  )
}

export default withStyles(styles)(SoundTitle)
