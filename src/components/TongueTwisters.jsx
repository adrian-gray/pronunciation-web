import React from 'react'

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
  const { classes, tag, tongueTwisters } = props

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
        {`${capitalise(tag)} Tongue Twisters`}
      </Typography>
      <Typography>
        {`Enjoy the challenge of Tongue Twisters. There are three tongue twisters to perfect the ${tag} sound. Each tongue twister consists of commonly used English words and phrases for you to practice the ${tag} sound. How fast can you say each ${tag} tongue twister? Try to say each one as many times as you can, no mistakes. Record yourself and post your attempt to enter the challenge.`}
      </Typography>
      {twisters}
    </div>
  )
}

export default withStyles(styles)(TongueTwisters)
