import React from 'react'

import {
  Paper,
  Typography,
  withStyles
} from '@material-ui/core'

import Mailchimp from './../components/Mailchimp'
import SEO from './../components/SEO'

const styles = (theme) => ({
  page: theme.page,
  headspace: theme.headspace,
  para: {
    paddingTop: '0.5em',
    paddingBottom: '0.5em'
  },
  fullWidth: {
    width: '100%'
  }
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
      <Typography className={classes.para} gutterBottom>
        {'Is poor English pronunciation holding you back in your career or studies? Do you want to improve English pronunciation, but are not sure how? We are here to help you.'}
      </Typography>
      <Typography className={classes.para} gutterBottom>
        {'We have English pronunciation video lessons from a registered English pronunciation instructor. The pronunciation lessons are followed by English pronunciation examples, recorded conversations, and interactive activities to help improve your pronunciation the right way. You will learn how to pronounce English clearly and professionally.'}
      </Typography>
      <Typography className={classes.para} gutterBottom>
        {'Take your English pronunciation to the next level'}
      </Typography>
      <img
        className={classes.fullWidth}
        src='/assets/images/improve-english-pronounciation.jpg'
        title='Learn to improve English pronunciation'
        alt='Learn to improve English pronunciation'
      />
      <hr className='my-4' />
      <Typography variant='headline' gutterBottom>
        {'Be in the know as soon as we launch'}
      </Typography>
      <Mailchimp />
      <Typography className={classes.headspace} gutterBottom>
        {'We are currently running in a limited test. We aim to launch the early beta in September 2018.'}
      </Typography>
    </Paper>
  )
}

export default withStyles(styles)(Landing)
