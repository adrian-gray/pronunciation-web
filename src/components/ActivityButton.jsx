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
  },
  open: {
    color: 'green'
  },
  member: {
    color: 'maroon'
  },
  pending: {
    color: '#BBB'
  },
  page: theme.page
})

const toLink = (phoneme, activity) => {
  const title = capitalise(activity)
  const websafe = activity.split(' ').join('-')
  const link = `/sound/${phoneme}/${websafe}`
  return { title, link }
}

const ActivityButton = (props) => {
  const { classes, phoneme, activity, accessStatus } = props
  const { title, link } = toLink(phoneme, activity)

  const chipClasses = `${classes.chip} ${classes[accessStatus]}`

  return (
    <Chip
      label={title}
      className={chipClasses}
      component={Link}
      to={link}
      clickable
      key={title}
    />
  )
}

export default withStyles(styles)(ActivityButton)
