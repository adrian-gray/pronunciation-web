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
    color: '#BBB'
  },
  pending: {
    color: 'maroon'
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
  const { accessStatus, activity, classes, phoneme, subscriptionLevel } = props

  const { title, link } = toLink(phoneme, activity)

  let chipClass = classes[accessStatus]
  if (accessStatus === 'member' && subscriptionLevel) {
    chipClass = classes['open']
  }

  const chipClasses = `${classes.chip} ${chipClass}`

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
