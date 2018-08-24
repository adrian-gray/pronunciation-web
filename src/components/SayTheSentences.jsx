import React from 'react'

import MemberGate from './MemberGate'
import SplitHilite from './SplitHilite'

import {
  Paper,
  Typography,
  withStyles
} from '@material-ui/core'

const styles = (theme) => ({
  headspace: theme.headspace,
  largeText: theme.largeText,
  personalSpace: {
    padding: '1em',
    margin: '1em'
  }
})

const TongueTwisters = (props) => {
  const { classes, ipa, sentences } = props

  const lines = sentences.map((line, index) => (
    <Paper className={classes.personalSpace} key={index}>
      <Typography>
        {line}
      </Typography>
    </Paper>
  ))

  return (
    <div className={classes.personalSpace}>
      <Typography variant='title' gutterBottom>
        {'Say the '}<SplitHilite str={ipa} />{' sentences'}
      </Typography>
      <MemberGate content={lines} {...props} />
    </div>
  )
}

export default withStyles(styles)(TongueTwisters)
