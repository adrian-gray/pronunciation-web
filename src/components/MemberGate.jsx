import React from 'react'

import {
  Typography,
  withStyles
} from '@material-ui/core'

const styles = (theme) => ({
  headspace: theme.headspace,
  blocked: {
    opacity: 0.2
  }
})

const MemberGate = (props) => {
  let display

  if (props.userAuth) {
    display = props.content
  } else {
    display = (
      <div>
        <Typography variant='subheading' className={props.classes.headspace} gutterBottom>
          {'Sorry, the below activity is for members only.'}
        </Typography>
        <div className={props.classes.blocked}>
          {props.content}
        </div>
      </div>
    )
  }

  return display
}

export default withStyles(styles)(MemberGate)
