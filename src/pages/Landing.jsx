import React from 'react'
import { Link } from 'react-router-dom'

import {
  Button,
  Paper,
  Typography,
  withStyles
} from '@material-ui/core'

import Mailchimp from './../components/Mailchimp'
import SEO from './../components/SEO'

const styles = (theme) => ({
  center: {
    textAlign: 'center'
  },
  button: {
    marginTop: theme.spacing.unit,
    marginBottom: 2 * theme.spacing.unit,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
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
        {'Pronunciation Practice'}
      </Typography>
      <Typography variant='display1' gutterBottom>
        {'Improve Your Spoken English'}
      </Typography>
      <Typography className={classes.para} gutterBottom>
        {'Is poor English pronunciation holding you back in your career or studies? Do you want to improve your spoken English, but are not sure how? We are here to help you.'}
      </Typography>
      <Typography className={classes.para} gutterBottom>
        {'We have English pronunciation video lessons from a registered English pronunciation instructor. We follow the pronunciation lessons with English pronunciation examples, recorded conversations, and interactive activities to help improve your pronunciation the right way. Learn how to improve your English pronunciation to speak clearly and professionally.'}
      </Typography>
      <Typography className={classes.para}>
        {'Take your English pronunciation to the next level'}
      </Typography>
      <hr className='my-4' />
      <Typography variant='headline' gutterBottom>
        {'Be in the know as soon as we launch'}
      </Typography>
      <Typography className={classes.headspace} gutterBottom>
        {'We are currently adding sounds and activities multiple times a week and are eopn in a limited testing capacity. We aim to launch in late 2018.'}
      </Typography>
      <Mailchimp />
      <hr className='my-4' />
      <div className={classes.center}>
        <Button variant='contained' size='large' className={classes.button} component={Link} to='/home'>
          {'Start Pronunciation Practice'}
        </Button>
      </div>
      <img
        className={classes.fullWidth}
        src='/assets/images/improve-english-pronounciation.jpg'
        title='Learn to improve English pronunciation'
        alt='Learn to improve English pronunciation'
      />
    </Paper>
  )
}

export default withStyles(styles)(Landing)
