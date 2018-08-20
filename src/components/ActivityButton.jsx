import React from 'react'
import { Link } from 'react-router-dom'

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
  const websafe = activity.split(' ').join('-')
  const link = `/sound/${phoneme}/${websafe}`
  return { title, link }
}

const ActivityButton = (props) => {
  const { classes, phoneme, activity } = props

  const { title, link } = toLink(phoneme, activity)

  return (
    <Chip
      label={title}
      className={classes.chip}
      component={Link}
      to={link}
      clickable
      key={title}
    />
  )
}

export default withStyles(styles)(ActivityButton)
