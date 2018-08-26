import React from 'react'

import {
  Typography,
  withStyles
} from '@material-ui/core'

const styles = (theme) => ({
  headspace: theme.headspace
})

const MemberGate = (props) => {
  let display

  if (props.userAuth) {
    display = props.content
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
