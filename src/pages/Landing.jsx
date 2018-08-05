import React from 'react'

import {
  Paper,
  Typography,
  withStyles
} from '@material-ui/core'

import Mailchimp from './../components/Mailchimp'
import SEO from './../components/SEO'

const styles = (theme) => ({
  page: theme.page
})

const Landing = (props) => {
  const { classes } = props

  return (
    <Paper className={classes.page}>
      <SEO meta='landing' />
      <Typography variant='display2' gutterBottom>
        {'English Pronunciation Lessons'}
      </Typography>
      <Typography variant='display1' gutterBottom>
        {'Improve English Pronunciation'}
      </Typography>
      <Typography gutterBottom>
        {'Is poor English pronunciation holding you back in your career or studies? Do you want to improve your pronunciation, but are not sure how? We are here to help you.'}
      </Typography>
      <Typography gutterBottom>
        {'We have English pronunciation video lessons from a registered English pronunciation instructor. The pronunciation lessons are followed by English pronunciation examples, recorded conversations, and interactive activities to help improve your pronunciation the right way. You will learn how to pronounce English clearly and professionally.'}
      </Typography>
      <Typography gutterBottom>
        {'Take your English pronunciation to the next level'}
      </Typography>
      <hr className='my-4' />
      <Typography variant='headline' gutterBottom>
        {'Be in the know as soon as we launch'}
      </Typography>
      <Typography gutterBottom>
        {'We are currently running in a limited test. We aim to launch the early beta in September 2018.'}
      </Typography>
      <Mailchimp />
    </Paper>
  )
}

export default withStyles(styles)(Landing)
