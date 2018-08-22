import React from 'react'

import {
  Typography,
  withStyles
} from '@material-ui/core'

const styles = (theme) => ({
  headspace: theme.headspace,
  largeText: theme.largeText
})

const Pending = (props) => {
  const { classes } = props

  return (
    <div className={classes.headspace}>
      <Typography variant='title' gutterBottom>
        {'Pending Activity'}
      </Typography>
    </div>
  )
}

export default withStyles(styles)(Pending)
