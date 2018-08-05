import React from 'react'

import { capitalise } from './../utils'

import {
  Chip,
  withStyles
} from '@material-ui/core'

const styles = (theme) => ({
  chip: {
    margin: theme.spacing.unit
  }
})

const toLink = (phoneme, activity) => {
  const title = capitalise(activity)
  const websafe = activity.split(' ').join('_')
  const link = `/sound/${phoneme}/${websafe}`
  return { title, link }
}

function ActivityButton (props) {
  const { classes, phoneme, activity } = props

  const { title, link } = toLink(phoneme, activity)

  return (
    <Chip
      label={title}
      className={classes.chip}
      component='a'
      href={link}
      clickable
      key={title}
    />
  )
}

export default withStyles(styles)(ActivityButton)
