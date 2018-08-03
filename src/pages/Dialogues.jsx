import React from 'react'

import {
  withStyles
} from '@material-ui/core'

const styles = (theme) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    flexGrow: 1
  }
})

const Dialogues = (props) => {
  return (
    <div>Dialogues</div>
  )
}

export default withStyles(styles)(Dialogues)
