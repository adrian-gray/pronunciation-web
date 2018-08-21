import React from 'react'

import {
  Divider,
  Paper,
  Typography,
  withStyles
} from '@material-ui/core'

import jsonData from './../data/sounds'
import ActivityButton from './../components/ActivityButton'
import ExtractActivity from './../components/ExtractActivity'
import SEO from './../components/SEO'
import SoundTitle from './../components/SoundTitle'

const styles = (theme) => ({
  page: theme.page
})

const Sound = (props) => {
  const { classes } = props
  const phoneme = props.match.params.phoneme
  const activity = props.match.params.activity &&
                   props.match.params.activity.replace(/-/g, ' ')
  const data = jsonData['phonemes'][phoneme]

  if (!data) {
    return (
      <Paper className={classes.page}>
        <Typography variant='headline' gutterBottom>
          {'Oops, not a valid sound'}
        </Typography>
      </Paper>
    )
  }

  const activityNames = Object.keys(data.activities)
  const activityButtons = activityNames.map(activity => (
    <ActivityButton phoneme={phoneme} activity={activity} key={activity} />
  ))

  const SEOlocation = `sound ${phoneme} ${activity}`

  const activityComponent = ExtractActivity({
    activityName: activity,
    data,
    subscriptionLevel: props.subscriptionLevel
  })

  return (
    <Paper className={classes.page}>
      <SEO meta={SEOlocation} />
      <SoundTitle phoneme={data.ipa} str={data.title} />
      <Divider />

      <Typography variant='headline' gutterBottom>
        {`Pronunciation activities for ${data.tag}`}
      </Typography>

      <div>
        {activityButtons}
      </div>
      <Divider />

      {activityComponent}
    </Paper>
  )
}

export default withStyles(styles)(Sound)
