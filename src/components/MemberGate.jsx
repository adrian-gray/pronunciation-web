import React from 'react'

import {
  Paper,
  Typography,
  withStyles
} from '@material-ui/core'

const styles = (theme) => ({
  headspace: theme.headspace,
  sentence: {
    padding: '0.5rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    fontSize: '1.2rem'
  },
  correct: {
    textAlign: 'center',
    color: '#AAEEAA'
  },
  green: {
    backgroundColor: '#99FF99'
  },
  red: {
    backgroundColor: '#FF9999'
  }
})

const MemberGate = (props) => {
  let display

  if (props.userAuth) {
    display = (
      <Paper>
        {props.content}
      </Paper>
    )
  } else {
    display = (
      <Typography variant='subheading' className={props.classes.headspace} gutterBottom>
        {'Sorry, this activity is for members only.'}
      </Typography>
    )
  }

  return display
}

export default withStyles(styles)(MemberGate)
